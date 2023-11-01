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
			Color Props
		</h3>
	</v-col>

	<v-col cols="12">
		To make things easier for the user to distinguish the different levels of a table, there are a few color props that
		can be utilized. While the main <a href="#examples">examples</a> are a base configuration with no colors, it is
		suggested to add the colors to the table to make it easier on the end user's readability.
	</v-col>

	<v-col cols="12">
		With these settings you can adjust the percentage change of the header and footer row colors, as well as the bottom
		border color as you drilldown to deeper levels. This helps each level to stand out from the previous level. You can
		also set the percentage change to 0 to keep the same color for each level. Each level has the capability to have it's
		own <code class="inline-code">colors</code> settings as well, you just have to adjust the settings being passed into
		the specific level inside of the <code class="inline-code">child</code> object of the item being drilled down into.
	</v-col>

	<v-col cols="12">
		Please be aware that the visual presentation and legibility of text and colors may vary based on your chosen color
		scheme and the level of detail you explore within child tables. Consequently, it may be necessary to adjust the colors
		as you delve deeper into the child tables. This can be accomplished by either passing the colors property to the
		specific child object being navigated or by leveraging CSS for customization.
	</v-col>

	<v-col cols="12">
		If you opt not to utilize the color props but still wish to customize the table's appearance, you can take advantage
		of various CSS classes embedded within the tables. These classes are designed with different levels, allowing you to
		selectively target specific elements within the tables for styling purposes.
	</v-col>

	<v-col cols="12">
		Each of the color settings accept Vuetify theme color names or variables, HEX, RGB, HSL, and CSS color names.
	</v-col>

	<v-col cols="12">
		The following <code class="ic">default-colors</code> prop setting is recommended to start with:
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

	<v-col
		id="props-colors-example"
		cols="12"
	>
		<h3 :class="classes.h3">
			<a
				:class="classes.headerA"
				href="#props-colors-example"
			>#</a>
			Table with Colors Example
		</h3>
	</v-col>

	<v-col cols="12">
		<v-btn-toggle
			v-model="selectedColor"
			density="compact"
		>
			<v-btn
				v-for="color in colors"
				:key="color"
				:active="headerBackgroundColor === color"
				:color="headerBackgroundColor === color ? color : ''"
				size="small"
				:value="color"
				@click="updateColor(color)"
			>
				{{ color }}
			</v-btn>
		</v-btn-toggle>
	</v-col>

	<ClientTable :settings="tableSettings" />
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
const colors = ref(['primary', 'secondary', 'success', 'info', 'warning', 'error']);
const headerBackgroundColor = ref('primary');
const selectedColor = ref('primary');

const defaultColors = {
	background: 'primary',
	border: 'primary',
	color: 'on-primary',
};

const tableSettings = ref({ ...tableDefaults, ...{ defaultColors } });

const colorsPropCode = `{
  background: 'primary',
  border: 'primary',
  color: 'on-primary',
}"`;

function updateColor(val) {
	tableSettings.value.defaultColors.color = val;

	if (val) {
		tableSettings.value.defaultColors.color = `on-${val}`;
	}

	headerBackgroundColor.value = val;
	tableSettings.value.defaultColors.background = val;
	tableSettings.value.defaultColors.border = val ?? 'accent';
}
</script>
