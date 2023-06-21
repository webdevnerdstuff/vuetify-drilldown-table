<template>
	<v-container>
		<v-row>
			<ClientTable :settings="tableSettings" />
			<ServerTable :settings="tableSettingsServer" />
		</v-row>
	</v-container>
</template>


<script setup>
import ClientTable from './ClientTable.vue';
import ServerTable from './ServerTable.vue';
import tableDefaults from './tableDefaults';

const tableSettings = ref({ ...tableDefaults });
const tableSettingsServer = ref({ ...tableDefaults, ...{ server: true } });
</script>


<style lang="scss">
</style>
