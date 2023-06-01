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
	firstIcon: 'mdi mdi-page-first',													// * Works
	fixedFooter: true, 																				// ? Not sure what this does. Needs Testing
	fixedHeader: true, 																				// ? Not sure what this does. Needs Testing
	footers: [],																							// * Works - May or may not keep
	headers: [],																							// * Works
	height: 'auto',																						// * Works
	itemChildrenKey: 'child',																	// * Works - Custom Prop
	itemProps: ['foo'],																				// ? Not sure what this does. Needs Testing
	itemTitle: 'title',																				// * Works, but is weird
	itemValue: 'id',																					// * Works, but is weird
	items: [],
	itemsLength: 0,																						// ? Needs Testing
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
	lastIcon: 'mdi mdi-page-last',														// * Works
	lastPageLabel: '$vuetify.dataFooter.lastPage',						// ? Not sure what this does. Needs Testing
	levels: 3,																								// * Works - Custom Prop
	loaderHeight: '',																					// * Works - Custom Prop
	loaderType: [																							// * Works - Custom Prop
		'linear',
		// 'circular',
		// 'text',
		// 'skelton',
	],
	loading: false,																						// * Works
	loadingText: '',																					// * Works
	multiSort: false,																					// * Works
	mustSort: false,
	nextIcon: 'mdi mdi-chevron-right',												// * Works
	nextPageLabel: '$vuetify.dataFooter.nextPage',						// ? Not sure what this does. Needs Testing
	// noDataText: '$vuetify.noDataText',											// * Works
	// noFilter: false,																					// ? Not sure what this does. Needs Testing
	page: 1,
	pageText: '$vuetify.dataFooter.pageText',									// * Works
	prevIcon: 'mdi mdi-chevron-left',													// * Works
	prevPageLabel: '$vuetify.dataFooter.prevPage',						// ? Not sure what this does. Needs Testing
	returnObject: false,																			// ? Not sure what this does. Needs Testing
	rowHeight: undefined,																			// ? Not sure what this does. Needs Testing
	search: '',
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
	showCurrentPage: false,																		// * Works
	showExpand: false,																				// * Works
	showFooterRow: true,
	showSearch: true,																				// * Works - May or may not keep
	showSelect: false,																				// * Works
	skeltonType: 'heading@1',																	// * Works - Custom Prop
	// sortAscIcon: '$sortAsc',																// ? Not sure if I will add this. Already made header.sort slot
	// sortDescIcon: '$sortDesc',															// ? Not sure if I will add this. Already made header.sort slot
	sortBy: [],																								// * Works
	sticky: false,																						// ? Not sure what this does. Needs Testing
	tag: 'div',																								// * Works
	theme: undefined,																					// * Works
	width: undefined,																					// ? Not sure what this does. Needs Testing
};
