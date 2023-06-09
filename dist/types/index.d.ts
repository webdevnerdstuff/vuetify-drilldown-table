import { CSSProperties, JSXComponent, StyleValue, MaybeRef } from 'vue';
import { ThemeInstance } from 'vuetify';
import type { EventBusKey } from '@vueuse/core';
import type { VTextField, VProgressCircular, VProgressLinear } from 'vuetify/components';
import type { VDataTable, VDataTableServer, VDataTableRow } from 'vuetify/labs/components';
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
    raw: T;
    columns: {
        [key: string]: any;
    };
}
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
export type TableType = VDataTable | VDataTableServer | unknown;
export interface Props {
    colors?: ColorsObject | null;
    customFilter?: VDataTable['$props']['customFilter'];
    customKeyFilter?: VDataTable['$props']['customKeyFilter'];
    density?: VDataTable['$options']['density'];
    drilldown?: object;
    drilldownKey?: string;
    elevation?: string | number | undefined;
    expandOnClick?: VDataTable['$props']['expandOnClick'];
    expanded?: readonly string[] | undefined;
    filterKeys?: VDataTable['$props']['filterKeys'];
    filterMode?: VDataTable['$props']['filterMode'];
    fixedFooter?: boolean;
    fixedHeader?: boolean;
    footers?: Column[];
    headers?: VDataTable['$props']['headers'];
    height?: string | number | undefined;
    hideNoData?: VDataTable['$props']['hideNoData'];
    hover?: VDataTable['$props']['hover'];
    isDrilldown?: boolean;
    item?: VDataTableRow['$props']['item'];
    itemChildrenKey?: string;
    itemValue?: VDataTable['$props']['itemValue'];
    items?: VDataTable['$props']['items'];
    itemsLength?: number;
    itemsPerPage?: VDataTable['$props']['itemsPerPage'];
    itemsPerPageOptions?: VDataTable['$props']['itemsPerPageOptions'];
    level: number;
    levels: number;
    loaderHeight?: VProgressLinear['$props']['height'];
    loaderType?: string | string[] | false | null;
    loading?: VDataTable['$props']['loading'];
    loadingText?: VDataTable['$props']['loadingText'];
    modelValue?: unknown[];
    multiSort?: VDataTable['$props']['multiSort'];
    mustSort?: VDataTable['$props']['mustSort'];
    noDataText?: VDataTable['$props']['noDataText'];
    noFilter?: VDataTable['$props']['noFilter'];
    page?: VDataTable['$props']['page'];
    returnObject?: VDataTable['$props']['returnObject'];
    search?: string | undefined;
    searchDebounce?: number | undefined | null;
    searchMaxWait?: number | undefined | null;
    searchProps?: SearchProps;
    separator?: string;
    server?: boolean;
    showDrilldownWhenLoading?: boolean;
    showExpand?: VDataTable['$props']['showExpand'];
    showFooterRow?: boolean;
    showSearch?: boolean;
    showSelect?: VDataTable['$props']['showSelect'];
    skeltonType?: string;
    sortBy?: VDataTable['$props']['sortBy'];
    tableType?: TableType;
    width?: string | number | undefined;
}
export type Drilldown = Props;
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
    searchProps?: SearchProps;
    showSearch: boolean;
}
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
    };
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
    };
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
    };
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
export interface UseLoaderStyles {
    (options: {
        isLinearOnly: MaybeRef<boolean>;
        loaderHeight: MaybeRef<Props['loaderHeight']>;
    }): CSSProperties;
}
export interface UseSetLoadedDrilldown {
    (options: {
        loadedDrilldown: Props;
        drilldown: object;
        rawItem: DataTableItem['raw'];
        level: number;
        levels: number;
    }): Props;
}
export interface UseGetLevelColors {
    (options: {
        colors: ColorsObject | undefined | null;
        level: number;
        prop: string;
        themeColors: ThemeInstance;
        type?: string | null;
    }): LevelColorResponse;
}
export interface ConvertLevelColors {
    (options: {
        colors: ColorsObject;
        level: number;
        prop: string;
        theme: ThemeInstance;
        type: string | null;
    }): LevelColorResponse;
}
interface CellRender {
    (key?: string, column?: object, index?: number): void;
}
interface ItemCellRender {
    (itemValue?: string, item?: object, column?: object, index?: number): void;
}
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
    renderer?: CellRender;
    rowClass?: string;
    rowspan?: number;
    sortable?: boolean;
    title?: string;
    width?: string | number;
}
export interface UseBodyCellClasses {
    (options: {
        column: Column;
        level: number;
    }): object;
}
export interface UseBodyRowClasses {
    (options: {
        expandOnClick: Props['expandOnClick'];
        level: number;
        levels: number;
    }): object;
}
export interface UseCellAlignClasses {
    (options: {
        align: string;
    }): object;
}
export interface UseCellClasses {
    (options: {
        column: Column;
        elm: string;
        level: number;
    }): object;
}
export interface UseCheckBoxClasses {
    (options: {
        level: number;
    }): object;
}
export interface UseHeaderCellClasses {
    (options: {
        colors: ColorsObject | undefined | null | false;
        column: Column;
        level: number;
        slotName?: string;
    }): object;
}
export interface UseHeaderRowClasses {
    (options: {
        level: number;
    }): object;
}
export interface UseSortIconClasses {
    (options: {
        key: string;
        level: number;
        sortBy: Props['sortBy'];
    }): object;
}
export interface UseTableClasses {
    (options: {
        elevation: string | number | undefined;
        isDrilldown: boolean;
        isHover: boolean | undefined;
        isServerSide: boolean;
        level: number;
    }): object;
}
export interface UseTFootClasses {
    (options: {
        level: number;
    }): object;
}
export interface UseTFootCellClasses {
    (options: {
        column: Column;
        level: number;
        slotName?: string;
    }): object;
}
export interface UseTFootRowClasses {
    (options: {
        level: number;
    }): object;
}
export interface UseCellStyles {
    (options: {
        colors: ColorsObject | undefined | null | false;
        elm: string;
        level: number;
        theme: ThemeInstance;
    }): CSSProperties;
}
export interface UseHeaderCellStyles {
    (options: {
        colors: ColorsObject | undefined | null | false;
        column: {
            width?: string | number;
        };
        dataTableExpand: boolean;
        level: number;
        theme: ThemeInstance;
    }): CSSProperties;
}
export interface UseTableStyles {
    (options: {
        colors: ColorsObject | undefined | null | false;
        level: number;
        theme: ThemeInstance;
    }): StyleValue;
}
export interface UseTFootCellStyles {
    (options: {
        colors: ColorsObject | undefined | null | false;
        elm: string;
        level: number;
        theme: ThemeInstance;
    }): CSSProperties;
}
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
export interface OptionsEventObject {
    drilldown: Props;
    name?: string;
    sortBy?: Props['sortBy'];
    page?: Props['page'];
    itemsPerPage?: Props['itemsPerPage'];
}
export declare const OptionsEventBus: EventBusKey<OptionsEventObject>;
export interface UseEmitUpdatedExpanded {
    (options: {
        emit: {
            (e: 'update:drilldown', drilldownData: Props): void;
            (e: 'update:expanded', data: DrilldownEvent): void;
        };
        data: DrilldownEvent;
        drilldownData: Props;
    }): void;
}
export {};