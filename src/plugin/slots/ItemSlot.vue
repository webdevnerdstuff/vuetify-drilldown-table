<template>
	<tr
		:class="rowClasses"
		@click="drilldownEvent({
			columns,
			index,
			isExpanded,
			item,
			level: currentLevel,
			toggleExpand,
			$event,
		})"
	>
		<template
			v-for="column in columns"
			:key="column"
		>
			<!-- Dynamic Name Item Slot -->
			<td
				v-if="$slots[`item.${column.key}`]"
				:class="cellClasses(column)"
				:colspan="column.colspan || 1"
			>
				<slot
					:columns="columns"
					:index="index"
					:item="item"
					:name="`item.${column.key}`"
				/>
			</td>
			<!-- Column Render `data-table-select` -->
			<td
				v-else-if="column.key === 'data-table-select' || (column.key === 'data-table-select' && props.showSelect)"
				:class="cellClasses(column)"
				:colspan="column.colspan || 1"
			>
				<slot
					v-if="slots[`item.data-table-select`]"
					name="item.data-table-select"
				/>
				<v-checkbox
					v-model="allSelected"
					class="d-flex v-simple-checkbox"
					:density="density"
					@click="emitClickRowCheckbox({
						columns,
						index,
						item,
						level: currentLevel,
						toggleSelect,
					})"
				></v-checkbox>
			</td>
			<!-- Column Render `data-table-expand` -->
			<td
				v-else-if="column.key === 'data-table-expand' || (column.key === 'data-table-expand' && showExpand)
					"
				:class="cellClasses(column)"
				:colspan="column.colspan || 1"
			>
				<div
					v-if="currentLevel < levels"
					class="v-drilldown-table--expand-icon"
					:class="!isExpanded(item) ? '' : 'rotate-180'"
					@click="drilldownEvent({
						columns,
						index,
						isExpanded,
						item,
						level: currentLevel,
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
			<!-- Render Cell Item -->
			<td
				v-else
				:class="cellClasses(column)"
				:colspan="column.colspan || 1"
			>
				<span v-html="renderCellItem(item, column)"></span>
			</td>
		</template>
	</tr>
</template>


<script lang="ts" setup>
import {
	ClickRowCheckboxEvent,
	Column,
	DataTableItem,
	DrilldownEvent,
	ItemSlotProps,
} from '@/types';
import { useRenderCellItem } from '../composables/helpers';
import {
	useBodyRowClasses,
	useCellClasses,
} from '@/plugin/composables/classes';


const slots = defineSlots();
const emit = defineEmits([
	'click:row',
	'click:row:checkbox',
	'update:expanded',
]);

const props = withDefaults(defineProps<ItemSlotProps>(), {});

const columns = computed<Column[]>(() => props.slotProps.columns);
const index = computed(() => props.slotProps.index);
const isExpanded = computed(() => props.slotProps.isExpanded);
const item = computed(() => props.slotProps.item);
const currentLevel = computed(() => props.slotProps.level);
const toggleExpand = computed(() => props.slotProps.toggleExpand);
const toggleSelect = computed(() => props.slotProps.toggleSelect);


// -------------------------------------------------- Row //
const rowClasses = computed<object>(() => {
	return useBodyRowClasses(props.expandOnClick, props.level, props.levels);
});


// -------------------------------------------------- Row Cells //
const cellClasses = (column: Column): object => {
	return useCellClasses('body', column, props.level);
};

function drilldownEvent(data: DrilldownEvent): void {
	const { item, level, toggleExpand } = data as DrilldownEvent;

	if (props.level >= props.levels) {
		return;
	}

	// Emits the click event on the row if `expandOnClick` true //
	if (data.$event) {
		if (!props.expandOnClick) {
			return;
		}

		emit('click:row', data.$event);
	}

	// Sets the expanded state of the item on current table //
	if (level === props.level) {
		toggleExpand(item);
	}

	emit('update:expanded', data);
}


// -------------------------------------------------- Select //
const allSelected = ref<boolean>(false);

watch(() => props.slotProps.allRowsSelected, () => {
	allSelected.value = props.slotProps.allRowsSelected;
});

function emitClickRowCheckbox(data: ClickRowCheckboxEvent): void {
	const { item, level, toggleSelect } = data as ClickRowCheckboxEvent;

	if (level === props.level) {
		toggleSelect(item);
	}

	emit('click:row:checkbox', item);
}


// -------------------------------------------------- Render //
function renderCellItem(item: DataTableItem, column: Column): unknown {
	return useRenderCellItem(item.raw as DataTableItem['raw'], column);
}
</script>

<style lang="scss" scoped>
.v-drilldown-table {
	&--expand-icon {
		cursor: pointer;
	}
}
</style>
