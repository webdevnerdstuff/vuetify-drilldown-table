<template>
	<VDrilldownTable
		:drilldown-key="tableSettings.drilldownKey"
		:headers="headers.users"
		:item-children-key="tableSettings.itemChildrenKey"
		:items="tableSettings.items"
		:items-length="tableSettings.itemsLength"
		:items-per-page="tableSettings.itemsPerPage"
		:level="tableSettings.level"
		:levels="tableSettings.levels"
		:loading="tableSettings.loading"
		:page="tableSettings.page"
		server
		:sort-by="tableSettings.sortBy"
		@update:drilldown="fetchServerData($event)"
		@update:options="updateOptions"
	>
	</VDrilldownTable>
</template>

<script setup lang="ts">
import type { VDrilldownTable } from '@/plugin/types/index';


type Drilldown = typeof VDrilldownTable;

const tableSettings = ref<Partial<Drilldown>>({
	drilldownKey: 'id',
	headers: [],
	itemChildrenKey: 'child',
	items: [],
	itemsLength: 0,
	itemsPerPage: 5,
	level: 1,
	levels: 3,
	loading: false,
	page: 1,
	sortBy: [],
});

const tableDefaults = { ...tableSettings.value };

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
	] as const,
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
	] as const,
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
	fetchServerData();
});

interface Item {
	id: string | number;
	child?: any;
}

function fetchServerData(drilldown: Drilldown | null = null, updateCurrentLevel = false) {
	if (drilldown === null || (updateCurrentLevel && drilldown.level === 1)) {
		getUsers(drilldown as Drilldown ?? tableSettings.value);
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

function getUsers(drilldown: Drilldown) {
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

function getUserPosts(drilldown: Drilldown, updateCurrentLevel = false) {
	const item = drilldown?.item ?? null;

	const userId = item.id;
	const user = tableSettings.value.items.find(
		(a: Item) => parseInt(a.id as string) === parseInt(userId),
	);
	const url = 'api/users/posts';

	user.child = drilldown?.drilldown ?? tableDefaults;
	user.child = Object.assign({}, {
		...user.child,
		...{
			drilldownKey: 'id',
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

function getPostComments(drilldown: Drilldown, updateCurrentLevel = false) {
	const item = drilldown?.item ?? null;

	const userId = item.userId;
	const user = tableSettings.value.items.find(
		(a: Item) => parseInt(a.id as string) === parseInt(userId),
	);

	const postId = item.id;
	const post = user.child.items.find(
		(item: Item) => parseInt(item.id as string) === parseInt(postId),
	);
	const url = 'api/users/posts/comments';

	post.child = drilldown?.drilldown ?? tableDefaults;
	post.child = Object.assign({}, {
		...post.child,
		...{
			drilldownKey: 'id',
			headers: headers.comments,
			itemsLength: drilldown?.itemsLength ?? 0,
			itemsPerPage: drilldown?.itemsPerPage ?? 0,
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

async function serverFetch(url: string, body: unknown) {
	const response = await fetch(url, {
		body: JSON.stringify(body),
		headers: { 'Content-Type': 'application/json' },
		method: 'POST',
	})
		.then((response) => response.json())
		.then((json) => json);

	return response;
}

function updateOptions(data: Drilldown) {
	fetchServerData(data.drilldown, true);
}

const templateCode = `<template>
  <VDrilldownTable
    :drilldown-key="tableSettings.drilldownKey"
    :headers="headers.users"
    :item-children-key="tableSettings.itemChildrenKey"
    :items="tableSettings.items"
    :items-length="tableSettings.itemsLength"
    :items-per-page="tableSettings.itemsPerPage"
    :level="tableSettings.level"
    :levels="tableSettings.levels"
    :loading="tableSettings.loading"
    :page="tableSettings.page"
    server
    :sort-by="tableSettings.sortBy"
    @update:drilldown="fetchServerData($event)"
    @update:options="updateOptions"
  >
  </VDrilldownTable>
</template>
`;

const scriptCode = `\<script setup lang="ts"\>
import type { VDrilldownTable } from '@wdns/vuetify-drilldown-table';

type Drilldown = typeof VDrilldownTable;

const tableSettings = ref<Partial<Drilldown>>({
  drilldownKey: 'id',
  headers: [],
  itemChildrenKey: 'child',
  items: [],
  itemsLength: 0,
  itemsPerPage: 5,
  level: 1,
  levels: 3,
  loading: false,
  page: 1,
  sortBy: [],
});

const tableDefaults = { ...tableSettings.value };

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
  ] as const,
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
  ] as const,
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
  fetchServerData();
});

interface Item {
  id: string | number;
  child?: any;
}

function fetchServerData(drilldown: Drilldown | null = null, updateCurrentLevel = false) {
  if (drilldown === null || (updateCurrentLevel && drilldown.level === 1)) {
    getUsers(drilldown as Drilldown ?? tableSettings.value);
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

function getUsers(drilldown: Drilldown) {
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

function getUserPosts(drilldown: Drilldown, updateCurrentLevel = false) {
  const item = drilldown?.item ?? null;

  const userId = item.id;
  const user = tableSettings.value.items.find(
    (a: Item) => parseInt(a.id as string) === parseInt(userId),
  );
  const url = 'api/users/posts';

  user.child = drilldown?.drilldown ?? tableDefaults;
  user.child = Object.assign({}, {
    ...user.child,
    ...{
      drilldownKey: 'id',
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

function getPostComments(drilldown: Drilldown, updateCurrentLevel = false) {
  const item = drilldown?.item ?? null;

  const userId = item.userId;
  const user = tableSettings.value.items.find(
    (a: Item) => parseInt(a.id as string) === parseInt(userId),
  );

  const postId = item.id;
  const post = user.child.items.find(
    (item: Item) => parseInt(item.id as string) === parseInt(postId),
  );
  const url = 'api/users/posts/comments';

  post.child = drilldown?.drilldown ?? tableDefaults;
  post.child = Object.assign({}, {
    ...post.child,
    ...{
      drilldownKey: 'id',
      headers: headers.comments,
      itemsLength: drilldown?.itemsLength ?? 0,
      itemsPerPage: drilldown?.itemsPerPage ?? 0,
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

async function serverFetch(url: string, body: unknown) {
  const response = await fetch(url, {
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
  })
    .then((response) => response.json())
    .then((json) => json);

  return response;
}

function updateOptions(data: Drilldown) {
  fetchServerData(data.drilldown, true);
}
\</script\>`;

defineExpose({
	exampleCode: {
		desc: `To enable the client side server, you need to set the <code class="inline-code">server</code> prop to <code
			class="inline-code"
		>true</code>`,
		name: 'Server Side Data Table',
		script: scriptCode,
		template: templateCode,
	},
});
</script>
