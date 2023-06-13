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

		<v-col
			id="props-colors"
			cols="12"
		>
			<h3 :class="classes.h3">
				<a
					:class="classes.headerA"
					href="#props-colors"
				>#</a>
				Colors Prop
			</h3>
		</v-col>

		<v-col cols="12">
			To make things easier for the user to distinguish the different levels of a table, there is the <a
				href="#props-all-colors"
			><code class="inline-code">colors</code></a> prop. While the main <a href="#examples">examples</a> are a base
			configuration with no colors, it is suggested to add the colors to the table to make it easier on the end user's
			readability.
		</v-col>

		<v-col cols="12">
			With these settings you can adjust the percentage change of the header row <code class="inline-code">colors</code>
			as you drilldown to deeper levels. This helps each level to stand out from the previous level. You can also set the
			percentage change to 0 to keep the same color for each level. Each level has the capability to have it's own <code
				class="inline-code"
			>colors</code> settings as well, you just have to adjust the settings being passed into the specific level inside of
			the <code class="inline-code">child</code> object of the item being drilled down into.
		</v-col>

		<v-col cols="12">
			Each of the color settings accept Vuetify theme color names or variables, HEX, RGB, HSL, and CSS color names.
		</v-col>

		<v-col cols="12">
			The follow settings are the recommended settings to start with:
		</v-col>

		<v-col cols="12">
			<CodeBlock
				:code="colorsPropCode"
				:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
				lang="javascript"
				:prismjs="codeBlockSettings.plugin === 'prismjs'"
				:theme="codeBlockSettings.theme"
			/>
		</v-col>

		<ClientTable
			:colors="colorsProp"
			section-id="props-colors-example"
			:settings="tableSettings"
			title="Table with Colors Example"
		/>

		<v-col cols="12">
			<FeaturesTable
				:headers="store.tableHeaders"
				:items="propsStore.tableLoaderProps"
				section-id="props-table-loader"
				section-title="Table Loader Props"
				subtitle="These are all props intended for the table loader"
			/>
		</v-col>
	</v-row>
</template>

<script setup>
import { computed, inject } from 'vue';
import { CellRenderingSection } from '@/documentation/sections';
import { ClientTable } from '@/documentation/components/examples';
import { FeaturesTable } from '@/documentation/components';
import { useCoreStore } from '@/stores/index';
import { usePropsStore } from '@/stores/props';
import tableDefaults from '@/playground/configs/tableDefaults.template';


const props = defineProps({
	codeBlockOptions: {
		required: true,
		type: Object,
	},
});

const classes = inject('classes');
const codeBlockSettings = computed(() => props.codeBlockOptions);
const propsStore = usePropsStore();
const store = useCoreStore();
const tableSettings = ref({ ...tableDefaults });

const colorsProp = {
	colors: {
		body: {
			base: '--v-theme-surface',
			bg: '--v-theme-surface',
			text: '--v-theme-on-surface',
		},
		default: {
			base: 'primary',
			bg: 'primary',
			border: 'primary',
			text: 'on-primary',
		},
		footer: {
			bg: '--v-theme-surface',
			text: '--v-theme-on-surface',
		},
		header: {
			bg: 'primary',
			text: 'on-primary',
		},
		loader: {
			circular: 'primary',
			color: 'primary',
			linear: 'surface-variant',
			text: 'surface-variant',
		},
		percentageChange: 25,
		percentageDirection: 'desc',
	}
};

const colorsPropCode = `colors: {
  body: {
    base: '--v-theme-surface',
    bg: '--v-theme-surface',
    text: '--v-theme-on-surface',
  },
  default: {
    base: 'primary',
    bg: 'primary',
    border: 'primary',
    text: 'on-primary',
  },
  footer: {
    bg: '--v-theme-surface',
    text: '--v-theme-on-surface',
  },
  header: {
    bg: 'primary',
    text: 'on-primary',
  },
  loader: {
    circular: 'primary',
    color: 'primary',
    linear: 'surface-variant',
    text: 'surface-variant',
  },
  percentageChange: 25,
  percentageDirection: 'desc',
}`;
</script>

<style lang="scss" scoped>
</style>
