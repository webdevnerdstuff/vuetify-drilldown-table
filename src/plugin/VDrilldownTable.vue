<!-- eslint-disable vue/no-v-for-template-key -->
<!-- eslint-disable vue/no-v-model-argument -->
<template>
	<component
		:is="tableType"
		v-bind="$attrs"
		:class="tableClasses"
		:density="loadedDrilldown.density"
		:expand-on-click="loadedDrilldown.expandOnClick"
		:expanded="loadedDrilldown.expanded"
		:headers="loadedDrilldown.headers"
		:height="loadedDrilldown.height"
		:hide-no-data="hidingNoData"
		:item-value="loadedDrilldown.itemValue"
		:items="loadedDrilldown.items"
		:items-length="loadedDrilldown.itemsLength"
		:items-per-page="loadedDrilldown.itemsPerPage"
		:items-per-page-options="loadedDrilldown.itemsPerPageOptions"
		:loading="(!loadedDrilldown.loaderType || slots.loading) && loadedDrilldown.loading"
		:multi-sort="loadedDrilldown.multiSort"
		:must-sort="loadedDrilldown.mustSort"
		:no-data-text="loadedDrilldown.noDataText"
		:no-filter="loadedDrilldown.noFilter"
		:page="loadedDrilldown.page"
		:return-object="loadedDrilldown.returnObject"
		:search="levelSearch"
		:show-expand="loadedDrilldown.showExpand"
		:sort-by="currentSortBy"
		:style="tableStyles"
		@update:items-per-page="updateItemsPerPage"
		@update:model-value="updateModelValue"
		@update:page="updatePage"
		@update:sort-by="updateSortBy"
	>

		<!-- ================================================== Top Slot -->
		<template #top>
			<TopSlot
				:key="level"
				:loaded-drilldown="loadedDrilldown"
				:search-props="loadedDrilldown.searchProps"
				:show-search="loadedDrilldown.showSearch ?? false"
				@update:search="levelSearch = $event"
			>
				<!-- Pass on all scoped slots -->
				<template
					v-for="(_, slot) in slots"
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
				:colors="loadedDrilldown.colors"
				:density="loadedDrilldown.density"
				:level="level"
				:show-select="loadedDrilldown.showSelect"
				:slot-props="{ allRowsSelected, ...props }"
				:sort-by="loadedDrilldown.sortBy"
				@click:selectAll="emitAllSelectedEvent($event)"
			>
				<!-- Pass on all scoped slots -->
				<template
					v-for="(_, slot) in slots"
					#[slot]="scope"
				>
					<slot
						:name="slot"
						v-bind="{ ...scope }"
					/>
				</template>
			</HeadersSlot>
			<TableLoader
				v-if="loadedDrilldown.loading && loadedDrilldown.loaderType && !slots.loading && level === 1"
				:colors="loadedDrilldown.colors || null"
				:colspan="props.columns.length"
				:height="loadedDrilldown.loaderHeight"
				:level="loadedDrilldown.level"
				:loader-type="loadedDrilldown.loaderType"
				:loading="loadedDrilldown.loading || false"
				:loading-text="loadingText"
				:skelton-type="loadedDrilldown.skeltonType"
			/>
		</template>


		<!-- ================================================== Loader Slot -->
		<template
			v-if="slots.loading"
			#loading
		>
			<slot name="loading" />
		</template>


		<!-- ================================================== Thead Slot -->
		<template
			v-if="slots.thead"
			#thead="props"
		>
			<slot
				name="thead"
				v-bind="{ ...props }"
			/>
		</template>


		<!-- ================================================== Body Slot -->
		<template
			v-if="slots.body"
			#body="props"
		>
			<slot
				name="body"
				v-bind="{ ...props }"
			/>
		</template>


		<!-- ================================================== tbody Slot -->
		<template
			v-if="slots.tbody"
			#tbody="props"
		>
			<slot
				name="tbody"
				v-bind="{ ...props }"
			/>
		</template>


		<template
			v-if="slots['no-data']"
			#no-data
		>
			<slot name="no-data" />
		</template>


		<!-- ================================================== Row Item Slot -->
		<template #item="props">
			<ItemSlot
				:key="level"
				:density="loadedDrilldown.density"
				:expand-on-click="loadedDrilldown.expandOnClick"
				:items="loadedDrilldown.items"
				:level="loadedDrilldown.level"
				:levels="loadedDrilldown.levels"
				:show-expand="loadedDrilldown.showExpand"
				:show-select="loadedDrilldown.showSelect"
				:slot-props="{ allRowsSelected, level, ...props }"
				@click:row="emitClickRow($event)"
				@click:row:checkbox="emitClickRowCheckbox($event)"
				@update:expanded="emitUpdatedExpanded($event)"
			>
				<!-- Pass on all scoped slots -->
				<template
					v-for="(_, slot) in slots"
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
			<TableLoader
				v-if="item.raw[itemChildrenKey].loading && loadedDrilldown.loaderType && !slots.loading"
				class="pa-0 ma-0"
				:colors="item.raw[itemChildrenKey]?.colors ?? null"
				:colspan="columns.length"
				:height="item.raw[itemChildrenKey].loaderHeight"
				:level="level + 1"
				:loader-type="item.raw[itemChildrenKey].loaderType"
				:loading="item.raw[itemChildrenKey].loading"
				:loading-text="loadingText"
				:skelton-type="item.raw[itemChildrenKey].skeltonType"
			/>

			<tr :class="showLoadingDrilldownTable(item.raw[itemChildrenKey].loading) ? '' : 'd-none'">
				<td
					class="px-0 ma-0"
					:colspan="columns.length"
					style="vertical-align: top;"
				>
					<!-- :class="item.raw[itemChildrenKey].loading ? 'd-none' : ''" -->
					<VDrilldownTable
						:key="item.raw"
						:colors="colors"
						:drilldown="loadedDrilldown"
						:headers="item.raw[itemChildrenKey].headers"
						:is-drilldown="true"
						:item="item"
						:items-length="item.raw[itemChildrenKey].itemsLength"
						:level="level + 1"
						:levels="loadedDrilldown.levels"
						:loading="item.raw[itemChildrenKey].loading"
						:multi-sort="item.raw[itemChildrenKey].multiSort"
						:no-data-text="loadedDrilldown.noDataText"
						:parent-ref="parentTableRef"
						:sort-by="loadedDrilldown.sortBy"
						:table-type="tableType"
						@update:drilldown="emitUpdatedExpanded($event)"
						@update:model-value="updateModelValue"
					>
						<!-- Pass on all named slots -->
						<slot
							v-for="slot in Object.keys(slots)"
							:name="slot"
						></slot>

						<!-- Pass on all scoped slots -->
						<template
							v-for="(_, slot) in slots"
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


		<!-- ================================================== Tfoot Slot -->
		<template
			v-if="slots.tfoot || showFooterRow"
			#tfoot="props"
		>
			<slot
				v-if="slots.tfoot"
				name="tfoot"
				v-bind="{ ...props }"
			/>

			<TfootSlot
				v-else
				:key="level"
				:colors="loadedDrilldown.colors || null"
				:density="loadedDrilldown.density"
				:footers="loadedDrilldown.footers || []"
				:level="loadedDrilldown.level"
				:show-select="loadedDrilldown.showSelect"
				:slot-props="{ allRowsSelected, ...props }"
			>
				<!-- Pass on all scoped slots -->
				<template
					v-for="(_, slot) in slots"
					#[slot]="scope"
				>
					<slot
						:name="slot"
						v-bind="{ ...scope }"
					/>
				</template>
			</TfootSlot>
		</template>


		<!-- ================================================== Footer Prepend Slot -->
		<template #[`footer.prepend`]>
			<slot
				v-if="slots[`footer.prepend`]"
				name="footer.prepend"
			/>
		</template>


		<!-- ================================================== Bottom Slot -->
		<template
			v-if="slots.bottom"
			#bottom="props"
		>
			<BottomSlot
				:key="level"
				:slot-props="props"
			>
				<!-- Pass on all scoped slots -->
				<template
					v-for="(_, slot) in slots"
					#[slot]="scope"
				>
					<slot
						:name="slot"
						v-bind="{ ...scope }"
					/>
				</template>
			</BottomSlot>
		</template>

	</component>
</template>

<script setup lang="ts">
import { VDataTableServer, VDataTable } from 'vuetify/labs/components';
import { AllProps } from './utils/props';
import { TableLoader } from './components';
import {
	BottomSlot,
	HeadersSlot,
	ItemSlot,
	TfootSlot,
	TopSlot,
} from './slots';
import { useEmitUpdatedExpanded } from './composables/emits';
import { useMergeDeep } from './composables/helpers';
import { useSetLoadedDrilldown } from './composables/loadedDrilldown';
import { useTableClasses } from './composables/classes';
import { useTableStyles } from './composables/styles';
import {
	useEventBus,
	watchDebounced,
	watchOnce,
} from '@vueuse/core';
import {
	DataTableItem,
	DrilldownEvent,
	OptionsEventBus,
	OptionsEventObject,
	Props,
} from '@/types';
import type { VDataTable as VDT } from "vuetify/labs/components";


// -------------------------------------------------- Emits & Slots & Injects //
const emit = defineEmits([
	'click:row',
	'click:row:checkbox',
	'update:expanded',
	'update:drilldown',
	'update:drilldown:sortby',
	'update:options',
	'update:itemsPerPage',
	'update:page',
	'update:search',
	'update:sortBy',
	'update:sortByCustom',
]);


// -------------------------------------------------- Props //
const props = withDefaults(defineProps<Props>(), { ...AllProps });

const slots = useSlots();

const tableType = props.server || props.tableType?.name === 'VDataTableServer' ? VDataTableServer : VDataTable;


// -------------------------------------------------- Table Settings //
let loadedDrilldown = reactive<Props>(Object.assign({}, props));
const defaultDrilldownSettings = { ...props, ...loadedDrilldown };


// -------------------------------------------------- Data //
const allRowsSelected = ref<boolean>(false);
const parentTableRef = ref<string>('');
const levelSearch = ref<string>('');
const theme = useTheme();

const currentSortBy = computed(() => {
	return loadedDrilldown.sortBy;
});

const hidingNoData = computed(() => {
	if (loadedDrilldown.loading) {
		return true;
	}

	return loadedDrilldown.hideNoData;
});

// -------------------------------------------------- Watch //
// eslint-disable-next-line @typescript-eslint/no-explicit-any
watchOnce(props as any, () => {
	if (props.level !== 1 || loadedDrilldown.level === 1) {
		setLoadedDrilldown();
	}
}, { immediate: false });

watch(() => props.items, () => {
	setLoadedDrilldown();
});

watch(() => props.loading, (value) => {
	if (value) {
		loadedDrilldown.loading = value;
	}

	setLoadedDrilldown();
});


// -------------------------------------------------- Table #
const showLoadingDrilldownTable = (loading: boolean): boolean => {
	const loaderType = loadedDrilldown.loaderType;

	if (loading) {
		if (loaderType === 'skelton') {
			return false;
		}

		if (Array.isArray(loaderType) && loaderType.length === 1 && loaderType[0] === 'skelton') {
			return false;
		}

		if (!loadedDrilldown.showDrilldownWhenLoading) {
			return false;
		}
	}

	return true;
};

const tableClasses = computed<object>(() => {
	const isServerSide = false;

	return useTableClasses(
		props.isDrilldown,
		loadedDrilldown.elevation,
		loadedDrilldown.hover,
		loadedDrilldown.level,
		isServerSide
	);
});

const tableStyles = computed<StyleValue>(() => {
	return useTableStyles(loadedDrilldown.colors, loadedDrilldown.level, theme);
});


// -------------------------------------------------- Methods #
function setLoadedDrilldown(): void {
	if (props.drilldown) {
		loadedDrilldown = useSetLoadedDrilldown(loadedDrilldown, props.drilldown, props.item?.raw, props.level, props.levels);
		return;
	}

	loadedDrilldown = useMergeDeep(loadedDrilldown, props) as Props;
}



// -------------------------------------------------- Search //
watchDebounced(
	levelSearch,
	() => {
		emit('update:search', {
			drilldown: loadedDrilldown,
			query: levelSearch.value,
		});
	},
	{ debounce: 750, maxWait: 1000 },
);


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

// function emitLevelSearch(val: string): void {
// 	emit('update:search', { loadedDrilldown });
// }

function emitUpdatedExpanded(data: DrilldownEvent): void {
	const drilldownData = {
		...loadedDrilldown,
		...defaultDrilldownSettings,
		...data,
	};

	useEmitUpdatedExpanded(emit, data, drilldownData as Props);
}


// -------------------------------------------------- Table Options //
function updatedOptions(drilldown: Props) {
	return {
		items: drilldown.items,
		itemsPerPage: drilldown.itemsPerPage,
		page: drilldown.page,
		server: drilldown.server,
		sortBy: drilldown.sortBy,
	};
}

// ------------ Bus Event //
const optionsBus = useEventBus(OptionsEventBus);

function optionsListener(data: OptionsEventObject) {
	if (props.level === 1 && data.drilldown.server) {
		emit('update:options', { ...data });
	}
}

const unsubscribeOptionsBus = optionsBus.on(optionsListener);

onUnmounted(() => {
	unsubscribeOptionsBus();
});

// ------------ Items Per Page //
function updateItemsPerPage(val: VDT['itemsPerPage']) {
	loadedDrilldown.itemsPerPage = val;

	const options = updatedOptions(loadedDrilldown);
	const drilldown = { ...props, ...options, ...{ itemsPerPage: val } };
	const data = { drilldown, itemsPerPage: val, name: 'update:itemsPerPage' };

	optionsBus.emit(data);
}

// ------------ Paging //
function updatePage(val: VDT['page']) {
	loadedDrilldown.page = val;

	const options = updatedOptions(loadedDrilldown);
	const drilldown = { ...props, ...options, ...{ page: val } };
	const data = { drilldown, name: 'update:page', page: val };

	optionsBus.emit(data);
}

// ------------ Column Sorting //
function updateSortBy(val: VDT['sortBy']) {
	loadedDrilldown.sortBy = val;
	const options = updatedOptions(loadedDrilldown);
	const drilldown = { ...props, ...options, ...{ sortBy: val } };
	const data = { drilldown, name: 'update:sortBy', sortBy: val };

	optionsBus.emit(data);
}

// function clickedRow(e, item) {
// 	console.log('clickedRow', { e, item });
// }

// ! Not sure what this does or if it works
function updateModelValue(val) {
	console.log('updateModelValue', val);
}

</script>

<style lang="scss">
@use './styles/main.scss';
</style>
