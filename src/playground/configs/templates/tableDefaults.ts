export default {
	color: 'primary',																					// ? Not sure what this does. Needs Testing
	colors: null,																							// * Works
	density: 'compact',																				// * Works
	drilldownKey: 'id',																				// * Works
	elevation: 5,																							// * Works
	expandOnClick: false, 																		// * Works
	firstIcon: '$first',																			// * Works
	fixedFooter: true, 																				// ? Not sure what this does. Needs Testing
	fixedHeader: true, 																				// ? Not sure what this does. Needs Testing
	footers: [],																							// * Works - May or may not keep
	headers: [],																							// * Works
	height: 'auto',																						// * Works
	hideDrilldownWhenLoading: true,
	hideNoData: false,
	hover: false,
	itemChildrenKey: 'child',																	// * Works - Custom Prop
	itemProps: [],																						// ? Not sure what this does. Needs Testing
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
	lastIcon: '$last',																				// * Works
	lastPageLabel: '$vuetify.dataFooter.lastPage',						// ? Not sure what this does. Needs Testing
	level: 1,
	levels: 3,																								// * Works - Custom Prop
	loaderHeight: '2px',																			// * Works - Custom Prop
	loaderSize: 'default',
	loaderType: [																							// * Works - Custom Prop
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
	page: 1,
	pageText: '$vuetify.dataFooter.pageText',									// * Works
	prevIcon: '$prev',																				// * Works
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
	server: false,
	showCurrentPage: false,																		// * Works
	showDrilldownWhenLoading: true,
	showExpand: false,																				// * Works
	showFooterRow: false,																			// * Works
	showSearch: false,																				// * Works - May or may not keep
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
