import { Props } from '@/types';
import type { VTextField } from "vuetify/components";
import type { VDataTable } from "vuetify/labs/components";

export const AllProps: Props = {
	// ? Colors accept Vuetify them color names or variables, HEX, RGB, HSL, and CSS color names
	colors: {
		default: false,
		required: false,
		type: [Object, Boolean],
	},
	debounceDelay: {
		default: 750,
		required: false,
		type: Number,
	},
	density: {
		default: 'comfortable',
		required: false,
		// ! This needs to be changed to VDataTable density once it's been added //
		type: String as PropType<VTextField["density"]>,
	},
	drilldown: {
		default: () => { },
		required: false,
		type: Object,
	},
	drilldownKey: {
		default: 'id',
		required: false,
		type: String,
	},
	elevation: {
		default: 0,
		required: false,
		type: [Number, String],
	},
	expandOnClick: {
		default: false,
		required: false,
		type: Boolean,
	},
	footers: {
		default: () => [],
		required: false,
		type: Array,
	},
	headers: {
		default: () => [],
		required: false,
		type: Array,
	},
	hover: {
		default: false,
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
		default: 'child',
		required: false,
		type: String,
	},
	items: {
		default: () => { },
		required: false,
		type: Array,
	},
	// ? This is for v-data-table-server //
	// itemsLength: {
	// 	default: 0,
	// 	required: false,
	// 	type: Number,
	// },
	level: {
		default: 1,
		required: false,
		type: Number,
	},
	levels: {
		default: 1,
		required: false,
		type: Number,
	},
	loaderType: {
		default: ['linear', 'text'],
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
		default: false,
		required: false,
		type: Boolean,
	},
	noDataText: {
		default: '$vuetify.noDataText',
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
	// ? TBD if this is needed //
	// showFooterRow: {
	// 	default: false,
	// 	required: false,
	// 	type: Boolean,
	// },
	showSearch: {
		default: false,
		required: false,
		type: Boolean,
	},
	skeltonType: {
		default: 'heading@1',
		required: false,
		type: String,
	},
	sortBy: {
		default: () => [],
		required: false,
		type: Array as PropType<VDataTable["sortBy"]>,
	},
};

