<!-- eslint-disable @typescript-eslint/no-unused-vars -->

<template>
	<v-container>
		<v-row class="row my-4">
			<v-col cols="12">
				<VDrilldownTable
					:colors="tableSettings.colors"
					:density="tableSettings.density"
					:drilldown-key="tableSettings.drilldownKey"
					:elevation="tableSettings.elevation"
					:expand-on-click="tableSettings.expandOnClick"
					:footers="footers.users"
					:headers="headers.users"
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
					:page="tableSettings.page"
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
					@update:sort-by="updatedSortBy"
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


					<!-- <template #[`header.sortIcon`]>
						<fa-icon icon="fa-solid fa-arrow-up"></fa-icon>
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

					<!-- <template #[`item.data-table-expand`]>
						<fa-icon icon="fa-solid fa-chevron-down"></fa-icon>
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

					<template #tfoot>
						<tr>
							<td
								v-for="item in Object.keys(defaultTableHeaders).length"
								:key="item"
							>
								{{ item }}</td>
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

const footers = {
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
};

const headers = {
	comments: [
		{
			align: 'start',
			key: 'id',
			title: 'Comment ID',
		},
		{
			align: 'start',
			key: 'postId',
			title: 'Post ID',
		},
		{
			align: 'start',
			key: 'name',
			title: 'Name',
		},
		{
			align: 'start',
			key: 'email',
			title: 'Email',
		},
		{
			align: 'start',
			key: 'body',
			title: 'Body',
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
			sortable: false,
			title: 'Name',
		},
		{
			align: 'start',
			key: 'email',
			sortable: false,
			title: 'Email',
		},
		{
			key: 'data-table-expand',
			title: '',
		},
	],
};

const tableSettings = ref({});

const tableDefaults = {
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
			// bg: '',
			circular: 'primary',
			color: 'primary',
			linear: 'surface-variant',
			text: 'surface-variant',
		},
		percentageChange: 25,
		percentageDirection: 'desc',
	},
	density: 'compact',								// * Works - Moved to default settings
	drilldownKey: 'id',										// * Works
	elevation: 5,													// * Works
	expandOnClick: false, 								// * Works
	fixedFooter: true, 										// ! Failed
	fixedHeader: true, 										// ! Failed
	footers: [],
	headers: [],
	height: 'auto',												// * Works
	itemChildrenKey: 'child',
	itemTitle: 'title',										// * Works, but is weird
	itemValue: 'id',											// * Works, but is weird
	items: [],
	itemsLength: 0,												// ? Needs Testing
	itemsPerPage: 10,											// * Works
	levels: 3,														// * Works - Custom Prop
	loaderType: [
		'linear',
		// 'circular',
		'text',
		// 'skelton',
	],
	loading: false,
	loadingText: '',
	multiSort: false,
	mustSort: false,
	// noDataText: 'No droids here',
	page: 1,
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
	showExpand: false,
	showFooterRow: true,
	showSearch: false,
	showSelect: false,
	skeltonType: 'heading@1',
	sortBy: [],
};

tableSettings.value = {
	...tableDefaults,
	...tableSettings.value,
};


function fetchData(drilldown = null) {
	const item = drilldown?.item?.raw ?? null;
	console.log({ drilldown });

	let url = 'https://jsonplaceholder.typicode.com/users';
	let user = null;
	let post = null;
	let userId = null;
	let postId = null;

	if (typeof drilldown?.level === 'undefined') {
		tableSettings.value.loading = true;
	}

	if (drilldown?.level === 1) {
		userId = item.id;
		url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
		user = tableSettings.value.items.find((a) => a.id === userId);

		tableSettings.value = {
			...tableSettings.value,
			...drilldown,
		};

		user.child = {};
		user.child = {
			...tableDefaults,
			drilldownKey: 'id',
			footers: footers.posts,
			headers: headers.posts,
			level: 2,
			loading: true,
		};
	}

	if (drilldown?.level === 2) {
		postId = item.id;
		userId = item.userId;
		user = tableSettings.value.items.find((a) => a.id === userId);
		post = user.child.items.find((item) => item.id === postId);

		user.child = { ...user.child, drilldown };

		post.child = {};
		post.child = {
			...tableDefaults,
			drilldownKey: 'id',
			footers: footers.comments,
			headers: headers.comments,
			level: 3,
			loading: true,
		};

		url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
	}


	fetch(url)
		.then(response => response.json())
		.then(json => {
			// tableSettings.value.itemsLength = json.length;

			setTimeout(() => {
				// debugger;
				if (!drilldown) {
					tableSettings.value.items = json;
					// tableSettings.value.items = [];
					tableSettings.value.loading = false;
					return;
				}

				user = tableSettings.value.items.find((a) => a.id === userId);

				if (drilldown?.level === 1) {
					user.child.items = [...json];
					user.child.loading = false;
					return;
				}

				if (drilldown?.level === 2) {
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
		key: 'id',
		title: 'Comment ID',
	},
	{
		align: 'start',
		key: 'postId',
		title: 'Post ID',
	},
	{
		align: 'start',
		key: 'name',
		title: 'Name',
	},
	{
		align: 'start',
		key: 'email',
		title: 'Email',
	},
	{
		align: 'start',
		key: 'body',
		title: 'Body',
	},
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
	// console.log('expandedEvent', event);
}

function updatedModelValue(event) {
	// do something...
	// console.log('updatedModelValue', event);
}

function updatedSortBy(event) {
	// console.log('updatedSortBy', event);
	// tableSettings.value.sortBy = event;
}

function rowClickEvent(event) {
	// do something...
	// console.log('rowClickEvent', event);
}
</script>

<style lang="scss">
</style>
