<template>
	<tr class="v-drilldown-table--loader-tr text-center ma-0 pa-0">
		<td
			class="px-0 ma-0"
			:colspan="colspan"
			:style="loaderTrStyles"
		>
			<v-row
				v-if="loading"
				:class="loaderContainerClasses"
				no-gutters
			>
				<v-col
					v-if="checkLoaderType('linear')"
					class="pa-0 ma-0"
					:order="getOrder('linear')"
				>
					<v-progress-linear
						:color="linearColor"
						:height="loaderHeight"
						indeterminate
					></v-progress-linear>
				</v-col>

				<v-col
					v-if="checkLoaderType('circular')"
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
					v-if="checkLoaderType('skelton')"
					class="pa-0 ma-0"
					:order="getOrder('skelton')"
				>
					<v-skeleton-loader
						:loading="skeltonLoading"
						:type="currentSkeltonType"
					>
					</v-skeleton-loader>
				</v-col>

				<v-col
					v-if="checkLoaderType('text')"
					class="my-2"
					:order="getOrder('text')"
					:style="textStyles"
				>
					{{ computedLoadingText }}
				</v-col>
			</v-row>
		</td>
	</tr>
</template>

<script setup lang="ts">
import { componentName } from '@/plugin/utils/globals';
import { useGetLevelColors } from '@/plugin/composables/levelColors';
import { TableLoader } from '@/types';
import { useIsOnlyLinearLoader, useLoaderHeight } from '@/plugin/composables/helpers';


const theme = useTheme();

const props = withDefaults(defineProps<TableLoader>(), {
	height: 2,
	loaderType: 'linear',
	loadingText: 'Loading...',
	size: 'default',
	textLoader: true,
});

const baseColors = computed(() => {
	if (typeof props.colors === 'object' && props.colors !== null) {
		return useGetLevelColors(props.colors, props.level, theme, 'loader');
	}

	return;
});

const loaderTrStyles = computed<StyleValue>(() => {
	if (isLinearOnly.value) {
		return {
			height: loaderHeight.value,
			position: 'absolute',
			top: 0,
			width: '100%',
		};
	}

	return {};
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

const loaderHeight = computed(() => {
	return useLoaderHeight(props.height as string | number);
});

const isLinearOnly = computed<boolean>(() => {
	const response = useIsOnlyLinearLoader(props.loaderType);

	return response;
});


// v-progress-circular //
const circularBackgroundColor = computed<string | undefined>(() => {
	return baseColors.value?.bg;
});

const circularColor = computed<string | undefined>(() => {
	return baseColors.value?.circular;
});


// v-skeleton-loader //
const currentSkeltonType = computed<string>(() => {
	return props.skeltonType || 'heading@1';
});

const skeltonLoading = computed(() => {
	return props.loading as boolean;
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
const checkLoaderType = (type: string): boolean => {
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
	&--loader-tr {
		height: 0;
		position: relative;
		top: 0;
		width: 100%;
		z-index: 99999;
	}

	&--table-loader {
		background: rgb(var(--v-theme-surface));
	}
}
</style>
