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
			<VCodeBlock
				:code="usageGlobalPlugin"
				:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
				lang="javascript"
				:prismjs="codeBlockSettings.plugin === 'prismjs'"
				:theme="codeBlockSettings.theme"
			>
				<template #label>
					Global Plugin Registration
					<br>
					<i>Global options have a higher precedence and will override local props</i>
				</template>
			</VCodeBlock>
		</v-col>

		<v-col cols="12">
			<VCodeBlock
				:code="usageGlobalComponent"
				:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
				label="Global Component Registration"
				lang="javascript"
				:prismjs="codeBlockSettings.plugin === 'prismjs'"
				:theme="codeBlockSettings.theme"
			/>
		</v-col>


		<v-col cols="12">
			<VCodeBlock
				:code="usageIndividual"
				F
				:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
				label="Local Registration"
				lang="html"
				:prismjs="codeBlockSettings.plugin === 'prismjs'"
				:theme="codeBlockSettings.theme"
			/>
		</v-col>
	</v-row>
</template>

<script setup lang="ts">
const codeBlockSettings = inject<Docs.CodeBlockSettings>('codeBlockSettings')!;
const classes = inject<Docs.GlobalClasses>('classes')!;

const usageGlobalPlugin = `import { createApp } from 'vue';
import App from './App.vue';
import { createVDrilldownTable } from '@wdns/vuetify-drilldown-table';

const app = createApp(App);

app.use(createVDrilldownTable({
  // options
}));

app.mount('#app');`;

const usageGlobalComponent = `import { createApp } from 'vue';
import App from './App.vue';
import { VDrilldownTable } from  '@wdns/vuetify-drilldown-table';

const app = createApp(App);

app.component('VDrilldownTable', VDrilldownTable);

app.mount('#app');`;

const usageIndividual = `<template>
  <VDrilldownTable
    :headers="headers"
    :items="items"
  />
</template>

\<script setup\>
  import VDrilldownTable from  '@wdns/vuetify-drilldown-table';

  const headers = ref([
    // ...
  ]);
  const items = ref([
    // ...
  ])
\</script\>`;
</script>
