<template>
	<v-col cols="12">
		<h3 :class="classes.h3">
			Client Side Data Table
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
			:search-debounce="tableSettings.searchDebounce"
			:search-max-wait="tableSettings.searchMaxWait"
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
			@update:drilldown="fetchClientData($event)"
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
</template>

<script setup>
import { inject } from 'vue';
import tableDefaults from './tableDefaults';


const props = defineProps({
	colors: {
		default: () => { },
		type: Object,
	},
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

const selected = ref([]);

const classes = inject('classes');
const tableSettings = ref({ ...props.settings, ...props.colors });

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
			// width: 50,
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
	fetchClientData();
});


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
			...props.colors,
			drilldownKey: 'id',
			footers: footers.posts,
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
			...props.colors,
			drilldownKey: 'id',
			footers: footers.comments,
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
