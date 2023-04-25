<template>
	<thead>
		<HeadersSlot :loadedDrilldown="loadedDrilldown" />
	</thead>
</template>

<script setup lang="ts">
import { HeadersSlot } from '@/plugin/components';


defineProps({
	loadedDrilldown: {
		type: Object,
		required: true,
	},
});
</script>
