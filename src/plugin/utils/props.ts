import { Props } from '@/types/types';

export const AllProps: Props = {
	// ? Colors accept Vuetify them color names or variables, HEX, RGB, HSL, and CSS color names
	// TODO: Colors needs to be fixed //
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
		type: String,
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
	itemChildrenKey: {
		default: 'children',
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
	loading: {
		default: false,
		required: false,
		type: Boolean,
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
	},
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
	showSearch: {
		default: false,
		required: false,
		type: Boolean,
	},
};

