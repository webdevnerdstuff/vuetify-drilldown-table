<template>
	<slot
		v-if="$slots.top"
		name="top"
	/>

	<v-col
		v-else-if="showSearch || $slots[`top.left`] || $slots[`top.right`]"
		lg="12"
	>
		<v-row>
			<slot
				v-if="$slots[`top.left`]"
				name="top.left"
			/>

			<v-col
				v-else-if="showSearch"
				class="d-flex align-center justify-end"
				:class="searchFieldClasses"
			>
				<!-- =========================== Search -->
				<v-text-field
					v-if="showSearch"
					v-model="levelSearch"
					class="mt-0 pt-0"
					:density="searchProps.density"
					hide-details
					label="Search"
					single-line
					:variant="searchProps.variant"
				></v-text-field>
			</v-col>

			<slot
				v-if="$slots[`top.right`]"
				name="top.right"
			/>
		</v-row>
	</v-col>
</template>

<script setup lang="ts">
import { componentName } from '@/plugin/utils/globals';
import * as DrilldownTypes from '@/types';

const emit = defineEmits([
	'update:search',
]);

const props = defineProps({
	searchProps: {
		required: true,
		type: Object as PropType<DrilldownTypes.SearchProps>,
	},
	showSearch: {
		required: true,
		type: Boolean as PropType<DrilldownTypes.LoadedDrilldown['showSearch']>,
	},
});


const levelSearch = ref<string>('');

watch(levelSearch, () => {
	emit('update:search', levelSearch.value);
});


const searchFieldClasses = computed<object>(() => {
	const searchProps = props.searchProps as DrilldownTypes.SearchProps;
	const searchCols = searchProps.cols as DrilldownTypes.SearchPropCols;

	const classes = {
		[`${componentName}--search-field`]: true,
		[`v-col-${searchCols.xs}`]: searchCols.xs,
		[`v-col-sm-${searchCols.sm}`]: searchCols.sm,
		[`v-col-md-${searchCols.md}`]: searchCols.md,
		[`v-col-lg-${searchCols.lg}`]: searchCols.lg,
		[`v-col-xl-${searchCols.xl}`]: searchCols.xl,
		[`v-col-xxl-${searchCols.xxl}`]: searchCols.xxl,
	};

	return classes;
});

</script>
