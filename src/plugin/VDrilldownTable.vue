<!-- eslint-disable vue/no-v-for-template-key -->
<!-- eslint-disable vue/no-v-model-argument -->
<template>
	<v-data-table
		v-if="!loadedDrilldown.server"
		v-bind="$attrs"
		:class="tableClasses"
		:density="loadedDrilldown.density"
		:expand-on-click="loadedDrilldown.expandOnClick"
		:expanded="loadedDrilldown.expanded"
		:headers="loadedDrilldown.headers"
		:height="loadedDrilldown.height"
		:hide-no-data="hidingNoData"
		:hover="loadedDrilldown.hover"
		:item-title="loadedDrilldown.itemTitle"
		:item-value="loadedDrilldown.itemValue"
		:items="loadedDrilldown.items"
		:items-per-page="loadedDrilldown.itemsPerPage"
		:loading="loadedDrilldown.loading"
		:multi-sort="loadedDrilldown.multiSort"
		:must-sort="loadedDrilldown.mustSort"
		:no-data-text="loadedDrilldown.noDataText"
		:no-filter="loadedDrilldown.noFilter"
		:page="loadedDrilldown.page"
		:return-object="loadedDrilldown.returnObject"
		:search="levelSearch"
		:show-expand="loadedDrilldown.showExpand"
		:show-select="loadedDrilldown.showSelect"
		:sort-by="currentSortBy"
		:style="tableStyles"
		@update:items-per-page="updateItemsPerPage"
		@update:model-value="updateModelValue"
		@update:options="updateOptions"
		@update:sort-by="updateSortBy"
	>
		<!-- ================================================== Top Slot -->
		<template #top>
			<TopSlot
				:key="level"
				:loaded-drilldown="loadedDrilldown"
				@update:search="levelSearch = $event"
			>
				<!-- Pass on all scoped slots -->
				<template
					v-for="(_, slot) in $slots"
					#[slot]="scope"
				>
					<slot
						:name="slot"
						v-bind="{ ...scope }"
					/>
				</template>
			</TopSlot>
		</template>


		<!-- ================================================== Headers Slot -->
		<template #headers="props">
			<HeadersSlot
				:key="level"
				:loaded-drilldown="loadedDrilldown"
				:slot-props="{ allRowsSelected, ...props }"
				@click:selectAll="emitAllSelectedEvent($event)"
			>
				<!-- Pass on all scoped slots -->
				<template
					v-for="(_, slot) in $slots"
					#[slot]="scope"
				>
					<slot
						:name="slot"
						v-bind="{ ...scope }"
					/>
				</template>
			</HeadersSlot>
			<tr
				v-if="loadedDrilldown.loading"
				class="text-center ma-0 pa-0"
			>
				<td
					class="pa-0"
					:colspan="props.columns.length"
					style="vertical-align: top;"
				>
					<TableLoader
						:loaded-drilldown="loadedDrilldown"
						:loading="loadedDrilldown.loading || false"
						:loading-text="loadingText"
					/>
				</td>
			</tr>
		</template>


		<!-- ================================================== Body Slot -->
		<template
			v-if="$slots.body"
			#body="props"
		>
			<slot
				name="body"
				:props="props"
			/>
		</template>


		<!-- ================================================== tbody Slot -->
		<template
			v-if="$slots.tbody"
			#tbody="props"
		>
			<slot
				name="tbody"
				:props="props"
			/>
		</template>


		<template
			v-if="$slots['no-data']"
			#no-data
		>
			<slot name="no-data" />
		</template>


		<!-- ================================================== Row Item Slot -->
		<template #item="props">
			<ItemSlot
				:key="level"
				:items="loadedDrilldown.items"
				:loaded-drilldown="loadedDrilldown"
				:slot-props="{ allRowsSelected, level, ...props }"
				@click:row="emitClickRow($event)"
				@click:row:checkbox="emitClickRowCheckbox($event)"
				@update:expanded="emitUpdatedExpanded($event)"
			>
				<!-- Pass on all scoped slots -->
				<template
					v-for="(_, slot) in $slots"
					#[slot]="scope"
				>
					<slot
						:name="slot"
						v-bind="{ ...scope }"
					/>
				</template>
			</ItemSlot>
		</template>


		<!-- ================================================== Expanded Row Slot -->
		<template #expanded-row="{ columns, item }">
			<tr>
				<td
					class="px-0 ma-0"
					:colspan="columns.length"
					style="vertical-align: top;"
				>
					<TableLoader
						v-if="item.raw[itemChildrenKey].loading"
						class="pa-0 ma-0"
						:loaded-drilldown="loadedDrilldown"
						:loading="item.raw[itemChildrenKey].loading"
					/>

					<VDrilldownTable
						:key="item.raw"
						:class="item.raw[itemChildrenKey].loading ? 'd-none' : ''"
						:colors="colors"
						:drilldown="loadedDrilldown"
						:headers="item.raw[itemChildrenKey].headers"
						:is-drilldown="true"
						:item="item"
						:level="level + 1"
						:levels="loadedDrilldown.levels"
						:loading="item.raw[itemChildrenKey].loading"
						:multi-sort="item.raw[itemChildrenKey].multiSort"
						:no-data-text="loadedDrilldown.noDataText"
						:parent-ref="parentTableRef"
						:sort-by="loadedDrilldown.sortBy"
						@update:drilldown="emitUpdatedExpanded($event)"
						@update:items-per-page="updateItemsPerPage"
						@update:options="updateOptions"
					>
						<!-- Pass on all named slots -->
						<slot
							v-for="slot in Object.keys(slots)"
							:name="slot"
						></slot>

						<!--wPass on all scoped slots -->
						<template
							v-for="(_, slot) in $slots"
							#[slot]="scope"
						>
							<slot
								:name="slot"
								v-bind="{ ...scope }"
							/>
						</template>
					</VDrilldownTable>
				</td>
			</tr>
		</template>


		<!-- ================================================== tfoot Slot -->
		<!-- // ! The tfoot slot is currently missing `props` -->
		<template #tfoot>
			<TfootSlot
				:key="level"
				:loaded-drilldown="loadedDrilldown"
			/>
		</template>


		<!-- ================================================== Footer Prepend Slot -->
		<template #[`footer.prepend`]>
			<slot
				v-if="$slots[`footer.prepend`]"
				name="footer.prepend"
			/>
		</template>

		<!-- ================================================== Bottom Slot -->
		<template
			v-if="$slots.bottom"
			#bottom
		>
			<BottomSlot
				:key="level"
				:loaded-drilldown="loadedDrilldown"
			>
				<!-- Pass on all scoped slots -->
				<template
					v-for="(_, slot) in $slots"
					#[slot]="scope"
				>
					<slot
						:name="slot"
						v-bind="{ ...scope }"
					/>
				</template>
			</BottomSlot>
		</template>
	</v-data-table>
</template>

<script setup lang="ts">
// import { componentName } from './utils/globals';
import { AllProps } from './utils/props';
import { TableLoader } from './components';
// import { useGetLevelColors } from './composables/levelColors';
// import {
// 	// useDrilldownDebounce,
// 	useMergeDeep,
// } from './composables/helpers';
import {
	// useDrilldownDebounce,
	useEmitUpdatedExpanded,
} from './composables/emits';
import {
	DataTableItem,
	DrilldownEvent,
	LoadedDrilldown,
} from '@/types';
import type { VDataTable } from 'vuetify/labs/VDataTable';
import {
	BottomSlot,
	HeadersSlot,
	ItemSlot,
	TfootSlot,
	TopSlot,
} from './slots';
import { watchOnce } from '@vueuse/core';
import {
	useTableClasses,
	useTableStyles,
} from './composables/table';
import {
	useSetLoadedDrilldown
} from './composables/loadedDrilldown';


// -------------------------------------------------- Emits & Slots & Injects //
const emit = defineEmits([
	'click:row',
	'click:row:checkbox',
	'update:expanded',
	'update:drilldown',
	'update:sortBy',
	'update:sortByCustom',
]);


// -------------------------------------------------- Props //
const props = defineProps({ ...AllProps });


// -------------------------------------------------- Table Settings (WIP) //
// Custom Default Props/Options //
// const customOptions = {
// calculateWidths: true,
// showFooterRow: false,
// matchHeaderColumnWidths: true,
// parentTableRef: '',
// ref: 'drilldown',
// };

let loadedDrilldown = reactive<LoadedDrilldown>({
	// colors: false, 						// & Works & Is Prop
	customFilter: undefined, 			// ? Needs Testing
	customKeyFilter: undefined,		// ? Needs Testing
	// debounceDelay: 750,				// ? Works & Is Prop - Might remove
	// density: 'comfortable',		// & Works & Is Prop
	drilldownKey: '',							// * Custom Prop - Keep here
	// elevation: 1, 							// & Works & Is Prop
	// expandOnClick: false, 			// & Works & Is Prop
	expanded: [], 								// ? Needs Testing
	filterKeys: [], 							// ? Needs Testing
	filterMode: 'some',						// ? Needs Testing
	fixedFooter: true, 						// ? Not sure what this does or if it works
	fixedHeader: true, 						// ? Not sure what this does or if it works
	// footers: [], 							// & Works & Is Prop
	// footerProps: {},						// ? In v2 Missing in v3
	// groupBy: [], 							// * Works, but this does not look very good by default
	// headers: [],								// & Works & Is Prop
	height: 'auto',								// * Works
	// hideDefaultFooter: false, 	// ? In v2 Missing in v3
	// hideDefaultHeader: true,	 	// ? In v2 Missing in v3
	hideNoData: false, 						// * Works
	// hover: false, 							// & Works & Is Prop
	// isDrilldown: false,				// & Works & Is Prop
	// item: [],									// & Works & Is Prop
	itemChildren: 'children',			// ? Missing Docs
	itemChildrenKey: 'child',			// * Custom Prop - Keep here
	itemProps: 'props',						// ? Not sure what this does
	itemTitle: 'title',						// * Works, but is weird
	itemValue: 'id',							// * Works, but is weird
	items: [],										// * Custom Prop - Keep here
	// itemsLength: 0,								// ? Not sure if this will be used
	itemsPerPage: 10,							// * Works
	level: 1,											// * Custom Prop - Keep here
	levels: 0,										// * Custom Prop - Keep here
	loaderType: '',
	// loading: false,
	// loadingText: 'Loading...',	// & Works & Is Prop
	modelValue: [],								// ? Needs Testing
	// multiSort: false,					// & Works - Is binding prop
	// mustSort: false,						// ! Not sure if this is working correctly - Is binding prop
	// noDataText: '',						// & Works & Is Prop
	noFilter: false,							// * Works, but not sure why you would use this.
	page: 1, 											// * Works
	// pageCount: 0,							// ? In v2 Missing in v3
	returnObject: true,						// ? Missing Docs
	// search: '',								// ? Need to test this when top slot is used over showSearch prop
	searchProps: {
		cols: {
			lg: 3,
			md: 6,
			sm: 12,
			xl: 3,
			xs: 12,
			xxl: 2,
		},
		density: 'compact',
		variant: 'underlined',
	},
	server: false, 								// ? Needs Testing. This requires v-data-table-server
	showExpand: false,						// ? Works but needs testing.- Not sure if needed in this object
	// showFooterRow: false,					// ? Not sure if I will use this. Depends on a possible footer slot
	// showSearch: false,					// & Works & Is Prop
	// showSelect: false,					// & Works - Is binding prop
	// skeltonType: '',						// & Works & Is Prop
	// sortBy: [],								// & Works & Is Prop
	width: '100%',								// ! Failed
});


const defaultDrilldownSettings = { ...props, ...loadedDrilldown };


// -------------------------------------------------- Data //
const allRowsSelected = ref<boolean>(false);
const currentSortBy = ref(loadedDrilldown.sortBy);
const parentTableRef = ref<string>('');
const levelSearch = ref<string>('');
const theme = useTheme();
const slots = useSlots();


const hidingNoData = computed(() => {
	if (loadedDrilldown.loading) {
		return true;
	}

	return loadedDrilldown.hideNoData;
});

// -------------------------------------------------- Watch //
// watch(props, useDrilldownDebounce(() => {
// 	if (props.level !== 0 || loadedDrilldown.level === 0) {
// 		setLoadedDrilldown();
// 	}
// }, props.debounceDelay, props.level === 0), { deep: true });

// watch(props, () => {
// 	if (props.level !== 1 || loadedDrilldown.level === 1) {
// 		setLoadedDrilldown();
// 	}
// });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
watchOnce(props as any, () => {
	if (props.level !== 1 || loadedDrilldown.level === 1) {
		setLoadedDrilldown();
	}
}, { immediate: false });

watch(() => props.loading, (value) => {
	if (value) {
		loadedDrilldown.loading = value;
	}

	setLoadedDrilldown();
});


// -------------------------------------------------- Mounts #
// onBeforeMount(() => {
// 	// ... maybe do something here
// });

// onMounted(() => {
// 	// ... maybe do something here
// });


// -------------------------------------------------- Table #
const tableClasses = computed<object>(() => {
	return useTableClasses(loadedDrilldown, props.isDrilldown);
});

const tableStyles = computed<StyleValue>(() => {
	return useTableStyles(loadedDrilldown, theme);
});


// -------------------------------------------------- Methods #
function setLoadedDrilldown(): void {
	loadedDrilldown = useSetLoadedDrilldown(loadedDrilldown, props);

	// if (props.drilldown) {
	// 	loadedDrilldown = useMergeDeep(loadedDrilldown, props.drilldown) as LoadedDrilldown;

	// 	const drilldownItem = loadedDrilldown.items.find(<T, K extends keyof T>(item: T) => {
	// 		const thisItem = item[loadedDrilldown.drilldownKey as K];
	// 		const propsItem = props.item.raw[loadedDrilldown.drilldownKey];

	// 		return thisItem === propsItem;
	// 	}) as LoadedDrilldown;

	// 	loadedDrilldown = useMergeDeep(
	// 		loadedDrilldown,
	// 		drilldownItem[loadedDrilldown.itemChildrenKey] as LoadedDrilldown,
	// 	) as LoadedDrilldown;

	// 	// Hide expand icon if this is the last drilldown level //
	// 	if (props.levels === props.level) {
	// 		loadedDrilldown.showExpand = false;
	// 	}

	// 	return;
	// }

	// loadedDrilldown = useMergeDeep(loadedDrilldown, props) as LoadedDrilldown;
}

// -------------------------------------------------- Emit Events //
function emitAllSelectedEvent(val: boolean): void {
	allRowsSelected.value = val;
}


function emitClickRow(event: MouseEvent): void {
	emit('click:row', event);
}


function emitClickRowCheckbox(item: DataTableItem): void {
	emit('click:row:checkbox', item);
}


function emitUpdatedExpanded(data: DrilldownEvent): void {
	const levelSortByValue = data?.sortBy ?? currentSortBy.value;

	const drilldownData = {
		...defaultDrilldownSettings,
		...loadedDrilldown,
		...data,
		...{ sortBy: levelSortByValue },
	};

	useEmitUpdatedExpanded(emit, data, drilldownData as LoadedDrilldown);
}


// ------------------------- Table Events //

// function clickedRow(e, item) {
// 	console.log('clickedRow', { e, item });
// }

// ? Probably more useful when using server side
function updateItemsPerPage(itemsCount: number) {
	loadedDrilldown.itemsPerPage = itemsCount;

	return true;
}

// ! Not sure what this does or if it works
function updateModelValue(val) {
	console.log('updateModelValue', val);
}

function updateOptions() {
	// console.log('updateOptions', val);
}

// function updatePage(val) {
// 	// console.log('updatePage', val);
// }


watch(() => loadedDrilldown.sortBy, () => {
	currentSortBy.value = loadedDrilldown.sortBy;

	emit('update:sortBy', currentSortBy.value);
});


function updateSortBy(val: VDataTable['sortBy']) {
	loadedDrilldown.sortBy = val;
}

</script>

<style lang="scss">
@use './styles/main.scss';
</style>
