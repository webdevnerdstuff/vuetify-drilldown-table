<template>
	<slot name="bottom" />
</template>


<script setup lang="ts">
import {
	VDataTableSlotProps,
} from '@/types';


withDefaults(defineProps<VDataTableSlotProps>(), {});


</script>
