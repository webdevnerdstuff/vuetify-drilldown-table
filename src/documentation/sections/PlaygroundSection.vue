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

			<div>
				* Work in progress
				<br />
				<br />
				To full understand how to use this component, it is encouraged to use the developer Playground. The Playground
				example is a full example of how to use this component and is setup with all of the available props. It is a fully
				functional example that can be used as a starting point for your own project. You can adjust the settings and see
				how they affect the table.
				<br />
				<br />
				After you have forked and/or cloned the repository, run the following commands to start the Playground example:
			</div>
		</v-col>

		<v-col cols="12">
			<CodeBlock
				code="pnpm i && pnpm play"
				:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
				lang="plain"
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
</script>
