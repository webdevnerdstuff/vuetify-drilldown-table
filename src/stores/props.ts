import { defineStore } from 'pinia';
import { useCoreStore } from './index';

export const usePropsStore = defineStore('props', () => {
	const coreStore = useCoreStore();
	const links = coreStore.links;

	const tableLoaderProps = [
		{
			default: '1px',
			desc: `Sets the height for the linear progress loader. See <a href="${links.vuetify}/en/api/v-progress-linear/#props-height" target="_blank"><code class="inline-code">VProgressLinear</code></a> for more information.`,
			name: 'loaderHeight',
			type: 'VProgressLinear["$props"]["height"]',
		},
		{
			default: 'default',
			desc: `Sets the diameter of the circular progress loader circle in pixels. See <a href="${links.vuetify}/en/api/v-progress-circular/#props-size" target="_blank"><code class="inline-code">VProgressCircular</code></a> for more information.`,
			name: 'loaderSize',
			type: 'VProgressCircular["$props"]["size"]',
		},
		{
			default: 'linear',
			desc: 'Sets the type of loader. Available types are <code class="inline-code">linear</code>, <code class="inline-code">circular</code>, <code class="inline-code">text</code> and <code class="inline-code">skelton</code>. You can also use multiple loaders by passing an array of types. The order of the array determines the order of the loaders. To use the <a href="#slots-supported-loader"><code class="inline-code">loader</code></a> slot, set this prop to <code class="inline-code">null</code> or <code class="inline-code">false</code>.',
			name: 'loaderType',
			type: 'string | string[] | false | null',
		},
		{
			default: 'heading@1',
			desc: `The type of skelton loader to show. See <a href="${links.vuetify}/en/api/v-skeleton-loader/#props-type" target="_blank">Vuetify Skeleton Loader</a> for more information.`,
			name: 'skeltonType',
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
			name: 'groupBy',
			type: 'VDataTable["$props"]["groupBy"]',
		},
		{
			default: false,
			desc: 'Internal use only',
			name: 'isDrilldown',
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
			name: 'itemChildrenKey',
			type: 'string',
		},
		{
			default: 0,
			desc: `<code class="inline-code">VDataTableServer</code> specific prop. See <a href="${links.vuetify}/en/api/v-data-table-server/#props-items-length" target="_blank">items-length</a> prop for more information.`,
			name: 'itemsLength',
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
			default: true,
			desc: 'Missing description in Vuetify docs. This prop <u>needs</u> to be set to <code class="inline-code">true</code> for the server table to function properly. Do not set this to <code class="inline-code">false</code>.',
			name: 'returnObject',
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
			name: 'searchDebounce',
			type: 'number | undefined | null',
		},
		{
			default: 1000,
			desc: 'The maximum time to wait before the search filters the items',
			name: 'searchMaxWait',
			type: 'number | undefined | null',
		},
		{
			default: 'tbd',
			desc: 'The <code class="inline-code">VTextField</code> props',
			name: 'searchProps',
			type: 'SearchProps',
		},
		// {
		// 	default: undefined,
		// 	desc: 'tbd',
		// 	name: 'separator',
		// 	type: 'string',
		// },
		{
			default: false,
			desc: 'Sets the table component to <code class="inline-code">VDataTableServer</code>',
			name: 'server',
			type: 'boolean',
		},
		{
			default: true,
			desc: 'Determines if the table should show the drilldown when loading',
			name: 'showDrilldownWhenLoading',
			type: 'boolean',
		},
		{
			default: false,
			desc: 'Determines if the table should show the footer row, which by default shows the same values as the header row. To customize the footer row, use the <a href="#props-all-footers"><code class="inline-code">footers</code></a> prop.',
			name: 'showFooterRow',
			type: 'boolean',
		},
		{
			default: false,
			desc: 'Determines if the table should show the <code class="inline-code">VTextField</code> in the <code class="inline-code">top</code> slot',
			name: 'showSearch',
			type: 'boolean',
		},
		{
			default: 'VDataTable',
			desc: 'Internal use only',
			name: 'tableType',
			type: 'TableType',
		},
	];


	return {
		allProps,
		tableLoaderProps,
	};
});

