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
} from '@/types';
import {
	useCellAlignClasses,
	useTFootCellClasses,
	useCheckBoxClasses,
	useTFootClasses,
	useTFootRowClasses,
} from '@/plugin/composables/classes';
import { useTFootCellStyles } from '@/plugin/composables/styles';
import { useRenderCell } from '@/plugin/composables/helpers';


const slots = useSlots();
const emit = defineEmits([
	'click:selectAll',
]);

const props = withDefaults(defineProps<TFootSlotProps>(), {});

const theme = useTheme();
const isAllSelected = ref<boolean>(props.slotProps.allRowsSelected);

const allSelected = computed(() => props.slotProps.allRowsSelected || isAllSelected.value);
const columns = computed<Column[] | Props['footers']>(() => {
	if (props.footers.length) {
		return props.footers;
	}

	return props.slotProps.columns;
});
const someSelected = computed(() => props.slotProps.someSelected);
const isIndeterminate = computed(() => someSelected.value && !props.slotProps.allRowsSelected);


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

const cellStyles = computed<CSSProperties>(() => {
	return useTFootCellStyles({
		colors: props.colors as ColorsObject,
		elm: 'footer',
		level: props.level,
		theme,
	});
});


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


// -------------------------------------------------- Render //
function renderCell(column: Column): unknown {
	return useRenderCell(column);
}
</script>


<style lang="scss">
$inactive: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));

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
