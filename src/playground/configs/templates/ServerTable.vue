<template>
	<v-col cols="12">
		<h3 :class="classes.h3">
			Server Side Data Table
		</h3>
	</v-col>

	<v-col cols="12">
		<VDrilldownTable
			v-model="selected"
			:color-percentage-change="tableSettings.colorPercentageChange"
			:color-percentage-direction="tableSettings.colorPercentageDirection"
			:default-colors="tableSettings.defaultColors"
			:density="density"
			:drilldown-key="tableSettings.drilldownKey"
			:elevation="tableSettings.elevation"
			:expand-on-click="tableSettings.expandOnClick"
			:first-icon="tableSettings.firstIcon"
			:footers="footers.users"
			:headers="headers.users"
			:hover="tableSettings.hover"
			:item-children-key="tableSettings.itemChildrenKey"
			:item-props="tableSettings.itemProps"
			:item-selectable="tableSettings.itemSelectable"
			:items="tableSettings.items"
			:items-length="tableSettings.itemsLength"
			:items-per-page="tableSettings.itemsPerPage"
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
			:match-column-widths="tableSettings.matchColumnWidths"
			:multi-sort="tableSettings.multiSort"
			:next-icon="tableSettings.nextIcon"
			:no-data-text="tableSettings.noDataText"
			:page="tableSettings.page"
			:page-text="tableSettings.pageText"
			:prev-icon="tableSettings.prevIcon"
			:search="tableSettings.search"
			:search-container-cols="tableSettings.searchContainerCols"
			:search-debounce="tableSettings.searchDebounce"
			:search-max-wait="tableSettings.searchMaxWait"
			:search-props="tableSettings.searchProps"
			:select-strategy="tableSettings.selectStrategy"
			:separator="tableSettings.separator"
			:server="tableSettings.server"
			:show-current-page="tableSettings.showCurrentPage"
			:show-expand="tableSettings.showExpand"
			:show-footer-row="tableSettings.showFooterRow"
			:show-search="tableSettings.showSearch"
			:show-select="tableSettings.showSelect"
			:skelton-type="tableSettings.skeltonType"
			:sort-asc-icon="tableSettings.sortAscIcon"
			:sort-by="tableSettings.sortBy"
			:tag="tableSettings.tag"
			:theme="tableSettings.theme"
			@update:drilldown="fetchServerData($event)"
			@update:options="updateOptions"
		>
			<!-- <template #loading>
				[loading Slot]
			</template> -->

			<!-- <template #no-data>
				[no-data Slot]
			</template> -->

			<!-- <template #top>
				[top Slot]
			</template> -->

			<!-- <template #[`top.left`]="props">
				<v-col
					v-if="props.level === 1"
					cols="4"
				>
					<v-text-field
						v-model="tableSettings.search"
						class="mt-0 pt-0"
						clearable
						density="compact"
						hide-details
						label="Search"
						single-line
						variant="outlined"
					></v-text-field>
				</v-col>
			</template> -->

			<!-- <template #[`top.right`]="props">
				<v-col
					v-if="props.level === 1"
					class="d-flex align-center justify-end"
				>
					{{ props.search }}
					<v-btn
						class="ms-2"
						color="primary"
						@click="props.toggleSelectAll()"
					>Toggle Select</v-btn>
					<v-btn
						class="ms-2"
						color="primary"
						@click="props.selectAll(true)"
					>Select All</v-btn>
					<v-btn
						class="ms-2"
						color="primary"
						@click="props.selectAll(false)"
					>De-Select All</v-btn>
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
				[item cell Slot]: {{ item.id }}
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
const defaultColors = inject('defaultColors');
const density = inject('density');
const tableSettings = ref({ ...props.settings, ...{ defaultColors } });
const defaultSortBy = [
	{
		key: 'id',
		order: 'asc',
	},
];
const headers = {
	comments: [
		// {
		// 	align: 'start',
		// 	key: null,
		// 	title: '',
		// 	width: 110,
		// },
		{
			align: 'start',
			key: 'postId',
			sortable: false,
			title: 'Post ID',
			// width: 110,
		},
		{
			align: 'start',
			key: 'id',
			sortable: false,
			title: 'Comment ID',
			// width: 130,
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
			// width: 110,
		},
		{
			align: 'start',
			key: 'id',
			title: 'Post ID',
			// width: 240,
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
	const item = drilldown?.item ?? null;

	const userId = item.id;
	const user = tableSettings.value.items.find(
		(a) => parseInt(a.id) === parseInt(userId),
	);
	const url = 'api/users/posts';

	user.child = drilldown?.drilldown ?? tableDefaults;
	user.child = Object.assign({}, {
		...user.child,
		...{
			drilldownKey: 'id',
			footers: footers.posts,
			headers: headers.posts,
			itemsLength: drilldown?.itemsLength ?? 0,
			itemsPerPage: drilldown?.itemsPerPage ?? 0,
			level: 2,
			loading: true,
			server: true,
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
	const item = drilldown?.item ?? null;

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
			drilldownKey: 'id',
			footers: footers.comments,
			headers: headers.comments,
			itemsLength: drilldown?.itemsLength ?? 0,
			itemsPerPage: 2,
			level: 3,
			loading: true,
			server: true,
			sortBy: [],
		},
	});

	if (updateCurrentLevel) {
		post.child.items = drilldown.items;
		post.child.sortBy = drilldown.sortBy;
	}

	const body = {
		limit: 2,
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
			items: comments,
			itemsLength: pagination.itemsLength,
			limit: post.child.server ? drilldown.limit : tableDefaults.itemsPerPage,
			loading: false,
			page: pagination.page,
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

watch(defaultColors, (newVal) => {
	tableSettings.value.defaultColors = newVal;
});
</script>
