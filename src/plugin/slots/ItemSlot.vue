<template>
	<tr
		:class="rowClasses"
		@click="drilldownEvent({
			columns,
			index,
			isExpanded,
			isRow: true,
			item,
			internalItem,
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
				class="v-drilldown-table--data-table-select"
				:class="cellClasses(column)"
				:colspan="column.colspan || 1"
			>
				<template v-if="mobile">
					<div class="v-data-table__td-title">{{ column.title }}</div>
					<div class="v-data-table__td-value">
						<v-checkbox
							class="d-flex v-simple-checkbox"
							:density="density"
							:disabled="item.selectable === false && itemSelectable === 'selectable'"
							:model-value="slotProps.isSelected([internalItem])"
							@click.stop="emitClickRowCheckbox({
								columns,
								index,
								internalItem,
								item,
								level: currentLevel,
								toggleSelect,
							})"
						></v-checkbox>
					</div>
				</template>
				<slot
					v-else-if="slots[`item.data-table-select`]"
					name="item.data-table-select"
				/>
				<v-checkbox
					v-if="slots[`item.data-table-select`]"
					class="d-flex v-simple-checkbox"
					:density="density"
					:disabled="item.selectable === false && itemSelectable === 'selectable'"
					:model-value="slotProps.isSelected([internalItem])"
					@click.stop="emitClickRowCheckbox({
						columns,
						index,
						internalItem,
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
				class="v-drilldown-table--data-table-expand"
				:class="cellClasses(column)"
				:colspan="column.colspan || 1"
			>
				<div
					v-if="currentLevel < levels"
					class="v-drilldown-table--expand-icon"
					:class="!isExpanded(internalItem) ? '' : 'rotate-180'"
					@click="drilldownEvent({
						columns,
						index,
						isExpanded,
						item,
						internalItem,
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
				<template v-if="mobile">
					<div class="v-data-table__td-title">{{ column.title }}</div>
					<div
						class="v-data-table__td-value"
						v-html="renderCellItem(item, column)"
					></div>
				</template>
				<span
					v-else
					v-html="renderCellItem(item, column)"
				></span>
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
} from '@/plugin/types';
import { useRenderCellItem } from '@composables/helpers';
import {
	useBodyRowClasses,
	useCellClasses,
} from '@composables/classes';
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
const internalItem = computed(() => props.slotProps.internalItem);
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
		mobile: props.mobile,
	});
});


// -------------------------------------------------- Row Cells //
const cellClasses = (column: Column): object => {
	return useCellClasses({
		column,
		elm: 'body',
		level: props.level,
		mobile: props.mobile,
	});
};

function drilldownEvent(data: DrilldownEvent): void {
	const { isRow, internalItem, level, toggleExpand } = data as DrilldownEvent;

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
		toggleExpand(internalItem);
	}

	emit('update:expanded', data);
}


// -------------------------------------------------- Select //
function emitClickRowCheckbox(data: ClickRowCheckboxEvent): void {
	const { internalItem, item, toggleSelect } = data as ClickRowCheckboxEvent;

	toggleSelect(internalItem);

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
	return useRenderCellItem(item as DataTableItem['item'], column);
}
</script>

<style lang="scss" scoped>
.v-drilldown-table {
	&--expand-icon {
		cursor: pointer;
	}
}
</style>
