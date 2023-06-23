<template>
	<v-row>
		<v-col
			id="playground"
			class="mb-5"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#playground"
				>#</a>
				Developer Playground
			</h2>

			<p class="mb-4">
				In order to gain a comprehensive understanding of utilizing this component, we highly recommend utilizing the
				developer Playground. The Playground serves as a complete exemplification of how to effectively employ this
				component, equipped with most of the available properties. It serves as a comprehensive model that can serve as
				an ideal launching pad for your own project. You have the flexibility to customize the settings and observe
				their direct impact on the table.
			</p>

			<h3 class="mb-2 text-secondary">Setup the Playground</h3>

			<CodeBlock
				class="mb-6"
				code="git clone git@github.com:webdevnerdstuff/vuetify-drilldown-table.git"
				:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
				lang="plain"
				:prismjs="codeBlockSettings.plugin === 'prismjs'"
				:theme="codeBlockSettings.theme"
			>
				<template #label>
					First clone the <a
						:href="store.links.github"
						target="blank"
					>repository:</a>
				</template>
			</CodeBlock>

			<CodeBlock
				code="pnpm i && pnpm play"
				:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
				lang="plain"
				:prismjs="codeBlockSettings.plugin === 'prismjs'"
				:theme="codeBlockSettings.theme"
			>
				<template #label>
					Next run the following command to setup the Playground:
				</template>
			</CodeBlock>
		</v-col>

		<v-col cols="12">
			This will create the 4 files for you to adjust and play with.
			<br />
			<code class="inline-code">PlaygroundPage.vue</code> <code class="inline-code">tableDefaults.ts</code> <code
				class="inline-code"
			>ClientTable.vue</code> <code class="inline-code">ServerTable.vue</code>
		</v-col>

		<v-col cols="12">
			<h3 class="mb-2 text-secondary">PlaygroundPage.vue</h3>

			<p>
				This file includes the import of two table components. Feel free to add and customize them as needed, but the
				primary areas of interest should be the <code class="inline-code">ClientTable.vue</code> and
				<code class="inline-code">ServerTable.vue</code> files.
			</p>
		</v-col>

		<v-col cols="12">
			<h3 class="mb-2 text-secondary">tableDefaults.ts</h3>

			<p class="mb-3">
				This file imports two table components, which you can freely modify and customize according to your needs.
				However, the key areas of focus are the ClientTable.vue and ServerTable.vue files.
			</p>
			<p>
				Note that the <code class="inline-code">server</code> setting is false in this file, which the
				<code class="inline-code">ClientTable.vue</code> file uses. The <code class="inline-code">server</code> setting is
				changed in the PlaygroundPage.vue file to true for use in the <code class="inline-code">ServerTable.vue</code>
				file.
			</p>
		</v-col>

		<v-col cols="12">
			<h3 class="mb-2 text-secondary">ClientTable.vue</h3>

			<p>
				This file contains the <code class="inline-code">VDrilldownTable</code> component and an example of how to use it
				as a client side table.
			</p>
		</v-col>

		<v-col cols="12">
			<h3 class="mb-2 text-secondary">ServerTable.vue</h3>

			<p>
				This file contains the <code class="inline-code">VDrilldownTable</code> component and an example of how to use it
				as a server side table.
			</p>
		</v-col>
	</v-row>
</template>

<script setup>
import { computed, inject } from 'vue';
import { useCoreStore } from '@/stores/index';

const props = defineProps({
	codeBlockOptions: {
		required: true,
		type: Object,
	},
});


const codeBlockSettings = computed(() => props.codeBlockOptions);
const classes = inject('classes');
const store = useCoreStore();
</script>
