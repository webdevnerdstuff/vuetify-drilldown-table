<template>
	<v-col cols="12">
		<v-row id="props-table-loader">
			<v-col cols="12">
				<h3 :class="classes.h3">
					<a
						:class="classes.headerA"
						href="#props-table-loader"
					>#</a>
					Table Loader Props
				</h3>
			</v-col>

			<v-col cols="12">
				You can pass any of the props for the <code class="inline-code">VProgressLinear</code>,
				<code class="inline-code">VProgressCircular</code>, and <code class="inline-code">VSkeletonLoader</code> loaders
				that will be bound to the selected loader. The <code class="inline-code">text</code> loader object only has the
				<code class="inline-code">color</code> available as it is not a traditional Vuetify loader.
			</v-col>

			<v-col cols="12">
				<CodeBlock
					:code="defaultCode"
					:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
					label="Default table props:"
					lang="javascript"
					:prismjs="codeBlockSettings.plugin === 'prismjs'"
					:theme="codeBlockSettings.theme"
				/>
			</v-col>
		</v-row>
	</v-col>
</template>


<script setup>
import { inject } from 'vue';


const props = defineProps({
	codeBlockOptions: {
		required: true,
		type: Object,
	},
});


const codeBlockSettings = computed(() => props.codeBlockOptions);
const classes = inject('classes');

const defaultCode = `{
  circular: {
    bgColor: 'theme-surface',
    color: 'primary',
    indeterminate: true,
  },
  linear: {
    color: 'surface-variant',
    height: '2px',
    indeterminate: true,
  },
  skelton: {
    type: 'heading@1',
  },
  text: {
    color: 'surface-variant',
  },
}`;

</script>
