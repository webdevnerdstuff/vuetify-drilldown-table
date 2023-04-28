<template>
	<tr>
		<template
			v-for="column in columns"
			:key="column"
		>
			<!--  Expand Column -->
			<td
				v-if="column.key === 'data-table-expand' || loadedDrilldown.showExpand
					"
				:class="cellClasses(column)"
				:colspan="column.colspan || 1"
			>
				<v-icon
					v-if="loadedDrilldown.level < loadedDrilldown.levels"
					class="v-drilldown-table--expand-icon"
					:class="!isExpanded(item) ? '' : 'rotate-180'"
					@click="drilldownEvent({
							columns,
							index,
							isExpanded,
							item,
							level,
							toggleExpand,
						})
						"
				>
					mdi-chevron-down
				</v-icon>

			</td>
			<!-- Column Render `data-table-select` -->
			<td
				v-else-if="column.key === 'data-table-select' || loadedDrilldown.showSelect
					"
				:class="cellClasses(column)"
			>
				<v-checkbox
					v-model="allSelected"
					class="d-flex"
					:density="loadedDrilldown.density"
					@click="emitClickRowCheckbox({
							columns,
							index,
							item,
							level,
							toggleSelect,
						})"
				></v-checkbox>
			</td>
			<!-- Dynamic Name Item Slot -->
			<slot
				v-else-if="$slots[`item.${column.key}`]"
				:colspan="column.colspan || 1"
				:column="column"
				:index="index"
				:item="item"
				:name="`item.${column.key}`"
				:value="item.raw[column.key]"
			/>
			<!-- Render Cell Item -->
			<td
				v-else
				:class="cellClasses(column)"
				:colspan="column.colspan || 1"
			>
				<span v-html="renderCellItem(item, column, index)"></span>
			</td>
		</template>
	</tr>
</template>


<script lang="ts" setup>
import { componentName } from '@/plugin/utils/globals';
import * as DrilldownTypes from '@/types/types';
import {
	useRenderCellItem,
} from '../composables/helpers';

const emit = defineEmits([
	'click:row:checkbox',
	'update:expanded',
]);

const props = defineProps({
	loadedDrilldown: {
		required: true,
		type: Object as PropType<DrilldownTypes.LoadedDrilldown>,
	},
	slotProps: {
		required: true,
		type: Object,
	},
});

const columns = computed(() => props.slotProps.columns);
const index = computed(() => props.slotProps.index);
const isExpanded = computed(() => props.slotProps.isExpanded);
const item = computed(() => props.slotProps.item);
const level = computed(() => props.slotProps.level);
const toggleExpand = computed(() => props.slotProps.toggleExpand);
const toggleSelect = computed(() => props.slotProps.toggleSelect);
const allRowsSelected = computed(() => props.slotProps.allRowsSelected);


const allSelected = ref<boolean>(false);

watch(() => props.slotProps.allRowsSelected, () => {
	console.log('allRowsSelected', allRowsSelected.value);
	console.log('allRowsSelected', allSelected.value);
	allSelected.value = props.slotProps.allRowsSelected;
});


const cellClasses = (column: DrilldownTypes.Column): object => {
	const classes = {
		[`${componentName}--body-row-td`]: true,
		[`${componentName}--body-row-td-${props.loadedDrilldown.level}`]: true,
		[`${column.cellClass}`]: column.cellClass,
	};

	return classes;
};


function drilldownEvent(data: DrilldownTypes.DrilldownEvent): void {
	const { item, level, toggleExpand } = data as DrilldownTypes.DrilldownEvent;

	// Sets the expanded state of the item on current table //
	if (level === props.loadedDrilldown.level) {
		toggleExpand(item);
	}

	emit('update:expanded', data);
}

function emitClickRowCheckbox(data: DrilldownTypes.ClickRowCheckboxEvent): void {
	const { item, level, toggleSelect } = data as DrilldownTypes.ClickRowCheckboxEvent;

	console.log(toggleSelect);

	if (level === props.loadedDrilldown.level) {
		toggleSelect(item);
	}


	emit('click:row:checkbox', item);
}

function renderCellItem(item: DrilldownTypes.DataTableItem, column: DrilldownTypes.Column, index: number): unknown {
	return useRenderCellItem(item.raw, column, index);
}
</script>
