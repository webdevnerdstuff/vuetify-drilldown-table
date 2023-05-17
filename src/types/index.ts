/* eslint-disable no-unused-vars */
import { CSSProperties, PropType, StyleValue } from 'vue';
import { ThemeInstance } from 'vuetify';
import type { VTextField, VProgressLinear } from 'vuetify/components';
import type { VDataTable, VDataTableRow } from 'vuetify/labs/components';


// -------------------------------------------------- Vuetify Types //
export type Density = null | 'default' | 'comfortable' | 'compact';

export type DataTableItem = NonNullable<VDataTableRow['$props']['item']>;


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
	density?: VTextField['$props']['density'];
	variant?: VTextField['$props']['variant'];
};


// -------------------------------------------------- Table //
// export type TableType<T> = {
// 	item: 'tableType';
// 	[key: string]: T;
// };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface TableType<T = any> {
	[key: string]: T;
}

// -------------------------------------------------- Props //
export type Props = {
	colors?: {
		default: boolean;
		required: boolean;
		type: PropType<boolean> | PropType<ColorsObject>;
	};
	// ? Might not need this anymore //
	debounceDelay: {
		default: number;
		required: boolean;
		type: PropType<number>;
	};
	density: {
		default: string,
		required: boolean,
		type: PropType<VDataTable['$props']['density']>;
	};
	drilldown: {
		default: () => void;
		required: boolean;
		type: PropType<object>;
	};
	drilldownKey?: {
		default: string;
		required: boolean;
		type: PropType<string>;
	};
	elevation?: {
		default: number;
		required: boolean;
		type: PropType<number | string | undefined>;
	};
	expandOnClick: {
		default: boolean;
		required: boolean;
		type: PropType<VDataTable['$props']['expandOnClick']>;
	};
	// * Custom Property - This might change //
	footers: {
		default: () => VDataTable['$props']['headers'];
		required: boolean;
		type: PropType<VDataTable['$props']['headers']>;
	};
	headers: {
		default: () => VDataTable['$props']['headers'];
		required: boolean;
		type: PropType<VDataTable['$props']['headers']>;
	};
	hover?: {
		default: boolean;
		required: boolean;
		type: PropType<VDataTable['$props']['hover']>;
	};
	isDrilldown: {
		default: boolean;
		required: boolean;
		type: PropType<boolean>;
	};
	item: {
		default: () => DataTableItem | void;
		required: boolean;
		type: PropType<DataTableItem>;
	};
	itemChildrenKey: {
		default: string;
		required: boolean;
		type: PropType<string>;
	};
	items: {
		default: () => unknown;
		required: boolean;
		type: PropType<VDataTable['$props']['items']>;
	};
	// itemsPerPageOptions: {
	// 	default: () => VDataTable['$props']['itemsPerPageOptions'];
	// 	required: boolean;
	// 	type: PropType<VDataTable['$props']['itemsPerPageOptions']>;
	// };
	itemsLength?: {
		default: number;
		required: boolean;
		type: PropType<number>;
	};
	itemsPerPage?: {
		default: number;
		required: boolean;
		type: PropType<VDataTable['$props']['itemsPerPage']>;
	};
	level: {
		default: number;
		required: boolean;
		type: PropType<number>;
	};
	levels: {
		default: number;
		required: boolean;
		type: PropType<number>;
	};
	loaderHeight: {
		default: string | number;
		required: boolean;
		type: PropType<VProgressLinear['$props']['height']>;
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
		type: PropType<VDataTable['$props']['noDataText']>;
	};
	page?: {
		default: number;
		required: boolean;
		type: PropType<VDataTable['$props']['page']>;
	};
	// * Custom Property //
	searchProps: {
		default: () => SearchProps;
		required?: boolean;
		type?: PropType<SearchProps>;
	};
	server: {
		default: boolean;
		required: boolean;
		type: PropType<boolean>;
	};
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
	showSelect?: {
		default: boolean;
		required: boolean;
		type: PropType<VDataTable['$props']['showSelect']>;
	};
	skeltonType?: {
		default: string;
		required: boolean;
		type: PropType<string>;
	};
	sortBy: {
		default: object | object[];
		required: boolean;
		type: PropType<VDataTable['$props']['sortBy']>;
	};
	tableType: {
		default: object;
		required: boolean;
		type: PropType<TableType>;
	};
};


// -------------------------------------------------- Drilldown //
export type LoadedDrilldown = {
	colors?: boolean | ColorsObject; 																		// * Custom Property
	customFilter?: VDataTable['$props']['customFilter'];
	customKeyFilter?: VDataTable['$props']['customKeyFilter'];
	debounceDelay?: number | undefined; 																// * Custom Property
	density: VDataTable['$props']['density'];
	drilldown?: object; 																								// * Custom Property
	drilldownKey: string; 																							// * Custom Property
	elevation?: string | number | undefined; 														// * Custom Property
	expandOnClick: VDataTable['$props']['expandOnClick'];
	expanded?: string[];
	filterKeys?: VDataTable['$props']['filterKeys'];										// ! Need more info/testing
	filterMode?: VDataTable['$props']['filterMode'];
	fixedFooter?: boolean;
	fixedHeader?: boolean;
	// footerProps?: object;																						// ! Missing Vuetify Prop (maybe v2 only?)
	footers?: VDataTable['$props']['headers'];
	// groupBy?: string[];																							// ? Most likely this will not be used
	headers?: VDataTable['$props']['headers'];
	height?: string | number | undefined;
	// hideDefaultFooter?: boolean;																			// ? Custom Property - Need to add/test
	// hideDefaultHeader?: boolean;																			// ? Custom Property - Need to add/test
	hideNoData?: VDataTable['$props']['hideNoData'];
	hover?: boolean;
	isDrilldown?: boolean; 																							// * Custom Property
	item?: DataTableItem;																								// * Custom Property
	itemChildren?: VDataTable['$props']['itemChildren'];
	itemChildrenKey: string; 																						// * Custom Property
	itemProps?: VDataTable['$props']['itemProps'];
	itemTitle?: VDataTable['$props']['itemTitle'];
	itemValue?: VDataTable['$props']['itemValue'];
	items: VDataTable['$props']['items'];
	itemsLength?: number;
	itemsPerPage?: VDataTable['$props']['itemsPerPage'];
	itemsPerPageOptions?: VDataTable['$props']['itemsPerPageOptions'];
	level: number; 																											// * Custom Property
	levels: number; 																										// * Custom Property
	loaderHeight?: VProgressLinear['$props']['height'];									// * Custom Property
	loaderType?: string | string[];
	loading?: boolean; 																									// ! Not working properly
	loadingText?: VDataTable['$props']['loadingText'];									// ! Not working properly
	modelValue?: unknown[];
	multiSort?: VDataTable['$props']['multiSort'];
	mustSort?: VDataTable['$props']['mustSort'];
	noDataText?: VDataTable['$props']['noDataText'];
	noFilter?: VDataTable['$props']['noFilter'];
	page?: VDataTable['$props']['page'];
	// pageCount?: number; 																							// ? Need to test (maybe v2 only?)
	returnObject?: VDataTable['$props']['returnObject'];
	search?: string | undefined;
	searchProps: SearchProps; 																					// * Custom Property
	showExpand?: VDataTable['$props']['showExpand'];
	showFooterRow?: boolean; 																						// * Custom Property
	showSearch?: boolean; 																							// * Custom Property
	showSelect?: VDataTable['$props']['showSelect'];
	skeltonType?: string; 																							// * Custom Property
	sortBy?: VDataTable['$props']['sortBy'];
	width?: string | number | undefined;
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


// -------------------------------------------------- Classes //
export interface TableClasses {
	(
		isDrilldown: boolean,
		elevation: string | number | undefined,
		isHover: boolean | undefined,
		level: number,
		isServerSide: boolean,
	): object;
}

export interface CellClasses {
	(
		elm: string,
		column: Column,
		level: number,
	): object;
}

export interface HeaderCellClasses {
	(
		colors: ColorsObject | false,
		level: number,
		column: Column,
		slotName?: string,
	): object;
}

export interface SortIconClasses {
	(
		sortBy: LoadedDrilldown['sortBy'],
		level: number,
		key: string,
	): object;
}

export interface BodyCellClasses {
	(
		column: Column,
		level: number,
	): object;
}

export interface BodyRowClasses {
	(
		expandOnClick: LoadedDrilldown['expandOnClick'],
		level: number,
		levels: number,
	): object;
}


// -------------------------------------------------- Styles //
export interface TableStyles {
	(
		colors: ColorsObject | false,
		level: number,
		theme: ThemeInstance,
	): StyleValue;
}

export interface HeaderCellStyles {
	(
		colors: ColorsObject | false,
		level: number,
		column: { width?: string | number; },
		theme: ThemeInstance,
		dataTableExpand: boolean,
	): CSSProperties;
}

export interface CellStyles {
	(
		colors: ColorsObject | false,
		level: number,
		theme: ThemeInstance,
		elm: string,
	): CSSProperties;
}


// -------------------------------------------------- Events  //
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

// -------------------------------------------------- Helpers //



// -------------------------------------------------- Emits //
export interface EmitUpdatedExpanded {
	(
		emit: {
			(e: 'update:drilldown', drilldownData: LoadedDrilldown): void;
			(e: 'update:expanded', data: DrilldownEvent): void;
		},
		data: DrilldownEvent,
		drilldownData: LoadedDrilldown,
	): void;
}

export type ChildUpdateSortBy = (
	data: { drilldown: LoadedDrilldown, sortBy: LoadedDrilldown['sortBy']; },
	item: DataTableItem,
) => void;
