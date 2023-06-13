<template>
	<v-row>
		<v-col
			id="props-cell-rendering"
			cols="12"
		>
			<h3 :class="classes.h3">
				<a
					:class="classes.headerA"
					href="#props-cell-rendering"
				>#</a>
				Cell Rendering
			</h3>
		</v-col>

		<v-col cols="12">
			The VDrilldownTable <a href="#props-all-headers"><code class="inline-code">headers</code></a> props come with
			some additional functionality. While the main functionality of the <code class="inline-code">headers</code> prop
			remains the same, some additional rendering functions have been added. Additionally the <a
				href="#props-all-footers"><code class="inline-code">footers</code></a> prop has rendering functionality as well.
		</v-col>

		<v-col cols="12">
			<v-card>
				<v-table
					class="features-table"
					hide-default-footer
				>
					<thead>
						<tr>
							<th width="20%">Name</th>
							<th width="10%">Props</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<!-- ================================================== renderer -->
						<tr id="props-cell-rendering-renderer">
							<td>
								<span class="name-item text-mono ml-n2">
									<span class="text-primary">#</span>
									<a
										class="text-primary"
										:class="classes.appLink"
										href="#props-cell-rendering-renderer"
									>renderer</a>
								</span>
							</td>
							<td>
								<div>
									<code class="inline-code">headers</code>
									<br />
									<code class="inline-code">footers</code>
								</div>
							</td>
							<td>Used to customize the content of the header/footer cell. This can be used instead of using the column
								slots. This will override the <code class="inline-code">headers</code>/<code
									class="inline-code">footers</code> <code class="inline-code">title</code> parameter.</td>
						</tr>
						<tr>
							<td colspan="3">
								<CodeBlock
									:code="rendererCode"
									:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
									label="Types"
									lang="typescript"
									:prismjs="codeBlockSettings.plugin === 'prismjs'"
									:theme="codeBlockSettings.theme"
								/>
							</td>
						</tr>
						<tr>
							<td colspan="3">
								<CodeBlock
									:code="rendererExampleCode"
									:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
									label="Example"
									lang="javascript"
									:prismjs="codeBlockSettings.plugin === 'prismjs'"
									:theme="codeBlockSettings.theme"
								/>
							</td>
						</tr>

						<!-- ================================================== renderFooter -->
						<tr id="props-cell-rendering-render-footer">
							<td>
								<span class="name-item text-mono ml-n2">
									<span class="text-primary">#</span>
									<a
										class="text-primary"
										:class="classes.appLink"
										href="#props-cell-rendering-render-footer"
									>renderFooter</a>
								</span>
							</td>
							<td>
								<div>
									<code class="inline-code">footers</code>
								</div>
							</td>
							<td>Used to customize the content of the footer cell. This will override the <code
									class="inline-code">footers</code> <code class="inline-code">title</code> parameter.</td>
						</tr>
						<tr>
							<td colspan="3">
								<CodeBlock
									:code="renderFooterCode"
									:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
									label="Types"
									lang="typescript"
									:prismjs="codeBlockSettings.plugin === 'prismjs'"
									:theme="codeBlockSettings.theme"
								/>
							</td>
						</tr>
						<tr>
							<td colspan="3">
								<CodeBlock
									:code="renderFooterExampleCode"
									:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
									label="Example"
									lang="javascript"
									:prismjs="codeBlockSettings.plugin === 'prismjs'"
									:theme="codeBlockSettings.theme"
								/>
							</td>
						</tr>

						<!-- ================================================== renderHeader -->
						<tr id="props-cell-rendering-render-header">
							<td>
								<span class="name-item text-mono ml-n2">
									<span class="text-primary">#</span>
									<a
										class="text-primary"
										:class="classes.appLink"
										href="#props-cell-rendering-render-header"
									>renderHeader</a>
								</span>
							</td>
							<td>
								<div>
									<code class="inline-code">headers</code>
								</div>
							</td>
							<td>Used to customize the content of the header cell. This can be used instead of using the column
								slots. This will override the <code class="inline-code">headers</code> <code
									class="inline-code">title</code> parameter.</td>
						</tr>
						<tr>
							<td colspan="3">
								<CodeBlock
									:code="rendererHeaderCode"
									:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
									label="Types"
									lang="typescript"
									:prismjs="codeBlockSettings.plugin === 'prismjs'"
									:theme="codeBlockSettings.theme"
								/>
							</td>
						</tr>
						<tr>
							<td colspan="3">
								<CodeBlock
									:code="rendererHeaderExampleCode"
									:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
									label="Example"
									lang="javascript"
									:prismjs="codeBlockSettings.plugin === 'prismjs'"
									:theme="codeBlockSettings.theme"
								/>
							</td>
						</tr>

						<!-- ================================================== renderItem -->
						<tr id="props-cell-rendering-render-item">
							<td>
								<span class="name-item text-mono ml-n2">
									<span class="text-primary">#</span>
									<a
										class="text-primary"
										:class="classes.appLink"
										href="#props-cell-rendering-render-item"
									>renderItem</a>
								</span>
							</td>
							<td>
								<code class="inline-code">headers</code>
							</td>
							<td>Used to customize the content of the item cell. This can be used instead of using the item slots
							</td>
						</tr>
						<tr>
							<td colspan="3">
								<CodeBlock
									:code="renderItemCode"
									:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
									label="Types"
									lang="typescript"
									:prismjs="codeBlockSettings.plugin === 'prismjs'"
									:theme="codeBlockSettings.theme"
								/>
							</td>
						</tr>
						<tr>
							<td colspan="3">
								<CodeBlock
									:code="rendererItemExampleCode"
									:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
									label="Example"
									lang="javascript"
									:prismjs="codeBlockSettings.plugin === 'prismjs'"
									:theme="codeBlockSettings.theme"
								/>
							</td>
						</tr>
					</tbody>
				</v-table>
			</v-card>
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

const rendererCode = `{
  renderer: (
    value: any,
    item: DataTableItem,
    column: InternalDataTableHeader,
  ) => void
}`;

const rendererExampleCode = `const headers = [
  {
    align: 'start',
    key: 'id',
    renderer(value, item, column) {
      return \`<span class="font-italic">\${value}</span> Column\`;
    },
    sortable: true,
    title: 'ID',
    width: '20%',
  },
  {
    align: 'start',
    key: 'name',
    renderer(value, item, column) {
      return \`<span class="font-italic">\${item.raw.value}</span> Column\`;
    },
    sortable: false,
    title: 'Name',
  },
];`;

const rendererHeaderCode = `{
  renderHeader: (
    value: any,
    item: DataTableItem,
    column: InternalDataTableHeader,
  ) => void
}`;

const rendererHeaderExampleCode = `const headers = [
  {
    align: 'start',
    key: 'product_id',
    renderHeader(value, item, column) {
      return \`<span class="font-italic">\${value}</span> Column\`;
    },
    sortable: true,
    title: 'Product ID',
    width: '20%',
  },
  {
    align: 'start',
    key: 'cost',
    renderHeader(value, item, column) {
      return \`<span class="font-italic">\${item.raw.value}</span> Column\`;
    },
    sortable: false,
    title: 'Cost',
  },
];`;

const renderFooterCode = `{
  renderFooter: (
    value: any,
    item: DataTableItem,
    column: InternalDataTableHeader,
  ) => void
}`;

const renderFooterExampleCode = `const footers = [
  {
    align: 'start',
    key: 'product_id',
    renderFooter(value, item, column) {
      return 'Total Cost:';
    },
    sortable: true,
    title: 'Product ID',
    width: '20%',
  },
  {
    align: 'start',
    key: 'cost',
    renderFooter(value, item, column) {
      return \`$\${columTotalValue()}\`;
    },
    sortable: false,
    title: 'Cost',
  },
];`;

const renderItemCode = `{
  renderItem: (
    value: any,
    item: DataTableItem,
    column: InternalDataTableHeader,
  ) => void
}`;

const rendererItemExampleCode = `const headers = [
  {
    align: 'start',
    key: 'product_id',
    renderItem(value, item, column) {
      return \`ID: \${value}\`;
    },
    sortable: true,
    title: 'Product ID',
    width: '20%',
	},
  {
    align: 'start',
    key: 'cost',
    renderItem(value, item, column) {
      return \`$\${item.raw.value}\`;
    },
    sortable: false,
    title: 'Cost',
  },
];`;


</script>

<style lang="scss" scoped>
</style>

