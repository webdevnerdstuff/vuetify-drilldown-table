<template>
	<tr
		:class="rowClasses"
		@click="drilldownEvent({
			columns,
			index,
			isExpanded,
			isRow: true,
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
					class="d-flex v-simple-checkbox"
					:density="density"
					:disabled="item.raw.selectable === false && itemSelectable === 'selectable'"
					:model-value="slotProps.isSelected([item])"
					@click.stop="emitClickRowCheckbox({
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
					<v-icon
						v-else
						icon="$expand"
						:size="expandIconSize"
					/>
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
import type { IconOptions } from 'vuetify';


const slots = defineSlots();
const emit = defineEmits([
	'click:row',
	'click:row:checkbox',
	'update:expanded',
]);

const props = withDefaults(defineProps<ItemSlotProps>(), {});

const vuetifyIcons = inject<IconOptions>(Symbol.for('vuetify:icons'));

const columns = computed<Column[]>(() => props.slotProps.columns);
const index = computed(() => props.slotProps.index);
const isExpanded = computed(() => props.slotProps.isExpanded);
const item = computed(() => props.slotProps.item);
const currentLevel = computed(() => props.slotProps.level);
const toggleExpand = computed(() => props.slotProps.toggleExpand);
const toggleSelect = computed(() => props.slotProps.toggleSelect);
const itemSelectable = computed(() => props.itemSelectable);


// -------------------------------------------------- Row //
const rowClasses = computed<object>(() => {
	return useBodyRowClasses({
		expandOnClick: props.expandOnClick,
		level: props.level,
		levels: props.levels,
	});
});


// -------------------------------------------------- Row Cells //
const cellClasses = (column: Column): object => {
	return useCellClasses({
		column,
		elm: 'body',
		level: props.level,
	});
};

function drilldownEvent(data: DrilldownEvent): void {
	const { isRow, item, level, toggleExpand } = data as DrilldownEvent;

	if (props.level >= props.levels || props.expandOnClick && !isRow) {
		return;
	}

	// If `expandOnClick` is true, prevent the expand button from triggering the event twice //
	if (props.expandOnClick && !isRow) {
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
function emitClickRowCheckbox(data: ClickRowCheckboxEvent): void {
	const { item, toggleSelect } = data as ClickRowCheckboxEvent;

	toggleSelect(item);

	emit('click:row:checkbox', item);
}


// -------------------------------------------------- Icons //
const expandIconSize = computed(() => {
	if (vuetifyIcons?.defaultSet === 'fa') {
		return 'x-small';
	}

	return 'default';
});


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
