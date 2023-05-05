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
					v-else-if="column.key === 'data-table-select' || loadedDrilldown.showSelect"
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
import { componentName } from '@/plugin/utils/globals';
import * as DrilldownTypes from '@/types';
import { useGetLevelColors } from '@/plugin/composables/levelColors';
import {
	useRenderCell,
} from '@/plugin/composables/helpers';


const props = defineProps({
	loadedDrilldown: {
		required: true,
		type: Object as PropType<DrilldownTypes.LoadedDrilldown>,
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
const columns = computed<DrilldownTypes.Column[]>(() => props.loadedDrilldown.footers as DrilldownTypes.Column[]);


const cellClasses = (column: DrilldownTypes.Column): object => {
	return {
		[`${componentName}--footer-row-td`]: true,
		[`${componentName}--footer-row-td-${props.loadedDrilldown.level}`]: true,
		[`${column.cellClass}`]: column.cellClass,
	};
};


const cellStyles = computed<CSSProperties>(() => {
	if (props.loadedDrilldown.colors === false) {
		return {};
	}

	const footerColors = useGetLevelColors(props.loadedDrilldown, theme, 'footer');

	const styles = {
		backgroundColor: footerColors.bg,
		color: footerColors.text,
	};

	return styles as CSSProperties;
});


// -------------------------------------------------- Render //
function renderCell(column: DrilldownTypes.Column, /* , index */): unknown {
	const tempIndex = 0;
	return useRenderCell(props.loadedDrilldown, column, tempIndex);
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
