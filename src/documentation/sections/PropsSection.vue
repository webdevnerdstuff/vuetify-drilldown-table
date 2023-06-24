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
			<FeaturesTable
				:headers="store.tableHeaders"
				:items="propsStore.allProps"
				section-id="props-all"
				section-title="All Props"
				subtitle="These all of the available props"
			/>
		</v-col>

		<v-col cols="12">
			<CellRenderingSection :codeBlockOptions="codeBlockOptions" />
		</v-col>

		<ColorsProp :codeBlockOptions="codeBlockOptions" />
		<TableLoaderProps :codeBlockOptions="codeBlockOptions" />
	</v-row>
</template>

<script setup>
import { inject } from 'vue';
import { CellRenderingSection } from '@/documentation/sections';
import { FeaturesTable } from '@/documentation/components';
import { useCoreStore } from '@/stores/index';
import { usePropsStore } from '@/stores/props';

import {
	ColorsProp,
	TableLoaderProps,
} from '@/documentation/sections/subSections';


defineProps({
	codeBlockOptions: {
		required: true,
		type: Object,
	},
});

const classes = inject('classes');
const propsStore = usePropsStore();
const store = useCoreStore();
</script>

<style lang="scss" scoped>
</style>
