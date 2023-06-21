import { Column } from '@/types';

export const AllProps = {
	// color: 'primary',															// ? Doesn't seem to work
	colors: () => ({
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
	}) as const,
	// customFilter: undefined, 											// ? Needs Testing
	// customKeyFilter: undefined,										// ? Needs Testing
	density: 'default',
	// drilldown: () => ({}),													// * Works - Internal Prop
	drilldownKey: 'id',
	elevation: 0,
	expandOnClick: false,
	// expanded: () => [], 														// ? Needs Testing
	filterKeys: undefined, 														// ? Needs Testing
	// filterMode: 'some',														// ? Needs Testing
	// firstIcon: '',																	// * Works - Keep Commented Out
	// firstPageLabel: '',														// ? Doesn't seem to work
	// fixedFooter: true, 														// ? Doesn't seem to work
	// fixedHeader: true, 														// ? Doesn't seem to work
	footers: () => [] as Column[],
	// headers: () => [] as const,										// * Works - Keep Commented Out
	height: 'auto',
	// hideDrilldownWhenLoading: true,								// * Works - Keep Commented Out
	hideNoData: false,
	hover: false,
	isDrilldown: false, 															// ? Internal Prop
	itemChildrenKey: 'child',
	itemSelectable: undefined,
	itemValue: 'id',
	items: () => [],
	itemsLength: 0,																		// ? Not sure if this will be used
	itemsPerPage: 10,
	// itemsPerPageText: '$vuetify.dataFooter.itemsPerPageText',	// * Works - Keep Commented Out
	// itemsPerPageOptions: [													// * Works - Keep Commented Out
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
	// lastPageLabel: '$vuetify.dataFooter.lastPage',	// ? Doesn't seem to work
	// lastIcon: '',																	// * Works - Keep Commented Out
	level: 1,
	levels: 1,
	loaderHeight: '2px',
	loaderSize: 'default',
	loaderType: 'linear',
	loading: false,
	loadingText: '$vuetify.dataIterator.loadingText',
	multiSort: false,																	// ! Not sure if this is working correctly - Is binding prop
	// nextIcon: '', 																	// * Works - Keep Commented Out
	noDataText: '$vuetify.noDataText',
	noFilter: false,
	page: 1,
	// returnObject: true,														// ? Not sure what this does or if works.
	// rowHeight: undefined,													// ? Doesn't seem to work
	search: '',																				// ? Need to test this when top slot is used over showSearch prop
	searchDebounce: 750,
	searchMaxWait: 1000,
	searchProps: () => ({
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
	selectStrategy: 'page' as const,
	// separator: '', 																// TODO: Maybe add this //
	server: false,
	showDrilldownWhenLoading: true,
	showExpand: false,
	showFooterRow: false,
	showSearch: false,																// * Works - May or may not keep
	showSelect: false,
	skeltonType: 'heading@1',
	sortAscIcon: '$sortAsc',
	sortBy: () => [],
	tableType: () => ({}),
	// width: '100%',																	// ? Doesn't seem to work
};
