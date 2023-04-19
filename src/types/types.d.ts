/* eslint-disable no-unused-vars */
import type { PropType } from 'vue';
// import {
// 	DataTableHeader,
// 	FilterFunction,
// 	FilterKeyFunctions,
// 	SelectItemKey,
// 	SortItem,
// } from 'vuetify/dist/vuetify-labs';


// -------------------------------------------------- Cell Rendering //
type ItemCellRender = {
	(
		key?: string,
		item?: object,
		column?: object,
		index?: number,
	): void;
};
type HeaderCellRender = {
	(
		value?: unknown,
		column?: object,
		index?: number,
	): void;
};

type Column = {
	key?: string;
	renderHeader?: HeaderCellRender;
	renderItem?: ItemCellRender;
};

// -------------------------------------------------- Colors //
type ColorsObject = ({
	body: {
		base: string;
		bg: string;
		text: string;
	},
	default: {
		base: string;
		bg: string;
		border: string | null;
		text: string;
	},
	footer: {
		bg: string;
		text: string;
	},
	header: {
		bg: string;
		text: string;
	},
	percentageChange: number;
	percentageDirection: 'asc' | 'desc';
});

export type HEXColor = string;
export type HSLColor = [number, number, number];
export type RGBColor = [number, number, number];


// -------------------------------------------------- Props //
export type Props = {
	colors?: {
		default: () => ColorsObject;
		required: boolean;
		type: PropType<object>;
	};
	debounceDelay?: {
		default: number;
		required: boolean;
		type?: PropType<number>;
	};
	density?: { 				// ! Missing Prop
		default: string,
		required: boolean,
		type: PropType<string>;
	};
	drilldown?: {
		default: () => void;
		required: boolean;
		type: PropType<object>;
	};
	drilldownKey?: {
		default?: string;
		required?: boolean;
		type: PropType<string>;
	};
	elevation?: {
		default: number | string | undefined;
		required: boolean;
		type: PropType<number | string | undefined>;
	};
	headers?: {
		default?: () => DataTableHeader[] | DataTableHeader[][];
		required?: boolean;
		type?: PropType<DataTableHeader[] | DataTableHeader[][]>;
	};
	isDrilldown?: {
		default: boolean;
		required: boolean;
		type: PropType<boolean>;
	};
	item?: {
		default: () => unknown;
		required: boolean;
		type: PropType<object>;
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
	level?: {
		default: number;
		required: boolean;
		type: PropType<number>;
	};
	levels?: {
		default: number;
		required: boolean;
		type: PropType<string[], number[], number>;
	};
	loading?: {	// ! Missing Prop
		default: boolean;
		required: boolean;
		type: PropType<boolean>;
	};
	searchProps?: {
		default: () => ({
			cols?: {
				lg?: number;
				md?: number;
				sm?: number;
				xl?: number;
				xs?: number;
				xxl?: number;
			},
			density?: string,
			variant?: string,
		});
		required?: boolean;
		type?: PropType<object>;
	};
	showSearch?: {
		default: boolean;
		required: boolean;
		type: PropType<boolean>;
	};
};

// -------------------------------------------------- Drilldown //
export type LoadedDrilldown = {
	colors?: ColorsObject;
	customFilter?: FilterFunction | undefined;
	customKeyFilter?: FilterKeyFunctions | undefined;
	debounceDelay?: number;
	// dense?: boolean; // ! Missing Prop
	density?: string; // ! Missing Prop
	drilldown?: object;
	drilldownKey?: string;
	elevation?: string | number | undefined;
	expandOnClick?: boolean;
	expanded?: string[];
	// filterKeys?: string[]; // ! get more
	// filterMode?: string; // ! FilterMode
	fixedFooter?: boolean;
	fixedHeader?: boolean;
	// footerProps?: object; // ! Missing Prop
	// groupBy?: string[]; // ? Will not use
	headers?: DataTableHeader[] | DataTableHeader[][];
	height?: string | number | undefined;
	// hideDefaultFooter?: boolean;
	// hideDefaultHeader?: boolean;
	hideNoData?: boolean;
	hover?: boolean;
	isDrilldown?: boolean;
	item?: unknown[];
	itemChildren?: SelectItemKey;
	itemChildrenKey?: string;
	itemProps?: SelectItemKey;
	itemTitle?: SelectItemKey;
	itemValue?: NonNullable<SelectItemKey>;
	items?: unknown[];
	itemsPerPage?: string | number;
	level?: number;
	levels?: string[] | number;
	// loading?: boolean; // ! Missing Prop
	loadingText?: string;
	modelValue?: unknown[];
	multiSort?: boolean;
	mustSort?: boolean;
	noDataText?: string;
	noFilter?: boolean;
	page?: string | number;
	// pageCount?: number;
	returnObject?: boolean;
	search?: string | undefined;
	searchProps?: object;
	// server?: boolean; // ? Not sure if I'll use this
	showExpand?: boolean;
	showSearch?: boolean;
	showSelect?: boolean;
	sortBy?: SortItem[];
	// sortDesc?: boolean; // ! Missing Prop
	width?: string | number | undefined;
};

export type DrilldownEvent = {
	columns?: object;
	index?: number;
	isExpanded?: () => void;
	item?: object;
	level?: number;
	toggleExpanded?: () => void;
};
