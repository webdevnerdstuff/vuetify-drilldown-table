<template>
	<div
		v-if="loading"
		:class="containerClasses"
	>
		<v-progress-linear
			v-if="linear"
			:color="linearColor"
			:height="height"
			indeterminate
		></v-progress-linear>

		<v-skeleton-loader
			v-if="skelton"
			:loading="loading"
			:type="skeltonType"
		>
		</v-skeleton-loader>

		<v-progress-circular
			v-if="circular"
			class="my-2"
			:color="circularColor"
			indeterminate
			:size="size"
		></v-progress-circular>

		<div
			v-if="textLoader"
			class="py-2"
			:class="`text-${textColor}`"
		>
			{{ computedLoadingText }}
		</div>
	</div>
</template>

<script setup lang="ts">
import { componentName } from '@/plugin/utils/globals';

const props = defineProps({
	circular: {
		default: true,
		required: false,
		type: Boolean,
	},
	circularColor: {
		default: 'primary',
		required: false,
		type: String,
	},
	color: {
		default: 'primary',
		required: false,
		type: String,
	},
	height: {
		default: '2',
		required: false,
		type: String,
	},
	linear: {
		default: true,
		required: false,
		type: Boolean,
	},
	linearColor: {
		default: 'surface-variant',
		required: false,
		type: String,
	},
	loading: {
		required: true,
		type: Boolean,
	},
	loadingText: {
		default: 'Loading...',
		required: false,
		type: String,
	},
	size: {
		default: 'default',
		required: false,
		type: String,
	},
	skelton: {
		default: true,
		required: false,
		type: Boolean,
	},
	skeltonType: {
		default: 'heading@1',
		required: false,
		type: String,
	},
	textColor: {
		default: 'surface-variant',
		required: false,
		type: String,
	},
	textLoader: {
		default: true,
		required: false,
		type: Boolean,
	}
});


const containerClasses = computed(() => {
	return {
		[`${componentName}--table-loader`]: true,
		'text-center': true,
		'pa-0': true,
		'ma-0': true,
	};
});

const computedLoadingText = computed(() => {
	return props.loadingText || 'Loading...';
});
</script>


<style lang="scss" scoped>
.v-drilldown-table {
	&--table-loader {
		background: rgb(var(--v-theme-surface));
	}
}
</style>
