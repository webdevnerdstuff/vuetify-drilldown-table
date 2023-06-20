export default {
	color: 'primary',																					// ? Not sure what this does. Needs Testing
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
			// bg: '',
			circular: 'primary',
			color: 'primary',
			linear: 'surface-variant',
			text: 'surface-variant',
		},
		percentageChange: 25,
		percentageDirection: 'desc',
	},
	density: 'compact',
	drilldownKey: 'id',
	elevation: 5,
	expandOnClick: false,
	firstIcon: '$first',
	fixedFooter: true, 																				// ? Not sure what this does. Needs Testing
	fixedHeader: true, 																				// ? Not sure what this does. Needs Testing
	footers: [],
	headers: [],
	height: 'auto',
	hideDrilldownWhenLoading: true,
	hideNoData: false,
	hover: false,
	itemChildrenKey: 'child',
	itemProps: [],																						// ? Not sure what this does. Needs Testing
	itemTitle: 'title',																				// ? Not sure what this does. Needs Testing
	itemValue: 'id',
	items: [],
	itemsLength: 0,
	itemsPerPage: 5,
	itemsPerPageOptions: [
		{
			title: '5',
			value: 5,
		},
		{
			title: '10',
			value: 10,
		},
		{
			title: '25',
			value: 25,
		},
		{
			title: '50',
			value: 50,
		},
		{
			title: '100',
			value: 100,
		},
		{
			title: '$vuetify.dataFooter.itemsPerPageAll',
			value: -1,
		}
	],
	itemsPerPageText: '$vuetify.dataFooter.itemsPerPageText',
	lastIcon: '$last',
	lastPageLabel: '$vuetify.dataFooter.lastPage',						// ? Not sure what this does. Needs Testing
	level: 1,
	levels: 3,
	loaderHeight: '2px',
	loaderSize: 'default',
	loaderType: [
		'linear',
		// 'circular',
		// 'text',
		// 'skelton',
	],
	loading: false,
	loadingText: '$vuetify.dataIterator.loadingText',
	multiSort: false,
	mustSort: false,
	nextIcon: '$next',
	nextPageLabel: '$vuetify.dataFooter.nextPage',						// ? Not sure what this does. Needs Testing
	noDataText: '$vuetify.noDataText',
	// noFilter: false,																				// ? Not sure what this does. Needs Testing
	page: 1,
	pageText: '$vuetify.dataFooter.pageText',
	prevIcon: '$prev',
	prevPageLabel: '$vuetify.dataFooter.prevPage',						// ? Not sure what this does. Needs Testing
	returnObject: false,																			// ? Not sure what this does. Needs Testing
	rowHeight: undefined,																			// ? Not sure what this does. Needs Testing
	search: '',
	searchDebounce: 750,
	searchMaxWait: 1000,
	searchProps: { 																						// ? VDrilldownTable Custom Prop
		cols: {
			lg: 3,
			md: 6,
			sm: 12,
			xl: 3,
			xs: 12,
			xxl: 2,
		},
		density: 'compact',
		variant: 'underlined',
	},
	selectStrategy: 'page',																		// ! Testing
	server: false,
	showCurrentPage: false,
	showDrilldownWhenLoading: true,
	showExpand: false,
	showFooterRow: true,
	showSearch: false,																				// * Works - May or may not keep
	showSelect: false,
	skeltonType: 'heading@1',
	sortAscIcon: '$sortAsc',
	sortBy: [],
	sticky: false,																						// ? Not sure what this does. Needs Testing
	tag: 'div',
	theme: undefined,
	width: undefined,																					// ? Not sure what this does. Needs Testing
};
