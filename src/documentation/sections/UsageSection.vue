<template>
	<v-row>
		<v-col
			id="usage"
			class="mb-5"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#usage"
				>#</a>
				Usage
			</h2>

			<v-row>
				<v-col cols="12">
					<CodeBlock
						:code="usageCode"
						highlightjs
						lang="javascript"
					/>
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>

<script setup>
import { inject } from 'vue';

const classes = inject('classes');

const usageCode = `import App from './App.vue';
import VDrilldownTable from 'vuetify-drilldown-table';
import { createApp } from 'vue';

const app = createApp(App);
app.use(VDrilldownTable);
app.mount('#app');`;
</script>
