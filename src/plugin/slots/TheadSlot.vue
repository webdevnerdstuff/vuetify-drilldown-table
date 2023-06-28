<template>
	<thead>
		<HeadersSlot
			v-bind="$props"
			:colors="colors"
			:density="density"
			:is-thead-slot="true"
			:level="level"
			@click:selectAll="clickSelectAll($event)"
			@update:sortBy="updateSortBy($event)"
		/>
	</thead>
</template>

<script setup lang="ts">
import {
	Column,
	THeadSlotProps,
} from '@/types';
import { HeadersSlot } from '@/plugin/slots';


const emit = defineEmits([
	'click:selectAll',
	'update:sortBy',
]);

withDefaults(defineProps<THeadSlotProps>(), {
	showSelect: false,
});

function clickSelectAll(e: boolean) {
	emit('click:selectAll', e);
}

function updateSortBy(e: Column) {
	emit('update:sortBy', e);
}
</script>
