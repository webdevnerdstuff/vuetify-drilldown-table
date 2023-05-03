import { Props } from '@/types';
import type { VTextField } from "vuetify/components";
import type { VDataTable } from "vuetify/labs/VDataTable";

export const AllProps: Props = {
	// ? Colors accept Vuetify them color names or variables, HEX, RGB, HSL, and CSS color names
	colors: {
		default: () => ({
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
			// loader: 'primary',  // TODO: Add this later when table loading is possible
			percentageChange: 25,
			percentageDirection: 'desc',
		}),
		required: false,
		type: Object,
	},
	debounceDelay: {
		default: 750,
		required: false,
		type: Number,
	},
	density: {
		default: 'comfortable',
		required: false,
		type: String as PropType<VTextField["density"]>,
	},
	drilldown: {
		default: () => { },
		required: false,
		type: Object,
	},
	drilldownKey: {
		default: '',
		required: false,
		type: String,
	},
	elevation: {
		default: 1,
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
	// ! This is not working correctly on drilldown //
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
	// ? This is for v-data-table-server //
	itemsLength: {
		default: 0,
		required: false,
		type: Number,
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
	level: {
		default: 0,
		required: false,
		type: Number,
	},
	levels: {
		default: 0,
		required: false,
		type: Number,
	},
	// ! Loading Not working properly //
	loading: {
		default: false,
		required: false,
		type: Boolean,
	},
	loadingText: {
		default: 'Loading items...',
		required: false,
		type: String,
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
	// server: {
	// 	default: false,
	// 	required: false,
	// 	type: Boolean,
	// },
	// settings: {
	// 	default: () => { },
	// 	required: false,
	// 	type: Object,
	// },
	// ? TBD if this is needed //
	showFooterRow: {
		default: false,
		required: false,
		type: Boolean,
	},
	showSearch: {
		default: false,
		required: false,
		type: Boolean,
	},
	sortBy: {
		default: () => [],
		required: false,
		type: Array as PropType<VDataTable["sortBy"]>,
	},
};

