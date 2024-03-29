<template>
	<tfoot
		v-if="columns?.length"
		:class="tfootClasses"
	>
		<tr :class="tfootRowClasses">
			<template
				v-for="column in columns"
				:key="column"
			>
				<!-- Column Dynamic Name Tfoot Slot -->
				<th
					v-if="slots[`tfoot.${column.key}`]"
					:class="cellClasses(column, column.key)"
					:colspan="column.colspan || 1"
					:style="cellStyles"
				>
					<slot
						:column="column"
						:name="`tfoot.${column.key}`"
					/>
				</th>
				<!-- Column Render `data-table-select` -->
				<th
					v-else-if="column.key === 'data-table-select'"
					:class="cellClasses(column, 'tfoot-data-table-select')"
					:colspan="column.colspan || 1"
					:style="cellStyles"
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
					:class="cellClasses(column, 'tfoot-data-table-expand')"
					:colspan="column.colspan || 1"
					:style="cellStyles"
					v-html="renderCell(column)"
				></th>
				<!-- Column renderFooterCell TH -->
				<th
					v-else-if="column.renderFooterCell"
					:class="cellClasses(column)"
					:colspan="column.colspan || 1"
					:style="cellStyles"
					v-html="renderCell(column)"
				></th>
				<!-- Column Render TH -->
				<th
					v-else
					:class="cellClasses(column)"
					:colspan="column.colspan || 1"
					:style="cellStyles"
				>
					<div :class="cellAlignClasses(column.align as keyof Column)">
						<span v-html="renderCell(column)"></span>
					</div>
				</th>
			</template>
		</tr>
	</tfoot>
</template>

<script setup lang="ts">
import {
	ColorsObject,
	Column,
	TFootSlotProps,
	Props,
} from '@/plugin/types';
import {
	useCellAlignClasses,
	useTFootCellClasses,
	useCheckBoxClasses,
	useTFootClasses,
	useTFootRowClasses,
} from '@composables/classes';
import { useTFootCellStyles } from '@composables/styles';
import { useRenderCell } from '@composables/helpers';


const slots = useSlots();
const emit = defineEmits([
	'click:selectAll',
]);

const props = withDefaults(defineProps<TFootSlotProps>(), {});

const allSelectable = ref();
const theme = useTheme();
const isAllSelected = ref<boolean>(false);
const items = ref(props.items);
const tableModelValue = computed(() => props.tableModelValue);

const columns = computed<Column[] | Props['footers']>(() => {
	if (props.footers.length) {
		return props.footers;
	}

	return props.slotProps.columns;
});


watch(() => props.items, (newItems) => {
	items.value = newItems;

	allSelectable.value = newItems?.filter(item => item.selectable) ?? [];

	allSelectable.value = newItems?.filter(item => {
		return item.selectable !== false;
	});
});


// -------------------------------------------------- Tfoot //
const tfootClasses = computed<object>(() => {
	return useTFootClasses({ level: props.level });
});


// -------------------------------------------------- Tfoot Row //
const tfootRowClasses = computed<object>(() => {
	return useTFootRowClasses({ level: props.level });
});


// -------------------------------------------------- Tfoot Row Cells //
const cellAlignClasses = (align: string): object => {
	return useCellAlignClasses({ align });
};

const cellClasses = (column: Column, slotName = ''): object => {
	return useTFootCellClasses({
		column,
		level: props.level,
		slotName,
	});
};

const computedColors = computed<ColorsObject>(() => {
	const colors = props.colors as ColorsObject;

	if (colors) {
		colors.footer = {
			background: props.footerBackgroundColor,
			color: props.footerColor,
		};

		colors.percentageChange = props.colorPercentageChange;
		colors.percentageDirection = props.colorPercentageDirection;
	}

	return colors as ColorsObject;
});

const cellStyles = computed<CSSProperties>(() => {
	return useTFootCellStyles({
		colors: computedColors.value,
		elm: 'footer',
		footerColor: props.footerColor,
		level: props.level,
		theme,
	});
});


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


// -------------------------------------------------- Render //
function renderCell(column: Column): unknown {
	return useRenderCell(column);
}
</script>


<style lang="scss">
$inactive: rgb(var(--v-theme-on-surface) var(--v-medium-emphasis-opacity));

.v-drilldown-table {
	&--footer {
		&-row {
			th {
				color: $inactive;
			}
		}
	}
}
</style>
