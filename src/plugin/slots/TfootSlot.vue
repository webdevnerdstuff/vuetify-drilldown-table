<template>
	<slot
		v-if="$slots.tfoot"
		name="tfoot"
	/>
	<tfoot v-if="columns?.length">
		<tr class="v-drilldown-table--footer-row">
			<template
				v-for="column in columns"
				:key="column"
			>
				<!-- Column Dynamic Name tfoot Slot -->
				<slot
					v-if="$slots[`tfoot.${column.key}`]"
					:column="column"
					:name="`tfoot.${column.key}`"
					:style="cellStyles"
				/>
				<!-- Column Render `data-table-select` -->
				<td
					v-else-if="column.key === 'data-table-select' || showSelect"
					:class="cellClasses(column)"
					:colspan="column.colspan || 1"
					:style="cellStyles"
					v-html="renderCell(column /* , index */)"
				></td>
				<!-- Column Render `data-table-expand` -->
				<td
					v-else-if="column.key === 'data-table-expand'"
					:class="cellClasses(column)"
					:colspan="column.colspan || 1"
					:style="cellStyles"
					v-html="renderCell(column /* , index */)"
				></td>
				<!-- Column Render TD -->
				<td
					v-else-if="column.renderFooter || column.renderer || column.renderCell"
					:class="cellClasses(column)"
					:colspan="column.colspan || 1"
					:style="cellStyles"
					v-html="renderCell(column /* , index */)"
				></td>
				<!-- Column use `title` -->
				<td
					v-else
					:class="cellClasses(column)"
					:colspan="column.colspan || 1"
					:style="cellStyles"
				>
					{{ column.title }}
				</td>
			</template>
		</tr>
	</tfoot>
</template>

<script setup lang="ts">
import * as DrilldownTypes from '@/types';
import { useRenderCell } from '@/plugin/composables/helpers';
import { useCellClasses } from '@/plugin/composables/classes';
import { useCellStyles } from '@/plugin/composables/styles';


const props = defineProps({
	colors: {
		required: true,
		type: [Object, Boolean],
	},
	footers: {
		required: true,
		type: Array as PropType<DrilldownTypes.LoadedDrilldown['footers']>,
	},
	itemTitle: {
		required: true,
		type: String as PropType<DrilldownTypes.LoadedDrilldown['itemTitle']>,
	},
	level: {
		required: true,
		type: Number,
	},
	showSelect: {
		required: true,
		type: Boolean as PropType<DrilldownTypes.LoadedDrilldown['showSelect']>,
	},
	// TODO: This will be used if/when Vuetify adds the columns prop to tfoot //
	// slotProps: {
	// 	required: true,
	// 	type: Object,
	// },
});

// const columns = ref();
const theme = useTheme();

// TODO: This will be used if/when Vuetify adds the columns prop to tfoot //
// const columns = computed<DrilldownTypes.Column[]>(() => props.slotProps?.columns);
const columns = computed<DrilldownTypes.Column[]>(() => props.footers as DrilldownTypes.Column[]);


const cellClasses = (column: DrilldownTypes.Column): object => {
	return useCellClasses('footer', column, props.level);
};

const cellStyles = computed<CSSProperties>(() => {
	return useCellStyles(props.colors as DrilldownTypes.ColorsObject, props.level, theme, 'footer');
});


// -------------------------------------------------- Render //
function renderCell(column: DrilldownTypes.Column, /* , index */): unknown {
	const tempIndex = 0;
	return useRenderCell(props.itemTitle, column, tempIndex);
}
</script>

<style lang="scss">
$inactive: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));

.v-drilldown-table {
	&--footer {
		&-row {
			td {
				color: $inactive;
			}
		}
	}
}
</style>
