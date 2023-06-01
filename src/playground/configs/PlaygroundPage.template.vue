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
					:level="tableSettings.level"
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
					@update:model-value="updatedModelValue($event)"
					@update:options="updateOptions"
					@update:search="updatedSearch"
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

					<!-- <template #thead="props">
						<thead>
							<tr>
								<td
									v-for="column in props.columns"
									:key="column"
								>
									{{ column.title }}
								</td>
							</tr>
						</thead>
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
						[item cell Slot]: {{ item.raw.id }}
					</template> -->

					<!-- <template #[`item.data-table-select`]>
						<v-icon>mdi mdi-vuetify</v-icon>
					</template> -->

					<!-- <template #[`item.data-table-expand`]>
						<fa-icon icon="fa-solid fa-chevron-down"></fa-icon>
					</template> -->

					<!-- <template #tfoot="props">
						<tfoot>
							<tr>
								<td
									v-for="column in props.columns"
									:key="column"
								>
									{{ column.title }}
								</td>
							</tr>
						</tfoot>
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
import { inject, onMounted, ref } from 'vue';
// import { watchDebounced } from '@vueuse/core';
import tableDefaults from './tableDefaults';

// Use this to switch between Client and Server Side Tables //
const isServerSide = ref(true);

const tableSettings = ref({ ...tableDefaults });

// Use this to mock the network throttling time //
const fakeNetworkThrottlingTime = ref(0);
const fakeNetworkThrottlingTime2 = ref(0);
const $unicornLog = inject('$unicornLog');

const unicornStyles = [
	'background: black',
	'color: lime',
	'padding: 2px',
];

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
		// {
		// 	key: 'data-table-select',
		// 	title: '',
		// },
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
		{
			key: 'data-table-select',
			title: '',
		},
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
function fetchServerData(drilldown = null, updateCurrentLevel = false) {
	// console.log('fetchServerData', { drilldown, updateCurrentLevel });
	// console.log('drilldown.level', drilldown?.level);
	if (drilldown === null || (updateCurrentLevel && drilldown.level === 1)) {
		getUsers(drilldown ?? tableSettings.value);
		return;
	}

	if (drilldown?.level === 1 || (updateCurrentLevel && drilldown.level === 2)) {
		getUserPosts(drilldown, updateCurrentLevel);
		return;
	}

	if (drilldown?.level === 2 || (updateCurrentLevel && drilldown.level === 3)) {
		getPostComments(drilldown, updateCurrentLevel);
		return;
	}
}

function getUsers(drilldown = null) {
	tableSettings.value = {
		...tableSettings.value,
		...drilldown,
	};

	tableSettings.value.loading = true;

	const url = 'api/users';

	const body = {
		limit: drilldown.itemsPerPage,
		page: drilldown.page,
		query: drilldown.search,
		sortBy: drilldown.sortBy.length ? drilldown.sortBy : defaultSortBy,
	};

	serverFetch(url, body)
		.then((data) => {
			const { users, pagination } = data;

			tableSettings.value = {
				...drilldown,
				...{
					items: users,
					itemsLength: pagination.itemsLength,
					loading: false,
					page: pagination.page,
				},
			};

			tableSettings.value.loading = false;
			return data;
		});
}

function getUserPosts(drilldown = null, updateCurrentLevel = false) {
	$unicornLog({
		logPrefix: '[PlaygroundPage]:',
		objects: drilldown,
		styles: unicornStyles,
		text: 'getUserPosts',
	});

	const item = drilldown?.item?.raw ?? null;
	const userId = item.id;
	const user = tableSettings.value.items.find((a) => parseInt(a.id) === parseInt(userId));
	const url = 'api/users/posts';

	user.child = {};
	user.child = {
		...tableDefaults,
		drilldownKey: 'id',
		footers: footers.posts,
		headers: headers.posts,
		level: 2,
		loading: true,
	};

	if (updateCurrentLevel) {
		user.child.items = drilldown.items;
	}

	let sortBy = user.child.sortBy.length ? user.child.sortBy : defaultSortBy;

	if (updateCurrentLevel && drilldown.sortBy.length) {
		sortBy = drilldown.sortBy;
		user.child.sortBy = sortBy;
	}

	const body = {
		limit: drilldown.itemsPerPage,
		page: drilldown.page,
		query: drilldown.search,
		sortBy: drilldown.sortBy.length ? drilldown.sortBy : defaultSortBy,
		userId,
	};

	serverFetch(url, body)
		.then((data) => {
			// console.log({ data });
			const { posts, pagination } = data;

			user.child = {
				...user.child,
				...{
					items: posts,
					itemsLength: pagination.itemsLength,
					itemsPerPage: pagination.limit,
					loading: false,
					page: pagination.page,
				},
			};

			console.log(user.child);
		});
}

function getPostComments(drilldown = null, updateCurrentLevel = false) {
	const item = drilldown?.item?.raw ?? null;

	// if (updateCurrentLevel) {
	// 	item = item.child.item.raw ?? null;
	// }

	$unicornLog({
		logPrefix: '[PlaygroundPage]:',
		objects: { drilldown, item, updateCurrentLevel },
		styles: unicornStyles,
		text: 'getPostComments',
	});

	const userId = item.userId;
	const user = tableSettings.value.items.find((a) => parseInt(a.id) === parseInt(userId));

	console.log({ user });

	// user.child = { ...drilldown };

	const postId = item.id;
	const post = user.child.items.find((item) => parseInt(item.id) === parseInt(postId));
	const url = 'api/users/posts/comments';

	console.log({ post });

	// user.child = { ...user.child, drilldown };

	post.child = {};
	post.child = {
		...tableDefaults,
		drilldownKey: 'id',
		footers: footers.comments,
		headers: headers.comments,
		level: 3,
		loading: true,
	};

	if (updateCurrentLevel) {
		post.child.items = drilldown.items;
	}

	let sortBy = post.child.sortBy.length ? post.child.sortBy : defaultSortBy;

	// TODO: What is this?
	if (updateCurrentLevel && drilldown.sortBy.length) {
		sortBy = drilldown.sortBy;
		user.child.sortBy = sortBy;
	}

	if (updateCurrentLevel && drilldown.sortBy.length) {
		sortBy = drilldown.sortBy;
		post.child.sortBy = sortBy;
	}

	const body = {
		limit: drilldown.itemsPerPage,
		page: drilldown.page,
		postId,
		query: drilldown.search,
		sortBy: drilldown.sortBy.length ? drilldown.sortBy : defaultSortBy,
		userId,
	};

	serverFetch(url, body)
		.then((data) => {
			// console.log({ data });
			const { comments, pagination } = data;

			post.child = {
				...post.child,
				...{
					items: comments,
					itemsLength: pagination.itemsLength,
					itemsPerPage: pagination.limit,
					loading: false,
					page: pagination.page,
				},
			};
		});
}

async function serverFetch(url, body) {
	const response = await fetch(url,
		{
			body: JSON.stringify(body),
			headers: { 'Content-Type': 'application/json' },
			method: 'POST',
		}
	)
		.then(response => response.json())
		.then(json => json);

	return response;
}


// -------------------------------------------------- Client Side Examples //
function fetchClientData(drilldown = null) {
	const item = drilldown?.item?.raw ?? null;
	// console.log({ drilldown });

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
			itemsPerPage: 2,
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
				fakeNetworkThrottlingTime.value = fakeNetworkThrottlingTime2.value;

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


			}, fakeNetworkThrottlingTime.value);
		});
}


// -------------------------------------------------- Common Events //
function rowClickEvent() {
	// do something...
	// console.log('rowClickEvent', event);
}

function updateExpanded() {
	// function updateExpanded(event) {
	// do something...
	// console.log('%c%s', ['background-color: black', 'border: 2px dotted lime', 'border-radius: 5px', 'color: lime', 'font-weight: normal', 'padding: 5px 10px'].join(';'), 'updateExpanded', event);
}

function updatedModelValue() {
	// do something...
	// console.log('updatedModelValue', event);
}

function updatedSearch(event) {
	// console.log('updatedSearch', event);
	tableSettings.value.search = event.query;

	if (isServerSide.value) {
		fetchServerData();
	}
}

function updateOptions(data) {
	console.log('%c%s', ['background-color: black', 'border: 2px dotted red', 'border-radius: 5px', 'color: lime', 'font-weight: normal', 'padding: 5px 10px'].join(';'), 'updateOptions', data);

	if (isServerSide.value) {
		console.log('data.drilldown', data.drilldown);
		fetchServerData(data.drilldown, true);
	}
}
</script>


<style lang="scss">
</style>
