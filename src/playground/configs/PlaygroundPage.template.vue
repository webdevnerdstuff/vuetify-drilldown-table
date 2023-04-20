<!-- eslint-disable @typescript-eslint/no-unused-vars -->

<template>
	<div>
		<div class="row my-4">
			<div class="col-12">
				<VDrilldownTable
					:density="tableSettings.density"
					:drilldown-key="tableSettings.drilldownKey"
					:headers="tableSettings.headersUsers"
					:items="tableSettings.items"
					:levels="tableSettings.levels"
					:show-search="tableSettings.showSearch"
					@drilldown="fetchData($event)"
				>
				</VDrilldownTable>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

onMounted(() => {
	fetchData();
});


const tableSettings = ref({
	// colors: {
	// 	body: {
	// 		base: '--v-theme-surface',
	// 		bg: '--v-theme-surface',
	// 		text: '--v-theme-on-surface',
	// 	},
	// 	default: {
	// 		base: 'primary',
	// 		bg: 'primary',
	// 		border: 'primary',
	// 		text: 'on-primary',
	// 	},
	// 	footer: {
	// 		bg: '--v-theme-surface',
	// 		text: '--v-theme-on-surface',
	// 	},
	// 	header: {
	// 		bg: 'primary',
	// 		text: 'on-danger',
	// 	},
	// 	percentageChange: 25,
	// 	percentageDirection: 'desc',
	// },
	density: 'comfortable',
	debounceDelay: 300,
	drilldownKey: 'id',
	headersComments: [
		{
			title: '',
			align: 'start',
			key: null,
			width: 100,
		},
		{
			title: 'Post ID',
			align: 'start',
			key: 'postId',
			width: 100,
		},
		{
			title: 'Comment ID',
			align: 'start',
			key: 'id',
			width: 150,
		},
		{
			title: 'Comment',
			align: 'start',
			key: 'name',
		},
		{
			key: 'data-table-expand',
			title: '',
		},
	],
	headersPosts: [
		{
			title: 'User ID',
			align: 'start',
			key: 'userId',
			width: 100,
		},
		{
			title: 'Post ID',
			align: 'start',
			key: 'id',
			width: 250,
		},
		{
			title: 'Post',
			align: 'start',
			key: 'title',
		},
		{
			key: 'data-table-expand',
			title: '',
		},
	],
	headersUsers: [
		{
			title: 'User ID',
			align: 'start',
			key: 'id',
			width: 350,
		},
		{
			title: 'Name',
			align: 'start',
			key: 'name',
		},
		{
			title: 'Email',
			align: 'start',
			key: 'email',
		},
		{
			key: 'data-table-expand',
			title: '',
		},
	],
	items: [],
	levels: 2,
	showSearch: false,
});


function fetchData(drilldown = null) {
	const item = drilldown?.item?.raw ?? null;

	let url = 'https://jsonplaceholder.typicode.com/users';
	let user = null;
	let userId = null;
	let postId = null;

	if (drilldown?.level === 0) {
		userId = item.id;
		url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
	}

	if (drilldown?.level === 1) {
		postId = item.id;
		userId = item.userId;
		url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
	}

	fetch(url)
		.then(response => response.json())
		.then(json => {
			if (!drilldown) {
				tableSettings.value.items = json;
				return;
			}

			user = tableSettings.value.items.find((a) => a.id === userId);

			if (drilldown?.level === 0) {
				user.children = {};

				user.children = {
					drilldownKey: 'id',
					headers: [...tableSettings.value.headersPosts],
					items: [...json],
					level: 1,
				};
			}

			if (drilldown?.level === 1) {
				const post = user.children.items.find((item) => item.id === postId);

				post.children = {};
				post.children = {
					drilldownKey: 'id',
					headers: [...tableSettings.value.headersComments],
					items: [...json],
					level: 2,
				};
			}
		});
}
</script>

<style lang="scss">
</style>
