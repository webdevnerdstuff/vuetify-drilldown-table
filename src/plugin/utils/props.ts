import { Column } from '@/types';

export const AllProps = {
	// ? Colors accept Vuetify them color names or variables, HEX, RGB, HSL, and CSS color names
	colors: null,																			// * Works
	// customFilter: undefined, 													// ? Needs Testing
	// customKeyFilter: undefined,												// ? Needs Testing
	density: 'comfortable',														// * Works
	// drilldown: () => ({}),
	drilldownKey: 'id',																// * Works
	elevation: 0,																			// * Works
	expandOnClick: false, 														// * Works
	// expanded: () => [], 																	// ? Needs Testing
	filterKeys: undefined, 																	// ? Needs Testing
	// filterMode: 'some',																// ? Needs Testing
	// firstIcon: '',																	// & Works - Is binding prop
	// firstPageLabel: '',														// ? Not sure what this does or if it works
	fixedFooter: true, 																// ? Not sure what this does or if it works
	fixedHeader: true, 																// ? Not sure what this does or if it works
	footers: () => [] as Column[],
	// headers: () => [] as const,
	height: 'auto',																		// * Works
	// hideDefaultFooter: false, 											// ? In v2 Missing in v3
	// hideDefaultHeader: true,	 											// ? In v2 Missing in v3
	hideNoData: false, 																// * Works
	hover: false, 																		// * Works
	isDrilldown: false, 															// * Works
	// item: () => ({}), 															// * Works - Keep Commented Out
	itemChildrenKey: 'child', 												// * Works
	itemValue: 'id',																	// * Works, but is weird
	// items: () => [], 															// * Works
	itemsLength: 0,																		// ? Not sure if this will be used
	itemsPerPage: 10, 																// * Works
	// itemsPerPageOptions: [													// ? Works - Keep Commented Out - Test drilldowns
	// 	{
	// 		title: '10',
	// 		value: 10,
	// 	},
	// 	{
	// 		title: '25',
	// 		value: 25,
	// 	},
	// 	{
	// 		title: '50',
	// 		value: 50,
	// 	},
	// 	{
	// 		title: '100',
	// 		value: 100,
	// 	},
	// 	{
	// 		title: '$vuetify.dataFooter.itemsPerPageAll',
	// 		value: -1,
	// 	}
	// ],
	// lastIcon: '', 																	// & Works - Is binding prop
	level: 1,
	levels: 1,
	loaderHeight: '1px',
	loaderType: 'linear',
	loading: false,
	loadingText: '$vuetify.dataIterator.loadingText',
	multiSort: false,																	// ! Not sure if this is working correctly - Is binding prop
	// nextIcon: '', 																	// & Works - Is binding prop
	noDataText: '$vuetify.noDataText',								// * Works
	noFilter: false,																	// * Works, but not sure why you would use this.
	page: 1, 																					// * Works
	returnObject: true,																// ? Not sure what this does or if it works - Missing Docs
	search: '',																				// ? Need to test this when top slot is used over showSearch prop
	searchDebounce: 750,															// * Works
	searchMaxWait: 1000,															// * Works
	searchProps: () => ({															// ? Needs more testing
		cols: {
			lg: 3,
			md: 6,
			sm: 12,
			xl: 3,
			xs: 12,
			xxl: 2,
		},
		density: 'comfortable',
		variant: 'underlined',
	}) as const,
	// separator: '', 																// TODO: Maybe add this //
	server: false,
	showDrilldownWhenLoading: true,
	showExpand: false,																// ? Works but needs testing.- Not sure if needed in this object
	showFooterRow: true,															// ? Not sure if I will use this. Depends on a possible footer slot
	showSearch: false,																// * Custom Prop
	showSelect: false,																// * Works
	skeltonType: 'heading@1',													// * Works
	sortBy: () => [],																	// * Works
	tableType: () => ({}),
	width: '100%',																		// ! Not working properly //
};
