<template>
	<v-col cols="12">
		<h3 :class="classes.h3">
			Group By Client Side Data Table
		</h3>
	</v-col>

	<v-col cols="12">
		<VDrilldownTable
			v-model="selected"
			:colors="tableSettings.colors"
			:density="tableSettings.density"
			:drilldown-key="tableSettings.drilldownKey"
			:elevation="tableSettings.elevation"
			:expand-on-click="tableSettings.expandOnClick"
			:first-icon="tableSettings.firstIcon"
			:footers="footers.posts"
			:group-by="[{ key: 'userId', order: 'asc' }]"
			:headers="headers.posts"
			:hover="tableSettings.hover"
			:item-children-key="tableSettings.itemChildrenKey"
			:item-props="tableSettings.itemProps"
			:item-selectable="tableSettings.itemSelectable"
			:items="tableSettings.items"
			:items-per-page="25"
			:items-per-page-options="tableSettings.itemsPerPageOptions"
			:items-per-page-text="tableSettings.itemsPerPageText"
			:last-icon="tableSettings.lastIcon"
			:level="tableSettings.level"
			:levels="tableSettings.levels"
			:loader-height="tableSettings.loaderHeight"
			:loader-props="tableSettings.loaderProps"
			:loader-size="tableSettings.loaderSize"
			:loader-type="tableSettings.loaderType"
			:loading="tableSettings.loading"
			:loading-text="tableSettings.loadingText"
			:match-column-widths="true"
			:multi-sort="tableSettings.multiSort"
			:next-icon="tableSettings.nextIcon"
			:no-data-text="tableSettings.noDataText"
			:page="tableSettings.page"
			:page-text="tableSettings.pageText"
			:prev-icon="tableSettings.prevIcon"
			:search="tableSettings.search"
			:search-container-cols="tableSettings.searchContainerCols"
			:search-debounce="tableSettings.searchDebounce"
			:search-events="tableSettings.searchEvents"
			:search-max-wait="tableSettings.searchMaxWait"
			:search-props="tableSettings.searchProps"
			:select-strategy="tableSettings.selectStrategy"
			:separator="tableSettings.separator"
			:server="tableSettings.server"
			:show-current-page="tableSettings.showCurrentPage"
			:show-expand="tableSettings.showExpand"
			:show-footer-row="false"
			:show-search="tableSettings.showSearch"
			:show-select="tableSettings.showSelect"
			:skelton-type="tableSettings.skeltonType"
			:sort-asc-icon="tableSettings.sortAscIcon"
			:sort-by="tableSettings.sortBy"
			:tag="tableSettings.tag"
			:theme="tableSettings.theme"
			@update:drilldown="fetchClientData($event)"
		>
			<template #group-header="{ item, columns, toggleGroup, isGroupOpen }">
				<tr>
					<td :colspan="columns.length">
						<VBtn
							class="me-2 my-1"
							:icon="isGroupOpen(item) ? '$expand' : '$next'"
							size="x-small"
							variant="tonal"
							@click="toggleGroup(item)"
						>
						</VBtn>
						{{ getUserName(item.value) }}
					</td>
				</tr>
			</template>
		</VDrilldownTable>
	</v-col>
</template>

<script setup>
import { inject } from 'vue';
import tableDefaults from './tableDefaults';


const props = defineProps({
	settings: {
		required: true,
		type: Object,
	},
});

const selected = ref([]);

const classes = inject('classes');
const tableSettings = ref({ ...props.settings });

const headers = {
	comments: [
		{
			align: 'start',
			key: 'postId',
			sortable: false,
			title: 'Post ID',
		},
		{
			align: 'start',
			key: 'id',
			sortable: false,
			title: 'Comment ID',
		},
		{
			align: 'start',
			key: 'name',
			title: 'Comment',
		},
	],
	posts: [
		{
			key: 'data-table-group',
			title: 'User',
			width: 250,
		},
		{
			align: 'start',
			key: 'id',
			title: 'Post ID',
			width: 150,
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
			title: 'User',
		},
		{
			align: 'start',
			key: 'id',
			title: 'Post ID',
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
};


onMounted(() => {
	fetchUsers();
	fetchClientData();
});

const users = ref([]);

function fetchClientData(drilldown = null) {
	const item = drilldown?.item?.raw ?? null;

	let url = 'api/posts';
	let user = null;
	let post = null;
	let userId = null;
	let postId = null;

	// Users Level 1 //
	if (typeof drilldown?.level === 'undefined') {
		tableSettings.value.loading = true;
	}

	// Comments Level 2 //
	if (drilldown?.level === 1) {
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
			groupBy: [],
			headers: headers.comments,
			itemsPerPage: 2,
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
				tableSettings.value.items = json.posts;
				tableSettings.value.loading = false;
				return;
			}

			// Comments Level 1 //
			if (drilldown?.level === 1) {
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

function fetchUsers() {
	fetch('api/users')
		.then((response) => response.json())
		.then((json) => {
			users.value = json.users;
		});
}

function getUserName(userId) {
	return users.value.find((a) => a.id == userId).name;
}
</script>
