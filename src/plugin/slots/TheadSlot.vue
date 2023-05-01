<template>
	<thead>
		<HeadersSlot
			:isTheadSlot="true"
			:items="items"
			:loadedDrilldown="loadedDrilldown"
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
	items: {
		required: true,
		type: Array as PropType<DrilldownTypes.DataTableItem[]>,
	},
	loadedDrilldown: {
		required: true,
		type: Object as PropType<DrilldownTypes.LoadedDrilldown>,
	},
});


function clickSelectAll(e) {
	emit('click:selectAll', e);
}

function updateSortBy(e) {
	emit('update:sortBy', e);
}
</script>
