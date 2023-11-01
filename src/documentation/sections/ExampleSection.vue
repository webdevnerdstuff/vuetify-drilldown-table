<template>
	<v-row>
		<v-col
			id="examples"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#examples"
				>#</a>
				Examples
			</h2>
		</v-col>

		<v-col cols="12">
			The following examples are using the default settings. If you would like to explore the props/events/slots in
			more details, checkout the <a href="#playground">Developer Playground</a>. The data being used in these examples
			are using a mock server. The mock server is using <a
				href="https://miragejs.com/"
				target="_blank"
			>MirageJS</a> to mock the server.
		</v-col>


		<ClientTable
			:settings="tableSettings"
			title="Client Side Data Table"
		/>
		<ServerTable :settings="tableSettingsServer" />

	</v-row>
</template>

<script setup>
import { inject } from 'vue';
import tableDefaults from '@/playground/configs/templates/tableDefaults';
import {
	ClientTable,
	ServerTable,
} from '@/documentation/components/examples';


const classes = inject('classes');
const tableSettings = ref({ ...tableDefaults });
const tableSettingsServer = ref({ ...tableDefaults, ...{ server: true } });

</script>
