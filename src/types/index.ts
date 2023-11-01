/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import { CSSProperties, JSXComponent, StyleValue, MaybeRef } from 'vue';
import { IconOptions, ThemeInstance } from 'vuetify';
import type { EventBusKey } from '@vueuse/core';
import type { VProgressCircular, VProgressLinear } from 'vuetify/components';
import type { VDataTable, VDataTableServer, VDataTableRow, VSkeletonLoader } from 'vuetify/labs/components';


// -------------------------------------------------- Vuetify Types //
export type Density = 'default' | 'comfortable' | 'compact';

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
	internalItem: T;
	item: T;
	selected: boolean;
	selectable: boolean;
	columns: {
		[key: string]: any;
	};
}


// -------------------------------------------------- Misc //
export interface KeyStringAny<T = any> {
	[key: string]: T;
};


// -------------------------------------------------- Colors //
export interface TableColors<T = any> {
	[key: string]: T;
}

export type DefaultColors = {
	background?: string;
	base?: string;
	border?: string | null;
	color?: string;
};

export type ColorsObject = {
	default: DefaultColors;
	footer?: {
		background?: string;
		color?: string;
	};
	header?: {
		background?: string;
		color?: string;
	};
	percentageChange?: number;
	percentageDirection?: 'asc' | 'desc';
};

export type LevelColorResponse = {
	background?: string;
	base?: string;
	border?: string;
	circular?: string;
	color?: string;
	linear?: string;
};

export type HEXColor = string;
export type HSLColor = [number, number, number];
export type RGBColor = [number, number, number];


// -------------------------------------------------- Search //
export type SearchContainerCols = {
	lg?: number;
	md?: number;
	sm?: number;
	xl?: number;
	xs?: number;
	xxl?: number;
};


// -------------------------------------------------- Cell Rendering //
interface CellRender {
	(
		column?: object,
		index?: number,
		key?: string,
	): void;
};

interface ItemCellRender {
	(
		column?: object,
		index?: number,
		item?: object,
		itemValue?: string,
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


// -------------------------------------------------- Table //
export type TableType = VDataTable | VDataTableServer | unknown;


// -------------------------------------------------- Props //
export interface Props {
	colorPercentageChange?: ColorsObject['percentageChange'];
	colorPercentageDirection?: ColorsObject['percentageDirection'];
	colors?: NonNullable<ColorsObject>;
	columnWidths?: number[];
	customFilter?: VDataTable['$props']['customFilter'];
	customKeyFilter?: VDataTable['$props']['customKeyFilter'];
	defaultColors?: ColorsObject['default'];
	density?: VDataTable['$options']['density'];
	drilldown?: object;
	drilldownKey?: string;
	elevation?: string | number | undefined;
	expandOnClick?: VDataTable['$props']['expandOnClick'];
	expanded?: readonly string[] | undefined;
	filterKeys?: VDataTable['$props']['filterKeys'];										// ? Need more info/testing
	filterMode?: VDataTable['$props']['filterMode'];
	fixedFooter?: boolean;
	fixedHeader?: boolean;
	footerBackgroundColor?: string | undefined;
	footerColor?: string | undefined;
	footers?: Column[];
	groupBy?: VDataTable['$props']['groupBy'];
	headerBackgroundColor?: string | undefined;
	headerColor?: string | undefined;
	headers?: VDataTable['$props']['headers'];
	height?: string | number | undefined;
	// hideDefaultFooter?: boolean;																			// ? Custom Property - Need to add/test
	// hideDefaultHeader?: boolean;																			// ? Custom Property - Need to add/test
	hideNoData?: VDataTable['$props']['hideNoData'];
	hover?: VDataTable['$props']['hover'];
	isDrilldown?: boolean;
	item?: (typeof VDataTableRow)['$props']['item'];
	itemChildrenKey?: string;
	itemSelectable?: VDataTable['$props']['itemSelectable'];
	itemValue?: VDataTable['$props']['itemValue'];
	items?: VDataTable['$props']['items'];
	itemsLength?: number;
	itemsPerPage?: VDataTable['$props']['itemsPerPage'];
	itemsPerPageOptions?: VDataTable['$props']['itemsPerPageOptions'];
	level: number;
	levels: number;
	loaderProps?: LoaderProps;
	loaderSize?: VProgressCircular['$props']['size'];
	loaderType?: string | string[] | false | null;
	loading?: VDataTable['$props']['loading'];
	loadingText?: VDataTable['$props']['loadingText'];
	matchColumnWidths?: boolean;
	modelValue?: unknown[];
	multiSort?: VDataTable['$props']['multiSort'];
	mustSort?: VDataTable['$props']['mustSort'];
	noDataText?: VDataTable['$props']['noDataText'];
	noFilter?: VDataTable['$props']['noFilter'];
	page?: VDataTable['$props']['page'];
	returnObject?: VDataTable['$props']['returnObject'];
	search?: string | undefined;
	searchContainerCols?: SearchContainerCols;
	searchDebounce?: number | undefined | null;
	searchEvents?: KeyStringAny;
	searchMaxWait?: number | undefined | null;
	searchProps?: KeyStringAny;
	separator?: 'default' | 'horizontal' | 'vertical' | 'cell' | undefined;
	server?: boolean;
	selectStrategy?: VDataTable['$props']['selectStrategy'];
	showDrilldownWhenLoading?: boolean;
	showExpand?: VDataTable['$props']['showExpand'];
	showFooterRow?: boolean;
	showSearch?: boolean;
	showSelect?: VDataTable['$props']['showSelect'];
	sortAscIcon?: VDataTable['$props']['sortAscIcon'];
	sortBy?: VDataTable['$props']['sortBy'];
	tableType?: TableType;
	width?: string | number | undefined;																// ! Not working properly //
}

export type Drilldown = Props;


// -------------------------------------------------- Slots //
type GetSortIcon = (column: InternalDataTableHeader) => IconValue;
type IsExpanded = (item: DataTableItem<any>) => boolean;
type SelectAll = (value: boolean) => void;
type ToggleExpandSelect = (item: DataTableItem<any>) => void;
type ToggleSort = (column: InternalDataTableHeader) => void;

export interface VDataTableSlotProps {
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

export interface AllSlotProps {
	colors: Props['colors'];
	density: Props['density'];
	level: Props['level'];
	showSelect?: Props['showSelect'];
	sortBy: Props['sortBy'];
}

export interface TopSlotProps extends VDataTableSlotProps {
	items: Props['items'];
	level: Props['level'];
	loading: Props['loading'];
	searchContainerCols?: SearchContainerCols;
	searchEvents?: KeyStringAny;
	searchProps?: KeyStringAny;
	showSearch: boolean;
};

export interface HeaderSlotProps extends AllSlotProps {
	colorPercentageChange?: Props['colorPercentageChange'];
	colorPercentageDirection?: Props['colorPercentageDirection'];
	colors: Props['colors'];
	columnWidths: Props['columnWidths'];
	headerBackgroundColor?: Props['headerBackgroundColor'];
	headerColor?: Props['headerColor'];
	isTheadSlot?: boolean;
	items: Props['items'];
	loaderProps?: LoaderProps;
	loaderSettings: {
		colspan: number;
		height?: VProgressLinear['$props']['height'];
		loaderType: Props['loaderType'];
		loading: VDataTable['$props']['loading'];
		loadingText?: VDataTable['$props']['loadingText'];
		size?: VProgressCircular['$props']['size'];
		textLoader?: boolean;
	};
	matchColumnWidths: Props['matchColumnWidths'];
	selectStrategy: Props['selectStrategy'];
	slotProps: {
		allSelected?: boolean;
		columns: Column[];
		getSortIcon: GetSortIcon;
		index?: number;
		item?: Props['item'] | any;
		selectAll: SelectAll;
		someSelected: boolean;
		sortBy: Props['sortBy'];
		toggleSort: ToggleSort;
	},
	sortAscIcon?: Props['sortAscIcon'];
	tableModelValue?: Props['modelValue'];
}

export interface THeadSlotProps extends
	AllSlotProps,
	Pick<HeaderSlotProps,
		'slotProps' |
		'columnWidths' |
		'items' |
		'loaderSettings' |
		'matchColumnWidths' |
		'selectStrategy'
	> { };

export interface ItemSlotProps extends Omit<AllSlotProps, 'colors' | 'sortBy'> {
	expandOnClick: Props['expandOnClick'];
	itemSelectable: Props['itemSelectable'];
	items: Props['items'];
	levels: Props['levels'];
	showExpand: Props['showExpand'];
	slotProps: {
		columns: Column[];
		index?: number;
		internalItem: DataTableItem | any;
		isExpanded: IsExpanded;
		isSelected: (items: DataTableItem<any> | DataTableItem<any>[]) => boolean;
		item: DataTableItem | any;
		level: Props['level'];
		toggleExpand: ToggleExpandSelect;
		toggleSelect: ToggleExpandSelect;
	},
}

export interface TFootSlotProps extends Omit<AllSlotProps, 'showSelect' | 'sortBy'> {
	colorPercentageChange?: Props['colorPercentageChange'];
	colorPercentageDirection?: Props['colorPercentageDirection'];
	footerBackgroundColor?: Props['footerBackgroundColor'];
	footerColor?: Props['footerColor'];
	footers: Column[];
	items: Props['items'];
	selectStrategy: Props['selectStrategy'];
	slotProps: {
		allSelected?: boolean;
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
	tableModelValue?: Props['modelValue'];
}


// -------------------------------------------------- Table Loader //
export interface CircularLoaderProps extends KeyStringAny {
	bgColor?: VProgressCircular['$props']['bgColor'];
	color?: VProgressCircular['$props']['color'];
	indeterminate?: VProgressCircular['$props']['indeterminate'];
	size?: VProgressCircular['$props']['size'];
}
export interface LinearLoaderProps extends KeyStringAny {
	color?: VProgressLinear['$props']['color'];
	indeterminate?: VProgressLinear['$props']['indeterminate'];
}
export interface SkeltonLoaderProps extends KeyStringAny {
	type?: VSkeletonLoader['$props']['type'],
}

export interface LoaderProps {
	circular?: CircularLoaderProps,
	linear?: LinearLoaderProps,
	skelton?: SkeltonLoaderProps,
	text?: {
		color?: string,
	};
};

export type TableLoader = {
	colors: Props['colors'];
	colspan: number;
	height?: VProgressLinear['$props']['height'];
	level: Props['level'];
	loaderType: Props['loaderType'];
	loading: VDataTable['$props']['loading'];
	loaderProps?: LoaderProps;
	loadingText?: VDataTable['$props']['loadingText'];
	size?: VProgressCircular['$props']['size'];
	textLoader?: boolean;
};

export interface UseLoaderStyles {
	(
		options: {
			isLinearOnly: MaybeRef<boolean>,
			loaderHeight: MaybeRef<VProgressLinear['$props']['height']>,
		}
	): CSSProperties;
}

export interface UseLoaderContainerClasses {
	(
		options: {
			isLinearOnly: MaybeRef<boolean>,
		}
	): object;
}


// -------------------------------------------------- Composables //

// ------------------------- Loaded Drilldown //
export interface UseSetLoadedDrilldown {
	(
		options: {
			loadedDrilldown: Props,
			drilldown: object,
			item: DataTableItem['item'],
			level: Props['level'],
			levels: Props['levels'],
			matchColumnWidths?: Props['matchColumnWidths'],
		}
	): Props;
}

export interface UseGetHeaderColumnWidths {
	(
		options: {
			tableId: MaybeRef<string>,
		}
	): number[];
}


// ------------------------- Level Colors //
export interface UseGetLevelColors {
	(
		options: {
			colors: Props['colors'],
			level: Props['level'],
			prop: string,
			themeColors: ThemeInstance,
			type?: string | null,
		}
	): LevelColorResponse;
}

export interface ConvertLevelColors {
	(
		options: {
			colors: NonNullable<Props['colors']>,
			level: Props['level'],
			prop: string,
			theme: ThemeInstance,
			type: string | null,
		}
	): LevelColorResponse;
}

export interface LevelPercentage {
	(
		colors: Props['colors'],
		level: number,
		direction: string,
	): number;
}


// ------------------------- Helpers //
export interface UseGetSortDirection {
	(
		options: {
			id: string,
			sortBy: Props['sortBy'],
		}
	): string | boolean | void;
}

export interface UseConvertToUnit {
	(
		options: {
			str: string | number,
			unit?: string,
		}
	): string | void;
}


// ------------------------- Emits //
export interface UseEmitUpdatedExpanded {
	(
		options: {
			emit: {
				(e: 'update:drilldown', drilldownData: Props): void;
				(e: 'update:expanded', data: DrilldownEvent): void;
			},
			data: DrilldownEvent,
			drilldownData: Props,
		}
	): void;
}


// ------------------------- Classes //
export interface UseBodyCellClasses {
	(
		options: {
			column: Column,
			level: Props['level'],
		}
	): object;
}

export interface UseBodyRowClasses {
	(
		options: {
			expandOnClick: Props['expandOnClick'],
			level: Props['level'],
			levels: Props['levels'],
		}
	): object;
}

export interface UseCellAlignClasses {
	(
		options: {
			align: string;
		}
	): object;
}

export interface UseCellClasses {
	(
		options: {
			column: Column,
			elm: string,
			level: Props['level'];
		},
	): object;
}

export interface UseCheckBoxClasses {
	(
		options: {
			level: Props['level'],
		}
	): object;
}

export interface UseHeaderCellClasses {
	(
		options: {
			column: Column,
			level: Props['level'],
			slotName?: string,
		}
	): object;
}

export interface UseHeaderRowClasses {
	(
		options: {
			level: Props['level'],
		}
	): object;
}

export interface UseSortIconClasses {
	(
		options: {
			iconOptions: IconOptions | undefined,
			key: string,
			level: Props['level'],
			sortBy: Props['sortBy'],
		}
	): object;
}

export interface UseTableClasses {
	(
		options: {
			elevation: string | number | undefined,
			fixedHeader: Props['fixedHeader'],
			isDrilldown: boolean,
			isHover: boolean | undefined,
			isServerSide: boolean,
			level: Props['level'],
			separator: Props['separator'],
		}
	): object;
}

export interface UseTFootClasses {
	(
		options: {
			level: Props['level'],
		}
	): object;
}

export interface UseTFootCellClasses {
	(
		options: {
			column: Column,
			level: Props['level'],
			slotName?: string,
		}
	): object;
}

export interface UseTFootRowClasses {
	(
		options: {
			level: Props['level'],
		}
	): object;
}


// ------------------------- Styles //
export interface UseHeaderCellStyles {
	(
		options: {
			colors: Props['colors'],
			column: { width?: string | number; },
			dataTableExpand: boolean,
			headerBackgroundColor?: Props['headerBackgroundColor'];
			headerColor?: Props['headerColor'];
			level: Props['level'],
			theme: ThemeInstance,
		}
	): CSSProperties;
}

export interface UseTableStyles {
	(
		options: {
			colors: Props['colors'],
			level: Props['level'],
			theme: ThemeInstance,
		}
	): StyleValue;
}

export interface UseTFootCellStyles {
	(
		options: {
			colors: Props['colors'],
			elm: string,
			footerColor?: Props['footerColor'],
			level: Props['level'],
			theme: ThemeInstance,
		}
	): CSSProperties;
}


// -------------------------------------------------- Events  //
export type DrilldownEvent = {
	$event?: MouseEvent | undefined;
	columns?: object;
	index?: number;
	internalItem: DataTableItem['internalItem'];
	isExpanded: IsExpanded;
	isRow?: boolean;
	item: DataTableItem | any;
	items?: object;
	level?: Props['level'];
	sortBy?: object;
	toggleExpand: ToggleExpandSelect;
};

export type ClickRowCheckboxEvent = {
	columns?: object;
	index?: number;
	item?: object;
	internalItem?: DataTableItem['internalItem'];
	level?: Props['level'];
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
