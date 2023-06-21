<template>
	<v-col
		id="example-data-table-server"
		cols="12"
	>
		<h3 :class="classes.h3">
			<a
				:class="classes.headerA"
				href="#example-data-table-server"
			>#</a>
			Server Side Data Table
		</h3>
	</v-col>

	<v-col cols="12">
		To enable the client side server, you need to set the <code class="inline-code">server</code> prop to <code
			class="inline-code"
		>true</code>
	</v-col>

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
			:loader-size="tableSettings.loaderSize"
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
			:search-debounce="tableSettings.searchDebounce"
			:search-max-wait="tableSettings.searchMaxWait"
			:server="tableSettings.server"
			:show-current-page="tableSettings.showCurrentPage"
			:show-expand="tableSettings.showExpand"
			:show-search="tableSettings.showSearch"
			:show-select="tableSettings.showSelect"
			:skelton-type="tableSettings.skeltonType"
			:sort-by="tableSettings.sortBy"
			:tag="tableSettings.tag"
			:theme="tableSettings.theme"
			@update:drilldown="fetchServerData($event)"
			@update:options="updateOptions"
		>
		</VDrilldownTable>
	</v-col>
</template>

<script setup>
import { inject } from 'vue';
import tableDefaults from '@/playground/configs/templates/tableDefaults';


const props = defineProps({
	settings: {
		required: true,
		type: Object,
	},
});


const classes = inject('classes');
const tableSettings = ref({ ...props.settings });
const defaultSortBy = [
	{
		key: 'id',
		order: 'asc',
	},
];
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
			sortable: false,
			title: 'Comment ID',
			width: 130,
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
			width: 235,
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
			width: 345,
		},
		{
			align: 'start',
			key: 'name',
			renderer(value) {
				return value;
			},
			title: 'Name',
		},
		{
			align: 'start',
			key: 'email',
			renderItem(value) {
				return `<a href="mailto:${value}">${value}</a>`;
			},
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
			renderFooter() {
				return '&nbsp;';
			},
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
			title: 'Email',
		},
		{
			key: 'data-table-expand',
			title: '',
		},
	],
};


onMounted(() => {
	fetchServerData();
});


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

		tableSettings.value = Object.assign({}, {
			...drilldown,
			...{
				items: users,
				itemsLength: pagination.itemsLength,
				loading: false,
				page: pagination.page,
			},
		});

		tableSettings.value.loading = false;
		return data;
	});
}

function getUserPosts(drilldown = null, updateCurrentLevel = false) {
	const item = drilldown?.item?.raw ?? null;

	const userId = item.id;
	const user = tableSettings.value.items.find(
		(a) => parseInt(a.id) === parseInt(userId),
	);
	const url = 'api/users/posts';

	user.child = drilldown?.drilldown ?? tableDefaults;
	user.child = Object.assign({}, {
		...user.child,
		...{
			colors: null,
			drilldownKey: 'id',
			footers: footers.posts,
			headers: headers.posts,
			itemsLength: drilldown?.itemsLength ?? 0,
			itemsPerPage: drilldown?.itemsPerPage ?? 0,
			level: 2,
			loading: true,
			sortBy: [],
		},
	});

	if (updateCurrentLevel) {
		user.child.items = drilldown.items;
		user.child.sortBy = drilldown.sortBy;
	}

	const body = {
		limit: drilldown.itemsPerPage,
		page: drilldown.page,
		query: drilldown.search,
		sortBy: user.child.sortBy,
		userId,
	};

	serverFetch(url, body).then((data) => {
		const { posts, pagination } = data;

		user.child = {
			...user.child,
			...{
				items: posts,
				itemsLength: pagination.itemsLength,
				itemsPerPage: user.child.server ? pagination.limit : tableDefaults.itemsPerPage,
				loading: false,
				page: pagination.page,
			},
		};
	});
}

function getPostComments(drilldown = null, updateCurrentLevel = false) {
	const item = drilldown?.item?.raw ?? null;

	const userId = item.userId;
	const user = tableSettings.value.items.find(
		(a) => parseInt(a.id) === parseInt(userId),
	);

	const postId = item.id;
	const post = user.child.items.find(
		(item) => parseInt(item.id) === parseInt(postId),
	);
	const url = 'api/users/posts/comments';

	post.child = drilldown?.drilldown ?? tableDefaults;
	post.child = Object.assign({}, {
		...post.child,
		...{
			colors: null,
			drilldownKey: 'id',
			footers: footers.comments,
			headers: headers.comments,
			itemsLength: drilldown?.itemsLength ?? 0,
			itemsPerPage: drilldown?.itemsPerPage ?? 0,
			level: 3,
			loading: true,
			sortBy: [],
		},
	});

	if (updateCurrentLevel) {
		post.child.items = drilldown.items;
		post.child.sortBy = drilldown.sortBy;
	}

	const body = {
		limit: drilldown.itemsPerPage,
		page: drilldown.page,
		postId,
		query: drilldown.search,
		sortBy: post.child.sortBy,
		userId,
	};

	serverFetch(url, body).then((data) => {
		const { comments, pagination } = data;

		post.child = {
			...post.child,
			...{
				items: comments,
				itemsLength: pagination.itemsLength,
				limit: post.child.server ? drilldown.limit : tableDefaults.itemsPerPage,
				loading: false,
				page: pagination.page,
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

function updateOptions(data) {
	fetchServerData(data.drilldown, true);
}
</script>
