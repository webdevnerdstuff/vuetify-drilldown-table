<template>
	<tr
		:class="rowClasses"
		@click="drilldownEvent({
			columns,
			index,
			isExpanded,
			item,
			level,
			toggleExpand,
			$event,
		})"
	>
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
				<div
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
					})"
				>
					<slot
						v-if="$slots[`item.data-table-expand`]"
						name="item.data-table-expand"
					/>
					<v-icon v-else>
						mdi-chevron-down
					</v-icon>
				</div>
			</td>
			<!-- Column Render `data-table-select` -->
			<td
				v-else-if="column.key === 'data-table-select' && $slots[`item.data-table-select`]
					"
				:class="cellClasses(column)"
			>
				<v-checkbox
					v-model="allSelected"
					class="d-flex v-simple-checkbox"
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
			<!-- Column Render `data-table-select` -->
			<td
				v-else-if="column.key === 'data-table-select' || loadedDrilldown.showSelect
					"
				:class="cellClasses(column)"
			>
				<v-checkbox
					v-model="allSelected"
					class="d-flex v-simple-checkbox"
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
				:value="item.raw[column.key as keyof DrilldownTypes.Column]"
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
import * as DrilldownTypes from '@/types';
import type { VDataTable } from "vuetify/labs/components";
import { useRenderCellItem } from '../composables/helpers';
import {
	useBodyRowClasses,
	useCellClasses,
} from '@/plugin/composables/classes';


const emit = defineEmits([
	'click:row',
	'click:row:checkbox',
	'update:expanded',
]);

const props = defineProps({
	items: {
		required: true,
		type: Array as PropType<VDataTable["$props"]["items"]>,
	},
	loadedDrilldown: {
		required: true,
		type: Object as PropType<DrilldownTypes.LoadedDrilldown>,
	},
	/**
	 * @name slotProps
	 *
	 * @param { Boolean } allRowsSelected
	 * @param { object[] } columns
	 * 		@returns { object }
	 * 			[{
	 * 				align:			@type { String },
	 * 				fixeOffset:	@type { Number },
	 * 				key:				@type { String },
	 * 				sortable:		@type { Boolean },
	 * 				title:			@type { String },
	 * 				width:			@type { Number },
	 *			}]
	 * @param { Number } index
	 * @param { Function } isExpanded
	 * 		@param { DrilldownTypes.DataTableItem } item
	 * 		@returns { Boolean }
	 * @param { Function } isSelected
	 * 		@param { DrilldownTypes.DataTableItem[] } items
	 * 		@returns { Boolean }
	 * @param { DrilldownTypes.DataTableItem } item
	 * @param { Number } level
	 * @param { Function } toggleExpand
	 * 		@param { DrilldownTypes.DataTableItem } item
	 * 		@returns { void }
	 * @param { Function } toggleSelect
	 * 		@param { DrilldownTypes.DataTableItem } item
	 * 		@returns { void }
	*/
	slotProps: {
		required: true,
		type: Object,
	},
});

const columns = computed<DrilldownTypes.Column[]>(() => props.slotProps.columns);
const index = computed(() => props.slotProps.index);
const isExpanded = computed(() => props.slotProps.isExpanded);
const item = computed(() => props.slotProps.item);
const level = computed(() => props.slotProps.level);
const toggleExpand = computed(() => props.slotProps.toggleExpand);
const toggleSelect = computed(() => props.slotProps.toggleSelect);


// -------------------------------------------------- Row //
const rowClasses = computed<object>(() => {
	return useBodyRowClasses(props.loadedDrilldown);
});


// -------------------------------------------------- Row Cells //
const cellClasses = (column: DrilldownTypes.Column): object => {
	return useCellClasses('body', column, props.loadedDrilldown.level);
};

function drilldownEvent(data: DrilldownTypes.DrilldownEvent): void {
	const { item, level, toggleExpand } = data as DrilldownTypes.DrilldownEvent;

	if (props.loadedDrilldown.level >= props.loadedDrilldown.levels) {
		return;
	}

	// Emits the click event on the row if `expandOnClick` true //
	if (data.$event) {
		if (!props.loadedDrilldown.expandOnClick) {
			return;
		}

		emit('click:row', data.$event);
	}

	// Sets the expanded state of the item on current table //
	if (level === props.loadedDrilldown.level) {
		toggleExpand(item);
	}

	emit('update:expanded', data);
}


// -------------------------------------------------- Select //
const allSelected = ref<boolean>(false);

watch(() => props.slotProps.allRowsSelected, () => {
	allSelected.value = props.slotProps.allRowsSelected;
});

function emitClickRowCheckbox(data: DrilldownTypes.ClickRowCheckboxEvent): void {
	const { item, level, toggleSelect } = data as DrilldownTypes.ClickRowCheckboxEvent;

	if (level === props.loadedDrilldown.level) {
		toggleSelect(item);
	}

	emit('click:row:checkbox', item);
}


// -------------------------------------------------- Render //
function renderCellItem(item: DrilldownTypes.DataTableItem, column: DrilldownTypes.Column, index: number): unknown {
	return useRenderCellItem(item.raw as DrilldownTypes.DataTableItem['raw'], column, index);
}
</script>

<style lang="scss" scoped>
.v-drilldown-table {
	&--expand-icon {
		cursor: pointer;
	}
}
</style>
