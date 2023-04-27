<template>
	<tr
		class="v-drilldown-table--header-row"
		:class="headerRowClasses"
	>
		<template
			v-for="column in headers"
			:key="column"
		>
			<!-- Column Dynamic Name Header Slot -->
			<th
				v-if="$slots[`header.${column.key}`]"
				:class="cellClasses(column)"
				:style="cellStyles(column, true)"
			>
				<slot
					:column="column"
					:name="`header.${column.key}`"
				/>
			</th>
			<!-- Column Render `data-table-expand` -->
			<th
				v-else-if="column.key === 'data-table-expand'"
				class="v-drilldown-table--header-row-th"
				:class="cellClasses(column)"
				:style="cellStyles(column, true)"
				v-html="renderCell(column /* , index */)"
			></th>
			<!-- Column Render TH -->
			<th
				v-else
				class="v-drilldown-table--header-row-th"
				:class="cellClasses(column)"
				:style="cellStyles(column)"
				v-html="renderCell(column /* , index */)"
			></th>
		</template>
	</tr>
</template>

<script setup lang="ts">
import { componentName } from '@/plugin/utils/globals';
import * as DrilldownTypes from '@/types/types';
import { useGetLevelColors } from '@/plugin/composables/levelColors';
import {
	useConvertToUnit,
	useRenderCell,
} from '@/plugin/composables/helpers';


const props = defineProps({
	headerProps: {
		required: true,
		type: Object,
	},
	loadedDrilldown: {
		required: true,
		type: Object as PropType<DrilldownTypes.LoadedDrilldown>,
	},
});

const theme = useTheme();
const headers = computed(() => props.headerProps.headers[0]);


// -------------------------------------------------- Header Row //
const headerRowClasses = (): object => {
	return {
		[`${componentName}--header-row`]: true,
		[`${componentName}--header-row-${props.loadedDrilldown.level}`]: true,
	};
};


// -------------------------------------------------- Header Row TH //
const cellClasses = (column: DrilldownTypes.Column): object => {
	const classes = {
		[`${componentName}--header-row-th-${props.loadedDrilldown.level}`]: true,
		[`${column.cellClass}`]: column.cellClass,
	};

	return classes;
};

const cellStyles = (column: { width?: string | number; }, dataTableExpand = false): CSSProperties => {
	const headerColors = useGetLevelColors(props.loadedDrilldown, theme, 'header');

	const styles = {
		backgroundColor: headerColors.bg,
		color: headerColors.text,
		minWidth: column.width ? useConvertToUnit(column.width) : 'auto',
		width: column.width ? useConvertToUnit(column.width) : 'auto',
	};

	if (dataTableExpand && !column.width) {
		styles.width = '48px';
		styles.minWidth = '48px';
	}

	return styles as CSSProperties;
};

// -------------------------------------------------- Render //
function renderCell(column: DrilldownTypes.Column, /* , index */): unknown {
	const tempIndex = 0;
	return useRenderCell(props.loadedDrilldown, column, tempIndex);
}
</script>
