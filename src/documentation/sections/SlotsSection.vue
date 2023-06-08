<template>
	<v-row>
		<v-col
			id="slots"
			class="mb-5"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#slots"
				>#</a>
				Slots
			</h2>

			<div>
				Most of the available table slots are available. Please refer to the <a
					:href="store.links.vuetify"
					target="_blank"
				>Vuetify</a> documentation for specific slots information not shown here.
			</div>
		</v-col>

		<v-col cols="12">
			<FeaturesTable
				:headers="store.tableHeaders"
				:items="slotsCustom"
				section-id="slots-custom"
				section-title="Custom"
				subtitle="These all of the slots that are custom to this component"
			/>
		</v-col>

		<v-col cols="12">
			<FeaturesTable
				:headers="tableHeaders"
				:items="slotsSupported"
				section-id="slots-supported"
				section-title="Supported"
				subtitle="These all of the slots that are supported"
			/>
		</v-col>

		<v-col cols="12">
			<FeaturesTable
				:headers="tableHeaders"
				:items="slotsNotSupported"
				section-id="slots-not-supported"
				section-title="Not Supported"
				subtitle="These all of the slots that are not supported"
			/>
		</v-col>

		<v-col cols="12">
			<v-row>
				<v-col cols="12">
					<v-card>
						<v-table
							class="features-table"
							:headers="tableHeaders"
							hide-default-footer
							:items="slots"
							:items-per-page="-1"
							:search="search"
							:sort-by="[{ key: 'name', order: 'asc' }]"
						>
							<tbody>
								<!-- [`column.${string}`] slot -->
								<tr
									id="slots-column-string"
									:class="rowClass"
								>
									<td>
										<span class="name-item text-mono ml-n2">
											<span class="text-primary">#</span>
											<a
												class="text-primary"
												:class="classes.appLink"
												href="#slots-column-string"
											>[`column.${string}`]</a>
										</span>
									</td>
								</tr>
								<tr>
									<td>
										The <code class="inline-code">[`column.${string}`]</code> slot is available for each column.
									</td>
								</tr>

								<!-- [`item.${string}`] slot -->
								<tr
									id="slots-item-string"
									:class="rowClass"
								>
									<td>
										<span class="name-item text-mono ml-n2">
											<span class="text-primary">#</span>
											<a
												class="text-primary"
												:class="classes.appLink"
												href="#slots-item-string"
											>[`item.${string}`]</a>
										</span>
									</td>
								</tr>
								<tr>
									<td>
										The <code class="inline-code">[`item.${string}`]</code> slot is available for each item.
									</td>
								</tr>

								<!-- body slot -->
								<tr
									id="slots-body"
									:class="rowClass"
								>
									<td>
										<span class="name-item text-mono ml-n2">
											<span class="text-primary">#</span>
											<a
												class="text-primary"
												:class="classes.appLink"
												href="#slots-body"
											>body</a>
										</span>
									</td>
								</tr>
								<tr>
									<td>
										The <code class="inline-code">body</code> slot is available.
									</td>
								</tr>

								<!-- colgroup slot -->
								<!-- <tr
									id="slots-colgroup"
									:class="rowClass"
								>
									<td>
										<span class="name-item text-mono ml-n2">
											<span class="text-primary">#</span>
											<a
												class="text-primary"
												:class="classes.appLink"
												href="#slots-colgroup"
											>colgroup</a>
										</span>
									</td>
								</tr>
								<tr>
									<td>
										The <code class="inline-code">colgroup</code> slot is not available at this time.
									</td>
								</tr> -->

								<!-- column.data-table-expand slot -->
								<tr
									id="slots-column-data-table-expand"
									:class="rowClass"
								>
									<td>
										<span class="name-item text-mono ml-n2">
											<span class="text-primary">#</span>
											<a
												class="text-primary"
												:class="classes.appLink"
												href="#slots-column-data-table-expand"
											>column.data-table-expand</a>
										</span>
									</td>
								</tr>
								<tr>
									<td>
										The <code class="inline-code">column.data-table-expand</code> slot is available.
									</td>
								</tr>

								<!-- column.data-table-select slot -->
								<tr
									id="slots-column-data-table-select"
									:class="rowClass"
								>
									<td>
										<span class="name-item text-mono ml-n2">
											<span class="text-primary">#</span>
											<a
												class="text-primary"
												:class="classes.appLink"
												href="#slots-column-data-table-select"
											>column.data-table-select</a>
										</span>
									</td>
								</tr>
								<tr>
									<td>
										The <code class="inline-code">column.data-table-select</code> slot is available.
									</td>
								</tr>

								<!-- data-table-group slot -->
								<!-- <tr
									id="slots-data-table-group"
									:class="rowClass"
								>
									<td>
										<span class="name-item text-mono ml-n2">
											<span class="text-primary">#</span>
											<a
												class="text-primary"
												:class="classes.appLink"
												href="#slots-data-table-group"
											>data-table-group</a>
										</span>
									</td>
								</tr>
								<tr>
									<td>
										The <code class="inline-code">data-table-group</code> slot is not available as the <code
											class="inline-code"
										>group-by</code> prop and grouping is not available.
									</td>
								</tr> -->

								<!-- data-table-select slot -->
								<!-- <tr
									id="slots-data-table-select"
									:class="rowClass"
								>
									<td>
										<span class="name-item text-mono ml-n2">
											<span class="text-primary">#</span>
											<a
												class="text-primary"
												:class="classes.appLink"
												href="#slots-data-table-select"
											>data-table-select</a>
										</span>
									</td>
								</tr>
								<tr>
									<td>
										The <code class="inline-code">data-table-select</code> slot is not available as the <code
											class="inline-code"
										>group-by</code> prop and grouping is not available.
									</td>
								</tr> -->

								<!-- default slot -->
								<!-- <tr
									id="slots-default"
									:class="rowClass"
								>
									<td>
										<span class="name-item text-mono ml-n2">
											<span class="text-primary">#</span>
											<a
												class="text-primary"
												:class="classes.appLink"
												href="#slots-default"
											>default</a>
										</span>
									</td>
								</tr>
								<tr>
									<td>
										The <code class="inline-code">default</code> slot is not available.
									</td>
								</tr> -->

								<!-- expanded-row slot -->
								<!-- <tr
									id="slots-expanded-row"
									:class="rowClass"
								>
									<td>
										<span class="name-item text-mono ml-n2">
											<span class="text-primary">#</span>
											<a
												class="text-primary"
												:class="classes.appLink"
												href="#slots-expanded-row"
											>expanded-row</a>
										</span>
									</td>
								</tr>
								<tr>
									<td>
										The <code class="inline-code">expanded-row</code> slot is not available as the drilldown table is
										using it.
									</td>
								</tr> -->

								<!-- footer.prepend slot -->
								<tr
									id="slots-footer-prepend"
									:class="rowClass"
								>
									<td>
										<span class="name-item text-mono ml-n2">
											<span class="text-primary">#</span>
											<a
												class="text-primary"
												:class="classes.appLink"
												href="#slots-footer-prepend"
											>footer.prepend</a>
										</span>
									</td>
								</tr>
								<tr>
									<td>
										The <code class="inline-code">footer.prepend</code> slot is available.
									</td>
								</tr>

								<!-- group-header slot -->
								<!-- <tr
									id="slots-group-header"
									:class="rowClass"
								>
									<td>
										<span class="name-item text-mono ml-n2">
											<span class="text-primary">#</span>
											<a
												class="text-primary"
												:class="classes.appLink"
												href="#slots-group-header"
											>group-header</a>
										</span>
									</td>
								</tr>
								<tr>
									<td>
										The <code class="inline-code">group-header</code> slot is not available as the <code
											class="inline-code"
										>group-by</code> prop and grouping is not available.
									</td>
								</tr> -->

								<!-- headers slot -->
								<!-- <tr
									id="slots-headers"
									:class="rowClass"
								>
									<td>
										<span class="name-item text-mono ml-n2">
											<span class="text-primary">#</span>
											<a
												class="text-primary"
												:class="classes.appLink"
												href="#slots-headers"
											>headers</a>
										</span>
									</td>
								</tr>
								<tr>
									<td>
										The <code class="inline-code">headers</code> slot is not available as the drilldown table is using it.
									</td>
								</tr> -->

								<!-- item slot -->
								<!-- <tr
									id="slots-item"
									:class="rowClass"
								>
									<td>
										<span class="name-item text-mono ml-n2">
											<span class="text-primary">#</span>
											<a
												class="text-primary"
												:class="classes.appLink"
												href="#slots-item"
											>item</a>
										</span>
									</td>
								</tr>
								<tr>
									<td>
										The <code class="inline-code">item</code> slot is not available.
									</td>
								</tr> -->

								<!-- item.data-table-expand slot -->
								<tr
									id="slots-item-data-table-expand"
									:class="rowClass"
								>
									<td>
										<span class="name-item text-mono ml-n2">
											<span class="text-primary">#</span>
											<a
												class="text-primary"
												:class="classes.appLink"
												href="#slots-item-data-table-expand"
											>item.data-table-expand</a>
										</span>
									</td>
								</tr>
								<tr>
									<td>
										The <code class="inline-code">item.data-table-expand</code> is available even though the <code
											class="inline-code"
										>item</code> slot is not.
									</td>
								</tr>

								<!-- item.data-table-select slot -->
								<!-- <tr
									id="slots-item-data-table-select"
									:class="rowClass"
								>
									<td>
										<span class="name-item text-mono ml-n2">
											<span class="text-primary">#</span>
											<a
												class="text-primary"
												:class="classes.appLink"
												href="#slots-item-data-table-select"
											>item.data-table-select</a>
										</span>
									</td>
								</tr>
								<tr>
									<td>
										The <code class="inline-code">item.data-table-select</code> is available even though the <code
											class="inline-code"
										>item</code> slot is not.
									</td>
								</tr> -->

								<!-- loader slot -->
								<!-- <tr
									id="slots-loader"
									:class="rowClass"
								>
									<td>
										<span class="name-item text-mono ml-n2">
											<span class="text-primary">#</span>
											<a
												class="text-primary"
												:class="classes.appLink"
												href="#slots-loader"
											>loader</a>
										</span>
									</td>
								</tr>
								<tr>
									<td>
										The <code class="inline-code">loader</code> slot is not available.
									</td>
								</tr> -->

								<!-- loading slot -->
								<tr
									id="slots-loading"
									:class="rowClass"
								>
									<td>
										<span class="name-item text-mono ml-n2">
											<span class="text-primary">#</span>
											<a
												class="text-primary"
												:class="classes.appLink"
												href="#slots-loading"
											>loading</a>
										</span>
									</td>
								</tr>
								<tr>
									<td>
										The <code class="inline-code">loading</code> slot is available.
									</td>
								</tr>

								<!-- no-data slot -->
								<tr
									id="slots-no-data"
									:class="rowClass"
								>
									<td>
										<span class="name-item text-mono ml-n2">
											<span class="text-primary">#</span>
											<a
												class="text-primary"
												:class="classes.appLink"
												href="#slots-no-data"
											>no-data</a>
										</span>
									</td>
								</tr>
								<tr>
									<td>
										The <code class="inline-code">no-data</code> slot is available.
									</td>
								</tr>

								<!-- tbody slot -->
								<tr
									id="slots-tbody"
									:class="rowClass"
								>
									<td>
										<span class="name-item text-mono ml-n2">
											<span class="text-primary">#</span>
											<a
												class="text-primary"
												:class="classes.appLink"
												href="#slots-tbody"
											>tbody</a>
										</span>
									</td>
								</tr>
								<tr>
									<td>
										The <code class="inline-code">tbody</code> slot is available.
									</td>
								</tr>

								<!-- tfoot slot -->
								<tr
									id="slots-tfoot"
									:class="rowClass"
								>
									<td>
										<span class="name-item text-mono ml-n2">
											<span class="text-primary">#</span>
											<a
												class="text-primary"
												:class="classes.appLink"
												href="#slots-tfoot"
											>tfoot</a>
										</span>
									</td>
								</tr>
								<tr>
									<td>
										The <code class="inline-code">tfoot</code> slot is available.
									</td>
								</tr>

								<!-- thead slot -->
								<tr
									id="slots-thead"
									:class="rowClass"
								>
									<td>
										<span class="name-item text-mono ml-n2">
											<span class="text-primary">#</span>
											<a
												class="text-primary"
												:class="classes.appLink"
												href="#slots-thead"
											>thead</a>
										</span>
									</td>
								</tr>
								<tr>
									<td>
										The <code class="inline-code">thead</code> slot is available.
									</td>
								</tr>

								<!-- top slot -->
								<tr
									id="slots-top"
									:class="rowClass"
								>
									<td>
										<span class="name-item text-mono ml-n2">
											<span class="text-primary">#</span>
											<a
												class="text-primary"
												:class="classes.appLink"
												href="#slots-top"
											>thead</a>
										</span>
									</td>
								</tr>
								<tr>
									<td>
										The <code class="inline-code">top</code> slot is available.
									</td>
								</tr>

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
											highlightjs
											lang="javascript"
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
											highlightjs
											lang="javascript"
										/>
									</td>
								</tr>
							</tbody>
						</v-table>
					</v-card>
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>


<script setup>
import { inject, watch } from 'vue';
import { useTheme } from 'vuetify';
import { useCoreStore } from '@/stores/index';
import { FeaturesTable } from '@/documentation/components';


const classes = inject('classes');
const store = useCoreStore();
const search = ref('');

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
		key: 'info',
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

const slotsCustom = [
	{
		default: '',
		desc: 'tbd',
		name: 'top.left',
		type: '',
	},
	{
		default: '',
		desc: 'tbd',
		name: 'top.right',
		type: '',
	},
];

const slotsSupported = [
	{
		default: '',
		desc: 'tbd',
		name: '[`column.${string}`]',
		type: '',
	},
	{
		default: '',
		desc: 'tbd',
		name: '[`item.${string}`]',
		type: '',
	},
	{
		default: '',
		desc: 'tbd',
		name: 'body',
		type: '',
	},
	{
		default: '',
		desc: 'tbd',
		name: 'column.data-table-expand',
		type: '',
	},
	{
		default: '',
		desc: 'tbd',
		name: 'column.data-table-select',
		type: '',
	},
	{
		default: '',
		desc: 'tbd',
		name: 'footer.prepend',
		type: '',
	},
	{
		default: '',
		desc: 'tbd',
		name: 'item.data-table-expand',
		type: '',
	},
	{
		default: '',
		desc: 'tbd',
		name: 'item.data-table-select',
		type: '',
	},
	{
		default: '',
		desc: 'tbd',
		name: 'loading',
		type: '',
	},
	{
		default: '',
		desc: 'tbd',
		name: 'no-data',
		type: '',
	},
	{
		default: '',
		desc: 'tbd',
		name: 'tbody',
		type: '',
	},
	{
		default: '',
		desc: 'tbd',
		name: 'tfoot',
		type: '',
	},
	{
		default: '',
		desc: 'tbd',
		name: 'thead',
		type: '',
	},
	{
		default: '',
		desc: 'tbd',
		name: 'top',
		type: '',
	},
];

const slotsNotSupported = [
	{
		default: '',
		desc: 'tbd',
		name: 'colgroup',
		type: '',
	},
	{
		default: '',
		desc: 'tbd',
		name: 'data-table-group',
		type: '',
	},
	{
		default: '',
		desc: 'tbd',
		name: 'data-table-select',
		type: '',
	},
	{
		default: '',
		desc: 'tbd',
		name: 'default',
		type: '',
	},
	{
		default: '',
		desc: 'tbd',
		name: 'expanded-row',
		type: '',
	},
	{
		default: '',
		desc: 'tbd',
		name: 'group-header',
		type: '',
	},
	{
		default: '',
		desc: 'tbd',
		name: 'headers',
		type: '',
	},
	{
		default: '',
		desc: 'tbd',
		name: 'item',
		type: '',
	},
	{
		default: '',
		desc: 'tbd',
		name: 'loader',
		type: '',
	},
]

</script>

