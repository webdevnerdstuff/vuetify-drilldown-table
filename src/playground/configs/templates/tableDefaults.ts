export default {
	color: 'primary',																					// ? Not sure what this does. Needs Testing
	colors: {																									// * Works
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
	density: 'compact',																				// * Works
	drilldownKey: 'id',																				// * Works
	elevation: 5,																							// * Works
	expandOnClick: false, 																		// * Works
	firstIcon: '$first',																			// * Works
	fixedFooter: true, 																				// ? Not sure what this does. Needs Testing
	fixedHeader: true, 																				// ? Not sure what this does. Needs Testing
	footers: [],																							// * Works
	headers: [],																							// * Works
	height: 'auto',																						// * Works
	hideDrilldownWhenLoading: true,														// * Works
	hideNoData: false,
	hover: false,																							// * Works
	itemChildrenKey: 'child',																	// * Works
	itemProps: [],																						// ? Not sure what this does. Needs Testing
	itemTitle: 'title',																				// * Works, but is weird
	itemValue: 'id',																					// * Works, but is weird
	items: [],																								// * Works
	itemsLength: 0,																						// * Works
	itemsPerPage: 5,																					// * Works
	itemsPerPageOptions: [																		// * Works
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
	itemsPerPageText: '$vuetify.dataFooter.itemsPerPageText', // * Works
	lastIcon: '$last',																				// * Works
	lastPageLabel: '$vuetify.dataFooter.lastPage',						// ? Not sure what this does. Needs Testing
	level: 1,																									// * Works
	levels: 3,																								// * Works
	loaderHeight: '2px',																			// * Works
	loaderSize: 'default',																		// * Works
	loaderType: [																							// * Works
		'linear',
		// 'circular',
		// 'text',
		// 'skelton',
	],
	loading: false,																						// * Works
	loadingText: '$vuetify.dataIterator.loadingText',					// * Works
	multiSort: false,																					// * Works
	mustSort: false,
	nextIcon: '$next',																				// * Works
	nextPageLabel: '$vuetify.dataFooter.nextPage',						// ? Not sure what this does. Needs Testing
	noDataText: '$vuetify.noDataText',												// * Works
	// noFilter: false,																				// ? Not sure what this does. Needs Testing
	page: 1,																									// * Works
	pageText: '$vuetify.dataFooter.pageText',									// * Works
	prevIcon: '$prev',																				// * Works
	prevPageLabel: '$vuetify.dataFooter.prevPage',						// ? Not sure what this does. Needs Testing
	returnObject: false,																			// ? Not sure what this does. Needs Testing
	rowHeight: undefined,																			// ? Not sure what this does. Needs Testing
	search: '',																								// * Works
	searchDebounce: 750,																			// * Works
	searchMaxWait: 1000, 																			// * Works
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
	server: false,																						// * Works
	showCurrentPage: false,																		// * Works
	showDrilldownWhenLoading: true,														// * Works
	showExpand: false,																				// * Works
	showFooterRow: true,																			// * Works
	showSearch: false,																				// * Works - May or may not keep
	showSelect: false,																				// * Works
	skeltonType: 'heading@1',																	// * Works
	sortAscIcon: '$sortAsc',																	// * Works
	sortBy: [],																								// * Works
	sticky: false,																						// ? Not sure what this does. Needs Testing
	tag: 'div',																								// * Works
	theme: undefined,																					// * Works
	width: undefined,																					// ? Not sure what this does. Needs Testing
};
