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
					<v-progress-linear v-bind="boundLinearProps"></v-progress-linear>
				</v-col>

				<v-col
					v-if="checkLoaderType('circular')"
					class="pa-0 my-2"
					:order="getOrder('circular')"
				>
					<v-progress-circular v-bind="boundCircularProps"></v-progress-circular>
				</v-col>

				<v-col
					v-if="checkLoaderType('skelton')"
					class="pa-0 ma-0"
					:order="getOrder('skelton')"
				>
					<v-skeleton-loader
						v-bind="boundSkeltonProps"
						:loading="skeltonLoading"
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
import { TableLoader } from '@/plugin/types';
import {
	useIsOnlyLinearLoader,
	useLoaderContainerClasses,
	useLoaderHeight,
	useLoaderTdStyles,
	useLoaderTrStyles,
	useLoaderVRowClasses,
} from '@composables/loader';
import { getSingleColor } from '@composables/levelColors';


const theme = useTheme();

const props = withDefaults(defineProps<TableLoader>(), {
	height: 2,
	loaderType: 'linear',
	loadingText: 'Loading...',
	size: 'default',
	textLoader: true,
});


// -------------------------------------------------- Classes & Styles //
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


// -------------------------------------------------- v-progress-linear //
const boundLinearProps = computed(() => props.loaderProps?.linear ?? {});

const loaderHeight = computed(() => {
	const height = props.loaderProps?.linear?.height || '2px';

	return useLoaderHeight(height as string | number);
});

const isLinearOnly = computed<boolean>(() => {
	let response = false;

	if (props.loaderType !== null && props.loaderType !== false) {
		response = useIsOnlyLinearLoader(props.loaderType);
	}

	return response;
});


// -------------------------------------------------- v-progress-circular //
const boundCircularProps = computed(() => props.loaderProps?.circular ?? {});


// -------------------------------------------------- v-skeleton-loader //
const boundSkeltonProps = computed(() => props.loaderProps?.skelton ?? {});

const skeltonLoading = computed(() => {
	return props.loading as boolean;
});


// -------------------------------------------------- loadingText //
const textStyles = computed<StyleValue>(() => {
	let textColor = props.loaderProps?.text?.color ?? 'surface-variant';
	textColor = getSingleColor(textColor, theme);

	const styles = {
		color: textColor,
	};

	return styles;
});

const computedLoadingText = computed<string>(() => {
	return props.loadingText || 'Loading...';
});


// -------------------------------------------------- Methods //

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
		z-index: 100;

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
