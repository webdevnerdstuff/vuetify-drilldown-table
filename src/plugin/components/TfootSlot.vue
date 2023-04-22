<template>
	<slot
		v-if="$slots.tfoot"
		name="tfoot"
	/>
	<tfoot v-else-if="loadedDrilldown.footers">
		<tr
			class="v-drilldown-table--footer-row"
			:class="footerRowClasses"
		>
			<template
				v-for="column in loadedDrilldown.footers"
				:key="column"
			>
				<!-- Column Dynamic Name Header Slot -->
				<slot
					v-if="$slots[`tfoot.${column.key}`]"
					:column="column"
					:name="`tfoot.${column.key}`"
				/>
				<!-- Column Render TD -->
				<td
					v-else-if="column.renderFooter || column.renderer"
					:class="footerRowClasses(column)"
					:style="footerRowTdStyles"
					v-html="renderCell(column /* , index */)"
				></td>
				<!-- Column use `title` -->
				<td
					v-else
					:style="footerRowTdStyles"
				>
					{{ column.title }}
				</td>
			</template>
		</tr>
	</tfoot>
	<tfoot v-else-if="loadedDrilldown.showFooterRow">
		<tr class="v-drilldown-table--footer-row">
			<!-- // ! Updated loadedDrilldown.headers once Vuetify adds missing props to tfoot slot -->
			<template
				v-for="column in loadedDrilldown.headers"
				:key="column"
			>
				<!-- Column Dynamic Name Header Slot -->
				<slot
					v-if="$slots[`tfoot.${column.key}`]"
					class="v-drilldown-table--footer-row-td"
					:column="column"
					:name="`tfoot.${column.key}`"
				/>
				<!-- Column Render `data-table-expand` -->
				<td
					v-else-if="column.key === 'data-table-expand'"
					class="v-drilldown-table--footer-row-td"
					v-html="renderCell(column /* , index */)"
				></td>
				<!-- Column Render TH -->
				<td
					v-else
					class="v-drilldown-table--footer-row-td"
					v-html="renderCell(column /* , index */)"
				></td>
			</template>
		</tr>

	</tfoot>
</template>

<script setup lang="ts">
import {
	CSSProperties,
} from 'vue';
import { useTheme } from 'vuetify';
import { componentName } from '@/plugin/utils/globals';
import * as DrilldownTypes from '@/types/types';
import { useGetLevelColors } from '@/plugin/composables/levelColors';
import {
	useRenderCell,
} from '@/plugin/composables/helpers';


const props = defineProps({
	loadedDrilldown: {
		type: Object,
		required: true,
	},
});

const theme = useTheme();


const footerRowClasses = (column: DrilldownTypes.Column): object => {
	return {
		[`${componentName}--footer-row-td`]: true,
		[`${componentName}--footer-row-td-${props.loadedDrilldown.level}`]: true,
		[column.cellClass]: column.cellClass,
	};
};

const footerRowTdStyles = (): CSSProperties => {
	const headerColors = useGetLevelColors(props.loadedDrilldown, theme, 'header');

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
