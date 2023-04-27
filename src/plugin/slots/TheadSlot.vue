<template>
	<thead>
		<HeadersSlot :loadedDrilldown="loadedDrilldown" />
	</thead>
</template>

<script setup lang="ts">
import * as DrilldownTypes from '@/types/types';
import { HeadersSlot } from '@/plugin/slots';


defineProps({
	loadedDrilldown: {
		required: true,
		type: Object as PropType<DrilldownTypes.LoadedDrilldown>,
	},
});
</script>
