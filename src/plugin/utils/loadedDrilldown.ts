import { LoadedDrilldown } from '@/types';

export const LoadedDrilldownDefaults: LoadedDrilldown = {
	// colors: false, 									// & Works & Is Prop
	customFilter: undefined, 						// ? Needs Testing
	customKeyFilter: undefined,					// ? Needs Testing
	debounceDelay: 750,									// ? Works & Is Prop - Might remove
	density: 'comfortable',							// * Works - Keep here
	drilldownKey: 'id',									// * Custom Prop - Keep here
	elevation: 0, 											// * Works - Keep here
	expandOnClick: false, 							// * Works - Keep here
	expanded: [], 											// ? Needs Testing
	filterKeys: [], 										// ? Needs Testing
	filterMode: 'some',									// ? Needs Testing
	// firstIcon: '',										// & Works - Is binding prop
	// firstPageLabel: '',									// ? Not sure what this does or if it works
	fixedFooter: true, 									// ? Not sure what this does or if it works
	fixedHeader: true, 									// ? Not sure what this does or if it works
	footers: [], 												// & Works & Is Prop
	// footerProps: {},										// ? In v2 Missing in v3
	// groupBy: [], 										// ? Works, not sure if I'm going to add support for this
	// headers: [],											// & Works & Is Prop
	height: 'auto',											// * Works
	// hideDefaultFooter: false, 				// ? In v2 Missing in v3
	// hideDefaultHeader: true,	 				// ? In v2 Missing in v3
	hideNoData: false, 									// * Works
	hover: false, 											// & Works & Is Prop
	// isDrilldown: false,							// & Works & Is Prop
	// item: [],												// & Works & Is Prop
	// itemChildren: 'children',						// ? Missing Docs
	itemChildrenKey: 'child',						// * Custom Prop - Keep here
	// itemProps: 'props',									// ? Not sure what this does
	// itemTitle: 'title',									// * Works, but is weird
	itemValue: 'id',										// * Works, but is weird
	items: [],													// * Custom Prop - Keep here
	// itemsLength: 0,											// ? Not sure if this will be used
	itemsPerPage: 10,										// * Works
	// itemsPerPageOptions: [							// ? Works - Test drilldowns
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
	// lastIcon: '', 										// & Works - Is binding prop
	level: 1,														// * Custom Prop - Keep here
	levels: 0,													// * Custom Prop - Keep here
	loaderHeight: 2,
	loaderType: '',
	// loading: false,
	// loadingText: 'Loading...',					// & Works & Is Prop
	modelValue: [],											// ? Needs Testing
	multiSort: false,										// * Works - Keep here
	// mustSort: false,										// ! Not sure if this is working correctly - Is binding prop
	// nextIcon: '', 											// & Works - Is binding prop
	noDataText: '$vuetify.noDataText',	// * Works - Keep here
	noFilter: false,										// * Works, but not sure why you would use this.
	page: 1, 														// * Works
	// prevIcon: '', 											// & Works - Is binding prop
	returnObject: true,									// ? Not sure what this does or if it works - Missing Docs
	// search: '',											// ? Need to test this when top slot is used over showSearch prop
	searchProps: {
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
	showExpand: false,									// ? Works but needs testing.- Not sure if needed in this object
	showFooterRow: false,								// ? Not sure if I will use this. Depends on a possible footer slot
	showSearch: false,									// * Custom Prop - Keep here
	showSelect: false,									// * Works - Keep here
	skeltonType: 'heading@1',						// * Works - Keep here
	sortBy: [],													// * Works - Keep here
	width: '100%',											// ! Failed
};
