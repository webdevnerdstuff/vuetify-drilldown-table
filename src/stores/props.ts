import { defineStore } from 'pinia';
import { useCoreStore } from './index';

export const usePropsStore = defineStore('props', () => {
	const coreStore = useCoreStore();
	const links = coreStore.links;

	const tableLoaderProps = [
		{
			default: '1px',
			desc: `Sets the height for the linear progress loader. See <a href="${links.vuetify}/en/api/v-progress-linear/#props-height" target="_blank"><code class="inline-code">VProgressLinear</code></a> for more information.`,
			name: 'loader-height',
			type: 'VProgressLinear["$props"]["height"]',
		},
		{
			default: 'default',
			desc: `Sets the diameter of the circular progress loader circle in pixels. See <a href="${links.vuetify}/en/api/v-progress-circular/#props-size" target="_blank"><code class="inline-code">VProgressCircular</code></a> for more information.`,
			name: 'loader-size',
			type: 'VProgressCircular["$props"]["size"]',
		},
		{
			default: 'linear',
			desc: 'Sets the type of loader. Available types are <code class="inline-code">linear</code>, <code class="inline-code">circular</code>, <code class="inline-code">text</code> and <code class="inline-code">skelton</code>. You can also use multiple loaders by passing an array of types. The order of the array determines the order of the loaders. To use the <a href="#slots-supported-loader"><code class="inline-code">loader</code></a> slot, set this prop to <code class="inline-code">null</code> or <code class="inline-code">false</code>.',
			name: 'loader-type',
			type: 'string | string[] | false | null',
		},
		{
			default: 'heading@1',
			desc: `The type of skelton loader to show. See <a href="${links.vuetify}/en/api/v-skeleton-loader/#props-type" target="_blank">Vuetify Skeleton Loader</a> for more information.`,
			name: 'skelton-type',
			type: 'string',
		},
	];

	const allProps = [
		...tableLoaderProps,
		{
			default: '',
			desc: 'Applies specified colors to the table. See the <a href="#props-colors">Colors Prop</a> section for more information and default settings.',
			name: 'colors',
			type: 'ColorsObject | null',
		},
		{
			default: () => ([]),
			desc: 'Internal use only. This holds the header cell widths when the <code class="inline-code">matchColumnWidths</code> prop is set.',
			name: 'column-widths',
			type: 'object',
		},
		{
			default: () => ({}),
			desc: 'Internal use only. This holds the drilldown tables data and settings.',
			name: 'drilldown',
			type: 'object',
		},
		{
			default: 'id',
			desc: 'The key to use for the drilldown table',
			name: 'drilldown-key',
			type: 'string',
		},
		{
			default: 0,
			desc: 'Elevation of the table',
			name: 'elevation',
			type: 'string | number | undefined',
		},
		{
			default: undefined,
			desc: 'An array of objects that each describe a footer column. The formatting of the objects are the same as the <a href="#props-all-headers"><code class="inline-code">headers</code></a> prop and should be the same (mostly) to create the same columns. To enabled the <code class="inline-code">footers</code> row you will need to set the <a href="#props-all-showfooterrow"><code class="inline-code">showFooterRow</code></a> prop to true. See <a href="#cell-rendering">Cell Rendering</a> for more information about rendering.',
			name: 'footers',
			type: 'Column[]',
		},
		{
			default: undefined,
			desc: 'An array of objects that each describe a header column. See <a href="#cell-rendering">Cell Rendering</a> for more information about rendering.',
			name: 'headers',
			type: 'VDataTable["$props"]["headers"]',
		},
		{
			default: undefined,
			desc: 'Currently not supported',
			name: 'group-by',
			type: 'VDataTable["$props"]["groupBy"]',
		},
		{
			default: false,
			desc: 'Internal use only',
			name: 'is-drilldown',
			type: 'boolean',
		},
		{
			default: undefined,
			desc: 'Internal use only',
			name: 'item',
			type: 'VDataTableRow["$props"]["item"]',
		},
		{
			default: 'child',
			desc: 'This is the key used to hold the drilldown data and settings in the item object.',
			name: 'item-children-key',
			type: 'string',
		},
		{
			default: 0,
			desc: `<code class="inline-code">VDataTableServer</code> specific prop. See <a href="${links.vuetify}/en/api/v-data-table-server/#props-items-length" target="_blank">items-length</a> prop for more information.`,
			name: 'items-length',
			type: 'number',
		},
		{
			default: 1,
			desc: 'The level of the drilldown (1 = top level)',
			name: 'level',
			type: 'number',
		},
		{
			default: 1,
			desc: 'The total number of drilldown levels',
			name: 'levels',
			type: 'number',
		},
		{
			default: false,
			desc: 'Displays the specified loader set with the <code class="inline-code">loaderType</code> prop',
			name: 'loading',
			type: 'VDataTable["$props"]["loading"]',
		},
		{
			default: false,
			desc: 'Adjusts the width of the drilldown table header cells to match the parent table\'s header cell widths. In case you specify a width for the headers, that specific column\'s width will be utilized instead. Ideally, the column count of both tables should align for optimal results. However, if they don\'t, the last column will be disregarded and automatically set to the default width used by Vuetify\'s <code class="inline-code">VDataTable</code>/<code class="inline-code">VDataTableServer</code>.',
			name: 'match-column-widths',
			type: 'boolean',
		},
		{
			default: true,
			desc: 'Missing description in Vuetify docs. This prop <u>needs</u> to be set to <code class="inline-code">true</code> for the server table to function properly. Do not set this to <code class="inline-code">false</code>.',
			name: 'return-object',
			type: 'boolean | undefined',
		},
		{
			default: undefined,
			desc: 'Text input used to filter items',
			name: 'search',
			type: 'string | undefined',
		},
		{
			default: 750,
			desc: 'The delay before the search filters the items',
			name: 'search-debounce',
			type: 'number | undefined | null',
		},
		{
			default: 1000,
			desc: 'The maximum time to wait before the search filters the items',
			name: 'search-max-wait',
			type: 'number | undefined | null',
		},
		{
			default: 'tbd',
			desc: 'The <code class="inline-code">VTextField</code> props',
			name: 'search-props',
			type: 'SearchProps',
		},
		{
			default: 'default',
			desc: 'Enhance the appearance of the table by modifying the borders of the cells',
			name: 'separator',
			type: '\'default\' | \'horizontal\' | \'vertical\' | \'cell\' | undefined',
		},
		{
			default: false,
			desc: 'Sets the table component to <code class="inline-code">VDataTableServer</code>',
			name: 'server',
			type: 'boolean',
		},
		{
			default: true,
			desc: 'Determines if the table should show the drilldown when loading',
			name: 'show-drilldown-when-loading',
			type: 'boolean',
		},
		{
			default: false,
			desc: 'Determines if the table should show the footer row, which by default shows the same values as the header row. To customize the footer row, use the <a href="#props-all-footers"><code class="inline-code">footers</code></a> prop.',
			name: 'show-footer-row',
			type: 'boolean',
		},
		{
			default: false,
			desc: 'Determines if the table should show the <code class="inline-code">VTextField</code> in the <code class="inline-code">top</code> slot',
			name: 'show-search',
			type: 'boolean',
		},
		{
			default: 'VDataTable',
			desc: 'Internal use only',
			name: 'table-type',
			type: 'TableType',
		},
	];


	return {
		allProps,
		tableLoaderProps,
	};
});

