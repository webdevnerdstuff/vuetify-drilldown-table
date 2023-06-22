export default {
	// color: 'primary',																			// ? Doesn't seem to work - Vuetify prop
	// colors: null,
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
	// customFilter: undefined, 															// ? Needs Testing - Vuetify prop
	// customKeyFilter: undefined,														// ? Needs Testing - Vuetify prop
	density: 'default',
	drilldownKey: 'id',
	elevation: 5,
	// expanded: () => [], 																		// ? Needs Testing - Vuetify prop
	expandOnClick: false,
	// filterKeys: undefined, 																// ? Needs Testing - Vuetify prop
	// filterMode: 'some',																		// ? Needs Testing - Vuetify prop
	firstIcon: '$first',
	// firstPageLabel: '',																		// ? Doesn't seem to work - Vuetify prop
	// fixedFooter: true, 																		// ? Doesn't seem to work - Vuetify prop
	// fixedHeader: true, 																		// ? Doesn't seem to work - Vuetify prop
	footers: [],
	headers: [],
	height: 'auto',
	hideDrilldownWhenLoading: true,
	hideNoData: false,
	hover: false,
	itemChildrenKey: 'child',
	itemSelectable: undefined,
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
	// lastPageLabel: '$vuetify.dataFooter.lastPage',					// ? Doesn't seem to work - Vuetify prop
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
	matchColumnWidths: false,
	multiSort: false,
	mustSort: false,
	nextIcon: '$next',
	nextPageLabel: '$vuetify.dataFooter.nextPage',						// ? Doesn't seem to work - Vuetify prop
	noDataText: '$vuetify.noDataText',
	page: 1,
	pageText: '$vuetify.dataFooter.pageText',
	prevIcon: '$prev',
	// prevPageLabel: '$vuetify.dataFooter.prevPage',					// ? Doesn't seem to work - Vuetify prop
	// rowHeight: undefined,																	// ? Doesn't seem to work - Vuetify prop
	search: '',
	searchDebounce: 750,
	searchMaxWait: 1000,
	searchProps: {																						// ? Needs Testing
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
	selectStrategy: 'page',
	separator: 'default',
	server: false,
	showCurrentPage: false,
	showDrilldownWhenLoading: true,
	showExpand: false,
	showFooterRow: false,
	showSearch: false,
	showSelect: true,
	skeltonType: 'heading@1',
	sortAscIcon: '$sortAsc',
	sortBy: [],
	// sticky: false,																					// ? Doesn't seem to work - Vuetify prop
	tag: 'div',
	theme: undefined,
	// width: undefined,																			// ? Doesn't seem to work - Vuetify prop
};
