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

		<ExampleContainer
			:code="getTemplateCode('ClientTableRef')"
			:codeBlockSettings="codeBlockSettings"
			@closePicker="closePicker('ClientTableRef');"
		>
			<Example.ClientTable
				ref="ClientTableRef"
				:open="refElementsOpen.ClientTableRef"
			/>
		</ExampleContainer>

		<ExampleContainer
			:code="getTemplateCode('ServerTableRef')"
			:codeBlockSettings="codeBlockSettings"
			@closePicker="closePicker('ServerTableRef');"
		>
			<Example.ServerTable
				ref="ServerTableRef"
				:open="refElementsOpen.ServerTableRef"
			/>
		</ExampleContainer>
	</v-row>
</template>

<script setup lang="ts">
import type { ExampleCode } from '../components/ExampleContainer.vue';
import ExampleContainer from '../components/ExampleContainer.vue';
import * as Example from '../components/examples';


const codeBlockSettings = inject<Docs.CodeBlockSettings>('codeBlockSettings')!;
const classes = inject<Docs.GlobalClasses>('classes')!;

const ClientTableRef = ref(null);
const ServerTableRef = ref(null);


const refElements = ref({
	ClientTableRef,
	ServerTableRef,
});

const refElementsOpen = ref({
	ClientTableRef: null,
	ServerTableRef: null,
});

function getTemplateCode(exampleName: string): ExampleCode {
	const el = refElements.value[exampleName];
	const example = el?.exampleCode ?? { code: '', desc: undefined, name: undefined, template: '' };

	return example;
}

function closePicker(key: string) {
	refElementsOpen.value[key] = new Date().getTime().toString();
}
</script>
