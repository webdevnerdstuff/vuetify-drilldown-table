/* eslint-disable no-unused-vars */
import type { PropType } from 'vue';
// import {
// 	DataTableHeader,
// 	FilterFunction,
// 	FilterKeyFunctions,
// 	SelectItemKey,
// 	SortItem,
// } from 'vuetify/dist/vuetify-labs';


// -------------------------------------------------- Vuetify Types //
export type SortItem = {
	key: string;
	order?: boolean | 'asc' | 'desc';
};

type Density = null | 'default' | 'comfortable' | 'compact';



// -------------------------------------------------- Cell Rendering //
type ItemCellRender = {
	(
		key?: string,
		item?: object,
		column?: object,
		index?: number,
	): void;
};

type Column = {
	cellClass?: string;
	columnFooter?: string;
	key?: string;
	renderCell?: CellRender;
	renderFooter?: CellRender;
	renderHeader?: CellRender;
	renderItem?: ItemCellRender;
	renderer?: CellRender,
	rowClass?: string;
};

// -------------------------------------------------- Colors //
type ColorsObject = ({
	body?: {
		base?: string;
		bg?: string;
		text?: string;
	};
	default?: {
		base?: string;
		bg?: string;
		border?: string | null;
		text?: string;
	};
	footer?: {
		bg?: string;
		text?: string;
	};
	header?: {
		bg?: string;
		text?: string;
	};
	percentageChange?: number;
	percentageDirection?: 'asc' | 'desc';
});

type LevelColorResponse = {
	base?: string;
	bg?: string;
	border?: string;
	text?: string;
};

export type HEXColor = string;
export type HSLColor = [number, number, number];
export type RGBColor = [number, number, number];


// -------------------------------------------------- Search //
type SearchPropCols = {
	lg?: number;
	md?: number;
	sm?: number;
	xl?: number;
	xs?: number;
	xxl?: number;
};
type SearchProps = ({
	cols?: {
		lg?: number;
		md?: number;
		sm?: number;
		xl?: number;
		xs?: number;
		xxl?: number;
	};
	density?: Density;
	variant?: Variant;
});


// -------------------------------------------------- Props //
export type Props = {
	// * Custom Property //
	colors?: {
		default: () => ColorsObject;
		required: boolean;
		type: PropType<object>;
	};
	// * Custom Property //
	debounceDelay?: {
		default: number;
		required: boolean;
		type?: PropType<number>;
	};
	density?: {
		default: string,
		required: boolean,
		type: StringConstructor;
	};
	// * Custom Property //
	drilldown?: {
		default: () => void;
		required: boolean;
		type: PropType<object>;
	};
	// * Custom Property //
	drilldownKey?: {
		default?: string;
		required?: boolean;
		type: PropType<string>;
	};
	// * Custom Property //
	elevation?: {
		default: number | string | undefined;
		required: boolean;
		type: PropType<number | string | undefined>;
	};
	// * Custom Property //
	footers?: {
		default?: () => DataTableHeader[] | DataTableHeader[][];
		required?: boolean;
		type?: PropType<DataTableHeader[] | DataTableHeader[][]>;
	};
	headers?: {
		default?: () => DataTableHeader[] | DataTableHeader[][];
		required?: boolean;
		type?: PropType<DataTableHeader[] | DataTableHeader[][]>;
	};
	hover?: {
		default: boolean;
		required: boolean;
		type: PropType<boolean>;
	};
	// * Custom Property //
	isDrilldown?: {
		default: boolean;
		required: boolean;
		type: PropType<boolean>;
	};
	item?: {
		default: () => unknown;
		required: boolean;
		type: DataTableItem;
	};
	itemChildrenKey?: {
		default: string;
		required: boolean;
		type: PropType<string>;
	};
	items?: {
		default: () => unknown;
		required: boolean;
		type: PropType<object>;
	};
	itemsLength?: {
		default: number;
		required: boolean;
		type: PropType<number>;
	};
	// * Custom Property //
	level?: {
		default: number;
		required: boolean;
		type: PropType<number>;
	};
	// * Custom Property //
	levels?: {
		default: number;
		required: boolean;
		type: PropType<number>;
	};
	// ! Loading Not working properly //
	// loading?: {
	// 	default: boolean;
	// 	required: boolean;
	// 	type: PropType<boolean>;
	// };
	// * Custom Property //
	searchProps?: {
		default: () => SearchProps;
		required?: boolean;
		type?: PropType<object>;
	};
	// * Custom Property //
	separator?: {
		default: string;
		required: boolean;
		type: PropType<string>;
	},
	// * Custom Property //
	showFooterRow?: {
		default: boolean | undefined;
		required: boolean;
		type: PropType<boolean>;
	};
	// * Custom Property //
	showSearch?: {
		default: boolean;
		required: boolean;
		type: PropType<boolean>;
	};
};

// -------------------------------------------------- Drilldown //
export type LoadedDrilldown = {
	colors?: ColorsObject; // * Custom Property
	customFilter?: FilterFunction | undefined;
	customKeyFilter?: FilterKeyFunctions | undefined;
	debounceDelay?: number; // * Custom Property
	// dense?: boolean; // ! Missing Vuetify Prop
	density?: Density;
	drilldown?: object; // * Custom Property
	drilldownKey?: string; // * Custom Property
	elevation?: string | number | undefined; // * Custom Property
	expandOnClick?: boolean;
	expanded?: string[];
	// filterKeys?: string[]; // ! Need more info/testing
	filterMode?: FilterMode;
	fixedFooter?: boolean;
	fixedHeader?: boolean;
	// footerProps?: object; // ! Missing Vuetify Prop (maybe v2 only?)
	// groupBy?: string[]; // ? Most likely this will not be used
	footers?: DataTableHeader[] | DataTableHeader[][];
	headers?: DataTableHeader[] | DataTableHeader[][];
	height?: string | number | undefined;
	// hideDefaultFooter?: boolean;	// ? Custom Property - Need to add/test
	// hideDefaultHeader?: boolean;	// ? Custom Property - Need to add/test
	hideNoData?: boolean;
	hover?: boolean;
	isDrilldown?: boolean; // * Custom Property
	item?: DataTableItem; // * Custom Property
	itemChildren?: SelectItemKey;
	itemChildrenKey?: string; // * Custom Property
	itemProps?: SelectItemKey;
	itemTitle?: SelectItemKey;
	itemValue?: NonNullable<SelectItemKey>;
	items?: unknown[];
	itemsLength?: number;
	itemsPerPage?: string | number;
	level?: number; // * Custom Property
	levels?: number; // * Custom Property
	// loading?: boolean; // ! Not working properly
	// loadingText?: string; // ! Not working properly
	modelValue?: unknown[];
	multiSort?: boolean;
	mustSort?: boolean;
	noDataText?: string;
	noFilter?: boolean;
	page?: string | number;
	// pageCount?: number; // ? Need to test (maybe v2 only?)
	returnObject?: boolean;
	search?: string | undefined;
	searchProps?: SearchProps; // * Custom Property
	server?: boolean; // ? Custom Property - Not sure if I'll use this
	showExpand?: boolean;
	showFooterRow?: boolean; // * Custom Property
	showSearch?: boolean; // * Custom Property
	showSelect?: boolean;
	sortBy?: SortItem[];
	// sortDesc?: boolean; // ! Missing Vuetify Prop (maybe v2 only?)
	width?: string | number | undefined;
};

export type DrilldownEvent = {
	columns?: object;
	index?: number;
	isExpanded?: () => void;
	item?: object;
	level?: number;
	toggleExpand(item?: object): void;
};
