<template>
	<component
		:is="tableType"
		v-if="tableType"
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
		<template #top="props">
			<TopSlot
				:key="level"
				:items="loadedDrilldown.items"
				:level="loadedDrilldown.level"
				:loading="loadedDrilldown.loading"
				:search-props="loadedDrilldown.searchProps"
				:show-search="loadedDrilldown.showSearch ?? false"
				:slot-props="props"
				@click:selectAll="emitAllSelectedEvent($event)"
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
				:loader-settings="{
					colspan: props.columns.length,
					height: loadedDrilldown.loaderHeight,
					loaderType: loadedDrilldown.loaderType,
					loading: loadedDrilldown.loading,
					loadingText: loadingText,
					size: loadedDrilldown.loaderSize,
					skeltonType: loadedDrilldown.skeltonType,
				}"
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
		</template>


		<!-- ================================================== Loader & Loading Slot -->
		<template
			v-if="slots.loader"
			#loader
		>
			<slot name="loader" />
		</template>

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
			<tr :class="showLoadingDrilldownTable(item.raw[itemChildrenKey]?.loading) ? '' : 'd-none'">
				<td
					class="px-0 ma-0"
					:colspan="columns.length"
					style="vertical-align: top;"
				>
					<VDrilldownTable
						:key="item.raw"
						:colors="colors"
						:density="loadedDrilldown.density"
						:drilldown="loadedDrilldown"
						:headers="item.raw[itemChildrenKey]?.headers"
						:is-drilldown="true"
						:item="item"
						:items-length="item.raw[itemChildrenKey]?.itemsLength"
						:items-per-page="item.raw[itemChildrenKey]?.itemsPerPage"
						:level="level + 1"
						:levels="loadedDrilldown.levels"
						:loaderHeight="item.raw[itemChildrenKey]?.loaderHeight"
						:loaderSize="item.raw[itemChildrenKey]?.loaderSize"
						:loaderType="item.raw[itemChildrenKey]?.loaderType"
						:loading="item.raw[itemChildrenKey]?.loading"
						:loadingText="loadingText"
						:multi-sort="item.raw[itemChildrenKey]?.multiSort"
						:no-data-text="loadedDrilldown.noDataText"
						:parent-ref="parentTableRef"
						:server="item.raw[itemChildrenKey]?.server"
						:skeltonType="item.raw[itemChildrenKey]?.skeltonType"
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
	TableType,
} from '@/types';


// -------------------------------------------------- Emits & Slots & Injects //
const emit = defineEmits([
	'click:row',
	'click:row:checkbox',
	'update:expanded',
	'update:drilldown',
	'update:options',
	'update:itemsPerPage',
	'update:page',
	'update:search',
	'update:sortBy',
]);


// -------------------------------------------------- Props //
const props = withDefaults(defineProps<Props>(), { ...AllProps });

const slots = useSlots();

const tableType = shallowRef<TableType>(null);


// -------------------------------------------------- Mounted Hooks //
/**
 * ? This is needs to make sure the drilldown is remounted on sortBy change
 * ? Client Side Table Only
 */
onMounted(() => {
	if ((props.level !== 1 || loadedDrilldown.level === 1) && !loadedDrilldown.server) {
		setLoadedDrilldown();
	}
});

// ? Determines which table type to use //
onBeforeMount(() => {
	tableType.value = Object.assign({}, props.server ? VDataTableServer : VDataTable);
});


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

	loadedDrilldown.itemsPerPage = props.itemsPerPage;
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

	return useTableClasses({
		elevation: loadedDrilldown.elevation,
		isDrilldown: props.isDrilldown,
		isHover: loadedDrilldown.hover,
		isServerSide,
		level: loadedDrilldown.level,
	});
});

const tableStyles = computed<StyleValue>(() => {
	return useTableStyles({
		colors: loadedDrilldown.colors,
		level: loadedDrilldown.level,
		theme,
	});
});


// -------------------------------------------------- Methods #
function setLoadedDrilldown(): void {
	if (props.drilldown) {
		loadedDrilldown = useSetLoadedDrilldown({
			drilldown: props.drilldown,
			level: props.level,
			levels: props.levels,
			loadedDrilldown,
			rawItem: props.item?.raw,
		});
		return;
	}

	loadedDrilldown = useMergeDeep(loadedDrilldown, props) as Props;
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
	let drilldownData = {
		...defaultDrilldownSettings,
		...loadedDrilldown,
		...data,
	};

	if (props.server) {
		drilldownData = {
			...loadedDrilldown,
			...defaultDrilldownSettings,
			...data,
		};
	}

	useEmitUpdatedExpanded({
		data,
		drilldownData: drilldownData as Props,
		emit,
	});
}


// -------------------------------------------------- Table Options //
function updatedOptions(drilldown: Props) {
	return {
		items: drilldown.items,
		itemsPerPage: drilldown.itemsPerPage,
		page: drilldown.page,
		search: levelSearch.value,
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
function updateItemsPerPage(val: Props['itemsPerPage']) {
	loadedDrilldown.itemsPerPage = val;

	const options = updatedOptions(loadedDrilldown);
	const drilldown = { ...props, ...options, ...{ itemsPerPage: val } };
	const data = { drilldown, itemsPerPage: val, name: 'update:itemsPerPage' };

	optionsBus.emit(data);
	emit('update:itemsPerPage', val);
}

// ------------ Paging //
function updatePage(val: Props['page']) {
	loadedDrilldown.page = val;

	const options = updatedOptions(loadedDrilldown);
	const drilldown = { ...props, ...options, ...{ page: val } };
	const data = { drilldown, name: 'update:page', page: val };

	optionsBus.emit(data);
	emit('update:page', val);
}

// ------------ Search //
watchDebounced(
	levelSearch,
	() => {
		loadedDrilldown.search = levelSearch.value;

		const options = updatedOptions(loadedDrilldown);
		const drilldown = { ...props, ...options, ...{ search: levelSearch.value } };
		const data = { drilldown, search: levelSearch.value };

		optionsBus.emit(data);
		emit('update:search', data);
	},
	{
		debounce: loadedDrilldown.searchDebounce as number,
		maxWait: loadedDrilldown.searchMaxWait as number,
	},
);

// ------------ Column Sorting //
function updateSortBy(val: Props['sortBy']) {
	loadedDrilldown.sortBy = val;

	const options = updatedOptions(loadedDrilldown);
	const drilldown = { ...props, ...options, ...{ sortBy: val } };
	const data = { drilldown, name: 'update:sortBy', sortBy: val };

	optionsBus.emit(data);
	emit('update:sortBy', val);
}

// ? Not sure how this would be useful for this component //
function updateModelValue() {
	// do something...
}

</script>

<style lang="scss">
@use './styles/main.scss';
</style>
