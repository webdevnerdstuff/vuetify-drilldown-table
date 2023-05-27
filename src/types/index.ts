/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import { CSSProperties, JSXComponent, StyleValue } from 'vue';
import { ThemeInstance } from 'vuetify';
import type { EventBusKey } from '@vueuse/core';
import type { VTextField, VProgressCircular, VProgressLinear } from 'vuetify/components';
import type { VDataTable, VDataTableRow } from 'vuetify/labs/components';


// -------------------------------------------------- Vuetify Types //
export type Density = 'default' | 'comfortable' | 'compact';

// export type DataTableItem = NonNullable<VDataTableRow['$props']['item']>;
type IconValue = string | (string | [path: string, opacity: number])[] | JSXComponent;
type SelectItemKey = boolean | string | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any);
type DataTableCompareFunction<T = any> = (a: T, b: T) => number;
type DataTableHeader = {
	key: string;
	value?: SelectItemKey;
	title: string;
	colspan?: number;
	rowspan?: number;
	fixed?: boolean;
	align?: 'start' | 'end';
	width?: number;
	minWidth?: string;
	maxWidth?: string;
	sortable?: boolean;
	sort?: DataTableCompareFunction;
};

export type InternalDataTableHeader = DataTableHeader & {
	sortable: boolean;
	fixedOffset?: number;
	lastFixed?: boolean;
};

export interface DataTableItem<T = any> {
	value: any;
	type: 'item';
	raw: T;
	columns: {
		[key: string]: any;
	};
}



// -------------------------------------------------- Colors //
export interface TableColors<T = any> {
	[key: string]: T;
}


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
		color?: string;
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
interface TableType<T = any> {
	[key: string]: T;
}

// -------------------------------------------------- Props //
export interface Props {
	colors?: ColorsObject | null;																				// * Custom Property
	customFilter?: VDataTable['$props']['customFilter'];
	customKeyFilter?: VDataTable['$props']['customKeyFilter'];
	debounceDelay?: number | undefined | null; 													// ? Might not need this anymore //
	density?: VDataTable['$options']['density'];
	drilldown?: object;
	drilldownKey?: string;
	elevation?: string | number | undefined;
	expandOnClick?: VDataTable['$props']['expandOnClick'];
	expanded?: string[];
	filterKeys?: VDataTable['$props']['filterKeys'];										// ! Need more info/testing
	filterMode?: VDataTable['$props']['filterMode'];
	fixedFooter?: boolean;
	fixedHeader?: boolean;
	footers?: Column[]; 																								// * Custom Property - This might change //
	headers?: VDataTable['$props']['headers'];
	// groupBy?: string[];																							// ? Most likely this will not be used
	height?: string | number | undefined;
	// hideDefaultFooter?: boolean;																			// ? Custom Property - Need to add/test
	// hideDefaultHeader?: boolean;																			// ? Custom Property - Need to add/test
	hideNoData?: VDataTable['$props']['hideNoData'];
	hover?: VDataTable['$props']['hover'];
	isDrilldown?: boolean;																							// * Custom Property
	item?: VDataTableRow['$props']['item'];															// * Custom Property
	// itemChildren?: VDataTable['$props']['itemChildren'];							// ? Type missing in v3.3.0
	itemChildrenKey?: string;																						// * Custom Property
	// itemProps?: VDataTable['$props']['itemProps'];										// ? Type missing in v3.3.0
	itemValue?: VDataTable['$props']['itemValue'];
	items?: VDataTable['$props']['items'];
	itemsLength?: number;
	itemsPerPage?: VDataTable['$props']['itemsPerPage'];
	itemsPerPageOptions?: VDataTable['$props']['itemsPerPageOptions'];
	level: number; 																											// * Custom Property
	levels: number; 																										// * Custom Property
	loaderHeight?: VProgressLinear['$props']['height'];									// * Custom Property
	loaderType?: string | string[];																			// * Custom Property
	loading?: VDataTable['$props']['loading'];
	loadingText?: VDataTable['$props']['loadingText'];									// ! Not working properly //
	modelValue?: unknown[];
	multiSort?: VDataTable['$props']['multiSort'];
	mustSort?: VDataTable['$props']['mustSort'];
	noDataText?: VDataTable['$props']['noDataText'];
	noFilter?: VDataTable['$props']['noFilter'];
	page?: VDataTable['$props']['page'];
	// pageCount?: number;																							// ? Need to test (maybe v2 only?)
	returnObject?: VDataTable['$props']['returnObject'];
	search?: string | undefined;
	searchProps?: SearchProps; 																					// * Custom Property
	separator?: string;																									// TODO: Maybe add this //
	server?: boolean;																										// * Custom Property
	showDrilldownWhenLoading?: boolean;																	// * Custom Property
	showExpand?: VDataTable['$props']['showExpand'];
	showFooterRow?: boolean; 																						// * Custom Property
	showSearch?: boolean; 																							// * Custom Property
	showSelect?: VDataTable['$props']['showSelect'];
	skeltonType?: string;																								// * Custom Property
	sortBy?: VDataTable['$props']['sortBy'];
	tableType?: TableType;																							// * Custom Property
	width?: string | number | undefined;																// ! Not working properly //
}

export type Drilldown = Props;

// -------------------------------------------------- Slots //
type GetSortIcon = (column: InternalDataTableHeader) => IconValue;
type IsExpanded = (item: DataTableItem<any>) => boolean;
type SelectAll = (value: boolean) => void;
type ToggleExpandSelect = (item: DataTableItem<any>) => void;
type ToggleSort = (column: InternalDataTableHeader) => void;

export interface AllSlotProps {
	colors: Props['colors'];
	density: Props['density'];
	level: Props['level'];
	showSelect?: Props['showSelect'];
	sortBy: Props['sortBy'];
}

export interface TopSlotProps {
	searchProps?: SearchProps;
	showSearch: boolean;
};

export interface HeaderSlotProps extends AllSlotProps {
	isTheadSlot?: boolean;
	slotProps: {
		allRowsSelected: boolean;
		columns: Column[];
		getSortIcon?: GetSortIcon;
		index?: number;
		item?: Props['item'] | any;
		selectAll: SelectAll;
		someSelected: boolean;
		sortBy: Props['sortBy'];
		toggleSort: ToggleSort;
	},
}

export interface THeadSlotProps extends AllSlotProps {
	slotProps: {
		allRowsSelected: boolean;
		columns: Column[];
		getSortIcon?: GetSortIcon;
		index?: number;
		item?: Props['item'] | any;
		selectAll: SelectAll;
		someSelected: boolean;
		sortBy: Props['sortBy'];
		toggleSort: ToggleSort;
	},
}

export interface ItemSlotProps extends Omit<AllSlotProps, 'colors' | 'sortBy'> {
	expandOnClick: Props['expandOnClick'];
	items: Props['items'];
	levels: Props['levels'];
	showExpand: Props['showExpand'];
	slotProps: {
		allRowsSelected: boolean;
		columns: Column[];
		index?: number;
		isExpanded: IsExpanded;
		isSelected: (items: DataTableItem<any> | DataTableItem<any>[]) => boolean;
		item: DataTableItem | any;
		level: Props['level'];
		toggleExpand: ToggleExpandSelect;
		toggleSelect: ToggleExpandSelect;
	},
}

export interface TFootSlotProps extends Omit<AllSlotProps, 'showSelect' | 'sortBy'> {
	footers: Column[];
	slotProps: {
		allRowsSelected: boolean;
		columns: Column[];
		getFixedStyles?: (column: InternalDataTableHeader, y: number) => CSSProperties | undefined;
		getSortIcon?: GetSortIcon;
		headers?: Props['headers'];
		index?: number;
		isExpanded: IsExpanded;
		item?: Props['item'] | any;
		selectAll: SelectAll;
		someSelected?: boolean;
		sortBy?: Props['sortBy'];
		toggleExpand: ToggleExpandSelect;
		toggleSelect: ToggleExpandSelect;
		toggleSort?: ToggleSort;
	};
}

export interface BottomSlotProps {
	slotProps: {
		allSelected: boolean;
		columns: InternalDataTableHeader[];
		headers: InternalDataTableHeader[][];
		isExpanded: IsExpanded;
		isSelected: (items: DataTableItem<any> | DataTableItem<any>[]) => boolean;
		items: readonly DataTableItem[];
		itemsPerPage: Props['itemsPerPage'];
		page: Props['page'];
		pageCount: number;
		select: (items: DataTableItem[], value: boolean) => void;
		selectAll: SelectAll;
		setItemsPerPage: (itemsPerPage: number) => void;
		someSelected: boolean;
		sortBy: Props['sortBy'];
		toggleExpand: ToggleExpandSelect;
		toggleSelect: ToggleExpandSelect;
		toggleSort: ToggleSort;
	};
}



// -------------------------------------------------- Components //
export type TableLoader = {
	colors: Props['colors'];
	colspan: number;
	height?: VProgressLinear['$props']['height'];
	level: Props['level'];
	loaderType: Props['loaderType'];
	loading: VDataTable['$props']['loading'];
	loadingText?: VDataTable['$props']['loadingText'];
	size?: VProgressCircular['$props']['size'];
	skeltonType: Props['skeltonType'];
	textLoader?: boolean;
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
	renderFooterCell?: CellRender;
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
		colors: ColorsObject | undefined | null | false,
		level: number,
		column: Column,
		slotName?: string,
	): object;
}

export interface SortIconClasses {
	(
		sortBy: Props['sortBy'],
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
		expandOnClick: Props['expandOnClick'],
		level: number,
		levels: number,
	): object;
}

export interface TFootCellClasses {
	(
		level: number,
		column: Column,
		slotName?: string,
	): object;
}


// -------------------------------------------------- Styles //
export interface TableStyles {
	(
		colors: ColorsObject | undefined | null | false,
		level: number,
		theme: ThemeInstance,
	): StyleValue;
}

export interface HeaderCellStyles {
	(
		colors: ColorsObject | undefined | null | false,
		level: number,
		column: { width?: string | number; },
		theme: ThemeInstance,
		dataTableExpand: boolean,
	): CSSProperties;
}

export interface CellStyles {
	(
		colors: ColorsObject | undefined | null | false,
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
	isExpanded: IsExpanded;
	item: DataTableItem | any;
	items?: object;
	level?: number;
	sortBy?: object;
	toggleExpand: ToggleExpandSelect;
};

export type ClickRowCheckboxEvent = {
	columns?: object;
	index?: number;
	item?: object;
	level?: number;
	toggleSelect(item?: object): void;
};

// -------------------------------------------------- Event Bus //
export interface OptionsEventObject {
	drilldown: Props,
	name?: string;
	sortBy?: Props['sortBy'];
	page?: Props['page'];
	itemsPerPage?: Props['itemsPerPage'];
}

export const OptionsEventBus: EventBusKey<OptionsEventObject> = Symbol('data');


// -------------------------------------------------- Emits //
export interface EmitUpdatedExpanded {
	(
		emit: {
			(e: 'update:drilldown', drilldownData: Props): void;
			(e: 'update:expanded', data: DrilldownEvent): void;
		},
		data: DrilldownEvent,
		drilldownData: Props,
	): void;
}
