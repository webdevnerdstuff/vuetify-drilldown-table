<template>
	<v-container>
		<v-row>
			<ClientTable :settings="tableSettings" />
			<ServerTable :settings="tableSettingsServer" />
			<!-- <GroupByClientTable :settings="tableSettings" /> -->
		</v-row>
	</v-container>
</template>


<script setup>
import { ref } from 'vue';
// import GroupByClientTable from './GroupByClientTable.vue';
import ClientTable from './ClientTable.vue';
import ServerTable from './ServerTable.vue';
import tableDefaults from './tableDefaults';

const tableSettings = ref(Object.assign({}, tableDefaults));
const tableSettingsServer = ref({ ...tableDefaults, ...{ searchDebounce: 5000, server: true } });
</script>


<style lang="scss">
</style>
