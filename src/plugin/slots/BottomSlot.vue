<template>
	<slot name="bottom" />
</template>


<script setup lang="ts">
import {
	BottomSlotProps,
} from '@/types';


withDefaults(defineProps<BottomSlotProps>(), {});


</script>
