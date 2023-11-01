<template>
	<v-col
		:id="sectionId"
		cols="12"
	>
		<h3 :class="classes.h3">
			<a
				:class="classes.headerA"
				:href="`#${sectionId}`"
			>#</a>
			{{ title }}
		</h3>
	</v-col>




	<v-col cols="12">
		<VDrilldownTable
			:default-colors="tableSettings?.defaultColors ?? {}"
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
			@update:drilldown="fetchClientData($event)"
		>
		</VDrilldownTable>
	</v-col>
</template>

<script setup>
import { inject } from 'vue';
import tableDefaults from '@/playground/configs/templates/tableDefaults';


const props = defineProps({
	sectionId: {
		default: 'example-data-table',
		type: String,
	},
	settings: {
		required: true,
		type: Object,
	},
	title: {
		default: '',
		type: String,
	},
});


const classes = inject('classes');
const tableSettings = ref({ ...props.settings });

const headers = {
	comments: [
		{
			align: 'start',
			key: '',
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
			width: 240,
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


onMounted(() => {
	fetchClientData();
});


function fetchClientData(drilldown = null) {
	const item = drilldown?.item ?? null;

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
			headers: headers.posts,
			level: 2,
			loading: true,
			sortBy: [],
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
			headers: headers.comments,
			itemsPerPage: tableSettings.value.itemsPerPage,
			level: 3,
			loading: true,
			sortBy: [],
		};

		url = `api/posts/${postId}/comments`;
	}

	// ------------------------- Fetch Data //
	fetch(url)
		.then((response) => response.json())
		.then((json) => {
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
		});
}
</script>
