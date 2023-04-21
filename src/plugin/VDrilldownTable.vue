<!-- eslint-disable vue/no-v-for-template-key -->
<!-- eslint-disable vue/no-v-model-argument -->
<template>
	<!-- <v-text-field v-model="loadedDrilldown.search"></v-text-field> -->

	<!-- v-model:expanded="loadedDrilldown.expanded" removed -->
	<v-data-table
		v-if="!loadedDrilldown.server"
		v-bind="$attrs"
		:class="tableClasses"
		:density="loadedDrilldown.density"
		:expand-on-click="loadedDrilldown.expandOnClick"
		:expanded="loadedDrilldown.expanded"
		:headers="loadedDrilldown.headers"
		:height="loadedDrilldown.height"
		:hover="loadedDrilldown.hover"
		:item-title="loadedDrilldown.itemTitle"
		:item-value="loadedDrilldown.itemValue"
		:items="loadedDrilldown.items"
		:items-per-page="loadedDrilldown.itemsPerPage"
		:loading="loadedDrilldown.loading"
		:loading-text="loadedDrilldown.loadingText"
		:multi-sort="loadedDrilldown.multiSort"
		:must-sort="loadedDrilldown.mustSort"
		:no-filter="loadedDrilldown.noFilter"
		:page="loadedDrilldown.page"
		:return-object="loadedDrilldown.returnObject"
		:search="levelSearch"
		:show-expand="loadedDrilldown.showExpand"
		:show-select="loadedDrilldown.showSelect"
		:sort-by="loadedDrilldown.sortBy"
		:style="tableStyles"
		@update:items-per-page="updateItemsPerPage"
		@update:model-value="updateModelValue"
		@update:options="updateOptions"
		@update:sort-by="updateSortBy"
	>

		<!-- ================================================== Top Slot -->
		<template #top>
			<slot
				v-if="$slots.top"
				name="top"
			/>

			<v-col
				v-else-if="loadedDrilldown.showSearch"
				lg="12"
			>
				<v-row>
					<slot
						v-if="$slots[`top.left`]"
						name="top.left"
					/>

					<v-col
						v-else-if="loadedDrilldown.showSearch"
						class="d-flex align-center justify-end"
						:class="searchFieldClasses"
					>
						<!-- =========================== Search -->
						<v-text-field
							v-if="loadedDrilldown.showSearch"
							v-model="levelSearch"
							class="mt-0 pt-0"
							:density="loadedDrilldown.searchProps.density"
							hide-details
							label="Search"
							single-line
							:variant="loadedDrilldown.searchProps.variant"
						></v-text-field>
					</v-col>

					<slot
						v-if="$slots[`top.right`]"
						name="top.right"
					/>
				</v-row>
			</v-col>
		</template>

		<!-- ================================================== Headers Slot -->
		<!-- ! The headers slot is currently missing the `props` -->
		<template #headers>
			<tr
				class="v-drilldown-table--header-row"
				:class="headerRowClasses"
			>
				<template
					v-for="column in loadedDrilldown.headers"
					:key="column"
				>
					<!-- Column TH Slot -->
					<slot
						v-if="$slots.header"
						:column="column"
						name="header"
					/>
					<!-- Column Dynamic Name Header Slot -->
					<slot
						v-else-if="$slots[`header.${column.key}`]"
						:column="column"
						:name="`header.${column.key}`"
					/>
					<!-- Column Render `data-table-expand` -->
					<th
						v-else-if="column.key === 'data-table-expand'"
						class="v-drilldown-table--header-row-th"
						:class="headerRowThClasses(column)"
						:style="headerRowThStyles(column, true)"
						v-html="renderCellHeader(column /* , index */)"
					></th>
					<!-- Column Render TH -->
					<th
						v-else
						class="v-drilldown-table--header-row-th"
						:class="headerRowThClasses(column)"
						:style="headerRowThStyles(column)"
						v-html="renderCellHeader(column /* , index */)"
					></th>
				</template>
			</tr>
		</template>

		<!-- ================================================== Row Item Slot -->
		<template #item="{ columns, index, isExpanded, item, toggleExpand }">
			<tr>
				<template
					v-for="column in columns"
					:key="column"
				>
					<!--  Expand Column -->
					<td v-if="column.key === 'data-table-expand' && loadedDrilldown.showExpand
						">
						<v-icon
							v-if="loadedDrilldown.level < loadedDrilldown.levels"
							class="v-drilldown-table--expand-icon"
							:class="!isExpanded(item) ? '' : 'rotate-180'"
							@click="drilldownEvent({
									columns,
									index,
									isExpanded,
									item,
									level,
									toggleExpand,
								})
								"
						>
							mdi-chevron-down
						</v-icon>

					</td>
					<!-- Item Slot -->
					<slot
						v-else-if="$slots.cell"
						:class="column.cellClass"
						:column="column"
						:index="index"
						:item="item"
						name="item"
						:value="item.raw[column.key]"
					/>
					<!-- Dynamic Name Item Slot -->
					<slot
						v-else-if="$slots[`item.${column.key}`]"
						:column="column"
						:index="index"
						:item="item"
						:name="`item.${column.key}`"
						:value="item.raw[column.key]"
					/>
					<!-- Render Cell Item -->
					<td
						v-else
						:class="column.cellClass"
						v-html="renderCellItem(item, column, index)"
					></td>
				</template>
			</tr>
		</template>

		<!-- ================================================== Data Table Expand Slot -->
		<!-- @update:expanded="updateExpanded" -->
		<template #[`item.data-table-expand`]="{
				columns,
				index,
				isExpanded,
				item,
				toggleExpand,
			}">
			b
			<v-icon
				v-if="loadedDrilldown.level < loadedDrilldown.levels"
				class="v-drilldown-table--expand-icon"
				:class="!isExpanded(item) ? 'rotate-180' : ''"
				@click="drilldownEvent({
						columns,
						index,
						isExpanded,
						item,
						level,
						toggleExpand,
					})
					"
			>
				mdi-chevron-down
			</v-icon>

		</template>

		<!-- ================================================== Expanded Row Slot -->
		<template #expanded-row="{ columns, item }">
			<tr>
				<td
					class="pa-0"
					:colspan="columns.length"
				>
					<VDrilldownTable
						:colors="loadedDrilldown.colors"
						:drilldown="loadedDrilldown"
						:is-drilldown="true"
						:item="item"
						:level="level + 1"
						:levels="loadedDrilldown.levels"
						:parent-ref="parentTableRef"
						@drilldown="drilldownEvent($event)"
					>
						<!-- Pass on all named slots -->
						<slot
							v-for="slot in Object.keys(slots)"
							:name="slot"
						></slot>

						<!-- Pass on all scoped slots -->
						<!-- ! This does not pass rollup bundle -->
						<template
							v-for="slot in Object.keys(slots)"
							#[slot]="scope"
						>
							<slot
								:name="slot"
								v-bind="scope"
							></slot>
						</template>

						<!-- ! This also does not pass rollup bundle -->
						<template
							v-for="slot in Object.keys(slots)"
							v-slot:[`${slot}`]="scope"
						>
							<slot
								:name="slot"
								v-bind="scope"
							></slot>
						</template>
					</VDrilldownTable>
				</td>
			</tr>
		</template>



		<!-- ================================================== Footer Prepend Slot -->
		<template #[`footer.prepend`]>
			<slot
				v-if="$slots[`footer.prepend`]"
				name="footer.prepend"
			/>
		</template>
	</v-data-table>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify';
import {
	CSSProperties,
	computed,
	// onBeforeMount,
	onMounted,
	ref,
	StyleValue,
	useSlots,
	watch,
} from 'vue';
import { AllProps } from './utils/props';
import { useGetLevelColors } from './composables/levelColors';
import {
	useConvertToUnit,
	useDrilldownDebounce,
	useRenderCellHeader,
	useRenderCellItem,
	useMergeDeep,
} from './composables/helpers';
import {
	DrilldownEvent,
	LoadedDrilldown,
	SortItem,
} from '@/types/types';



// -------------------------------------------------- Emits & Slots & Injects //
const emit = defineEmits(['drilldown',]);


// -------------------------------------------------- Props //
const props = defineProps({ ...AllProps });


// -------------------------------------------------- Table Settings (WIP) //
// Custom Default Props/Options //
const customOptions = {
	// calculateWidths: true,
	// className: '',
	// colors: {
	// 	body: {
	// 		base: '--v-theme-surface',
	// 		bg: '--v-theme-surface',
	// 		text: '--v-theme-on-surface',
	// 	},
	// 	default: {
	// 		base: 'primary',
	// 		bg: 'primary',
	// 		border: null,
	// 		text: 'on-primary',
	// 	},
	// 	footer: {
	// 		bg: '--v-theme-surface',
	// 		text: '--v-theme-on-surface',
	// 	},
	// 	header: {
	// 		bg: 'primary',
	// 		text: 'on-primary',
	// 	},
	// 	percentageChange: 25,
	// 	percentageDirection: 'desc',
	// },
	debounceDelay: 750,
	// drilldownKey: false,
	elevation: 1,										// * Works
	// expandIcon: 'plus-circle',
	// expandIconType: 'fas',
	// footerRow: false,
	// matchHeaderColumnWidths: true,
	// parentTableRef: '',
	// ref: 'drilldown',
	// searchProps: {
	// 	cols: {
	// 		lg: 3,
	// 		md: 6,
	// 		sm: 12,
	// 		xl: 3,
	// 		xs: 12,
	// 		xxl: 2,
	// 	},
	// 	density: 'compact',
	// 	variant: 'underlined',
	// },
	showSearch: false,
};

const loadedDrilldown = ref<LoadedDrilldown>({
	...customOptions,						// * Custom Props
	colors: {
		body: {
			base: '--v-theme-surface',
			bg: '--v-theme-surface',
			text: '--v-theme-on-surface',
		},
		default: {
			base: 'primary',
			bg: 'primary',
			border: null,
			text: 'on-primary',
		},
		footer: {
			bg: '--v-theme-surface',
			text: '--v-theme-on-surface',
		},
		header: {
			bg: 'orange',
			text: 'on-primary',
		},
		percentageChange: 25,
		percentageDirection: 'desc',
	},
	customFilter: () => { }, 			// ? Needs Testing
	customKeyFilter: [], 					// ? Needs Testing
	// dense: false,							// ? Missing in Docs, but is in code base
	density: 'compact',						// * Works - Missing in Docs
	expandOnClick: false, 				// * Works
	expanded: [], 								// ? Needs Testing
	// filterKeys: [], 							// ? Needs Testing
	filterMode: '',		// ? Needs Testing
	fixedFooter: true, 						// ! Failed
	fixedHeader: true, 						// ! Failed
	// footerProps: {},						// ? In v2 Missing in v3
	// groupBy: [], 							// * Works, but this does not look very good by default
	headers: [],									// * Works
	height: 'auto',								// * Works
	// hideDefaultFooter: false, 	// ? In v2 Missing in v3
	// hideDefaultHeader: true,	 	// ? In v2 Missing in v3
	hideNoData: false, 						// !  Failed
	// hover: false, 								// * Works - Is Prop
	itemChildren: 'children',			// ? Missing Docs
	itemProps: 'props',						// ? Not sure what this does
	itemTitle: 'title',						// * Works, but is weird
	itemValue: 'id',							// * Works, but is weird
	items: [],										// * Works
	itemsPerPage: 10,							// * Works
	// ! Not working yet `loading` & `loadingText`: https://github.com/vuetifyjs/vuetify/issues/16811 //
	loading: false,
	loadingText: 'Loading...',
	modelValue: [],								// ? Needs Testing
	multiSort: false,							// * Works
	mustSort: false,							// * Works
	// noDataText: '$vuetify.noDataText',	// ! Failed. Needs more tested as I think it does work, but not as expected
	noFilter: false,							// * Works, but not sure why you would use this.
	page: 1, 											// * Works
	// pageCount: 0,							// ? In v2 Missing in v3
	returnObject: true,						// ? Missing Docs
	// search: '',								// ! Works
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
	showExpand: true,							// * Works
	showSelect: false,						// * Works
	sortBy: [],										// * Works
	width: '100%',								// ! Failed
	// sortDesc: false,						// ? In v2 Missing in v3
});


// -------------------------------------------------- Data //
const componentName = 'v-drilldown-table';
const parentTableRef = ref<string>('');
const levelSearch = ref<string>('');
const theme = useTheme();
const slots = useSlots();


// -------------------------------------------------- Watch //
watch(props, useDrilldownDebounce(() => {
	if (props.level !== 0 || typeof loadedDrilldown.value.level === 'undefined') {
		setLoadedDrilldown();
	}
}, props.debounceDelay, props.level === 0), { deep: true });


// -------------------------------------------------- Mounts #
// onBeforeMount(() => {
// 	// ... maybe do something here
// });

onMounted(() => {
	// ... maybe do something here
	// console.log({ slots });
});


// -------------------------------------------------- Table #
const tableClasses = computed<object>(() => {
	const baseClass = componentName;
	const elevation = loadedDrilldown.value.elevation as string;

	const classes = {
		[baseClass]: true,
		[`${baseClass}--level-${loadedDrilldown.value.level}`]: true,
		[`${baseClass}--child`]: props.isDrilldown,
		[`elevation-${elevation}`]: parseInt(elevation) > 0,
		'pb-2': true,
	};

	return classes;
});

const tableStyles = computed<StyleValue>(() => {
	const baseColors = useGetLevelColors(loadedDrilldown.value, theme, 'default');

	const styles: { borderBottom: string; } = {
		borderBottom: 'none',
	};

	if (baseColors.border) {
		styles.borderBottom = `1px solid ${baseColors.border}`;
	}

	return styles;
});


// -------------------------------------------------- Top #
const searchFieldClasses = computed<object>(() => {
	const searchCols = loadedDrilldown.value.searchProps.cols;

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

// -------------------------------------------------- Header #
const headerRowClasses = computed<string>(() => {
	const classes = `${componentName}--header-row-${loadedDrilldown.value.level}`;

	return classes;
});

// TODO: Add column type
const headerRowThClasses = (column): object => {
	const classes = {
		[`${componentName}--header-row-th-${loadedDrilldown.value.level}`]: true,
		[column.cellClass]: column.cellClass,
	};

	return classes;
};

const headerRowThStyles = (column: { width?: string | number; }, dataTableExpand = false): CSSProperties => {
	const headerColors = useGetLevelColors(loadedDrilldown.value, theme, 'header');

	const styles = {
		backgroundColor: headerColors.bg,
		color: headerColors.text,
		minWidth: column.width ? useConvertToUnit(column.width) : 'auto',
		width: column.width ? useConvertToUnit(column.width) : 'auto',
	};

	if (dataTableExpand && !column.width) {
		styles.width = '48px';
		styles.minWidth = '48px';
	}

	return styles;
};


// -------------------------------------------------- Footer TBD #


// -------------------------------------------------- Methods #
function setLoadedDrilldown(): void {
	// console.log('----------------------------- setLoadedDrilldown', props.level);

	if (props.drilldown) {
		loadedDrilldown.value = useMergeDeep(loadedDrilldown.value, props.drilldown);

		const drilldownItem = loadedDrilldown.value.items.find((item) => {
			return item[loadedDrilldown.value.drilldownKey] === props.item.raw[loadedDrilldown.value.drilldownKey];
		});

		// console.log({ drilldownItem });

		loadedDrilldown.value = useMergeDeep(
			loadedDrilldown.value,
			drilldownItem[loadedDrilldown.value.itemChildrenKey],
		);

		// Hide expand icon if this is the last drilldown level //
		if (props.levels === props.level) {
			loadedDrilldown.value.showExpand = false;
		}

		// console.log('loadedDrilldown', loadedDrilldown.value);

		return;
	}

	loadedDrilldown.value = useMergeDeep(loadedDrilldown.value, props);
}

function renderCellHeader(column, /* , index */): unknown {
	// TODO: This needs to be updated once Vuetify fixes the header slot //
	const tempIndex = 0;
	return useRenderCellHeader(loadedDrilldown.value, column, tempIndex);
}

function renderCellItem(item, column, index): unknown {
	return useRenderCellItem(item.raw, column, index);
}


// ------------------------- Table Events //
function drilldownEvent(data: DrilldownEvent): void {
	// console.log('1 ---------------------------------------- drilldownEvent', { data });

	const { item, level, toggleExpand } = data as DrilldownEvent;

	// Sets the expanded state of the item on current table //
	if (level === props.level) {
		toggleExpand(item);
	}

	emit('drilldown', data);
}

// function clickedRow(e, item) {
// 	console.log('clickedRow', { e, item });
// }

// ? Probably more useful when using server side
function updateItemsPerPage(itemsCount) {
	loadedDrilldown.value.itemsPerPage = itemsCount;

	return true;
}

// ! Do not use //
// function updateExpanded(rowsExpanded, foo, bar, baz) {
// 	console.log(rowsExpanded, foo, bar, baz);
// 	loadedDrilldown.value.expanded = rowsExpanded;
// 	// emit('drilldown', rowsExpanded);

// 	// console.log('updateExpanded', rowsExpanded);
// 	// console.log(loadedDrilldown.value.expanded);
// }

// ! Not sure what this does or if it works
function updateModelValue() {
	// console.log('updateModelValue', val);
}

function updateOptions() {
	// console.log('updateOptions', val);
}

// function updatePage(val) {
// 	// console.log('updatePage', val);
// }

// ? Probably more useful when using server side
function updateSortBy(val: SortItem[]) {
	loadedDrilldown.value.sortBy = val;
}
</script>

<style lang="scss">
.v-drilldown-table {
	&--expand-icon {
		transform: rotate(0deg);
		transition: all 0.3s ease-in-out;

		&.rotate-180 {
			transform: rotate(180deg);
		}
	}
}
</style>
