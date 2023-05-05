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
					:density="loadedDrilldown.density"
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
import { componentName } from '@/plugin/utils/globals';
import * as DrilldownTypes from '@/types';
import { useGetLevelColors } from '@/plugin/composables/levelColors';
import {
	useConvertToUnit,
	useRenderCell,
} from '@/plugin/composables/helpers';


const emit = defineEmits([
	'click:selectAll',
	'update:sortBy',
]);

const props = defineProps({
	isTheadSlot: {
		default: false,
		required: false,
		type: Boolean,
	},
	loadedDrilldown: {
		required: true,
		type: Object as PropType<DrilldownTypes.LoadedDrilldown>,
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
});

const theme = useTheme();
const isAllSelected = ref<boolean>(!props.slotProps?.allSelected);

const columns = computed<DrilldownTypes.Column[]>(() => props.slotProps?.columns);
const someSelected = computed(() => props.slotProps?.someSelected);
const allSelected = computed(() => props.slotProps?.allSelected || isAllSelected.value);
const isIndeterminate = computed(() => someSelected.value && !props.slotProps?.allSelected);


// -------------------------------------------------- Header Row //
const headerRowClasses = computed((): object => {
	const classes = {
		[`${componentName}--header-row`]: true,

		[`${componentName}--header-row-${props.loadedDrilldown.level}`]: true,
	};

	return classes;
});


// -------------------------------------------------- Header Row Cells //
const cellAlignClasses = (align: string): object => {
	const classes = {
		'd-flex align-center': true,
		[`justify-${align}`]: align,
		[`justify-start`]: !align,
	};

	return classes;
};

const cellClasses = (column: DrilldownTypes.Column, slotName = ''): object => {
	const classes = {
		[`${componentName}--header-row-th`]: true,
		[`${componentName}--header-row-th-${slotName}`]: slotName !== '',
		[`${componentName}--header-row-th-${slotName}-${props.loadedDrilldown.level}`]: slotName,
		[`${componentName}--header-row-th-${props.loadedDrilldown.level}`]: true,
		[`${componentName}--header-row-th-sortable`]: column.sortable,
		[`${componentName}--header-row-th-sortable-default-color`]: column.sortable && props.loadedDrilldown.colors === false,
		[`${column.cellClass}`]: column.cellClass,
	};

	return classes;
};

const cellStyles = (column: { width?: string | number; }, dataTableExpand = false): CSSProperties => {
	const styles: {
		backgroundColor?: string | unknown;
		color?: string | unknown;
		minWidth?: string | number | unknown;
		width?: string | number | unknown;
	} = {
		minWidth: column.width ? useConvertToUnit(column.width) : 'auto',
		width: column.width ? useConvertToUnit(column.width) : 'auto',
	};

	if (dataTableExpand && !column.width) {
		styles.width = '48px';
		styles.minWidth = '48px';
	}

	if (props.loadedDrilldown.colors === false) {
		return styles as CSSProperties;
	}

	const headerColors = useGetLevelColors(props.loadedDrilldown, theme, 'header');

	styles.backgroundColor = headerColors.bg;
	styles.color = headerColors.text;

	return styles as CSSProperties;
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
	const classes = {
		'd-flex': true,
		[`${componentName}--header-select-all-checkbox`]: true,
		[`${componentName}--header-select-all-checkbox-${props.loadedDrilldown.level}`]: true,
	};

	return classes;
});


// -------------------------------------------------- Sorting //
const sortIconClasses = (key: string): object => {
	return {
		[`${componentName}--header-row-th-sortable-sort-icon`]: true,
		[`${componentName}--header-row-th-sortable-sort-icon-${props.loadedDrilldown.level}`]: true,
		[`${componentName}--header-row-th-sortable-sort-icon-desc`]: getSortDirection(key) === 'desc',
		[`${componentName}--header-row-th-sortable-sort-icon-asc`]: getSortDirection(key) === 'asc',
	};
};

function sortColumn(column: DrilldownTypes.Column): void {
	if (column.sortable) {
		props.slotProps?.toggleSort(column.key);

		emit('update:sortBy', column);
	}
}

function getSortDirection(id: string) {
	if (props.loadedDrilldown.sortBy) {
		const item = props.loadedDrilldown.sortBy.find(item => item.key === id);

		if (item) {
			return item.order;
		}
	}

	return;
}


// -------------------------------------------------- Render //
function renderCell(column: DrilldownTypes.Column, /* , index */): unknown {
	const tempIndex = 0;
	return useRenderCell(props.loadedDrilldown, column, tempIndex);
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
