import { Column, DefaultColors } from '@/plugin/types';

export const defaultColorValues: DefaultColors = {
	background: '--v-theme-surface',
	border: 'transparent',
	color: '--v-theme-on-surface',
};

export const AllProps = {
	// color: 'primary', // ? Currently only works with multiSort (colored number in header, not added to VDT) - Vuetify prop
	colorPercentageChange: 15,
	colorPercentageDirection: 'desc' as const,
	colors: () => ({ 																	// ? Internal Prop
		default: defaultColorValues,
		footer: {
			background: undefined,
			color: undefined,
		},
		header: {
			background: undefined,
			color: undefined,
		},
		percentageChange: 15,
		percentageDirection: 'desc',
	}) as const,
	columnWidths: () => ([]),
	// customFilter: undefined, 											// ? Needs Testing
	// customKeyFilter: undefined,										// ? Needs Testing
	defaultColors: () => defaultColorValues,
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
	// fixedHeader: true, 														// * Works - Keep Commented Out
	footerBackgroundColor: undefined,
	footerColor: undefined,
	footers: () => [] as Column[],
	headerBackgroundColor: undefined,
	headerColor: undefined,
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
	// itemsPerPageText: ',														// * Works - Keep Commented Out
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
	loaderProps: () => ({
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
	}) as const,
	loaderType: 'linear',
	loading: false,
	loadingText: '$vuetify.dataIterator.loadingText',
	matchColumnWidths: false,
	mobile: false,
	// multiSort: false,															// * Works - Keep Commented Out
	// nextIcon: '', 																	// * Works - Keep Commented Out
	noDataText: '$vuetify.noDataText',
	noFilter: false,
	page: 1,
	returnObject: true,																// * Works - Needs to be set to `true`
	// rowHeight: undefined,													// ? Doesn't seem to work
	search: '',
	searchContainerCols: () => ({
		lg: 3,
		md: 6,
		sm: 12,
		xl: 3,
		xs: 12,
		xxl: 2,
	}),
	searchDebounce: 0,
	searchMaxWait: 1000,
	searchProps: () => ({}),
	selectStrategy: 'page' as const,
	separator: 'default' as const,
	server: false,
	showDrilldownWhenLoading: true,
	showExpand: false,
	showFooterRow: false,
	showSearch: false,																// * Works - May or may not keep
	showSelect: false,
	sortAscIcon: '$sortAsc',
	sortBy: () => [],
	tableType: () => ({}),
	// width: '100%',																	// ? Doesn't seem to work
};
