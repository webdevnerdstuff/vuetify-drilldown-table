import { defineStore } from 'pinia';
import { useCoreStore } from './index';

export const usePropsStore = defineStore('props', () => {
	const coreStore = useCoreStore();
	const links = coreStore.links;

	const colorProps = [
		{
			default: 15,
			desc: 'Sets the percentage change for the header row background color within the drilldown tables.',
			name: 'color-percentage-change',
			type: 'number',
		},
		{
			default: 'desc',
			desc: 'Sets the direction of the percentage change for the header row background color within the drilldown tables.',
			name: 'color-percentage-direction',
			type: "'asc' | 'desc'",
		},
		{
			default: undefined,
			desc: 'Internal use only.',
			name: 'colors',
			type: 'object',
		},
		{
			default: `<pre class="inline-code"><code>{
  background: '--v-theme-surface',
  border: 'transparent',
  color: '--v-theme-on-surface',
}</code></pre>`,
			desc: 'Sets default colors to use for the header and footer rows, and table bottom border. See <a href="#props-colors">Colors</a> for more information.',
			name: 'default-colors',
			type: 'object',
		},
		{
			default: '--v-theme-surface',
			desc: 'Sets the background color of the footer row.',
			name: 'footer-background-color',
			type: 'string',
		},
		{
			default: '--v-theme-on-surface',
			desc: 'Sets the text color of the footer row.',
			name: 'footer-color',
			type: 'string',
		},
		{
			default: '--v-theme-surface',
			desc: 'Sets the background color of the header row.',
			name: 'header-background-color',
			type: 'string',
		},
		{
			default: '--v-theme-on-surface',
			desc: 'Sets the text color of the header row.',
			name: 'header-color',
			type: 'string',
		},
	];

	const tableLoaderProps = [
		{
			default: false,
			desc: 'Displays the specified loader set with the <code class="inline-code">loaderType</code> prop',
			name: 'loading',
			type: 'boolean',
		},
		{
			default: '',
			desc: 'Used to bind the props of the <code class="inline-code">VProgressLinear</code>, <code class="inline-code">VProgressCircular</code>, and <code class="inline-code">VSkeletonLoader</code> loaders. See the <a href="#props-table-loader">Table Loader Props</a> for more information.',
			name: 'loader-props',
			type: 'object',
		},
		{
			default: 'linear',
			desc: 'Sets the type of loader. Available types are <code class="inline-code">linear</code>, <code class="inline-code">circular</code>, <code class="inline-code">text</code> and <code class="inline-code">skelton</code>. You can also use multiple loaders by passing an array of types. The order of the array determines the order of the loaders. To use the <a href="#slots-supported-loader"><code class="inline-code">loader</code></a> slot, set this prop to <code class="inline-code">null</code> or <code class="inline-code">false</code>.',
			name: 'loader-type',
			type: 'string | string[] | false | null',
		},
	];


	const allProps = [
		...colorProps,
		...tableLoaderProps,
		{
			default: '[]',
			desc: 'Internal use only. This holds the header cell widths when the <code class="inline-code">matchColumnWidths</code> prop is set.',
			name: 'column-widths',
			type: 'object',
		},
		{
			default: '',
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
			default: `{
				lg: 3,
				md: 6,
				sm: 12,
				xl: 3,
				xs: 12,
				xxl: 2,
			}`,
			desc: 'Sets the cols prop of the <code class="inline-code">VCol</code> component that wraps the search input inside the <code class="inline-code"><a href="#slots-top-left">top.left</a></code> slot. This is useful if you want to change the width of the search input.',
			name: 'search-container-cols',
			type: 'string | undefined',
		},
		{
			default: 0,
			desc: 'The delay before the search filters the items',
			name: 'search-debounce',
			type: 'number | undefined | null',
		},
		{
			default: undefined,
			desc: 'Used to bind events to the <code class="inline-code">VTextField</code> used for the search field when <code class="inline-code">show-search</code> is <code class="inline-code">true</code>.. You can see an example of how to do this in the Playground <code class="inline-code">tableDefaults.ts</code> file.',
			name: 'search-events',
			type: 'object',
		},
		{
			default: 1000,
			desc: 'The maximum time to wait before the search filters the items',
			name: 'search-max-wait',
			type: 'number | undefined | null',
		},
		{
			default: undefined,
			desc: 'Used to bind the props of the <code class="inline-code">VTextField</code> used for the search field when <code class="inline-code">show-search</code> is <code class="inline-code">true</code>.',
			name: 'search-props',
			type: 'object',
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
			desc: 'Determines if the table should show the <code class="inline-code">VDrilldownTable</code> built in <code class="inline-code">VTextField</code> in the <code class="inline-code">top</code> slot. You can use the prop <code class="inline-code"><a href="#props-all-search-props">search-props</a></code> to customize the <code class="inline-code">VTextField</code>.',
			name: 'show-search',
			type: 'boolean',
		},
		{
			default: 'VDataTable',
			desc: 'Internal use only',
			name: 'table-type',
			type: 'VDataTable | VDataTableServer',
		},
	];

	return {
		allProps,
		tableLoaderProps,
	};
});

