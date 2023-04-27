<template>
	<slot
		v-if="$slots.tfoot"
		name="tfoot"
	/>
	<tfoot v-if="columns?.length">
		<tr class="v-drilldown-table--footer-row aa">
			<template
				v-for="column in columns"
				:key="column"
			>
				<!-- Column Dynamic Name Header Slot -->
				<slot
					v-if="$slots[`tfoot.${column.key}`]"
					:column="column"
					:name="`tfoot.${column.key}`"
				/>
				<!-- Column Render `data-table-expand` -->
				<td
					v-else-if="column.key === 'data-table-expand'"
					:class="cellClasses(column)"
					:style="cellStyles"
					v-html="renderCell(column /* , index */)"
				></td>
				<!-- Column Render TD -->
				<td
					v-else-if="column.renderFooter || column.renderer || column.renderCell"
					:class="cellClasses(column)"
					:style="cellStyles"
					v-html="renderCell(column /* , index */)"
				></td>
				<!-- Column use `title` -->
				<td
					v-else
					:class="cellClasses(column)"
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
import * as DrilldownTypes from '@/types/types';
import { useGetLevelColors } from '@/plugin/composables/levelColors';
import {
	useRenderCell,
} from '@/plugin/composables/helpers';


const props = defineProps({
	// TODO: This will be used when Vuetify adds the columns prop to tfoot //
	// columns: {
	// 	type: Array,
	// 	required: false,
	// },
	loadedDrilldown: {
		required: true,
		type: Object as PropType<DrilldownTypes.LoadedDrilldown>,
	},
});

const columns = ref();
const theme = useTheme();


watch(props, () => {
	columns.value = props.loadedDrilldown.showFooterRow ? props.loadedDrilldown.headers : props.loadedDrilldown.footers;
});


const cellClasses = (column: DrilldownTypes.Column): object => {
	return {
		[`${componentName}--footer-row-td`]: true,
		[`${componentName}--footer-row-td-${props.loadedDrilldown.level}`]: true,
		[`${column.cellClass}`]: column.cellClass,
	};
};

const cellStyles = (): CSSProperties => {
	const headerColors = useGetLevelColors(props.loadedDrilldown, theme, 'footer');

	const styles = {
		backgroundColor: headerColors.bg,
		color: headerColors.text,
	};

	return styles;
};

function renderCell(column: DrilldownTypes.Column, /* , index */): unknown {
	const tempIndex = 0;
	return useRenderCell(props.loadedDrilldown, column, tempIndex);
}

</script>

<style lang="scss">
</style>