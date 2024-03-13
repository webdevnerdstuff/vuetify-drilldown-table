<template>
	<tr :class="headerRowClasses">
		<template
			v-for="column in columns"
			:key="column"
		>
			<!-- Column Dynamic Name Header Slot -->
			<th
				v-if="slots[`column.${column.key}`] || slots[`header.${column.key}`]"
				:class="cellClasses(column, column.key)"
				:colspan="column.colspan || 1"
				:style="cellStyles(column, true)"
			>
				<slot
					:column="column"
					:name="`header.${column.key}`"
				/>
			</th>
			<!-- Column Render `data-table-group` -->
			<th
				v-else-if="column.key === 'data-table-group' || (column.key === 'data-table-group')"
				:class="cellClasses(column, 'header-data-table-group')"
				:colspan="column.colspan || 1"
				:style="cellStyles(column, true)"
				v-html="renderCell(column)"
			>
			</th>
			<!-- Column Render `data-table-select` -->
			<th
				v-else-if="column.key === 'data-table-select' || (column.key === 'data-table-select' && showSelect)"
				:class="cellClasses(column, 'header-data-table-select')"
				:colspan="column.colspan || 1"
				:style="cellStyles(column, true)"
			>
				<v-checkbox
					v-if="selectStrategy !== 'single'"
					:class="checkBoxClasses"
					:density="density"
					:focused="false"
					:indeterminate="isIndeterminate"
					:model-value="isAllSelected"
					@update:modelValue="selectAllBoxes"
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
				<div
					:class="cellAlignClasses(column.align as keyof Column)"
					:style="cellChildStyles(column)"
				>
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
		:colors="colors"
		:colspan="loaderSettings.colspan"
		:height="loaderSettings.height"
		:level="level"
		:loader-props="loaderProps"
		:loader-settings="loaderSettings"
		:loader-type="loaderSettings.loaderType"
		:loading="loaderSettings.loading || false"
		:loading-text="loaderSettings.loadingText"
		:size="loaderSettings.size"
	/>
</template>

<script setup lang="ts">
import {
	ColorsObject,
	Column,
	HeaderSlotProps,
	InternalDataTableHeader,
} from '@/plugin/types';
import type { IconOptions } from 'vuetify';
import {
	useCellAlignClasses,
	useHeaderCellClasses,
	useCheckBoxClasses,
	useHeaderRowClasses,
	useSortIconClasses,
} from '@composables/classes';
import { useHeaderCellStyles } from '@composables/styles';
import { useRenderCell } from '@composables/helpers';
import { TableLoader } from '@components/index';


const slots = useSlots();
const emit = defineEmits([
	'click:selectAll',
]);

const props = withDefaults(defineProps<HeaderSlotProps>(), {
	isTheadSlot: false,
	showSelect: false,
});

const allSelectable = ref();
const iconOptions = inject<IconOptions>(Symbol.for('vuetify:icons'));
const isAllSelected = ref<boolean>(false);
const items = ref(props.items);
const matchColumnWidths = ref<boolean>(props.matchColumnWidths);
const columnWidths = ref<number[]>(props.columnWidths || []);
const sortAscIcon = ref(props.sortAscIcon ?? '$sortAsc');
const tableModelValue = computed(() => props.tableModelValue);
const theme = useTheme();

const columns = computed<Column[]>(() => checkColumnWidthUsage());


watch(() => props.items, (newItems) => {
	items.value = newItems;

	allSelectable.value = newItems?.filter(item => item.selectable) ?? [];

	allSelectable.value = newItems?.filter(item => {
		return item.selectable !== false;
	});
});

// -------------------------------------------------- Header Row //
const headerRowClasses = computed<object>(() => {
	return useHeaderRowClasses({ level: props.level });
});

function checkColumnWidthUsage(): Column[] {
	const cols = props.slotProps.columns;

	if (props.level <= 1 || !matchColumnWidths.value) {
		return cols;
	}

	if (columnWidths.value.length === 0) {
		throw new Error('VDrilldownTable (matchColumnWidths): There was an issue getting the parent tables widths.');
	}

	// Attach the width to the column //
	Object.entries(cols).forEach(([index]) => {

		// ? Do not add width to the last row
		// ? This can cause width issues if columns length differ
		if (Object.keys(cols).length === parseInt(index) + 1) {
			return;
		}

		// Only set the width if the user has not already set it //
		if (typeof cols[index].width === 'undefined') {
			cols[index].width = columnWidths.value[parseInt(index)] as number;
		}
	});

	return cols;
}


// -------------------------------------------------- Header Row Cells //
const cellAlignClasses = (align: string): object => {
	return useCellAlignClasses({ align });
};

const cellClasses = (column: Column, slotName = ''): object => {
	return useHeaderCellClasses({
		column,
		level: props.level,
		slotName,
	});
};

const computedColors = computed<ColorsObject>(() => {
	const colors = props.colors as ColorsObject;

	if (colors) {
		colors.header = {
			background: props.headerBackgroundColor,
			color: props.headerColor,
		};

		colors.percentageChange = props.colorPercentageChange;
		colors.percentageDirection = props.colorPercentageDirection;
	}

	return colors as ColorsObject;
});

const cellStyles = (column: { width?: string | number; }, dataTableExpand = false): CSSProperties => {
	return useHeaderCellStyles({
		colors: computedColors.value,
		column,
		dataTableExpand,
		level: props.level,
		theme,
	});
};

const cellChildStyles = (column: Column): CSSProperties => {
	const cellStyle = cellStyles(column);


	if (typeof props.headerColor === 'undefined') {
		return {};
	}

	return { color: cellStyle.color };
};


// -------------------------------------------------- Select //
const isIndeterminate = computed(() => {
	if (props.slotProps.allSelected || tableModelValue?.value?.length === 0) {
		return false;
	}

	return true;
});

watch(() => props.slotProps.allSelected, (newAllSelected) => {
	isAllSelected.value = newAllSelected as boolean;
});

watch(() => props.slotProps.someSelected, () => {
	if (props.slotProps.allSelected) {
		return false;
	}
});

function selectAllBoxes() {
	isAllSelected.value = !isAllSelected.value;
	props.slotProps.selectAll(isAllSelected.value);

	emit('click:selectAll', isAllSelected.value);
}

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
		return 'small';
	}

	return 'default';
});


// -------------------------------------------------- Render //
function renderCell(column: Column): unknown {
	return useRenderCell(column);
}
</script>


<style lang="scss" scoped>
$transition: all .25s ease-in-out;
$inactive: rgb(var(--v-theme-on-surface) var(--v-medium-emphasis-opacity));
$hover: rgb(var(--v-theme-on-surface) var(--v-high-emphasis-opacity));

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
