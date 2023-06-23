<template>
	<slot
		v-if="slots.top"
		name="top"
		v-bind="boundProps"
	/>

	<v-col
		v-else-if="(showSearch || slots[`top.left`] || slots[`top.right`]) && showTopContent"
		lg="12"
	>
		<v-row :data-id="`vdt-top-id-${props.level}`">
			<slot
				v-if="slots[`top.left`]"
				name="top.left"
				v-bind="boundProps"
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
				v-if="slots[`top.right`]"
				name="top.right"
				v-bind="boundProps"
			/>
		</v-row>
	</v-col>
</template>

<script setup lang="ts">
import {
	SearchProps,
	SearchPropCols,
	TopSlotProps,
} from '@/types';
import { componentName } from '@/plugin/utils/globals';
import { watchDebounced } from '@vueuse/core';


const slots = useSlots();
const emit = defineEmits([
	'click:selectAll',
	'update:search',
]);

const props = withDefaults(defineProps<TopSlotProps>(), {
	searchProps: () => ({
		cols: {
			lg: 3,
			md: 6,
			sm: 12,
			xl: 3,
			xs: 12,
			xxl: 2,
		},
		density: 'comfortable',
		variant: 'underlined',
	})
});

const levelSearch = ref<string>('');
const showTopContent = ref<boolean>(true);

const tableItems = computed(() => {
	return props.items;
});

const boundProps = computed(() => {
	return {
		allSelected: props.slotProps.allSelected,
		columns: props.slotProps.columns,
		headers: props.slotProps.headers,
		items: tableItems,
		itemsPerPage: props.slotProps.itemsPerPage,
		level: props.level,
		loading: props.loading,
		page: props.slotProps.page,
		pageCount: props.slotProps.pageCount,
		search: unref(levelSearch),
		selectAll: selectAllCallback,
		setItemsPerPage: props.slotProps.setItemsPerPage,
		toggleSelectAll: toggleSelectAllCallback,
	};
});

// -------------------------------------------------- Slot content check //
onMounted(() => {
	const slotContentCheck = document.querySelector(`[data-id="vdt-top-id-${props.level}"]`) as HTMLElement;

	// ? If slot does not have content, hide the column to avoid unnecessary space //
	if (slotContentCheck?.children.length === 0) {
		showTopContent.value = false;
	}
});


// -------------------------------------------------- Callbacks //
function selectAllCallback(val: boolean) {
	props.slotProps.selectAll(val);
	emit('click:selectAll', val);
}

function toggleSelectAllCallback() {
	props.slotProps.selectAll(!props.slotProps.allSelected);
	emit('click:selectAll', !props.slotProps.allSelected);
}


// -------------------------------------------------- Search Field //
watchDebounced(
	levelSearch,
	() => {
		emit('update:search', levelSearch.value);
	},
	{ debounce: 750, maxWait: 1000 },
);

const searchFieldClasses = computed<object>(() => {
	const searchProps = props.searchProps as SearchProps;
	const searchCols = searchProps.cols as SearchPropCols;

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
