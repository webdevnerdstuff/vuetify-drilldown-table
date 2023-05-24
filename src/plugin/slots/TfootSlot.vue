<template>
	<tfoot
		v-if="columns?.length"
		:class="tfootClasses"
	>
		<tr :class="tfootRowClasses">
			<template
				v-for="column in columns"
				:key="column"
			>
				<!-- Column Dynamic Name Tfoot Slot -->
				<th
					v-if="slots[`tfoot.${column.key}`]"
					:class="cellClasses(column, column.key)"
					:colspan="column.colspan || 1"
					:style="cellStyles"
				>
					<slot
						:column="column"
						:name="`tfoot.${column.key}`"
					/>
				</th>
				<!-- Column Render `data-table-select` -->
				<th
					v-else-if="column.key === 'data-table-select'"
					:class="cellClasses(column, 'tfoot-data-table-select')"
					:colspan="column.colspan || 1"
					:style="cellStyles"
				>
					<v-checkbox
						v-model="isAllSelected"
						:class="checkBoxClasses"
						:density="density"
						:focused="false"
						:indeterminate="isIndeterminate"
					></v-checkbox>
				</th>
				<!-- Column Render `data-table-expand` -->
				<th
					v-else-if="column.key === 'data-table-expand'"
					:class="cellClasses(column, 'tfoot-data-table-expand')"
					:colspan="column.colspan || 1"
					:style="cellStyles"
					v-html="renderCell(column)"
				></th>
				<!-- Column renderFooterCell TH -->
				<th
					v-else-if="column.renderFooterCell"
					:class="cellClasses(column)"
					:colspan="column.colspan || 1"
					:style="cellStyles"
					v-html="renderCell(column)"
				></th>
				<!-- Column Render TH -->
				<th
					v-else
					:class="cellClasses(column)"
					:colspan="column.colspan || 1"
					:style="cellStyles"
				>
					<div :class="cellAlignClasses(column.align as keyof DrilldownTypes.Column)">
						<span v-html="renderCell(column)"></span>
					</div>
				</th>
			</template>
		</tr>
	</tfoot>
</template>

<script setup lang="ts">
import * as DrilldownTypes from '@/types';
import {
	useCellAlignClasses,
	useTfootCellClasses,
	useCheckBoxClasses,
	useTfootClasses,
	useTfootRowClasses,
} from '@/plugin/composables/classes';
import { useTfootCellStyles } from '@/plugin/composables/styles';
import { useRenderCell } from '@/plugin/composables/helpers';

const slots = useSlots();
const emit = defineEmits([
	'click:selectAll',
]);

const props = defineProps({
	colors: {
		required: true,
		type: [Object, Boolean],
	},
	density: {
		required: true,
		type: String as PropType<DrilldownTypes.Props['density']>,
	},
	footers: {
		required: true,
		type: Array as PropType<DrilldownTypes.Props['footers']>,
	},
	level: {
		required: true,
		type: Number,
	},
	/**
	 * @name slotProps
	 *
	 * @param { Boolean } allSelected
	 * @param { object[] } columns
	 * 		@returns { DrilldownTypes.Column[] }
	 * @param { Function } getFixedStyles
	 * 		@param { InternalDataTableHeader } column
	 * 		@param { Number } y
	 * 		@returns { object }
	 * 			{
	 *				left:				@type { String | Number | undefined },
	 *				position:		@type { String },
	 *				top:				@type { String | Number | undefined },
	 *				zIndex:			@type { Number | undefined },
	 *			}
	 * @param { Function } getSortIcon
	 *		@returns { IconValue }
	 *			@type { String } $sortAsc | $sortDesc
	 * @param {( DataTableHeader[] | DataTableHeader[][] )} headers.
	 * @param { Function } selectAll
	 * 		@param { Boolean } value
	 * 		@returns { void }
	 * @param { Boolean } someSelected
	 * @param { Object } sortBy
	 * 		@returns { SortItem[] }
	 * 			[{
	 * 				key: 		@type { String },
	 * 				order?:	@type { boolean | 'asc' | 'desc' },
	 * 			}]
	 * @param { Function } toggleSort
	 * 		@param { String } key
	 * 		@returns { void }
	*/
	slotProps: {
		required: true,
		type: Object,
	},
});

const theme = useTheme();
const isAllSelected = ref<boolean>(!props.slotProps?.allSelected);

const allSelected = computed(() => props.slotProps?.allSelected || isAllSelected.value);
const columns = computed<DrilldownTypes.Column[]>(() => {
	if (props.footers?.length) {
		return props.footers;
	}

	return props.slotProps?.columns;
});
const someSelected = computed(() => props.slotProps?.someSelected);
const isIndeterminate = computed(() => someSelected.value && !props.slotProps?.allSelected);


// -------------------------------------------------- Tfoot //
const tfootClasses = computed<object>(() => {
	return useTfootClasses(props.level);
});


// -------------------------------------------------- Tfoot Row //
const tfootRowClasses = computed<object>(() => {
	return useTfootRowClasses(props.level);
});


// -------------------------------------------------- Tfoot Row Cells //
const cellAlignClasses = (align: string): object => {
	return useCellAlignClasses(align);
};

const cellClasses = (column: DrilldownTypes.Column, slotName = ''): object => {
	return useTfootCellClasses(props.level, column, slotName);
};

const cellStyles = computed<CSSProperties>(() => {
	return useTfootCellStyles(props.colors as DrilldownTypes.ColorsObject, props.level, theme, 'footer');
});


// -------------------------------------------------- Select //
watch(isAllSelected, (newVal) => {
	props.slotProps?.selectAll(newVal);
	emit('click:selectAll', isAllSelected.value);
});

watch(allSelected, (newVal) => {
	isAllSelected.value = newVal;
});

watch(someSelected, (newVal) => {
	if (!newVal) {
		isAllSelected.value = false;
	}
});

const checkBoxClasses = computed<object>(() => {
	return useCheckBoxClasses(props.level);
});


// -------------------------------------------------- Render //
function renderCell(column: DrilldownTypes.Column): unknown {
	return useRenderCell(column);
}
</script>


<style lang="scss">
$inactive: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));

.v-drilldown-table {
	&--footer {
		&-row {
			th {
				color: $inactive;
			}
		}
	}
}
</style>
