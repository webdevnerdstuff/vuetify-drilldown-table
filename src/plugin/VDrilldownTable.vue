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
		:item-title="loadedDrilldown.itemTitle"
		:item-value="loadedDrilldown.itemValue"
		:items="loadedDrilldown.items"
		:items-per-page="loadedDrilldown.itemsPerPage"
		:items-per-page-options="loadedDrilldown.itemsPerPageOptions"
		:loading="(!loadedDrilldown.loaderType || $slots.loading) && loadedDrilldown.loading"
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
		@update:options="updateOptions"
		@update:sort-by="updateSortBy"
	>

		<!-- ================================================== Top Slot -->
		<template #top>
			<TopSlot
				:key="level"
				:loaded-drilldown="loadedDrilldown"
				:search-props="loadedDrilldown.searchProps"
				:show-search="loadedDrilldown.showSearch"
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
				:colors="loadedDrilldown.colors || false"
				:density="loadedDrilldown.density"
				:item-title="loadedDrilldown.itemTitle"
				:level="level"
				:slot-props="{ allRowsSelected, ...props }"
				:sort-by="loadedDrilldown.sortBy"
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
				v-if="loadedDrilldown.loading && loadedDrilldown.loaderType && !$slots.loading"
				class="text-center ma-0 pa-0"
			>
				<td
					class="pa-0"
					:colspan="props.columns.length"
					style="vertical-align: top;"
				>
					<TableLoader
						:colors="loadedDrilldown.colors || false"
						:level="loadedDrilldown.level"
						:loader-type="loadedDrilldown.loaderType"
						:loading="loadedDrilldown.loading || false"
						:loading-text="loadingText"
						:skelton-type="loadedDrilldown.skeltonType"
					/>
				</td>
			</tr>
		</template>

		<!-- ================================================== Loader Slot -->
		<template
			v-if="$slots.loading"
			#loading
		>
			<slot name="loading" />
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
						v-if="loadedDrilldown.loaderType && !$slots.loading"
						class="pa-0 ma-0"
						:colors="item.raw[itemChildrenKey].colors || false"
						:level="level + 1"
						:loader-type="item.raw[itemChildrenKey].loaderType"
						:loading="item.raw[itemChildrenKey].loading"
						:loading-text="loadingText"
						:skelton-type="item.raw[itemChildrenKey].skeltonType"
					/>

					<VDrilldownBase
						:key="item.raw"
						:class="item.raw[itemChildrenKey].loading ? 'd-none' : ''"
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
						@update:items-per-page="updateItemsPerPage"
						@update:model-value="updateModelValue"
						@update:options="updateOptions"
					>
						<!-- Pass on all named slots -->
						<slot
							v-for="slot in Object.keys($slots)"
							:name="slot"
						></slot>

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
					</VDrilldownBase>
				</td>
			</tr>
		</template>


		<!-- ================================================== tfoot Slot -->
		<!-- // ! The tfoot slot is currently missing `props` -->
		<template #tfoot>
			<TfootSlot
				:key="level"
				:colors="loadedDrilldown.colors || false"
				:footers="loadedDrilldown.footers"
				:item-title="loadedDrilldown.itemTitle"
				:level="loadedDrilldown.level"
				:show-select="loadedDrilldown.showSelect"
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
			<BottomSlot :key="level">
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

	</component>
</template>

<script setup lang="ts">
import { VDataTableServer, VDataTable } from 'vuetify/labs/components';
import { AllProps } from './utils/props';
import { LoadedDrilldownDefaults } from './utils/loadedDrilldown';
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
	watchDebounced,
	watchOnce,
} from '@vueuse/core';
import {
	ColorsObject,
	DataTableItem,
	DrilldownEvent,
	LoadedDrilldown,
} from '@/types';
import type { VDataTable as VDT } from "vuetify/labs/components";


// -------------------------------------------------- Emits & Slots & Injects //
const emit = defineEmits([
	'click:row',
	'click:row:checkbox',
	'update:expanded',
	'update:drilldown',
	'update:drilldown:sortby',
	'update:search',
	'update:sortBy',
	'update:sortByCustom',
]);


// -------------------------------------------------- Props //
const props = defineProps({ ...AllProps });

const tableType = props.server || props.tableType.name === 'VDataTableServer' ? VDataTableServer : VDataTable;

console.log({ tableType });


// -------------------------------------------------- Table Settings (WIP) //
let loadedDrilldown = reactive<LoadedDrilldown>({ ...LoadedDrilldownDefaults });
const defaultDrilldownSettings = { ...props, ...loadedDrilldown };


// -------------------------------------------------- Data //
const allRowsSelected = ref<boolean>(false);
const currentSortBy = ref(loadedDrilldown.sortBy);
const parentTableRef = ref<string>('');
const levelSearch = ref<string>('');
const theme = useTheme();


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
	return useTableStyles(loadedDrilldown.colors as ColorsObject, loadedDrilldown.level, theme);
});


// -------------------------------------------------- Methods #
function setLoadedDrilldown(): void {
	if (props.drilldown) {
		loadedDrilldown = useSetLoadedDrilldown(loadedDrilldown, props.drilldown, props.item.raw, props.level, props.levels);
		return;
	}

	loadedDrilldown = useMergeDeep(loadedDrilldown, props) as LoadedDrilldown;
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

	// console.log(loadedDrilldown);

	emit('update:sortBy', currentSortBy.value);

	updateSortByInternal(loadedDrilldown);
});


function updateSortBy(val: VDT['sortBy']) {
	loadedDrilldown.sortBy = val;
}

function updateSortByInternal(data) {
	console.log('%c%s', ['background-color: black', 'border: 2px dotted red', 'border-radius: 5px', 'color: red', 'font-weight: bold', 'padding: 5px 10px'].join(';'), 'updateSortByInternal event', data);


	// if (!data.parent && data.sortBy?.length) {
	// 	const drilldown = { ...loadedDrilldown };
	// 	drilldown.item = data.parentItem;

	const response = {
		drilldown: data,
		level: data.level,
		parentItem: data.parentItem,
		sortBy: data.sortBy,
	};

	// 	console.log('response', { response });
	if (data.level !== 1) {
		console.log('emit');
		emit('update:drilldown:sortby', response);
	}
}


</script>

<style lang="scss">
@use './styles/main.scss';
</style>
