<template>
	<component
		:is="tableType"
		v-if="tableType"
		v-bind="$attrs"
		v-model="loadedDrilldown.modelValue"
		:class="tableClasses"
		:data-vdt-id="tableId"
		:density="loadedDrilldown.density"
		:expand-on-click="loadedDrilldown.expandOnClick"
		:expanded="loadedDrilldown.expanded"
		:fixed-header="loadedDrilldown.fixedHeader"
		:group-by="loadedDrilldown.groupBy"
		:headers="loadedDrilldown.headers"
		:height="loadedDrilldown.height"
		:hide-no-data="hidingNoData"
		:hover="loadedDrilldown.hover"
		:item-selectable="loadedDrilldown.itemSelectable"
		:item-value="loadedDrilldown.itemValue"
		:items="loadedDrilldown.items"
		:items-length="loadedDrilldown.itemsLength"
		:items-per-page="loadedDrilldown.itemsPerPage"
		:items-per-page-options="loadedDrilldown.itemsPerPageOptions"
		:loading="(!loadedDrilldown.loaderType || slots.loading) && loadedDrilldown.loading"
		:multi-sort="loadedDrilldown.multiSort"
		:must-sort="loadedDrilldown.mustSort"
		:no-data-text="loadedDrilldown.noDataText"
		:page="loadedDrilldown.page"
		:return-object="loadedDrilldown.returnObject"
		:search="levelSearch"
		:select-strategy="loadedDrilldown.selectStrategy"
		:show-expand="loadedDrilldown.showExpand"
		:sort-by="currentSortBy"
		:style="tableStyles"
		@update:items-per-page="updateItemsPerPage"
		@update:model-value="updateModelValue"
		@update:page="updatePage"
		@update:sort-by="updateSortBy"
	>

		<!-- ================================================== Top Slot -->
		<template #[`top`]="props">
			<TopSlot
				:key="level"
				:items="loadedDrilldown.items"
				:level="loadedDrilldown.level"
				:loading="loadedDrilldown.loading"
				:search-container-cols="loadedDrilldown.searchContainerCols"
				:search-events="loadedDrilldown.searchEvents"
				:search-props="loadedDrilldown.searchProps"
				:show-search="loadedDrilldown.showSearch ?? false"
				:slot-props="props"
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
		<template #[`headers`]="props">
			<HeadersSlot
				:key="level"
				:colors="loadedDrilldown.colors"
				:column-widths="loadedDrilldown.columnWidths"
				:density="loadedDrilldown.density"
				:items="loadedDrilldown.items"
				:level="level"
				:loader-props="loadedDrilldown.loaderProps"
				:loader-settings="{
					colspan: props.columns.length,
					loaderType: loadedDrilldown.loaderType,
					loading: loadedDrilldown.loading,
					loadingText: loadingText,
				}"
				:match-column-widths="loadedDrilldown.matchColumnWidths"
				:select-strategy="loadedDrilldown.selectStrategy"
				:show-select="loadedDrilldown.showSelect"
				:slot-props="{ ...props }"
				:sort-asc-icon="loadedDrilldown.sortAscIcon"
				:sort-by="loadedDrilldown.sortBy"
				:table-model-value="loadedDrilldown.modelValue"
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
			#[`loader`]
		>
			<slot name="loader" />
		</template>

		<template
			v-if="slots.loading"
			#[`loading`]
		>
			<slot name="loading" />
		</template>


		<!-- ================================================== Thead Slot -->
		<template
			v-if="slots.thead"
			#[`thead`]="props"
		>
			<slot
				name="thead"
				v-bind="{
					...props,
					...{
						columnWidths: loadedDrilldown.columnWidths,
						items: loadedDrilldown.items,
						loaderSettings: {
							colspan: props.columns.length,
							loaderType: loadedDrilldown.loaderType,
							loading: loadedDrilldown.loading,
							loadingText: loadingText,
						},
						matchColumnWidths: loadedDrilldown.matchColumnWidths,
						selectStrategy: loadedDrilldown.selectStrategy,
						sortBy: loadedDrilldown.sortBy,
					}
				}"
			/>
		</template>


		<!-- ================================================== Body Slot -->
		<template
			v-if="slots.body"
			#[`body`]="props"
		>
			<slot
				name="body"
				v-bind="{ ...props }"
			/>
		</template>


		<!-- ================================================== Group Header Slot -->
		<template
			v-if="slots['group-header']"
			#[`group-header`]="props"
		>
			<slot
				name="group-header"
				v-bind="{ ...props }"
			/>
		</template>



		<!-- ================================================== tbody Slot -->
		<template
			v-if="slots.tbody"
			#[`tbody`]="props"
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
		<template #[`item`]="props">
			<ItemSlot
				:key="level"
				:density="loadedDrilldown.density"
				:expand-on-click="loadedDrilldown.expandOnClick"
				:group-by="loadedDrilldown.groupBy"
				:item-selectable="loadedDrilldown.itemSelectable"
				:items="loadedDrilldown.items"
				:level="loadedDrilldown.level"
				:levels="loadedDrilldown.levels"
				:show-expand="loadedDrilldown.showExpand"
				:show-select="loadedDrilldown.showSelect"
				:slot-props="{ level, ...props }"
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
		<template #expanded-row="{ columns, item, internalItem }">
			<tr :class="showLoadingDrilldownTable(item[itemChildrenKey]?.loading) ? '' : 'd-none'">
				<td
					class="px-0 ma-0"
					:colspan="columns.length"
					style="vertical-align: top;"
				>
					<VDrilldownTable
						:key="internalItem.key"
						:column-widths="loadedDrilldown.columnWidths"
						:density="loadedDrilldown.density"
						:drilldown="loadedDrilldown"
						:headers="item[itemChildrenKey]?.headers"
						:is-drilldown="true"
						:item="item"
						:items="item[itemChildrenKey]?.items"
						:items-length="item[itemChildrenKey]?.itemsLength"
						:items-per-page="item[itemChildrenKey]?.itemsPerPage"
						:level="level + 1"
						:levels="loadedDrilldown.levels"
						:loaderProps="item[itemChildrenKey]?.loaderProps"
						:loaderType="item[itemChildrenKey]?.loaderType"
						:loading="item[itemChildrenKey]?.loading"
						:loadingText="loadingText"
						:match-column-widths="loadedDrilldown.matchColumnWidths"
						:multi-sort="item[itemChildrenKey]?.multiSort"
						:no-data-text="loadedDrilldown.noDataText"
						:server="item[itemChildrenKey]?.server"
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
			#[`tfoot`]="props"
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
				:items="loadedDrilldown.items"
				:level="loadedDrilldown.level"
				:select-strategy="loadedDrilldown.selectStrategy"
				:show-select="loadedDrilldown.showSelect"
				:slot-props="{ ...props }"
				:table-model-value="loadedDrilldown.modelValue"
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
			#[`bottom`]="props"
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
import {
	useGetHeaderColumnWidths,
	useSetLoadedDrilldown,
} from './composables/loadedDrilldown';
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
const attrs = useAttrs();

const tableType = shallowRef<TableType>(null);


// -------------------------------------------------- Mounted Hooks //
/**
 * ? This is needed to make sure the drilldown is remounted on sortBy change
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
const tableId = ref<string>(attrs['data-vdt-id'] as string ?? `v-drilldown-table-${Date.now()}`);
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
	if (!props.loading) {
		setLoadedDrilldown();
	}
}, { deep: true });


watch(() => props.loading, () => {
	if (props.loading) {
		loadedDrilldown.loading = props.loading;
		return false;
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
		fixedHeader: loadedDrilldown.fixedHeader,
		isDrilldown: props.isDrilldown,
		isHover: loadedDrilldown.hover,
		isServerSide,
		level: loadedDrilldown.level,
		separator: loadedDrilldown.separator,
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
			item: props.item,
			level: props.level,
			levels: props.levels,
			loadedDrilldown,
			matchColumnWidths: props.matchColumnWidths,
		});
		return;
	}

	loadedDrilldown = useMergeDeep(loadedDrilldown, props) as Props;

	if (props.matchColumnWidths && loadedDrilldown?.columnWidths?.length === 0) {
		loadedDrilldown.columnWidths = useGetHeaderColumnWidths({ tableId });
	}
}

// -------------------------------------------------- Emit Events //
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
const searchDebounce = {
	debounce: loadedDrilldown.searchDebounce as number,
	maxWait: loadedDrilldown.searchMaxWait as number,
};

// ? Using top or top.left slot //
watchDebounced(
	() => props.search,
	() => {
		searchUpdated();
	},
	searchDebounce,
);

// ? Not using top or top.left slot //
watchDebounced(
	levelSearch,
	() => {
		if (!slots['top'] && !slots['top.left']) {
			searchUpdated();
		}
	},
	searchDebounce,
);

// Search - Updated //
function searchUpdated() {
	if (!slots['top'] && !slots['top.left']) {
		loadedDrilldown.search = levelSearch.value;
	}

	if (slots['top'] || slots['top.left']) {
		levelSearch.value = props.search || '';
	}

	const options = updatedOptions(loadedDrilldown);
	const drilldown = { ...props, ...options, ...{ search: levelSearch.value } };
	const data = { drilldown, search: levelSearch.value };

	optionsBus.emit(data);
	emit('update:search', data);;
}

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
