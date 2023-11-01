export default {
	colorPercentageChange: 15,
	colorPercentageDirection: 'desc',
	// color: 'primary', // ? Currently only works with multiSort (colored number in header, not added to VDT) - Vuetify prop
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
	fixedHeader: false,
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
	loaderProps: {
		circular: {
			bgColor: 'theme-surface',
			color: 'primary',
			indeterminate: true,
		},
		linear: {
			color: 'surface-variant',
			height: '2px',
			indeterminate: true,
		},
		skelton: {
			type: 'heading@1',
		},
		text: {
			color: 'surface-variant',
		},
	},
	loaderType: [
		'linear',
		// 'circular',
		// 'text',
		// 'skelton',
	],
	loading: false,
	loadingText: 'Loading',
	matchColumnWidths: false,
	multiSort: false,
	mustSort: false,
	nextIcon: '$next',
	// nextPageLabel: '$vuetify.dataFooter.nextPage',					// ? Doesn't seem to work - Vuetify prop
	noDataText: '$vuetify.noDataText',
	page: 1,
	pageText: '$vuetify.dataFooter.pageText',
	prevIcon: '$prev',
	// prevPageLabel: '$vuetify.dataFooter.prevPage',					// ? Doesn't seem to work - Vuetify prop
	// rowHeight: undefined,																	// ? Doesn't seem to work - Vuetify prop
	search: '',
	searchContainerCols: {
		lg: 3,
		md: 6,
		sm: 12,
		xl: 3,
		xs: 12,
		xxl: 2,
	},
	searchDebounce: 0,
	searchEvents: {
		// 'input': (e: InputEvent) => {
		// 	console.log('input event triggered', e);
		// },
		// 'click': (e: MouseEvent) => {
		// 	console.log('click event triggered', e);
		// },
		// 'click:control': (e: MouseEvent) => {
		// 	console.log('click:control event triggered', e);
		// },
		// 'mousedown:control': (e: MouseEvent) => {
		// 	console.log('mousedown:control event triggered', e);
		// },
		// 'update:modelValue': (val: string) => {
		// 	console.log('update:modelValue event triggered', val);
		// },
	},
	searchMaxWait: 1000,
	searchProps: {
		clearable: true,
		color: 'primary',
		density: 'compact',
		prependInnerIcon: 'mdi mdi-magnify',
		variant: 'underlined',
	},
	selectStrategy: 'page',
	separator: 'horizontal',
	server: false,
	showCurrentPage: false,
	showDrilldownWhenLoading: true,
	showExpand: false,
	showFooterRow: false,
	showSearch: true,
	showSelect: true,
	sortAscIcon: '$sortAsc',
	sortBy: [],
	// sticky: false,																					// ? Doesn't seem to work - Vuetify prop
	tag: 'div',
	theme: undefined,
	// width: undefined,																			// ? Doesn't seem to work - Vuetify prop
};
