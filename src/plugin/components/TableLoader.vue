<template>
	<v-row
		v-if="loading"
		:class="containerClasses"
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
import * as DrilldownTypes from '@/types';
import { componentName } from '@/plugin/utils/globals';
import { useGetLevelColors } from '@/plugin/composables/levelColors';
const theme = useTheme();

const props = defineProps({
	height: {
		default: '2',
		required: false,
		type: String,
	},
	loadedDrilldown: {
		required: true,
		type: Object as PropType<DrilldownTypes.LoadedDrilldown>,
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
	textLoader: {
		default: true,
		required: false,
		type: Boolean,
	}
});

const baseColors = useGetLevelColors(props.loadedDrilldown, theme, 'loader');


const containerClasses = computed(() => {
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

const skeltonType = computed<string>(() => {
	return props.loadedDrilldown.skeltonType || 'heading@1';
});


const circularColor = computed<string | undefined>(() => {
	return baseColors.circular;
});

const circularBackgroundColor = computed<string | undefined>(() => {
	return baseColors.bg;
});

const linearColor = computed<string | undefined>(() => {
	return baseColors.linear;
});

const textStyles = computed<StyleValue>(() => {
	const styles = {
		color: baseColors.text,
	};

	return styles;
});

const computedLoadingText = computed<string>(() => {
	return props.loadingText || 'Loading...';
});

const getOrder = (type: string): number => {
	const loaderType = props.loadedDrilldown.loaderType;

	if (Array.isArray(loaderType)) {
		return loaderType.indexOf(type);
	}

	return 1;
};


// Check if the loader type is enabled //
const loaderType = (type: string): boolean => {
	const loaderType = props.loadedDrilldown.loaderType;

	if (type === props.loadedDrilldown.loaderType) {
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
