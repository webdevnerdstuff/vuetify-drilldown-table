<template>
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
</template>


<script setup>
import { computed, inject } from 'vue';
import tableDefaults from '@/playground/configs/templates/tableDefaults';
import { ClientTable } from '@/documentation/components/examples';

const props = defineProps({
	codeBlockOptions: {
		required: true,
		type: Object,
	},
});

const classes = inject('classes');
const codeBlockSettings = computed(() => props.codeBlockOptions);

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
		percentageChange: 25,
		percentageDirection: 'desc',
	}
};

const tableSettings = ref({ ...tableDefaults, ...{ colors: colorsProp } });

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
  percentageChange: 25,
  percentageDirection: 'desc',
}`;

</script>
