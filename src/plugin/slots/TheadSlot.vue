<template>
	<thead>
		<HeadersSlot :loadedDrilldown="loadedDrilldown" />
	</thead>
</template>

<script setup lang="ts">
import { HeadersSlot } from '@/plugin/slots';


defineProps({
	loadedDrilldown: {
		type: Object,
		required: true,
	},
});
</script>
