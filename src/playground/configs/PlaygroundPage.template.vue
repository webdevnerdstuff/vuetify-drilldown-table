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
					:server="tableSettings.server"
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
					@update:drilldown="fetchServerData($event)"
					@update:expanded="updateExpanded($event)"
					@update:model-value="updatedModelValue($event)"
					@update:options="updateOptions"
					@update:search="updatedSearch"
				>
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
const isServerSide = ref(false);

// Set the table setings //
const tableSettings = ref({ ...tableDefaults, ...{ server: isServerSide } });

// Use this to mock the network throttling time //
const fakeNetworkThrottlingTime = ref(0);
const fakeNetworkThrottlingTime2 = ref(0);

// ! Debugging - Remove later //
const $unicornLog = inject('$unicornLog');
const unicornStyles = ['background: black', 'color: lime', 'padding: 2px'];

const defaultSortBy = [
	{
		key: 'id',
		order: 'asc',
	},
];

onMounted(() => {
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
			sortable: false,
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
			sortable: false,
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
			title: 'Name',
		},
		{
			align: 'start',
			key: 'email',
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

	serverFetch(url, body).then((data) => {
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
	const user = tableSettings.value.items.find(
		(a) => parseInt(a.id) === parseInt(userId),
	);
	const url = 'api/users/posts';

	user.child = {};
	user.child = {
		...tableDefaults,
		drilldownKey: 'id',
		footers: footers.posts,
		headers: headers.posts,
		itemsLength: drilldown?.itemsLength ?? 0,
		itemsPerPage: drilldown?.itemsPerPage ?? 0,
		level: 2,
		loading: true,
		// server: false,
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
		limit: user.child.server ? drilldown?.itemsPerPage ?? 10 : 10,
		page: drilldown.page,
		query: drilldown.search,
		sortBy: drilldown.sortBy.length ? drilldown.sortBy : defaultSortBy,
		userId,
	};

	serverFetch(url, body).then((data) => {
		const { posts, pagination } = data;

		user.child = {
			...user.child,
			...{
				items: posts,
				itemsLength: pagination.itemsLength,
				itemsPerPage: user.child.server ? pagination.itemsPerPage : 5,
				loading: false,
				page: pagination.page,
			},
		};
	});
}

function getPostComments(drilldown = null, updateCurrentLevel = false) {
	const item = drilldown?.item?.raw ?? null;

	$unicornLog({
		logPrefix: '[PlaygroundPage]:',
		objects: { drilldown, item, updateCurrentLevel },
		styles: unicornStyles,
		text: 'getPostComments',
	});

	const userId = item.userId;
	const user = tableSettings.value.items.find(
		(a) => parseInt(a.id) === parseInt(userId),
	);

	const postId = item.id;
	const post = user.child.items.find(
		(item) => parseInt(item.id) === parseInt(postId),
	);
	const url = 'api/users/posts/comments';

	post.child = {};
	post.child = {
		...tableDefaults,
		drilldownKey: 'id',
		footers: footers.comments,
		headers: headers.comments,
		itemsLength: drilldown?.itemsLength ?? 0,
		itemsPerPage: drilldown?.itemsPerPage ?? 0,
		level: 3,
		loading: true,
		// server: false,
	};

	if (updateCurrentLevel) {
		post.child.items = drilldown.items;
	}

	let sortBy = post.child.sortBy.length ? post.child.sortBy : defaultSortBy;

	if (updateCurrentLevel && drilldown.sortBy.length) {
		sortBy = drilldown.sortBy;
		user.child.sortBy = sortBy;
		post.child.sortBy = sortBy;
	}

	const body = {
		limit: post.child.server ? drilldown?.itemsPerPage ?? 10 : 10,
		page: drilldown.page,
		postId,
		query: drilldown.search,
		sortBy: drilldown.sortBy.length ? drilldown.sortBy : defaultSortBy,
		userId,
	};

	serverFetch(url, body).then((data) => {
		const { comments, pagination } = data;

		post.child = {
			...post.child,
			...{
				items: comments,
				itemsLength: pagination.itemsLength,
				limit: post.child.server ? drilldown.itemsPerPage : 10,
				loading: false,
				page: pagination.page,
				// server: false,
			},
		};
	});
}

async function serverFetch(url, body) {
	const response = await fetch(url, {
		body: JSON.stringify(body),
		headers: { 'Content-Type': 'application/json' },
		method: 'POST',
	})
		.then((response) => response.json())
		.then((json) => json);

	return response;
}

// -------------------------------------------------- Client Side Examples //
function fetchClientData(drilldown = null) {
	const item = drilldown?.item?.raw ?? null;

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
		user = tableSettings.value.items.find(
			(a) => parseInt(a.id) == parseInt(userId),
		);
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
			// server: false,
		};
	}

	// Comments Level 3 //
	if (drilldown?.level === 2) {
		userId = item.userId;
		user = tableSettings.value.items.find(
			(a) => parseInt(a.id) == parseInt(userId),
		);

		user.child = { ...drilldown };

		postId = item.id;
		post = user.child.items.find(
			(item) => parseInt(item.id) == parseInt(postId),
		);

		post.child = {};
		post.child = {
			...tableDefaults,
			drilldownKey: 'id',
			footers: footers.comments,
			headers: headers.comments,
			itemsPerPage: 2,
			level: 3,
			loading: true,
			// server: false,
		};

		url = `api/posts/${postId}/comments`;
	}

	// ------------------------- Fetch Data //
	fetch(url)
		.then((response) => response.json())
		.then((json) => {
			setTimeout(() => {
				fakeNetworkThrottlingTime.value = fakeNetworkThrottlingTime2.value;

				// Users Level 1 //
				if (!drilldown) {
					tableSettings.value.items = json.users;
					tableSettings.value.loading = false;
					return;
				}

				// Posts Level 2 //
				if (drilldown?.level === 1) {
					user.child = {
						...user.child,
						...{
							items: json.posts,
							loading: false,
						},
					};
					return;
				}

				// Comments Level 3 //
				if (drilldown?.level === 2) {
					post.child = {
						...post.child,
						...{
							items: json.comments,
							loading: false,
						},
					};
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
	console.log(
		'%c%s',
		[
			'background-color: black',
			'border: 2px dotted red',
			'border-radius: 5px',
			'color: lime',
			'font-weight: normal',
			'padding: 5px 10px',
		].join(';'),
		'updateOptions',
		data,
	);

	if (isServerSide.value) {
		// console.log('data.drilldown', data.drilldown);
		fetchServerData(data.drilldown, true);
		return;
	}
}
</script>


<style lang="scss">
</style>
