<template>
	<thead>
		<HeadersSlot
			:colors="colors || false"
			:density="density"
			:is-thead-slot="true"
			:items="items"
			:level="level"
			:slot-props="slotProps"
			:sort-by="sortBy"
			@click:selectAll="clickSelectAll($event)"
			@update:sortBy="updateSortBy($event)"
		/>
	</thead>
</template>

<script setup lang="ts">
import * as DrilldownTypes from '@/types';
import { HeadersSlot } from '@/plugin/slots';


const emit = defineEmits([
	'click:selectAll',
	'update:sortBy',
]);


defineProps({
	colors: {
		required: true,
		type: [Object, Boolean],
	},
	density: {
		required: true,
		type: String as PropType<DrilldownTypes.LoadedDrilldown['density']>,
	},
	isTheadSlot: {
		default: false,
		required: false,
		type: Boolean,
	},
	items: {
		required: true,
		type: Array as PropType<DrilldownTypes.DataTableItem[]>,
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
	sortBy: {
		required: true,
		type: Array as PropType<DrilldownTypes.LoadedDrilldown['sortBy']>,
	},
});


function clickSelectAll(e: boolean) {
	emit('click:selectAll', e);
}

function updateSortBy(e: DrilldownTypes.Column) {
	emit('update:sortBy', e);
}
</script>
