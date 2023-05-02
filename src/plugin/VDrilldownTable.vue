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
		:hover="loadedDrilldown.hover"
		:item-title="loadedDrilldown.itemTitle"
		:item-value="loadedDrilldown.itemValue"
		:items="loadedDrilldown.items"
		:items-length="loadedDrilldown.itemsLength"
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
		:sort-by="loadedDrilldown.sortBy"
		:style="tableStyles"
		@update:items-per-page="updateItemsPerPage"
		@update:model-value="updateModelValue"
		@update:options="updateOptions"
		@update:sort-by="updateSortBy"
	>
		<!-- ================================================== Top Slot -->
		<template #top>
			<TopSlot
				:loadedDrilldown="loadedDrilldown"
				@update:search="levelSearch = $event"
			>
				<!-- ! This does not pass rollup bundle -->
				<template
					v-for="(_, slot) in $slots"
					v-slot:[slot]="scope"
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
				:items="loadedDrilldown.items"
				:loadedDrilldown="loadedDrilldown"
				:slotProps="{ allRowsSelected, ...props }"
				@click:selectAll="emitAllSelectedEvent($event)"
			>
				<!-- ! This does not pass rollup bundle -->
				<template
					v-for="(_, slot) in $slots"
					v-slot:[slot]="scope"
				>
					<slot
						:name="slot"
						v-bind="{ ...scope }"
					/>
				</template>
			</HeadersSlot>
		</template>


		<!-- ================================================== Row Item Slot -->
		<template #item="props">
			<ItemSlot
				:items="loadedDrilldown.items"
				:loadedDrilldown="loadedDrilldown"
				:slotProps="{ allRowsSelected, level, ...props }"
				@click:row:checkbox="emitClickRowCheckbox($event)"
				@update:expanded="emitDrilldownEvent($event)"
			>
				<!-- ! This does not pass rollup bundle -->
				<template
					v-for="(_, slot) in $slots"
					v-slot:[slot]="scope"
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
					class="pa-0"
					:colspan="columns.length"
				>
					<!-- <div
						v-if="item.raw[itemChildrenKey].loading"
						class="text-center py-10"
					>
						<v-progress-circular
							color="primary"
							indeterminate
						></v-progress-circular> -->

					<!-- <v-skeleton-loader type="table-thead"></v-skeleton-loader> -->
					<!-- </div> -->
					<!-- <v-lazy
						:min-height="200"
						:options="{ 'threshold': 0.5 }"
						transition="fade-transition"
					> -->
					<VDrilldownTable
						:class="item.raw[itemChildrenKey].loading ? 'd-none' : ''"
						:colors="loadedDrilldown.colors"
						:drilldown="loadedDrilldown"
						:headers="item.raw[itemChildrenKey].headers"
						:is-drilldown="true"
						:item="item"
						:level="level + 1"
						:levels="loadedDrilldown.levels"
						:loading="loadedDrilldown.loading"
						:no-data-text="loadedDrilldown.noDataText"
						:parent-ref="parentTableRef"
						@update:expanded="emitDrilldownEvent($event)"
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

						<!-- ! This does not pass rollup bundle -->
						<!-- <template
								v-for="slot in Object.keys(slots)"
								v-slot:[`${slot}`]="scope"
							>
								<slot
									:name="slot"
									v-bind="scope"
								></slot>
							</template> -->
					</VDrilldownTable>
					<!-- </v-lazy> -->
				</td>
			</tr>
		</template>


		<!-- ================================================== tfoot Slot -->
		<!-- // ! The tfoot slot is currently missing any `props` -->
		<template #tfoot>
			<TfootSlot :loadedDrilldown="loadedDrilldown" />
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
			<BottomSlot :loadedDrilldown="loadedDrilldown">
				<!-- ! This does not pass rollup bundle -->
				<template
					v-for="(_, slot) in $slots"
					v-slot:[slot]="scope"
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
import { componentName } from './utils/globals';
import { AllProps } from './utils/props';
import { useGetLevelColors } from './composables/levelColors';
import {
	// useDrilldownDebounce,
	useMergeDeep,
} from './composables/helpers';
import {
	DataTableItem,
	DrilldownEvent,
	LoadedDrilldown,
} from '@/types';
import type { VDataTable } from "vuetify/labs/VDataTable";
import {
	BottomSlot,
	HeadersSlot,
	ItemSlot,
	TfootSlot,
	TopSlot,
} from './slots';


// -------------------------------------------------- Emits & Slots & Injects //
const emit = defineEmits([
	'click:row:checkbox',
	'update:expanded',
	'drilldown',
]);

// -------------------------------------------------- Props //
const props = defineProps({ ...AllProps });


// -------------------------------------------------- Table Settings (WIP) //
// Custom Default Props/Options //
// const customOptions = {
// calculateWidths: true,
// footerRow: false,
// matchHeaderColumnWidths: true,
// parentTableRef: '',
// ref: 'drilldown',
// };

const loadedDrilldown = ref<LoadedDrilldown>({
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
			bg: 'primary',
			text: 'on-primary',
		},
		percentageChange: 25,
		percentageDirection: 'desc',
	},
	customFilter: undefined, 			// ? Needs Testing  ========= FIX
	customKeyFilter: undefined, 					// ? Needs Testing
	debounceDelay: 750,						// * Custom Prop
	density: 'comfortable',				// * Works
	drilldownKey: '',							// * Custom Prop
	elevation: 1, 								// * Custom Prop
	expandOnClick: false, 				// * Works
	expanded: [], 								// ? Needs Testing
	filterKeys: [], 							// ? Needs Testing
	filterMode: 'some',		// ? Needs Testing
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
	isDrilldown: false,
	itemChildren: 'children',			// ? Missing Docs
	itemChildrenKey: 'child',
	itemProps: 'props',						// ? Not sure what this does
	itemTitle: 'title',						// * Works, but is weird
	itemValue: 'id',							// * Works, but is weird
	items: [],										// * Works
	itemsLength: 0,
	itemsPerPage: 10,							// * Works
	level: 0,
	levels: 0,
	// ! Not working yet `loading` & `loadingText` in v-data-table: https://github.com/vuetifyjs/vuetify/issues/16811 //
	loading: false,
	// loadingText: 'Loading...',
	modelValue: [],								// ? Needs Testing
	multiSort: false,							// * Works
	mustSort: false,							// * Works
	noDataText: props.noDataText || '$vuetify.noDataText',	// * Works
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
	showExpand: false,							// * Works
	showSearch: false,						// * Custom Prop
	showSelect: false,						// * Works
	sortBy: [],										// * Works
	width: '100%',								// ! Failed
	// sortDesc: false,						// ? In v2 Missing in v3
});


// -------------------------------------------------- Data //
const allRowsSelected = ref<boolean>(false);
const parentTableRef = ref<string>('');
const levelSearch = ref<string>('');
const theme = useTheme();
const slots = useSlots();



// -------------------------------------------------- Watch //
// watch(props, useDrilldownDebounce(() => {
// 	if (props.level !== 0 || loadedDrilldown.value.level === 0) {
// 		setLoadedDrilldown();
// 	}
// }, props.debounceDelay, props.level === 0), { deep: true });

watch(props, () => {
	if (props.level !== 0 || loadedDrilldown.value.level === 0) {
		setLoadedDrilldown();
	}
});


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
	const elevation = loadedDrilldown.value.elevation;

	const classes = {
		[`${componentName}`]: true,
		[`${componentName}--level-${loadedDrilldown.value.level}`]: true,
		[`${componentName}--child`]: props.isDrilldown,
		[`elevation-${elevation}`]: parseInt(elevation as string) > 0,
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


// -------------------------------------------------- Methods #
function setLoadedDrilldown(): void {
	if (props.drilldown) {
		loadedDrilldown.value = useMergeDeep(loadedDrilldown.value, props.drilldown) as LoadedDrilldown;

		const drilldownItem = loadedDrilldown.value.items.find(<T, K extends keyof T>(item: T) => {
			const thisItem = item[loadedDrilldown.value.drilldownKey as K];
			const propsItem = props.item.raw[loadedDrilldown.value.drilldownKey];

			return thisItem === propsItem;
		}) as LoadedDrilldown;

		loadedDrilldown.value = useMergeDeep(
			loadedDrilldown.value,
			drilldownItem[loadedDrilldown.value.itemChildrenKey] as LoadedDrilldown,
		) as LoadedDrilldown;

		// Hide expand icon if this is the last drilldown level //
		if (props.levels === props.level) {
			loadedDrilldown.value.showExpand = false;
		}

		return;
	}

	loadedDrilldown.value = useMergeDeep(loadedDrilldown.value, props) as LoadedDrilldown;
}

// -------------------------------------------------- Emit Events //
function emitAllSelectedEvent(val): void {
	allRowsSelected.value = val;
}


function emitClickRowCheckbox(item: DataTableItem): void {
	emit('click:row:checkbox', item);
}


function emitDrilldownEvent(data: DrilldownEvent): void {
	// TODO: Remove drilldown emit event and use update:expanded instead
	// emit('drilldown', data);
	emit('update:expanded', data);
}


// ------------------------- Table Events //

// function clickedRow(e, item) {
// 	console.log('clickedRow', { e, item });
// }

// ? Probably more useful when using server side
function updateItemsPerPage(itemsCount: number) {
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
function updateSortBy(val: VDataTable['sortBy']) {
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
