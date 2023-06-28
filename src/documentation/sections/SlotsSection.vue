<template>
	<v-row>
		<v-col
			id="slots"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#slots"
				>#</a>
				Slots
			</h2>
		</v-col>

		<v-col cols="12">
			Most of the available table slots are available. Please refer to the <a
				:href="store.links.vuetify"
				target="_blank"
			>Vuetify</a> documentation for specific slots information not shown here.
		</v-col>

		<v-col cols="12">
			<h3 :class="classes.h3">
				<a
					:class="classes.headerA"
					:href="`#slots-custom`"
				>#</a>
				Custom Slots
			</h3>
		</v-col>

		<v-col cols="12">
			<v-card>
				<v-table
					class="features-table"
					hide-default-footer
				>
					<tbody>
						<!-- top.left slot -->
						<tr
							id="slots-top-left"
							:class="rowClass"
						>
							<td>
								<span class="name-item text-mono ml-n2">
									<span class="text-primary">#</span>
									<a
										class="text-primary"
										:class="classes.appLink"
										href="#slots-top-left"
									>top.left</a>
								</span>
							</td>
						</tr>
						<tr>
							<td>
								<CodeBlock
									:code="topLeftRightSlotCode"
									:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
									lang="typescript"
									:prismjs="codeBlockSettings.plugin === 'prismjs'"
									:theme="codeBlockSettings.theme"
								/>
							</td>
						</tr>

						<!-- top.right slot -->
						<tr
							id="slots-top-right"
							:class="rowClass"
						>
							<td>
								<span class="name-item text-mono ml-n2">
									<span class="text-primary">#</span>
									<a
										class="text-primary"
										:class="classes.appLink"
										href="#slots-top-right"
									>top.right</a>
								</span>
							</td>
						</tr>
						<tr>
							<td>
								<CodeBlock
									:code="topLeftRightSlotCode"
									:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
									lang="typescript"
									:prismjs="codeBlockSettings.plugin === 'prismjs'"
									:theme="codeBlockSettings.theme"
								/>
							</td>
						</tr>
					</tbody>
				</v-table>
			</v-card>
		</v-col>

		<v-col cols="12">
			<FeaturesTable
				:headers="tableHeaders"
				:items="slotsSupported"
				section-id="slots-supported"
				section-title="Supported"
				subtitle="These all of the Vuetify slots that are supported"
			/>
		</v-col>

		<v-col cols="12">
			<FeaturesTable
				:headers="tableHeaders"
				:items="slotsNotSupported"
				section-id="slots-not-supported"
				section-title="Not Supported"
				subtitle="These all of the Vuetify slots that are not supported"
			/>
		</v-col>
	</v-row>
</template>


<script setup>
import { computed, inject, watch } from 'vue';
import { useTheme } from 'vuetify';
import { useCoreStore } from '@/stores/index';
import { FeaturesTable } from '@/documentation/components';


const props = defineProps({
	codeBlockOptions: {
		required: true,
		type: Object,
	},
});

const codeBlockSettings = computed(() => props.codeBlockOptions);
const store = useCoreStore();
const classes = inject('classes');
const theme = useTheme();
const isDark = ref(true);


watch(() => theme.global.current.value.dark, (val) => {
	isDark.value = val;
});

const rowClass = computed(() => {
	return isDark.value ? 'bg-grey-darken-3' : 'bg-grey-lighten-3';
});

const tableHeaders = [
	{
		align: 'start',
		filterable: true,
		key: 'name',
		sortable: true,
		title: 'Name',
		width: '20%',
	},
	{
		align: 'start',
		filterable: false,
		key: 'desc',
		sortable: false,
		title: 'Information',
	},
];

const topLeftRightSlotCode = `{
  allSelected: boolean,
  columns: InternalDataTableHeader[],
  headers: InternalDataTableHeader[][],
  items: DataTableItem[],
  itemsPerPage: number,
  level: number,
  loading: boolean,
  page: number,
  pageCount: number,
  search: string,
  selectAll: (value: boolean) => void,
  setItemsPerPage: (value: number) => void,
  toggleSelectAll: () => void,
}`;

const slotsSupported = [
	{
		desc: 'The <code class="inline-code">[`column.${string}`]</code> slot is available for each column',
		name: '[`column.${string}`]',
	},
	{
		desc: 'The <code class="inline-code">[`item.${string}`]</code> slot is available for each item',
		name: '[`item.${string}`]',
	},
	{
		desc: 'The <code class="inline-code">body</code> slot is available',
		name: 'body',
	},
	{
		desc: 'The <code class="inline-code">column.data-table-expand</code> slot is available',
		name: 'column.data-table-expand',
	},
	{
		desc: 'The <code class="inline-code">column.data-table-select</code> slot is available',
		name: 'column.data-table-select',
	},
	{
		desc: 'The <code class="inline-code">footer.prepend</code> slot is available',
		name: 'footer.prepend',
	},
	{
		desc: 'The <code class="inline-code">group-header</code> slot is available',
		name: 'group-header',
	},
	{
		desc: 'The <code class="inline-code">item.data-table-expand</code> is available',
		name: 'item.data-table-expand',
	},
	{
		desc: 'The <code class="inline-code">item.data-table-select</code> is available',
		name: 'item.data-table-select',
	},
	{
		desc: 'The <code class="inline-code">loader</code> slot is available for customizing the loading state of the data table. If you choose to use this slot you need to set the <a href="#props-all-loadertype"><code class="inline-code">loaderType</code></a> prop to <code class="inline-code">null</code> or <code class="inline-code">false</code> to disable the drilldown loader.',
		name: 'loader',
	},
	{
		desc: 'The <code class="inline-code">loading</code> slot is available',
		name: 'loading',
	},
	{
		desc: 'The <code class="inline-code">no-data</code> slot is available',
		name: 'no-data',
	},
	{
		desc: 'The <code class="inline-code">tbody</code> slot is available',
		name: 'tbody',
	},
	{
		desc: 'The <code class="inline-code">tfoot</code> slot is available',
		name: 'tfoot',
	},
	{
		desc: 'The <code class="inline-code">thead</code> slot is available',
		name: 'thead',
	},
	{
		desc: 'The <code class="inline-code">top</code> slot is available',
		name: 'top',
	},
];

const slotsNotSupported = [
	{
		desc: 'Currently not supported. Needs testing.',
		name: 'colgroup',
	},
	{
		desc: 'The <code class="inline-code">data-table-group</code> slot is not available',
		name: 'data-table-group',
	},
	{
		desc: '<code class="inline-code">MISSING DESCRIPTION</code> in the Vuetify docs',
		name: 'data-table-select',
	},
	{
		desc: 'The <code class="inline-code">default</code> slot is not available',
		name: 'default',
	},
	{
		desc: 'The <code class="inline-code">expanded-row</code> slot is not available as the drilldown table is using it',
		name: 'expanded-row',
	},
	{
		desc: 'The <code class="inline-code">headers</code> slot is not available as the drilldown table is using it',
		name: 'headers',
	},
	{
		desc: 'The <code class="inline-code">item</code> slot is not available. There are [render functions](link this) available via the <code class="inline-code">headers</code> prop. You can also use the <a href="#slots-supported-columnstring"><code class="inline-code">[`item.${string}`]</code></a> slot for each item.',
		name: 'item',
	},
]

</script>

