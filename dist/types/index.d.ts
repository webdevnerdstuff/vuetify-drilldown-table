import { PropType } from 'vue';
import type { VTextField } from "vuetify/components";
import type { VDataTable } from "vuetify/labs/VDataTable";
export type Density = null | 'default' | 'comfortable' | 'compact';
export interface InternalItem<T = object> {
    children?: InternalItem<T>[];
    props: {
        [key: string]: unknown;
        title: string;
        value: unknown;
    };
    raw: T;
    title: string;
    value: unknown;
}
export interface DataTableItem extends InternalItem {
    [key: string]: string;
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
    renderHeader?: CellRender;
    renderItem?: ItemCellRender;
    renderer?: CellRender;
    rowClass?: string;
    rowspan?: number;
    sortable?: boolean;
    title?: string;
    width?: string | number;
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
    density?: VTextField["$props"]["density"];
    variant?: VTextField["$props"]["variant"];
};
export type Props = {
    colors?: {
        default: boolean;
        required: boolean;
        type: PropType<boolean> | PropType<ColorsObject>;
    };
    debounceDelay: {
        default: number;
        required: boolean;
        type: PropType<number>;
    };
    density?: {
        default: string;
        required: boolean;
        type: PropType<VTextField["$props"]["density"]>;
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
    expandOnClick?: {
        default: boolean;
        required: boolean;
        type: PropType<boolean>;
    };
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
    isDrilldown: {
        default: boolean;
        required: boolean;
        type: PropType<boolean>;
    };
    item: {
        default: DataTableItem | object;
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
        type: PropType<object>;
    };
    itemsLength?: {
        default: number;
        required: boolean;
        type: PropType<number>;
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
    loaderType: {
        default: string | string[];
        required: boolean;
        type: PropType<string | string[]>;
    };
    loading: {
        default: boolean;
        required: boolean;
        type: PropType<boolean>;
    };
    loadingText: {
        default: string;
        required: boolean;
        type: PropType<string>;
    };
    noDataText: {
        default: string;
        required: boolean;
        type: PropType<string>;
    };
    searchProps: {
        default: () => SearchProps;
        required?: boolean;
        type?: PropType<SearchProps>;
    };
    showFooterRow?: {
        default: boolean;
        required: boolean;
        type: PropType<boolean>;
    };
    showSearch?: {
        default: boolean;
        required: boolean;
        type: PropType<boolean>;
    };
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
export type LoadedDrilldown = {
    colors?: boolean | ColorsObject;
    customFilter?: VDataTable["$props"]["customFilter"];
    customKeyFilter?: VDataTable["$props"]["customKeyFilter"];
    debounceDelay?: number | undefined;
    density?: VTextField["$props"]["density"];
    drilldown?: object;
    drilldownKey: string;
    elevation?: string | number | undefined;
    expandOnClick?: boolean;
    expanded?: string[];
    filterKeys?: VDataTable["$props"]["filterKeys"];
    filterMode?: VDataTable["$props"]["filterMode"];
    fixedFooter?: boolean;
    fixedHeader?: boolean;
    footers?: VDataTable["$props"]["headers"];
    headers?: VDataTable["$props"]["headers"];
    height?: string | number | undefined;
    hideNoData?: boolean;
    hover?: boolean;
    isDrilldown?: boolean;
    item?: object;
    itemChildren?: VDataTable["$props"]["itemChildren"];
    itemChildrenKey: string;
    itemProps?: VDataTable["$props"]["itemProps"];
    itemTitle?: VDataTable["$props"]["itemTitle"];
    itemValue?: VDataTable["$props"]["itemValue"];
    items: unknown[];
    itemsLength?: number;
    itemsPerPage?: string | number;
    level: number;
    levels: number;
    loaderType?: string | string[];
    loading?: boolean;
    loadingText?: string;
    modelValue?: unknown[];
    multiSort?: boolean;
    mustSort?: boolean;
    noDataText?: string;
    noFilter?: boolean;
    page?: string | number;
    returnObject?: boolean;
    search?: string | undefined;
    searchProps: SearchProps;
    server?: boolean;
    showExpand?: boolean;
    showFooterRow?: boolean;
    showSearch?: boolean;
    showSelect?: boolean;
    skeltonType?: string;
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
export {};
