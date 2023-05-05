<template>
	<slot name="bottom" />
</template>


<script setup lang="ts">
// import { componentName } from '@/plugin/utils/globals';
import * as DrilldownTypes from '@/types';

defineProps({
	loadedDrilldown: {
		required: true,
		type: Object as PropType<DrilldownTypes.LoadedDrilldown>,
	},
	// slotProps: {
	// 	required: true,
	// 	type: Object,
	// },
});

</script>
