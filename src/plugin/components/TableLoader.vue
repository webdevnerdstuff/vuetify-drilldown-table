<template>
	<v-row
		v-if="loading"
		:class="loaderContainerClasses"
		no-gutters
	>
		<v-col
			v-if="loaderType('linear')"
			class="pa-0 ma-0"
			:order="getOrder('linear')"
		>
			<v-progress-linear
				:color="linearColor"
				:height="height"
				indeterminate
			></v-progress-linear>
		</v-col>

		<v-col
			v-if="loaderType('circular')"
			class="pa-0 my-2"
			:order="getOrder('circular')"
		>
			<v-progress-circular
				:bg-color="circularBackgroundColor"
				:color="circularColor"
				indeterminate
				:size="size"
			></v-progress-circular>
		</v-col>

		<v-col
			v-if="loaderType('skelton')"
			class="pa-0 ma-0"
			:order="getOrder('skelton')"
		>
			<v-skeleton-loader
				:loading="loading"
				:type="skeltonType"
			>
			</v-skeleton-loader>
		</v-col>

		<v-col
			v-if="loaderType('text')"
			class="my-2"
			:order="getOrder('text')"
			:style="textStyles"
		>
			{{ computedLoadingText }}
		</v-col>
	</v-row>
</template>

<script setup lang="ts">
import { componentName } from '@/plugin/utils/globals';
import { useGetLevelColors } from '@/plugin/composables/levelColors';
import { ColorsObject } from '@/types';


const theme = useTheme();

const props = defineProps({
	colors: {
		required: true,
		type: [Object, Boolean],
	},
	height: {
		default: '2',
		required: false,
		type: String,
	},
	level: {
		required: true,
		type: Number,
	},
	loaderType: {
		default: 'linear',
		required: false,
		type: [String, Array],
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
	skeltonType: {
		default: 'default',
		required: true,
		type: String,
	},
	textLoader: {
		default: true,
		required: false,
		type: Boolean,
	}
});

const baseColors = computed(() => {
	if (props.colors === false) {
		return;
	}

	return useGetLevelColors(props.colors as ColorsObject, props.level, theme, 'loader');
});

const loaderContainerClasses = computed(() => {
	return {
		[`${componentName}--table-loader`]: true,
		'align-center': false,
		'd-grid': false,
		'flex-column': true,
		'ma-0': true,
		'pa-0': true,
		'text-center': true,
	};
});


// v-progress-linear //
const linearColor = computed<string | undefined>(() => {
	return baseColors.value?.linear || '';
});


// v-progress-circular //
const circularBackgroundColor = computed<string | undefined>(() => {
	return baseColors.value?.bg;
});

const circularColor = computed<string | undefined>(() => {
	return baseColors.value?.circular;
});


// v-skeleton-loader //
const skeltonType = computed<string>(() => {
	return props.skeltonType || 'heading@1';
});


// loadingText //
const textStyles = computed<StyleValue>(() => {
	const styles = {
		color: baseColors.value?.text,
	};

	return styles;
});

const computedLoadingText = computed<string>(() => {
	return props.loadingText || 'Loading...';
});


// Get the order of the loader type //
const getOrder = (type: string): number => {
	const loaderType = props.loaderType;

	if (Array.isArray(loaderType)) {
		return loaderType.indexOf(type);
	}

	return 1;
};


// Check if the loader type is enabled //
const loaderType = (type: string): boolean => {
	const loaderType = props.loaderType;

	if (type === props.loaderType) {
		return true;
	}

	if (Array.isArray(loaderType)) {
		return loaderType.includes(type);
	}

	return false;
};
</script>


<style lang="scss" scoped>
.v-drilldown-table {
	&--table-loader {
		background: rgb(var(--v-theme-surface));
	}
}
</style>
