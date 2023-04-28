<template>
	<tr
		class="v-drilldown-table--header-row"
		:class="headerRowClasses"
	>
		<template
			v-for="column in columns"
			:key="column"
		>
			<!-- Column Dynamic Name Header Slot -->
			<th
				v-if="$slots[`header.${column.key}`]"
				:class="cellClasses(column)"
				:colspan="column.colspan || 1"
				:style="cellStyles(column, true)"
			>
				<slot
					:column="column"
					:name="`header.${column.key}`"
				/>
			</th>
			<!-- Column Render `data-table-select` -->
			<th
				v-else-if="column.key === 'data-table-select'"
				:class="cellClasses(column)"
				:colspan="column.colspan || 1"
				:style="cellStyles(column, true)"
				@click="emitAllSelectedEvent({ selectAll })"
			>
				<v-checkbox
					v-model="isAllSelected"
					class="d-flex"
					:density="loadedDrilldown.density"
				></v-checkbox>
			</th>
			<!-- Column Render `data-table-expand` -->
			<th
				v-else-if="column.key === 'data-table-expand'"
				:class="cellClasses(column)"
				:colspan="column.colspan || 1"
				:style="cellStyles(column, true)"
				v-html="renderCell(column /* , index */)"
			></th>
			<!-- Column Render TH -->
			<th
				v-else
				:class="cellClasses(column)"
				:colspan="column.colspan || 1"
				:style="cellStyles(column)"
				@click="sortColumn(column)"
			>
				<div :class="cellAlignClasses(column.align)">
					<span v-html="renderCell(column /* , index */)"></span>

					<template v-if="column.sortable && $slots[`header.sortIcon`]">
						<span :class="sortIconClasses(column.key)">
							<slot name="header.sortIcon" />
						</span>
					</template>
					<v-icon
						v-else-if="column.sortable"
						:class="sortIconClasses(column.key)"
					>
						mdi mdi-arrow-up
					</v-icon>
				</div>
			</th>
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


const emit = defineEmits([
	'allSelected',
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


const theme = useTheme();
const columns = computed(() => props.slotProps.columns);
const allSelected = computed(() => props.slotProps.allSelected);
const selectAll = computed(() => props.slotProps.selectAll);


const isAllSelected = ref<boolean>(false);

watch(() => props.slotProps.allSelected, () => {
	isAllSelected.value = allSelected.value;
});


function emitAllSelectedEvent(data): void {
	isAllSelected.value = !isAllSelected.value;

	emit('allSelected', isAllSelected.value);
}



// -------------------------------------------------- Header Row //
const headerRowClasses = (): object => {
	return {
		[`${componentName}--header-row`]: true,
		[`${componentName}--header-row-${props.loadedDrilldown.level}`]: true,
	};
};


// -------------------------------------------------- Header Row TH //
const cellAlignClasses = (align: string): object => {
	const classes = {
		'd-flex align-center': true,
		[`justify-${align}`]: align,
		[`justify-start`]: !align,
	};

	return classes;
};

const cellClasses = (column: DrilldownTypes.Column): object => {
	const classes = {
		[`${componentName}--header-row-th`]: true,
		[`${componentName}--header-row-th-${props.loadedDrilldown.level}`]: true,
		[`${componentName}--header-row-th-sortable`]: column.sortable,
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


// -------------------------------------------------- Sort //
const sortIconClasses = (key: string): object => {
	return {
		'sort-icon': true,
		'sort-icon-desc': getSortDirection(key) === 'desc',
		'sort-icon-asc': getSortDirection(key) === 'asc',
	};
};

function sortColumn(column: DrilldownTypes.Column): void {
	if (column.sortable) {
		props.slotProps.toggleSort(column.key);
	}
}

function getSortDirection(id: string) {
	if (props.loadedDrilldown.sortBy) {
		const item = props.loadedDrilldown.sortBy.find(item => item.key === id);

		if (item) {
			return item.order;
		}
	}

	return;
}



</script>


<style lang="scss" scoped>
.v-drilldown-table {
	&--header-row-th-sortable {
		cursor: pointer;

		&:hover {
			.sort-icon {
				opacity: .5;

				&-asc,
				&-desc {
					opacity: 1;
				}
			}
		}

		.sort-icon {
			opacity: 0;
			transform: rotate(0deg);
			transition: all 0.25s ease-in-out;

			&-asc {
				transform: rotate(0deg);
			}

			&-desc {
				transform: rotate(180deg);
			}
		}
	}

	.sort-icon {
		display: inline-flex;
		opacity: 0;

		&-asc,
		&-desc {
			opacity: 1;
		}
	}
}
</style>
