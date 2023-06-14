<template>
	<tr
		:class="loaderContainerClasses"
		:style="loaderTrStyles"
	>
		<td
			class="px-0 ma-0"
			:colspan="colspan"
			:style="loaderTdStyles"
		>
			<v-row
				v-if="loading"
				:class="loaderVRowClasses"
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
import { TableLoader } from '@/types';
import {
	useIsOnlyLinearLoader,
	useLoaderContainerClasses,
	useLoaderHeight,
	useLoaderTdStyles,
	useLoaderTrStyles,
	useLoaderVRowClasses,
} from '@/plugin/composables/loader';
import { useGetLevelColors } from '@/plugin/composables/levelColors';


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
		return useGetLevelColors({
			colors: props.colors,
			level: props.level,
			prop: 'loader',
			themeColors: theme,
		});
	}

	return;
});

const loaderTrStyles = computed<StyleValue>(() => useLoaderTrStyles({
	isLinearOnly,
	loaderHeight,
}));

const loaderTdStyles = computed<StyleValue>(() => useLoaderTdStyles({
	isLinearOnly,
	loaderHeight,
}));

const loaderContainerClasses = computed(() => useLoaderContainerClasses({ isLinearOnly }));
const loaderVRowClasses = computed(() => useLoaderVRowClasses());


// v-progress-linear //
const linearColor = computed<string | undefined>(() => {
	return baseColors.value?.linear || '';
});

const loaderHeight = computed(() => {
	return useLoaderHeight(props.height as string | number);
});

const isLinearOnly = computed<boolean>(() => {
	let response = false;

	if (props.loaderType !== null && props.loaderType !== false) {
		response = useIsOnlyLinearLoader(props.loaderType);
	}

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

		&-not-linear {
			td {
				height: 0 !important;
			}
		}

		> td {
			border: 0 !important;
		}
	}

	&--loader-tr-vrow {
		background: rgb(var(--v-theme-surface));
	}
}
</style>
