<!-- eslint-disable @typescript-eslint/no-unused-vars -->

<template>
	<v-container>
		<v-row class="row my-4">
			<v-col cols="12">
				<VDrilldownTable
					:colors="tableSettings.colors"
					:debounce-Delay="tableSettings.debounceDelay"
					:density="tableSettings.density"
					:drilldown-key="tableSettings.drilldownKey"
					:elevation="tableSettings.elevation"
					:footers="tableSettings.footers.users"
					:headers="tableSettings.headers.users"
					:hover="tableSettings.hover"
					:items="tableSettings.items"
					:items-length="tableSettings.itemsLength"
					:items-per-page="tableSettings.itemsPerPage"
					:levels="tableSettings.levels"
					:show-footer-row="tableSettings.showFooterRow"
					:show-search="tableSettings.showSearch"
					@drilldown="fetchData($event)"
				>
					<template #[`item.id`]="{ item }">
						<td>ID Slot: {{ item.raw.id }}</td>
					</template>

					<template #[`footer.prepend`]>
						<div class="me-2">
							[footer.prepend Slot]
						</div>
					</template>
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
					:fixed-header="tableSettings.fixedHeader"
					:headers="defaultTableHeaders"
					:height="tableSettings.height"
					:hover="tableSettings.hover"
					:item-title="tableSettings.itemTitle"
					:item-value="tableSettings.itemValue"
					:items="defaultTableItems"
					:items-per-page="tableSettings.itemsPerPage"
					:multi-sort="tableSettings.multiSort"
					:no-data-text="tableSettings.noDataText"
					:page="tableSettings.page"
					:search="tableSettings.search"
					:show-expand="tableSettings.showExpand"
					:show-select="tableSettings.showSelect"
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

<script setup lang="ts">
import { onMounted, ref } from 'vue';
onMounted(() => {
	fetchData();
	fetchComments();
});

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
		percentageChange: 25,
		percentageDirection: 'desc',
	},
	// customFilter: () => { }, 							// ? Needs Testing
	// customKeyFilter: [], 									// ? Needs Testing
	debounceDelay: 750,
	// dense: false,													// ? Missing in Docs, but is in code base
	density: 'comfortable',
	drilldownKey: 'id',
	elevation: 5,
	expandOnClick: true, 									// * Works
	// expanded: [], 													// ? Needs Testing
	// filterKeys: [], 												// ? Needs Testing
	// filterMode: '',												// ? Needs Testing
	fixedFooter: true, 										// ! Failed
	fixedHeader: true, 										// ! Failed
	// footerProps: {},												// ? In v2 Missing in v3
	// groupBy: [], 													// * Works, but this does not look very good by default
	footers: {
		comments: [
			{
				title: '',
				align: 'start',
				key: null,
				width: 100,
			},
			{
				title: 'Post ID',
				align: 'start',
				key: 'postId',
				width: 100,
			},
			{
				title: 'Comment ID',
				align: 'start',
				key: 'id',
				width: 150,
			},
			{
				title: 'Comment',
				align: 'start',
				key: 'name',
			},
			{
				key: 'data-table-expand',
				title: '',
			},
		],
		posts: [
			{
				title: 'User ID',
				align: 'start',
				key: 'userId',
				width: 100,
			},
			{
				title: 'Post ID',
				align: 'start',
				key: 'id',
				width: 250,
			},
			{
				title: 'Post',
				align: 'start',
				key: 'title',
			},
			{
				key: 'data-table-expand',
				title: '',
			},
		],
		users: [
			{
				title: 'User ID',
				align: 'start',
				key: 'id',
				width: 350,
			},
			{
				title: 'Name',
				align: 'start',
				key: 'name',
			},
			{
				title: 'Email',
				align: 'start',
				key: 'email',
				renderCell() {
					return 'Total';
				},
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
				title: '',
				align: 'start',
				key: null,
				width: 100,
			},
			{
				title: 'Post ID',
				align: 'start',
				key: 'postId',
				width: 100,
			},
			{
				title: 'Comment ID',
				align: 'start',
				key: 'id',
				width: 150,
			},
			{
				title: 'Comment',
				align: 'start',
				key: 'name',
			},
			{
				key: 'data-table-expand',
				title: '',
			},
		],
		posts: [
			{
				title: 'User ID',
				align: 'start',
				key: 'userId',
				width: 100,
			},
			{
				title: 'Post ID',
				align: 'start',
				key: 'id',
				width: 250,
			},
			{
				title: 'Post',
				align: 'start',
				key: 'title',
			},
			{
				key: 'data-table-expand',
				title: '',
			},
		],
		users: [
			{
				title: 'User ID',
				align: 'start',
				key: 'id',
				width: 350,
			},
			{
				title: 'Name',
				align: 'start',
				key: 'name',
			},
			{
				title: 'Email',
				align: 'start',
				key: 'email',
				// renderFooter() {
				// 	return 'Total';
				// },
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
	hover: true, 													// * Works
	// itemChildren: 'children',							// ? Missing Docs
	// itemProps: 'props',										// ? Not sure what this does
	itemTitle: 'title',										// * Works, but is weird
	itemValue: 'id',											// * Works, but is weird
	items: [],
	itemsLength: 0,
	itemsPerPage: 10,											// * Works
	levels: 2,														// * Works - Custom Prop
	// loading: false,												// !  Failed - https://github.com/vuetifyjs/vuetify/issues/16811
	// loadingText: 'Loading...',							// !  Failed - https://github.com/vuetifyjs/vuetify/issues/16811
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
	showFooterRow: true,
	showSearch: false,
	showExpand: false,										// * Works
	showSelect: false,										// * Works
	sortBy: [],														// * Works
	// width: '100%',													// ! Failed
	// sortDesc: false,												// ? In v2 Missing in v3
});


function fetchData(drilldown = null) {
	const item = drilldown?.item?.raw ?? null;
	// tableSettings.value.loading = true;

	let url = 'https://jsonplaceholder.typicode.com/users';
	let user = null;
	let userId = null;
	let postId = null;

	if (drilldown?.level === 0) {
		userId = item.id;
		url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
	}

	if (drilldown?.level === 1) {
		postId = item.id;
		userId = item.userId;
		url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
	}

	fetch(url)
		.then(response => response.json())
		.then(json => {
			// console.log('fetch response', json);
			tableSettings.value.itemsLength = json.length;


			if (!drilldown) {
				tableSettings.value.items = json;
				// tableSettings.value.loading = false;
				return;
			}

			user = tableSettings.value.items.find((a) => a.id === userId);

			if (drilldown?.level === 0) {
				user.children = {};

				user.children = {

					drilldownKey: 'id',
					headers: [...tableSettings.value.headers.posts],
					footers: [...tableSettings.value.footers.posts],
					items: [...json],
					level: 1,
				};
			}

			if (drilldown?.level === 1) {
				const post = user.children.items.find((item) => item.id === postId);

				post.children = {};
				post.children = {
					drilldownKey: 'id',
					headers: [...tableSettings.value.headers.comments],
					footers: [...tableSettings.value.footers.comments],
					items: [...json],
					level: 2,
				};
			}
		});
}

// -------------------------------------------------- Default VDataTable //
const defaultTableHeaders = ref([
	{
		title: 'Post ID',
		align: 'start',
		key: 'postId',
		width: 125,
	},
	{
		title: 'Comment ID',
		align: 'start',
		key: 'id',
		width: 150,
	},
	{
		title: 'Comment',
		align: 'start',
		key: 'name',
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
</script>

<style lang="scss">
</style>
