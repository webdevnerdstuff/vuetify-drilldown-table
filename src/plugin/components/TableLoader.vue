<template>
	<div
		v-if="loading"
		class="text-center ma-0 pa-0"
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
	</div>
</template>

<script setup lang="ts">
defineProps({
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
});
</script>
