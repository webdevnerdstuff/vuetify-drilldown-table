<template>
	<slot name="bottom" />
</template>


<script setup lang="ts">
import type {
	VDataTableSlotProps,
} from '@/plugin/types';


withDefaults(defineProps<VDataTableSlotProps>(), {});


</script>
