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
				:class="searchContainerCols"
			>
				<!-- =========================== Search -->
				<v-text-field
					v-if="showSearch"
					v-bind="boundSearchProps"
					v-model="levelSearch"
					class="mt-0 pt-0"
					v-on="searchEvents"
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
import { KeyStringAny, TopSlotProps } from '@/types';
import { componentName } from '@/plugin/utils/globals';
import { AllProps } from '../utils/props';


const slots = useSlots();
const emit = defineEmits([
	'click:selectAll',
	'update:search',
]);

const props = withDefaults(defineProps<TopSlotProps>(), {});


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
watch(levelSearch, () => {
	emit('update:search', levelSearch.value);
});

const boundSearchProps = computed<KeyStringAny>(() => {
	return {
		...{
			density: 'compact',
			hideDetails: true,
			label: 'Search',
			singleLine: true,
			variant: 'underlined',
		},
		...props.searchProps,
	};
});

const searchContainerCols = computed<object>(() => {
	const col = props.searchContainerCols ?? AllProps.searchContainerCols();

	const classes = {
		[`${componentName}--search-field`]: true,
		[`v-col-${col.xs}`]: true,
		[`v-col-sm-${col.sm}`]: true,
		[`v-col-md-${col.md}`]: true,
		[`v-col-lg-${col.lg}`]: true,
		[`v-col-xl-${col.xl}`]: true,
		[`v-col-xxl-${col.xxl}`]: true,
	};

	return classes;
});

</script>
