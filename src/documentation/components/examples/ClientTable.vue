<template>
	<VDrilldownTable
		:drilldown-key="tableSettings.drilldownKey"
		:headers="headers.users"
		:item-children-key="tableSettings.itemChildrenKey"
		:items="tableSettings.items"
		:items-per-page="tableSettings.itemsPerPage"
		:level="tableSettings.level"
		:levels="tableSettings.levels"
		:loading="tableSettings.loading"
		@update:drilldown="fetchClientData($event)"
	>
	</VDrilldownTable>
</template>

<script setup lang="ts">
import type { VDrilldownTable } from '@/plugin/types/index';


const tableSettings = ref({
	drilldownKey: 'id',
	headers: [],
	itemChildrenKey: 'child',
	items: [],
	itemsPerPage: 5,
	level: 1,
	levels: 3,
	loading: false,
});

const tableDefaults = { ...tableSettings.value };

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
	] as const,
};

onMounted(() => {
	fetchClientData();
});

interface Item {
	id: string | number;
	child?: any;
}

function fetchClientData(drilldown: typeof VDrilldownTable | null = null) {
	const item = drilldown?.item ?? null;

	let url = 'api/users';
	let user: Item | null = null;
	let post: Item | null = null;
	let userId: string | number | null = null;
	let postId: string | number | null = null;

	// Users Level 1 //
	if (typeof drilldown?.level === 'undefined') {
		tableSettings.value.loading = true;
	}

	// Posts Level 2 //
	if (drilldown?.level === 1) {
		userId = item.id;
		user = (tableSettings.value.items as Item[]).find(
			(a: Item) => parseInt(a.id as string) == parseInt(userId as string),
		) as Item;
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
		user = (tableSettings.value.items as Item[]).find(
			(a: Item) => parseInt(a.id as string) == parseInt(userId as string),
		) as Item;

		user.child = { ...drilldown };

		postId = item.id;
		post = (user.child.items as Item[]).find(
			(item: Item) => parseInt(item.id as string) == parseInt(postId as string),
		) as Item;

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
			if (drilldown?.level === 1 && user) {
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
			if (drilldown?.level === 2 && post) {
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

const templateCode = `<template>
  <VDrilldownTable
    :drilldown-key="tableSettings.drilldownKey"
    :headers="headers.users"
    :item-children-key="tableSettings.itemChildrenKey"
    :items="tableSettings.items"
    :items-per-page="tableSettings.itemsPerPage"
    :level="tableSettings.level"
    :levels="tableSettings.levels"
    :loading="tableSettings.loading"
    :search-debounce="tableSettings.searchDebounce"
    :search-max-wait="tableSettings.searchMaxWait"
    @update:drilldown="fetchClientData($event)"
  >
  </VDrilldownTable>
</template>
`;

const scriptCode = `\<script setup lang="ts"\>
import type { VDrilldownTable } from '@wdns/vuetify-drilldown-table';


const tableSettings = ref({
  drilldownKey: 'id',
  headers: [],
  itemChildrenKey: 'child',
  items: [],
  itemsPerPage: 5,
  level: 1,
  levels: 3,
  loading: false,
});

const tableDefaults = { ...tableSettings.value };

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
        return \`<a href="mailto:\${value}">\${value}</a>\`;
      },
      title: 'Email',
    },
    {
      key: 'data-table-expand',
      sortable: false,
      title: '',
    },
  ] as const,
};

onMounted(() => {
  fetchClientData();
});

interface Item {
  id: string | number;
  child?: any;
}

function fetchClientData(drilldown: typeof VDrilldownTable | null = null) {
  const item = drilldown?.item ?? null;

  let url = 'api/users';
  let user: Item | null = null;
  let post: Item | null = null;
  let userId: string | number | null = null;
  let postId: string | number | null = null;

  // Users Level 1 //
  if (typeof drilldown?.level === 'undefined') {
    tableSettings.value.loading = true;
  }

  // Posts Level 2 //
  if (drilldown?.level === 1) {
    userId = item.id;
    user = (tableSettings.value.items as Item[]).find(
      (a: Item) => parseInt(a.id as string) == parseInt(userId as string),
    ) as Item;
    url = \`api/users/\${userId}/posts\`;

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
    user = (tableSettings.value.items as Item[]).find(
      (a: Item) => parseInt(a.id as string) == parseInt(userId as string),
    ) as Item;

    user.child = { ...drilldown };

    postId = item.id;
    post = (user.child.items as Item[]).find(
      (item: Item) => parseInt(item.id as string) == parseInt(postId as string),
    ) as Item;

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

    url = \`api/posts/\${postId}/comments\`;
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
      if (drilldown?.level === 1 && user) {
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
      if (drilldown?.level === 2 && post) {
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
\</script\>`;

defineExpose({
	exampleCode: {
		name: 'Client Side Data Table',
		script: scriptCode,
		template: templateCode,
	},
});
</script>
