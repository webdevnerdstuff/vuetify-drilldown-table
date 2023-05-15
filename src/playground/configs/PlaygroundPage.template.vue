<!-- eslint-disable @typescript-eslint/no-unused-vars -->

<template>
	<v-container>
		<v-row class="row my-4">
			<v-col cols="12">
				<VDrilldownTable
					:color="tableSettings.color"
					:colors="tableSettings.colors"
					:density="tableSettings.density"
					:drilldown-key="tableSettings.drilldownKey"
					:elevation="tableSettings.elevation"
					:expand-on-click="tableSettings.expandOnClick"
					:first-icon="tableSettings.firstIcon"
					:footers="footers.users"
					:headers="headers.users"
					:hover="tableSettings.hover"
					:item-children-key="tableSettings.itemChildrenKey"
					:item-props="tableSettings.itemProps"
					:items="tableSettings.items"
					:items-length="tableSettings.itemsLength"
					:items-per-page="tableSettings.itemsPerPage"
					:items-per-page-options="tableSettings.itemsPerPageOptions"
					:items-per-page-text="tableSettings.itemsPerPageText"
					:last-icon="tableSettings.lastIcon"
					:last-page-label="tableSettings.lastPageLabel"
					:levels="tableSettings.levels"
					:loader-height="tableSettings.loaderHeight"
					:loader-type="tableSettings.loaderType"
					:loading="tableSettings.loading"
					:loading-text="tableSettings.loadingText"
					:multi-sort="tableSettings.multiSort"
					:next-icon="tableSettings.nextIcon"
					:next-page-label="tableSettings.nextPageLabel"
					:no-data-text="tableSettings.noDataText"
					:page="tableSettings.page"
					:page-text="tableSettings.pageText"
					:prev-icon="tableSettings.prevIcon"
					:prev-page-label="tableSettings.prevPageLabel"
					:server="isServerSide"
					:show-current-page="tableSettings.showCurrentPage"
					:show-expand="tableSettings.showExpand"
					:show-footer-row="tableSettings.showFooterRow"
					:show-search="tableSettings.showSearch"
					:show-select="tableSettings.showSelect"
					:skelton-type="tableSettings.skeltonType"
					:sort-by="tableSettings.sortBy"
					:tag="tableSettings.tag"
					:theme="tableSettings.theme"
					@click:row="rowClickEvent($event)"
					@update:drilldown="isServerSide ? fetchServerData($event) : fetchClientData($event)"
					@update:expanded="updateExpanded($event)"
					@update:itemsPerPage="updatedItemsPerPage"
					@update:model-value="updatedModelValue($event)"
					@update:page="updatedPage"
					@update:search="updatedSearch"
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

					<!-- <template
						v-if="isServerSide"
						#[`top.left`]
					>
						<v-col cols="4">
							<v-text-field
								v-model="tableSettings.search"
								class="mt-0 pt-0"
								density="compact"
								hide-details
								label="Search"
								single-line
								variant="outlined"
							></v-text-field>
						</v-col>
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
	</v-container>
</template>


<script setup>
import { onMounted, ref } from 'vue';
// import { watchDebounced } from '@vueuse/core';
import tableDefaults from './tableDefaults';

// Use this to switch between Client and Server Side Tables //
const isServerSide = ref(false);

const tableSettings = ref({ ...tableDefaults });

// Use this to mock the network throttling time //
const fakeNetworkThrottlingTime = ref(0);
const fakeNetworkThrottlingTime2 = ref(0);

const currentPage = ref(1);
const defaultSortBy = [
	{
		key: 'id',
		order: 'asc',
	}
];

onMounted(() => {
	// fetchComments();

	if (isServerSide.value) {
		fetchServerData();
		return;
	}

	fetchClientData();
});

// ? Use this if using the top slot //
// const query = computed(() => {
// 	return tableSettings.value.search;
// });

// watchDebounced(
// 	query,
// 	() => {
// 		fetchServerData();
// 	},
// 	{ debounce: 750, maxWait: 1000 },
// );

const headers = {
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
			sortable: false,
			title: '',
		},
	],
};

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


// -------------------------------------------------- Server Side Examples //
function fetchServerData(drilldown = null) {
	console.log({ drilldown });
	const item = drilldown?.item?.raw ?? null;

	let limit = tableSettings.value.itemsPerPage;
	let page = tableSettings.value.page;
	let post = null;
	let postId = null;
	let query = tableSettings.value.search;
	let sortBy = tableSettings.value.sortBy.length ? tableSettings.value.sortBy : defaultSortBy;
	let url = 'api/users';
	let user = null;
	let userId = null;


	if (typeof drilldown?.level === 'undefined') {
		tableSettings.value.loading = true;
	}

	// Get User Posts //
	if (drilldown?.level === 1) {
		userId = item.id;
		user = tableSettings.value.items.find((a) => a.id === userId);
		url = 'api/users/posts';

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

		limit = user.child.itemsPerPage;
		page = user.child.page;
		query = user.child.search;
		sortBy = user.child.sortBy.length ? user.child.sortBy : defaultSortBy;
	}

	// Get User Post Comments //
	if (drilldown?.level === 2) {
		userId = item.userId;
		user = tableSettings.value.items.find((a) => a.id == userId);
		user.child = { ...drilldown };

		postId = item.id;
		post = user.child.items.find((item) => item.id == postId);
		url = 'api/users/posts/comments';

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

		limit = post.child.itemsPerPage;
		page = post.child.page;
		query = post.child.search;
		sortBy = post.child.sortBy.length ? post.child.sortBy : defaultSortBy;
	}

	const data = {
		limit,
		page,
		postId,
		query,
		sortBy,
		userId,
	};

	fetch(url,
		{
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		}
	)
		.then(response => response.json())
		.then(json => {
			const data = json;
			const pagination = json.pagination;
			setTimeout(() => {
				if (typeof drilldown?.level === 'undefined') {
					tableSettings.value = {
						...tableSettings.value,
						items: data.users,
						itemsLength: pagination.itemsLength,
						loading: false,
						page: pagination.page,
					};

					tableSettings.value.loading = false;
					return;
				}

				if (drilldown?.level === 1) {
					user.child.items = json.posts;
					user.child.loading = false;
					user.child.itemsLength = pagination.itemsLength;
					user.child.page = pagination.page;
					return;
				}

				if (drilldown?.level === 2) {
					post.child.items = json.comments;
					post.child.loading = false;
					post.child.itemsLength = pagination.itemsLength;
					post.child.page = pagination.page;
				}

			}, fakeNetworkThrottlingTime);
		});
}


// -------------------------------------------------- Client Side Examples //
function fetchClientData(drilldown = null) {
	const item = drilldown?.item?.raw ?? null;
	console.log({ drilldown });

	let url = 'api/users';
	let user = null;
	let post = null;
	let userId = null;
	let postId = null;

	// Users Level 1 //
	if (typeof drilldown?.level === 'undefined') {
		tableSettings.value.loading = true;
	}

	// Posts Level 2 //
	if (drilldown?.level === 1) {
		userId = item.id;
		user = tableSettings.value.items.find((a) => a.id == userId);
		url = `api/users/${userId}/posts`;

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

	// Comments Level 3 //
	if (drilldown?.level === 2) {
		userId = item.userId;
		user = tableSettings.value.items.find((a) => a.id == userId);
		user.child = { ...drilldown };

		postId = item.id;
		post = user.child.items.find((item) => item.id == postId);

		post.child = {};
		post.child = {
			...tableDefaults,
			drilldownKey: 'id',
			footers: footers.comments,
			headers: headers.comments,
			level: 3,
			loading: true,
		};

		url = `api/posts/${postId}/comments`;
	}

	// ------------------------- Fetch Data //
	fetch(url)
		.then(response => response.json())
		.then(json => {
			setTimeout(() => {

				// Users Level 1 //
				if (!drilldown) {
					tableSettings.value.items = json.users;
					tableSettings.value.loading = false;
					return;
				}

				user = tableSettings.value.items.find((a) => a.id == userId);

				// Posts Level 2 //
				if (drilldown?.level === 1) {
					user.child.items = [...json.posts];
					user.child.loading = false;
					return;
				}

				// Comments Level 3 //
				if (drilldown?.level === 2) {
					post.child.items = [...json.comments];
					post.child.loading = false;
				}

				fakeNetworkThrottlingTime.value = fakeNetworkThrottlingTime2.value;
			}, fakeNetworkThrottlingTime.value);
		});
}


// -------------------------------------------------- Common Events //
function rowClickEvent() {
	// do something...
	// console.log('rowClickEvent', event);
}

function updateExpanded() {
	// do something...
	// console.log('updateExpanded', event);
}

function updatedItemsPerPage(val) {
	// console.log('updatedItemsPerPage', val);
	tableSettings.value.itemsPerPage = val;

	if (isServerSide.value) {
		fetchServerData();
	}
}

function updatedModelValue() {
	// do something...
	// console.log('updatedModelValue', event);
}

function updatedPage(val) {
	// console.log('updatedPage', val);
	currentPage.value = val;
	tableSettings.value.page = val;

	if (isServerSide.value) {
		fetchServerData();
	}
}

function updatedSearch(event) {
	// console.log('updatedSearch', event);
	tableSettings.value.search = event.query;

	if (isServerSide.value) {
		fetchServerData();
	}
}

function updatedSortBy(val) {
	// console.log('updatedSortBy', val);
	tableSettings.value.sortBy = val;

	// if (isServerSide.value) {
	// 	fetchServerData();
	// }
}
</script>

<style lang="scss">
</style>
