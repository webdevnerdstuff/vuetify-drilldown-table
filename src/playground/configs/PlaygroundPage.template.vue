<!-- eslint-disable @typescript-eslint/no-unused-vars -->

<template>
	<v-container>
		<v-row class="row my-4">
			<v-col cols="12">
				<VDrilldownTable
					:colors="tableSettings.colors"
					:debounce-delay="tableSettings.debounceDelay"
					:density="tableSettings.density"
					:drilldown-key="tableSettings.drilldownKey"
					:elevation="tableSettings.elevation"
					:expand-on-click="tableSettings.expandOnClick"
					:footers="tableSettings.footers.users"
					:headers="tableSettings.headers.users"
					:hover="tableSettings.hover"
					:item-children-key="tableSettings.itemChildrenKey"
					:items="tableSettings.items"
					:items-length="tableSettings.itemsLength"
					:items-per-page="tableSettings.itemsPerPage"
					:levels="tableSettings.levels"
					:loader-type="tableSettings.loaderType"
					:loading="tableSettings.loading"
					:loading-text="tableSettings.loadingText"
					:multi-sort="tableSettings.multiSort"
					:no-data-text="tableSettings.noDataText"
					:show-expand="tableSettings.showExpand"
					:show-footer-row="tableSettings.showFooterRow"
					:show-search="tableSettings.showSearch"
					:show-select="tableSettings.showSelect"
					:skelton-type="tableSettings.skeltonType"
					:sort-by="tableSettings.sortBy"
					@click:row="rowClickEvent($event)"
					@update:drilldown="fetchData($event)"
					@update:expanded="expandedEvent($event)"
					@update:model-value="updatedModelValue($event)"
				>
					<!-- ! This is not working since adding the TableLoader component -->
					<!-- <template #loading>
						[loading Slot]
					</template> -->

					<!-- <template #no-data>
						[no-data Slot]
					</template> -->

					<!-- <template #top>
						[top Slot]
					</template> -->

					<!-- <template #[`top.right`]>
						[top.right Slot]
					</template> -->

					<!-- <template #[`header.data-table-select`]>
						<div class="d-flex justify-center">
							<v-icon>mdi mdi-vuetify</v-icon>
						</div>
					</template> -->

					<!--
					<template #[`header.sortIcon`]>
						<v-icon>mdi mdi-vuetify</v-icon>
					</template> -->

					<!-- <template #[`header.id`]="{ column }">
						[header cell Slot]: slot {{ column.title }}
					</template> -->

					<!-- <template #body>
						[body Slot]
					</template> -->

					<!-- <template #tbody="{ props }">
						<tbody>
							<tr>
								<td :colspan="Object.keys(tableSettings.headers.users).length">
									[tbody Slot] {{ props }}
								</td>
							</tr>
						</tbody>
					</template> -->

					<!-- <template #[`item.id`]="{ item }">
						<td>[item cell Slot]: {{ item.raw.id }}</td>
					</template> -->

					<!-- <template #[`item.data-table-select`]>
						<v-icon>mdi mdi-vuetify</v-icon>
					</template> -->

					<!-- <template #[`tfoot.name`]>
						<td>
							[tfoot Slot]
						</td>
					</template> -->

					<!-- <template #bottom>
						[bottom Slot]
					</template> -->


					<!-- <template #[`footer.prepend`]>
						<div class="me-2">
							[footer.prepend Slot]
						</div>
					</template> -->

					<!-- <template #[`item.data-table-expand`]>
						<v-icon>mdi mdi-vuetify</v-icon>
					</template> -->
				</VDrilldownTable>
			</v-col>
		</v-row>

		<v-row class="mt-15">
			<v-col cols="12">
				<h2 class="pb-0">v-data-table</h2>
			</v-col>
			<v-col cols="12">
				<v-data-table
					:density="tableSettings.density"
					:expand-on-click="tableSettings.expandOnClick"
					:fixed-header="true"
					:headers="defaultTableHeaders"
					:height="tableSettings.height"
					:hover="tableSettings.hover"
					:item-title="tableSettings.itemTitle"
					:item-value="tableSettings.itemValue"
					:items="defaultTableItems"
					:items-length="Object.keys(defaultTableItems).length"
					:items-per-page="tableSettings.itemsPerPage"
					:loading="tableSettings.loading"
					:multi-sort="tableSettings.multiSort"
					:no-data-text="tableSettings.noDataText"
					:page="tableSettings.page"
					:search="tableSettings.search"
					:show-expand="tableSettings.showExpand"
					:show-select="tableSettings.showSelect"
					:width="tableSettings.width"
					@click:row="rowClickEvent($event)"
				>
					<template #expanded-row="{ columns }">
						<tr>
							<td
								class="pa-4"
								:colspan="columns.length"
							>
								Hello World
							</td>
						</tr>
					</template>
				</v-data-table>
			</v-col>
		</v-row>
	</v-container>
</template>

 <!-- <script setup lang="ts"> -->
<script setup>
import { onMounted, ref } from 'vue';

onMounted(() => {
	fetchData();
	fetchComments();
});

const fakeNetworkThrottlingTime = 2000;

const tableSettings = ref({
	colors: {
		body: {
			base: '--v-theme-surface',
			bg: '--v-theme-surface',
			text: '--v-theme-on-surface',
		},
		default: {
			base: 'primary',
			bg: 'primary',
			border: 'primary',
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
		loader: {
			bg: 'default',
			circular: 'primary',
			color: 'primary',
			linear: 'surface-variant',
			text: 'surface-variant',
		},
		percentageChange: 25,
		percentageDirection: 'desc',
	},
	// customFilter: () => { }, 							// ? Needs Testing
	// customKeyFilter: [], 									// ? Needs Testing
	debounceDelay: 750,										// * Works
	density: 'comfortable',								// * Works
	drilldownKey: 'id',										// * Works
	elevation: 5,													// * Works
	expandOnClick: false, 								// * Works
	// expanded: [], 													// ? Needs Testing
	// filterKeys: [], 												// ? Needs Testing
	// filterMode: '',												// ? Needs Testing
	fixedFooter: true, 										// ! Failed
	fixedHeader: true, 										// ! Failed
	// footerProps: {},												// ? In v2 Missing in v3
	// groupBy: [], 													// * Works, but this does not look very good by default
	// footers: {
	// 	comments: [],
	// 	posts: [],
	// 	users: [],
	// },
	footers: {
		comments: [
			{
				align: 'start',
				key: null,
				title: '',
				width: 100,
			},
			{
				align: 'start',
				key: 'postId',
				title: 'Post ID',
				width: 100,
			},
			{
				align: 'start',
				key: 'id',
				title: 'Comment ID',
				width: 150,
			},
			{
				align: 'start',
				key: 'name',
				title: 'Comment',
			},
			{
				key: 'data-table-expand',
				title: '',
			},
		],
		posts: [
			{
				align: 'start',
				key: 'userId',
				title: 'User ID',
				width: 100,
			},
			{
				align: 'start',
				key: 'id',
				title: 'Post ID',
				width: 250,
			},
			{
				align: 'start',
				key: 'title',
				title: 'Post',
			},
			{
				key: 'data-table-expand',
				title: '',
			},
		],
		users: [
			// {
			// 	key: 'data-table-select',
			// 	title: '',
			// },
			{
				align: 'start',
				key: 'id',
				title: 'User ID',
				width: 350,
			},
			{
				align: 'start',
				key: 'name',
				title: 'Name',
			},
			{
				align: 'start',
				key: 'email',
				renderCell() {
					return 'Total';
				},
				title: 'Email',
			},
			{
				key: 'data-table-expand',
				title: '',
			},
		],
	},
	headers: {
		comments: [
			{
				align: 'start',
				key: null,
				title: '',
				width: 110,
			},
			{
				align: 'start',
				key: 'postId',
				title: 'Post ID',
				width: 110,
			},
			{
				align: 'start',
				key: 'id',
				title: 'Comment ID',
				width: 150,
			},
			{
				align: 'start',
				key: 'name',
				title: 'Comment',
			},
			{
				key: 'data-table-expand',
				title: '',
			},
		],
		posts: [
			{
				align: 'start',
				key: 'userId',
				title: 'User ID',
				width: 110,
			},
			{
				align: 'start',
				key: 'id',
				title: 'Post ID',
				width: 260,
			},
			{
				align: 'start',
				key: 'title',
				title: 'Post',
			},
			{
				key: 'data-table-expand',
				title: '',
			},
		],
		users: [
			{
				align: 'start',
				key: 'id',
				title: 'User ID',
				width: 370,
			},
			{
				align: 'start',
				key: 'name',
				title: 'Name',
			},
			{
				align: 'start',
				key: 'email',
				sortable: false,
				// renderFooter() {
				// 	return 'Total';
				// },
				title: 'Email',
			},
			{
				key: 'data-table-expand',
				title: '',
			},
		],
	},
	height: 'auto',												// * Works
	// hideDefaultFooter: false, 							// ? In v2 Missing in v3
	// hideDefaultHeader: true,	 							// ? In v2 Missing in v3
	// hideNoData: false, 										// !  Failed
	hover: false, 													// * Works
	// itemChildren: 'children',							// ? Missing Docs
	// itemProps: 'props',										// ? Not sure what this does
	itemChildrenKey: 'child',
	itemTitle: 'title',										// * Works, but is weird
	itemValue: 'id',											// * Works, but is weird
	items: [],														// * Works
	itemsLength: 0,												// ? Needs Testing
	itemsPerPage: 10,											// * Works
	levels: 2,														// * Works - Custom Prop
	loaderType: [
		'linear',
		'circular',
		'text',
		'skelton',
	],
	// ! Built in prop fails - https://github.com/vuetifyjs/vuetify/issues/16811 //
	loading: false,												// * Custom Works,
	// ! Built in prop fails - https://github.com/vuetifyjs/vuetify/issues/16811 //
	loadingText: '',											// * Custom Works,
	// modelValue: [],												// ? Needs Testing
	multiSort: false,											// * Works
	mustSort: false,											// * Works
	noDataText: '$vuetify.noDataText',		// ! Failed - https://github.com/vuetifyjs/vuetify/issues/17168
	// noFilter: false,												// * Works, but not sure why you would use this.
	page: 1, 															// * Works
	// pageCount: 0,													// ? In v2 Missing in v3
	// returnObject: true,										// ? Missing Docs
	search: '',
	searchProps: { 												// ? VDrilldownTable Custom Prop
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
	// server: false, 												// ? Needs Testing. This requires v-data-table-server
	showExpand: false,										// * Works
	showFooterRow: true,
	showSearch: false,
	showSelect: false,										// * Works
	skeltonType: 'heading@1',							// * Works
	// sortBy: [{
	// 	order: 'asc',
	// 	key: 'id',
	// }],
	sortBy: [],														// * Works
	// width: '100%',													// ! Failed
});


function fetchData(drilldown = null) {
	const item = drilldown?.item?.raw ?? null;

	let url = 'https://jsonplaceholder.typicode.com/users';
	let user = null;
	let post = null;
	let userId = null;
	let postId = null;


	if (typeof drilldown?.level === 'undefined') {
		tableSettings.value.loading = true;
	}

	if (drilldown?.level === 0) {
		userId = item.id;
		url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
		user = tableSettings.value.items.find((a) => a.id === userId);

		user.child = {};
		user.child = {
			drilldownKey: 'id',
			footers: [...tableSettings.value.footers.posts],
			headers: [...tableSettings.value.headers.posts],
			items: [],
			level: 1,
			loading: true,
		};
	}

	if (drilldown?.level === 1) {
		postId = item.id;
		userId = item.userId;
		user = tableSettings.value.items.find((a) => a.id === userId);
		post = user.child.items.find((item) => item.id === postId);

		post.child = {};
		post.child = {
			drilldownKey: 'id',
			footers: [...tableSettings.value.footers.comments],
			headers: [...tableSettings.value.headers.comments],
			items: [],
			level: 2,
			loading: true,
		};

		url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
	}

	fetch(url)
		.then(response => response.json())
		.then(json => {
			tableSettings.value.itemsLength = json.length;

			setTimeout(() => {
				if (!drilldown) {
					tableSettings.value.items = json;
					// tableSettings.value.items = [];
					tableSettings.value.loading = false;
					return;
				}

				user = tableSettings.value.items.find((a) => a.id === userId);

				if (drilldown?.level === 0) {
					user.child.items = [...json];
					user.child.loading = false;
				}

				if (drilldown?.level === 1) {
					post.child.items = [...json];
					post.child.loading = false;
				}

			}, fakeNetworkThrottlingTime);
		});
}

// -------------------------------------------------- Default VDataTable //
const defaultTableHeaders = ref([
	{
		align: 'start',
		key: 'postId',
		sortable: false,
		title: 'Post ID',
		width: 125,
	},
	{
		align: 'start',
		key: 'id',
		sortable: false,
		title: 'Comment ID',
		width: 150,
	},
	{
		align: 'start',
		key: 'name',
		title: 'Comment',
	},
	// {
	// 	key: 'data-table-expand',
	// 	title: '',
	// },
]);

const defaultTableItems = ref([]);
// const emptyItemsTest = ref([]);


function fetchComments() {
	fetch('https://jsonplaceholder.typicode.com/comments')
		.then(response => response.json())
		.then(json => {
			defaultTableItems.value = json;
		});
}

function expandedEvent(event) {
	// do something...
	console.log('expandedEvent', event);
}

function updatedModelValue(event) {
	// do something...
	console.log('updatedModelValue', event);
}

function rowClickEvent(event) {
	// do something...
	console.log('rowClickEvent', event);
}
</script>

<style lang="scss">
</style>
