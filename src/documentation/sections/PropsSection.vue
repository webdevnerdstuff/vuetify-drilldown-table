<template>
	<v-row>
		<v-col
			id="props"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#props"
				>#</a>
				Props
			</h2>
		</v-col>

		<v-col cols="12">
			Most of the Vuetify props for both <code class="inline-code">VDataTable</code> and <code
				class="inline-code">VDataTableServer</code> components work as intended. Any specified props below may have
			different default values. Please refer to the <a
				:href="store.links.vuetify"
				target="_blank"
			>Vuetify</a> documentation for specific props not shown here.
		</v-col>

		<v-col cols="12">
			<PropsTable
				:headers="store.tableHeaders"
				:items="(propsStore.allProps as Item[])"
				section-id="props-all"
				section-title="All Props"
				subtitle="These all of the available props"
			/>
		</v-col>

		<v-col cols="12">
			<CellRenderingSection :codeBlockOptions="codeBlockSettings" />
		</v-col>

		<ColorsProp :codeBlockOptions="codeBlockSettings" />
		<TableLoaderProps :codeBlockOptions="codeBlockSettings" />
	</v-row>
</template>

<script setup lang="ts">
import type { Item } from '@/documentation/components/PropsTable.vue';
import { PropsTable } from '@/documentation/components';
import { CellRenderingSection } from '@/documentation/sections';
import {
	ColorsProp,
	TableLoaderProps,
} from '@/documentation/sections/subSections';
import { useCoreStore } from '@/stores/index';
import { usePropsStore } from '@/stores/props';


const codeBlockSettings = inject<Docs.CodeBlockSettings>('codeBlockSettings')!;
const classes = inject<Docs.GlobalClasses>('classes')!;
const store = useCoreStore();
const propsStore = usePropsStore();
</script>

<style lang="scss" scoped></style>
