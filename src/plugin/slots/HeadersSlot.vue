<template>
	<tr :class="headerRowClasses">
		<template
			v-for="column in columns"
			:key="column"
		>
			<!-- Column Dynamic Name Header Slot -->
			<th
				v-if="$slots[`header.${column.key}`]"
				:class="cellClasses(column, column.key)"
				:colspan="column.colspan || 1"
				:style="cellStyles(column, true)"
			>
				<slot
					:column="column"
					:name="`header.${column.key}`"
				/>
			</th>
			<!-- Column Render `data-table-select` -->
			<th
				v-else-if="column.key === 'data-table-select'"
				:class="cellClasses(column, 'header-data-table-select')"
				:colspan="column.colspan || 1"
				:style="cellStyles(column, true)"
			>
				<v-checkbox
					v-model="isAllSelected"
					:class="checkBoxClasses"
					:density="density"
					:focused="false"
					:indeterminate="isIndeterminate"
				></v-checkbox>
			</th>
			<!-- Column Render `data-table-expand` -->
			<th
				v-else-if="column.key === 'data-table-expand'"
				:class="cellClasses(column, 'data-table-expand')"
				:colspan="column.colspan || 1"
				:style="cellStyles(column, true)"
				v-html="renderCell(column /* , index */)"
			></th>
			<!-- Column Render TH -->
			<th
				v-else
				:class="cellClasses(column)"
				:colspan="column.colspan || 1"
				:style="cellStyles(column)"
				@click="sortColumn(column)"
			>
				<div :class="cellAlignClasses(column.align as keyof DrilldownTypes.Column)">
					<span v-html="renderCell(column /* , index */)"></span>

					<template v-if="column.sortable && $slots[`header.sortIcon`]">
						<span :class="sortIconClasses(column.key as keyof DrilldownTypes.Column)">
							<slot name="header.sortIcon" />
						</span>
					</template>
					<v-icon
						v-else-if="column.sortable"
						:class="sortIconClasses(column.key as keyof DrilldownTypes.Column)"
					>
						mdi mdi-arrow-up
					</v-icon>
				</div>
			</th>
		</template>
	</tr>
</template>

<script setup lang="ts">
import * as DrilldownTypes from '@/types';
import {
	useCellAlignClasses,
	useHeaderCellClasses,
	useCheckBoxClasses,
	useHeaderRowClasses,
	useSortIconClasses,
} from '@/plugin/composables/classes';
import { useRenderCell } from '@/plugin/composables/helpers';
import {
	useHeaderCellStyles
} from '@/plugin/composables/styles';


const emit = defineEmits([
	'click:selectAll',
]);

const props = defineProps({
	colors: {
		required: true,
		type: [Object, Boolean],
	},
	density: {
		required: true,
		type: String as PropType<DrilldownTypes.LoadedDrilldown['density']>,
	},
	isTheadSlot: {
		default: false,
		required: false,
		type: Boolean,
	},
	itemTitle: {
		required: true,
		type: String as PropType<DrilldownTypes.LoadedDrilldown['itemTitle']>,
	},
	level: {
		required: true,
		type: Number,
	},
	/**
	 * @name slotProps
	 *
	 * @param { Boolean } allSelected
	 * @param { object[] } columns
	 * 		@returns { DrilldownTypes.Column[] }
	 * @param { Function } getFixedStyles
	 * 		@param { InternalDataTableHeader } column
	 * 		@param { Number } y
	 * 		@returns { object }
	 * 			{
	 *				left:				@type { String | Number | undefined },
	 *				position:		@type { String },
	 *				top:				@type { String | Number | undefined },
	 *				zIndex:			@type { Number | undefined },
	 *			}
	 * @param { Function } getSortIcon
	 *		@returns { IconValue }
	 *			@type { String } $sortAsc | $sortDesc
	 * @param {( DataTableHeader[] | DataTableHeader[][] )} headers.
	 * @param { Function } selectAll
	 * 		@param { Boolean } value
	 * 		@returns { void }
	 * @param { Boolean } someSelected
	 * @param { Object } sortBy
	 * 		@returns { SortItem[] }
	 * 			[{
	 * 				key: 		@type { String },
	 * 				order?:	@type { boolean | 'asc' | 'desc' },
	 * 			}]
	 * @param { Function } toggleSort
	 * 		@param { String } key
	 * 		@returns { void }
	*/
	slotProps: {
		required: false,
		type: Object,
	},
	sortBy: {
		required: true,
		type: Array as PropType<DrilldownTypes.LoadedDrilldown['sortBy']>,
	},
});

const theme = useTheme();
const isAllSelected = ref<boolean>(!props.slotProps?.allSelected);

const columns = computed<DrilldownTypes.Column[]>(() => props.slotProps?.columns);
const someSelected = computed(() => props.slotProps?.someSelected);
const allSelected = computed(() => props.slotProps?.allSelected || isAllSelected.value);
const isIndeterminate = computed(() => someSelected.value && !props.slotProps?.allSelected);


// -------------------------------------------------- Header Row //
const headerRowClasses = computed((): object => {
	return useHeaderRowClasses(props.level);
});


// -------------------------------------------------- Header Row Cells //
const cellAlignClasses = (align: string): object => {
	return useCellAlignClasses(align);
};

const cellClasses = (column: DrilldownTypes.Column, slotName = ''): object => {
	return useHeaderCellClasses(props.colors as DrilldownTypes.ColorsObject, props.level, column, slotName);
};

const cellStyles = (column: { width?: string | number; }, dataTableExpand = false): CSSProperties => {
	return useHeaderCellStyles(
		props.colors as DrilldownTypes.ColorsObject,
		props.level,
		column,
		theme,
		dataTableExpand,
	);
};


// -------------------------------------------------- Select //
watch(isAllSelected, (newVal) => {
	props.slotProps?.selectAll(newVal);
	emit('click:selectAll', isAllSelected.value);
});

watch(allSelected, (newVal) => {
	isAllSelected.value = newVal;
});

watch(someSelected, (newVal) => {
	if (!newVal) {
		isAllSelected.value = false;
	}
});

const checkBoxClasses = computed((): object => {
	return useCheckBoxClasses(props.level);
});


// -------------------------------------------------- Sorting //
const sortIconClasses = (key: string): object => {
	return useSortIconClasses(props.sortBy, props.level, key);
};

function sortColumn(column: DrilldownTypes.Column): void {
	if (column.sortable) {
		props.slotProps?.toggleSort(column.key);
	}
}


// -------------------------------------------------- Render //
function renderCell(column: DrilldownTypes.Column, /* , index */): unknown {
	const tempIndex = 0;
	return useRenderCell(props.itemTitle, column, tempIndex);
}
</script>


<style lang="scss" scoped>
$transition: all .25s ease-in-out;
$inactive: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));
$hover: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));

.v-drilldown-table {
	&--header {
		&-select-all-checkbox {
			opacity: var(--v-medium-emphasis-opacity);
		}

		&-row {
			&-th {
				&-sortable {
					cursor: pointer;

					&-sort-icon {
						display: inline-flex;
						opacity: 0;
						transform: rotate(0deg);
						transition: $transition;

						&-asc,
						&-desc {
							color: $inactive;
							opacity: 1;
						}

						&-asc {
							transform: rotate(0deg);
						}

						&-desc {
							transform: rotate(180deg);
						}
					}

					&:hover {
						.v-drilldown-table--header-row-th-sortable-sort-icon {
							color: $hover;
							opacity: 1;

							&-asc,
							&-desc {
								color: $hover;
							}
						}
					}

					&-default-color {
						&:hover {
							div {
								color: $hover;
							}
						}

						div {
							color: $inactive;
							transition: $transition;
						}
					}
				}
			}
		}
	}
}
</style>
