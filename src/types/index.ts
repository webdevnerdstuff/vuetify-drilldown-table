/* eslint-disable no-unused-vars */
import { PropType } from 'vue';
import type { VTextField } from "vuetify/components";
import type { VDataTable, VDataTableRow } from "vuetify/labs/components";


// -------------------------------------------------- Vuetify Types //
export type Density = null | 'default' | 'comfortable' | 'compact';

export interface InternalItem<T = object> {
	children?: InternalItem<T>[];
	props?: {
		[key: string]: unknown;
		title: string;
		value: unknown;
	};
	raw?: T;
	title?: string;
	value?: T;
}

// export interface DataTableItem extends InternalItem {
// 	// @ts-ignore
// 	[key: string]: string;
// };

export type DataTableItem = InternalItem & {
	type: 'item';
	columns: Record<string, unknown>;
};


// -------------------------------------------------- Cell Rendering //
interface CellRender {
	(
		key?: string,
		column?: object,
		index?: number,
	): void;
};

interface ItemCellRender {
	(
		itemValue?: string,
		item?: object,
		column?: object,
		index?: number,
	): void;
};

export interface Column {
	align?: string;
	cellClass?: string;
	colspan?: number;
	columnFooter?: string;
	fixedOffset?: number;
	key?: string;
	renderCell?: CellRender;
	renderFooter?: CellRender;
	renderHeader?: CellRender;
	renderItem?: ItemCellRender;
	renderer?: CellRender,
	rowClass?: string;
	rowspan?: number;
	sortable?: boolean;
	title?: string;
	width?: string | number;
};

// -------------------------------------------------- Colors //
export type ColorsObject = {
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
	loader?: {
		bg?: string;
		circular?: string;
		linear?: string;
		text?: string;
	};
	percentageChange?: number;
	percentageDirection?: 'asc' | 'desc';
};

export type LevelColorResponse = {
	base?: string;
	bg?: string;
	border?: string;
	circular?: string;
	linear?: string;
	text?: string;
};

export type HEXColor = string;
export type HSLColor = [number, number, number];
export type RGBColor = [number, number, number];


// -------------------------------------------------- Search //
export type SearchPropCols = {
	lg?: number;
	md?: number;
	sm?: number;
	xl?: number;
	xs?: number;
	xxl?: number;
};

export type SearchProps = {
	cols?: SearchPropCols;
	density?: VTextField["$props"]["density"];
	variant?: VTextField["$props"]["variant"];
};


// -------------------------------------------------- Props //
export type Props = {
	// * Custom Property //
	colors?: {
		default: boolean;
		required: boolean;
		type: PropType<boolean> | PropType<ColorsObject>;
	};
	// * Custom Property //
	debounceDelay: {
		default: number;
		required: boolean;
		type: PropType<number>;
	};
	density?: {
		default: string,
		required: boolean,
		// ! This needs to be changed to VDataTable density once it's been added //
		type: PropType<VTextField["$props"]["density"]>;
	};
	// * Custom Property //
	drilldown: {
		default: () => void;
		required: boolean;
		type: PropType<object>;
	};
	// * Custom Property //
	drilldownKey?: {
		default: string;
		required: boolean;
		type: PropType<string>;
	};
	// * Custom Property //
	elevation?: {
		default: number;
		required: boolean;
		type: PropType<number | string | undefined>;
	};
	expandOnClick?: {
		default: boolean;
		required: boolean;
		type: PropType<boolean>;
	};
	// * Custom Property //
	footers: {
		default: () => VDataTable["$props"]["headers"];
		required: boolean;
		type: PropType<VDataTable["$props"]["headers"]>;
	};
	headers: {
		default: () => VDataTable["$props"]["headers"];
		required: boolean;
		type: PropType<VDataTable["$props"]["headers"]>;
	};
	hover?: {
		default: boolean;
		required: boolean;
		type: PropType<boolean>;
	};
	// * Custom Property //
	isDrilldown: {
		default: boolean;
		required: boolean;
		type: PropType<boolean>;
	};
	// * Custom Property //
	// item: {
	// 	default: () => InternalItem;
	// 	required: boolean;
	// 	type: PropType<InternalItem>;
	// };
	item: {
		default: () => VDataTableRow["$props"]["item"] | void | unknown;
		required: boolean;
		type: PropType<object>;
	};
	itemChildrenKey: {
		default: string;
		required: boolean;
		type: PropType<string>;
	};
	items: {
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
	level: {
		default: number;
		required: boolean;
		type: PropType<number>;
	};
	// * Custom Property //
	levels: {
		default: number;
		required: boolean;
		type: PropType<number>;
	};
	loaderType: {
		default: string | string[];
		required: boolean;
		type: PropType<string | string[]>;
	};
	// ! Default Loading Not working properly //
	loading: {
		default: boolean;
		required: boolean;
		type: PropType<boolean>;
	};
	// ! Default Loading Text Not working properly //
	loadingText: {
		default: string;
		required: boolean;
		type: PropType<string>;
	};
	multiSort: {
		default: boolean;
		required: boolean;
		type: PropType<boolean>;
	};
	noDataText: {
		default: string;
		required: boolean;
		type: PropType<string>;
	};
	// * Custom Property //
	searchProps: {
		default: () => SearchProps;
		required?: boolean;
		type?: PropType<SearchProps>;
	};
	// * Custom Property //
	// TODO: Maybe add this //
	// separator?: {
	// 	default: string;
	// 	required: boolean;
	// 	type: PropType<string>;
	// };
	// * Custom Property //
	showFooterRow?: {
		default: boolean;
		required: boolean;
		type: PropType<boolean>;
	};
	// * Custom Property //
	showSearch?: {
		default: boolean;
		required: boolean;
		type: PropType<boolean>;
	};
	// * Custom Property //
	skeltonType?: {
		default: string;
		required: boolean;
		type: PropType<string>;
	};
	sortBy: {
		default: object | object[];
		required: boolean;
		type: PropType<VDataTable["$props"]["sortBy"]>;
	};
};



// -------------------------------------------------- Drilldown //
export type LoadedDrilldown = {
	colors?: boolean | ColorsObject; 															// * Custom Property
	customFilter?: VDataTable["$props"]["customFilter"];
	customKeyFilter?: VDataTable["$props"]["customKeyFilter"];
	debounceDelay?: number | undefined; 								// * Custom Property
	density?: VTextField["$props"]["density"];						// ! This needs to be changed to VDataTable density once it's been added //
	drilldown?: object; 																// * Custom Property
	drilldownKey: string; 															// * Custom Property
	elevation?: string | number | undefined; 						// * Custom Property
	expandOnClick?: boolean;
	expanded?: string[];
	filterKeys?: VDataTable["$props"]["filterKeys"];		// ! Need more info/testing
	filterMode?: VDataTable["$props"]["filterMode"];
	fixedFooter?: boolean;
	fixedHeader?: boolean;
	// footerProps?: object;														// ! Missing Vuetify Prop (maybe v2 only?)
	footers?: VDataTable["$props"]["headers"];
	// groupBy?: string[];															// ? Most likely this will not be used
	headers?: VDataTable["$props"]["headers"];
	height?: string | number | undefined;
	// hideDefaultFooter?: boolean;											// ? Custom Property - Need to add/test
	// hideDefaultHeader?: boolean;											// ? Custom Property - Need to add/test
	hideNoData?: boolean;
	hover?: boolean;
	isDrilldown?: boolean; 															// * Custom Property
	item?: VDataTableRow["$props"]["item"];							// * Custom Property
	itemChildren?: VDataTable["$props"]["itemChildren"];
	itemChildrenKey: string; 														// * Custom Property
	itemProps?: VDataTable["$props"]["itemProps"];
	itemTitle?: VDataTable["$props"]["itemTitle"];
	itemValue?: VDataTable["$props"]["itemValue"];
	items: unknown[];
	itemsLength?: number;
	itemsPerPage?: string | number;
	level: number; 																			// * Custom Property
	levels: number; 																		// * Custom Property
	loaderType?: string | string[];
	loading?: boolean; 																	// ! Not working properly
	loadingText?: string; 															// ! Not working properly
	modelValue?: unknown[];
	multiSort?: boolean;
	mustSort?: boolean;
	noDataText?: string;
	noFilter?: boolean;
	page?: string | number;
	// pageCount?: number; 															// ? Need to test (maybe v2 only?)
	returnObject?: boolean;
	search?: string | undefined;
	searchProps: SearchProps; 													// * Custom Property
	server?: boolean; 																	// ? Custom Property - Not sure if I'll use this
	showExpand?: boolean;
	showFooterRow?: boolean; 														// * Custom Property
	showSearch?: boolean; 															// * Custom Property
	showSelect?: boolean;
	skeltonType?: string; 															// * Custom Property
	sortBy?: VDataTable["$props"]["sortBy"];
	width?: string | number | undefined;
};

export type DrilldownEvent = {
	$event?: MouseEvent | undefined;
	columns?: object;
	index?: number;
	isExpanded: (item: object) => boolean;
	item: object;
	items?: object;
	level?: number;
	sortBy?: object;
	toggleExpand(item?: object): void;
};

export type ClickRowCheckboxEvent = {
	columns?: object;
	index?: number;
	item?: object;
	level?: number;
	toggleSelect(item?: object): void;
};

export type DrilldownDebounce = (...args: undefined[]) => void;
