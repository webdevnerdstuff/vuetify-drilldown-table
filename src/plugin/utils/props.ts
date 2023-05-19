import type { LoadedDrilldown, Props } from '@/types';
import { LoadedDrilldownDefaults } from './loadedDrilldown';

export const AllProps: Props = {
	// ? Colors accept Vuetify them color names or variables, HEX, RGB, HSL, and CSS color names
	colors: {
		default: false,
		required: false,
		type: [Object, Boolean],
	},
	debounceDelay: {
		default: LoadedDrilldownDefaults.debounceDelay as number,
		required: false,
		type: Number,
	},
	density: {
		default: LoadedDrilldownDefaults.density as keyof LoadedDrilldown['density'],
		required: false,
		type: String as PropType<LoadedDrilldown['density']>,
	},
	drilldown: {
		default: () => { },
		required: false,
		type: Object,
	},
	drilldownKey: {
		default: LoadedDrilldownDefaults.drilldownKey as string,
		required: false,
		type: String,
	},
	elevation: {
		default: LoadedDrilldownDefaults.elevation as number,
		required: false,
		type: [Number, String],
	},
	expandOnClick: {
		default: LoadedDrilldownDefaults.expandOnClick as boolean,
		required: false,
		type: Boolean,
	},
	footers: {
		default: () => LoadedDrilldownDefaults.footers as [],
		required: false,
		type: Array,
	},
	headers: {
		default: () => [],
		required: false,
		type: Array,
	},
	hover: {
		default: LoadedDrilldownDefaults.hover as boolean,
		required: false,
		type: Boolean,
	},
	isDrilldown: {
		default: false,
		required: false,
		type: Boolean,
	},
	item: {
		default: () => { },
		required: false,
		type: Object,
	},
	itemChildrenKey: {
		default: LoadedDrilldownDefaults.itemChildrenKey as string,
		required: false,
		type: String,
	},
	items: {
		default: () => LoadedDrilldownDefaults.items as LoadedDrilldown['items'],
		required: false,
		type: Array,
	},
	itemsPerPage: {
		default: LoadedDrilldownDefaults.itemsPerPage as number,
		required: false,
		type: [Number, String],
	},
	level: {
		default: LoadedDrilldownDefaults.level as number,
		required: false,
		type: Number,
	},
	levels: {
		default: LoadedDrilldownDefaults.levels as number,
		required: false,
		type: Number,
	},
	loaderHeight: {
		default: LoadedDrilldownDefaults.loaderHeight as number,
		required: false,
		type: [Number, String],
	},
	loaderType: {
		default: LoadedDrilldownDefaults.loaderType as string,
		required: false,
		type: [String, Array],
	},
	loading: {
		default: false,
		required: false,
		type: Boolean,
	},
	loadingText: {
		default: '$vuetify.dataIterator.loadingText',
		required: false,
		type: String,
	},
	multiSort: {
		default: LoadedDrilldownDefaults.multiSort as boolean,
		required: false,
		type: Boolean,
	},
	noDataText: {
		default: LoadedDrilldownDefaults.noDataText as string,
		required: false,
		type: String,
	},
	searchProps: {
		default: () => ({
			cols: {
				lg: 3,
				md: 6,
				sm: 12,
				xl: 3,
				xs: 12,
				xxl: 2,
			},
			density: 'default',
			variant: 'underlined',
		}),
		required: false,
		type: Object,
	},
	server: {
		default: false,
		required: false,
		type: Boolean,
	},
	// TODO: Add new feature //
	// separator: {
	// 	default: '',
	// 	required: false,
	// 	type: String,
	// },
	// settings: {
	// 	default: () => { },
	// 	required: false,
	// 	type: Object,
	// },
	showFooterRow: {
		default: false,
		required: false,
		type: Boolean,
	},
	showSearch: {
		default: LoadedDrilldownDefaults.showSearch as boolean,
		required: false,
		type: Boolean,
	},
	showSelect: {
		default: LoadedDrilldownDefaults.showSelect as boolean,
		required: false,
		type: Boolean,
	},
	skeltonType: {
		default: LoadedDrilldownDefaults.skeltonType as string,
		required: false,
		type: String,
	},
	sortBy: {
		default: () => LoadedDrilldownDefaults.sortBy as LoadedDrilldown['sortBy'],
		required: false,
		type: Array as PropType<LoadedDrilldown['sortBy']>,
	},
	tableType: {
		default: () => { },
		required: false,
		type: Object,
	}
};

