<template>
	<tr :class="headerRowClasses">
		<template
			v-for="column in columns"
			:key="column"
		>
			<!-- Column Dynamic Name Header Slot -->
			<th
				v-if="slots[`column.${column.key}`]"
				:class="cellClasses(column, column.key)"
				:colspan="column.colspan || 1"
				:style="cellStyles(column, true)"
			>
				<slot
					:column="column"
					:name="`column.${column.key}`"
				/>
			</th>
			<!-- Column Render `data-table-select` -->
			<th
				v-else-if="column.key === 'data-table-select' || (column.key === 'data-table-select' && showSelect)"
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
				v-html="renderCell(column)"
			></th>
			<!-- Column Render TH -->
			<th
				v-else
				:class="cellClasses(column)"
				:colspan="column.colspan || 1"
				:style="cellStyles(column)"
				@click="sortColumn(column as InternalDataTableHeader)"
			>
				<div :class="cellAlignClasses(column.align as keyof Column)">
					<span v-html="renderCell(column)"></span>

					<template v-if="column.sortable && slots[`header.sortIcon`]">
						<span :class="sortIconClasses(column.key as keyof Column)">
							<slot name="header.sortIcon" />
						</span>
					</template>
					<v-icon
						v-else-if="column.sortable"
						:class="sortIconClasses(column.key as keyof Column)"
						:icon="sortAscIcon"
						:size="iconSize"
					>
					</v-icon>
				</div>
			</th>
		</template>
	</tr>

	<TableLoader
		v-if="loaderSettings.loaderType && !slots.loading"
		:colors="colors || null"
		:colspan="loaderSettings.colspan"
		:height="loaderSettings.height"
		:level="level"
		:loader-type="loaderSettings.loaderType"
		:loading="loaderSettings.loading || false"
		:loading-text="loaderSettings.loadingText"
		:size="loaderSettings.size"
		:skelton-type="loaderSettings.skeltonType"
	/>
</template>

<script setup lang="ts">
import {
	ColorsObject,
	Column,
	HeaderSlotProps,
	InternalDataTableHeader,
} from '@/types';
import type { IconOptions } from 'vuetify';
import {
	useCellAlignClasses,
	useHeaderCellClasses,
	useCheckBoxClasses,
	useHeaderRowClasses,
	useSortIconClasses,
} from '@/plugin/composables/classes';
import { useHeaderCellStyles } from '@/plugin/composables/styles';
import { useRenderCell } from '@/plugin/composables/helpers';
import { TableLoader } from '@/plugin/components';


const slots = useSlots();
const emit = defineEmits([
	'click:selectAll',
]);

const props = withDefaults(defineProps<HeaderSlotProps>(), {
	isTheadSlot: false,
	showSelect: false,
});

const iconOptions = inject<IconOptions>(Symbol.for('vuetify:icons'));
const theme = useTheme();
const isAllSelected = ref<boolean>(props.slotProps.allRowsSelected);

const allSelected = computed(() => props.slotProps.allRowsSelected || isAllSelected.value);
const columns = computed<Column[]>(() => props.slotProps.columns);
const someSelected = computed(() => props.slotProps.someSelected);
const isIndeterminate = computed(() => someSelected.value && !props.slotProps.allRowsSelected);
const sortAscIcon = ref(props.sortAscIcon);


// -------------------------------------------------- Header Row //
const headerRowClasses = computed<object>(() => {
	return useHeaderRowClasses({ level: props.level });
});


// -------------------------------------------------- Header Row Cells //
const cellAlignClasses = (align: string): object => {
	return useCellAlignClasses({ align });
};

const cellClasses = (column: Column, slotName = ''): object => {
	return useHeaderCellClasses({
		colors: props.colors as ColorsObject,
		column,
		level: props.level,
		slotName,
	});
};

const cellStyles = (column: { width?: string | number; }, dataTableExpand = false): CSSProperties => {
	return useHeaderCellStyles({
		colors: props.colors as ColorsObject,
		column,
		dataTableExpand,
		level: props.level,
		theme,
	});
};


// -------------------------------------------------- Select //
watch(isAllSelected, (newVal) => {
	props.slotProps.selectAll(newVal);
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

const checkBoxClasses = computed<object>(() => {
	return useCheckBoxClasses({ level: props.level });
});


// -------------------------------------------------- Sorting //
const sortIconClasses = (key: string): object => {
	return useSortIconClasses({
		iconOptions,
		key,
		level: props.level,
		sortBy: props.sortBy,
	});
};

function sortColumn(column: InternalDataTableHeader): void {
	if (column.sortable) {
		props.slotProps.toggleSort(column);
	}
}


// -------------------------------------------------- Icons //
const iconSize = computed(() => {
	if (iconOptions?.defaultSet === 'fa') {

		// TODO: This may change if pull request is accepted //
		// ? https://github.com/vuetifyjs/vuetify/pull/17598 //
		sortAscIcon.value = props?.sortAscIcon ?? 'fas fa-arrow-up';
		return 'small';
	}

	sortAscIcon.value = props?.sortAscIcon ?? '$sortAsc';
	return 'default';
});


// -------------------------------------------------- Render //
function renderCell(column: Column): unknown {
	return useRenderCell(column);
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

						// &-fa {
						// 	font-size: 1rem;
						// }
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
