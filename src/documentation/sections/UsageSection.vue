<template>
	<v-row>
		<v-col
			id="usage"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#usage"
				>#</a>
				Usage
			</h2>
		</v-col>

		<v-col cols="12">
			<CodeBlock
				:code="usageCode"
				:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
				lang="javascript"
				:prismjs="codeBlockSettings.plugin === 'prismjs'"
				:theme="codeBlockSettings.theme"
			/>
		</v-col>
	</v-row>
</template>

<script setup>
import { computed, inject } from 'vue';

const props = defineProps({
	codeBlockOptions: {
		required: true,
		type: Object,
	},
});

const codeBlockSettings = computed(() => props.codeBlockOptions);
const classes = inject('classes');

const usageCode = `import App from './App.vue';
import VDrilldownTable from 'vuetify-drilldown-table';
import { createApp } from 'vue';

const app = createApp(App);
app.component('VDrilldownTable', VDrilldownTable);
app.mount('#app');`;
</script>
