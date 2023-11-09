import { Props } from '../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    colorPercentageChange: number;
    colorPercentageDirection: "desc";
    colors: () => {
        readonly default: import('../types').DefaultColors;
        readonly footer: {
            readonly background: undefined;
            readonly color: undefined;
        };
        readonly header: {
            readonly background: undefined;
            readonly color: undefined;
        };
        readonly percentageChange: 15;
        readonly percentageDirection: "desc";
    };
    columnWidths: () => never[];
    defaultColors: () => import('../types').DefaultColors;
    density: string;
    drilldownKey: string;
    elevation: number;
    expandOnClick: boolean;
    filterKeys: undefined;
    footerBackgroundColor: undefined;
    footerColor: undefined;
    footers: () => import('../types').Column[];
    headerBackgroundColor: undefined;
    headerColor: undefined;
    height: string;
    hideNoData: boolean;
    hover: boolean;
    isDrilldown: boolean;
    itemChildrenKey: string;
    itemSelectable: undefined;
    itemValue: string;
    items: () => never[];
    itemsLength: number;
    itemsPerPage: number;
    level: number;
    levels: number;
    loaderProps: () => {
        readonly circular: {
            readonly bgColor: "theme-surface";
            readonly color: "primary";
            readonly indeterminate: true;
        };
        readonly linear: {
            readonly color: "surface-variant";
            readonly height: "2px";
            readonly indeterminate: true;
        };
        readonly skelton: {
            readonly type: "heading@1";
        };
        readonly text: {
            readonly color: "surface-variant";
        };
    };
    loaderType: string;
    loading: boolean;
    loadingText: string;
    matchColumnWidths: boolean;
    noDataText: string;
    noFilter: boolean;
    page: number;
    returnObject: boolean;
    search: string;
    searchContainerCols: () => {
        lg: number;
        md: number;
        sm: number;
        xl: number;
        xs: number;
        xxl: number;
    };
    searchDebounce: number;
    searchEvents: () => {};
    searchMaxWait: number;
    searchProps: () => {};
    selectStrategy: "page";
    separator: "default";
    server: boolean;
    showDrilldownWhenLoading: boolean;
    showExpand: boolean;
    showFooterRow: boolean;
    showSearch: boolean;
    showSelect: boolean;
    sortAscIcon: string;
    sortBy: () => never[];
    tableType: () => {};
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:drilldown": (...args: any[]) => void;
    "update:expanded": (...args: any[]) => void;
    "click:row": (...args: any[]) => void;
    "click:row:checkbox": (...args: any[]) => void;
    "update:sortBy": (...args: any[]) => void;
    "update:search": (...args: any[]) => void;
    "update:options": (...args: any[]) => void;
    "update:itemsPerPage": (...args: any[]) => void;
    "update:page": (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    colorPercentageChange: number;
    colorPercentageDirection: "desc";
    colors: () => {
        readonly default: import('../types').DefaultColors;
        readonly footer: {
            readonly background: undefined;
            readonly color: undefined;
        };
        readonly header: {
            readonly background: undefined;
            readonly color: undefined;
        };
        readonly percentageChange: 15;
        readonly percentageDirection: "desc";
    };
    columnWidths: () => never[];
    defaultColors: () => import('../types').DefaultColors;
    density: string;
    drilldownKey: string;
    elevation: number;
    expandOnClick: boolean;
    filterKeys: undefined;
    footerBackgroundColor: undefined;
    footerColor: undefined;
    footers: () => import('../types').Column[];
    headerBackgroundColor: undefined;
    headerColor: undefined;
    height: string;
    hideNoData: boolean;
    hover: boolean;
    isDrilldown: boolean;
    itemChildrenKey: string;
    itemSelectable: undefined;
    itemValue: string;
    items: () => never[];
    itemsLength: number;
    itemsPerPage: number;
    level: number;
    levels: number;
    loaderProps: () => {
        readonly circular: {
            readonly bgColor: "theme-surface";
            readonly color: "primary";
            readonly indeterminate: true;
        };
        readonly linear: {
            readonly color: "surface-variant";
            readonly height: "2px";
            readonly indeterminate: true;
        };
        readonly skelton: {
            readonly type: "heading@1";
        };
        readonly text: {
            readonly color: "surface-variant";
        };
    };
    loaderType: string;
    loading: boolean;
    loadingText: string;
    matchColumnWidths: boolean;
    noDataText: string;
    noFilter: boolean;
    page: number;
    returnObject: boolean;
    search: string;
    searchContainerCols: () => {
        lg: number;
        md: number;
        sm: number;
        xl: number;
        xs: number;
        xxl: number;
    };
    searchDebounce: number;
    searchEvents: () => {};
    searchMaxWait: number;
    searchProps: () => {};
    selectStrategy: "page";
    separator: "default";
    server: boolean;
    showDrilldownWhenLoading: boolean;
    showExpand: boolean;
    showFooterRow: boolean;
    showSearch: boolean;
    showSelect: boolean;
    sortAscIcon: string;
    sortBy: () => never[];
    tableType: () => {};
}>>> & {
    "onUpdate:sortBy"?: ((...args: any[]) => any) | undefined;
    "onUpdate:expanded"?: ((...args: any[]) => any) | undefined;
    "onUpdate:page"?: ((...args: any[]) => any) | undefined;
    "onUpdate:itemsPerPage"?: ((...args: any[]) => any) | undefined;
    "onUpdate:options"?: ((...args: any[]) => any) | undefined;
    "onClick:row"?: ((...args: any[]) => any) | undefined;
    "onClick:row:checkbox"?: ((...args: any[]) => any) | undefined;
    "onUpdate:search"?: ((...args: any[]) => any) | undefined;
    "onUpdate:drilldown"?: ((...args: any[]) => any) | undefined;
}, {
    filterKeys: string | string[];
    noFilter: boolean;
    density: any;
    height: string | number;
    hover: boolean;
    loading: string | boolean;
    sortAscIcon: string | import("vue").JSXComponent | (string | [path: string, opacity: number])[];
    sortBy: readonly {
        key: string;
        order?: boolean | "asc" | "desc" | undefined;
    }[];
    showSelect: boolean;
    selectStrategy: "page" | "all" | "single";
    items: any[];
    itemValue: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
    itemSelectable: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
    returnObject: boolean;
    expandOnClick: boolean;
    showExpand: boolean;
    search: string;
    loadingText: string;
    hideNoData: boolean;
    noDataText: string;
    page: string | number;
    itemsPerPage: string | number;
    itemsLength: number;
    colors: import('../types').ColorsObject;
    level: number;
    colorPercentageChange: number;
    colorPercentageDirection: "asc" | "desc";
    columnWidths: number[];
    headerBackgroundColor: string;
    headerColor: string;
    loaderType: string | false | string[] | null;
    matchColumnWidths: boolean;
    loaderProps: import('../types').LoaderProps;
    levels: number;
    footerBackgroundColor: string;
    footerColor: string;
    elevation: string | number;
    separator: "default" | "horizontal" | "vertical" | "cell";
    isDrilldown: boolean;
    footers: import('../types').Column[];
    searchContainerCols: import('../types').SearchContainerCols;
    searchEvents: import('../types').KeyStringAny<any>;
    searchProps: import('../types').KeyStringAny<any>;
    showSearch: boolean;
    defaultColors: import('../types').DefaultColors;
    drilldownKey: string;
    itemChildrenKey: string;
    searchDebounce: number | null;
    searchMaxWait: number | null;
    server: boolean;
    showDrilldownWhenLoading: boolean;
    showFooterRow: boolean;
    tableType: {};
}, {}>, Partial<Record<NonNullable<string | number>, (_: any) => any>> & Partial<Record<NonNullable<string | number>, (_: any) => any>> & Partial<Record<NonNullable<string | number>, (_: any) => any>> & Partial<Record<string, (_: {}) => any>> & Partial<Record<NonNullable<string | number>, (_: any) => any>> & Partial<Record<NonNullable<string | number>, (_: any) => any>> & Partial<Record<NonNullable<string | number>, (_: any) => any>> & {
    loader?(_: {}): any;
    loading?(_: {}): any;
    thead?(_: any): any;
    body?(_: any): any;
    "group-header"?(_: any): any;
    tbody?(_: any): any;
    "no-data"?(_: {}): any;
    tfoot?(_: any): any;
    "footer.prepend"?(_: {}): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
