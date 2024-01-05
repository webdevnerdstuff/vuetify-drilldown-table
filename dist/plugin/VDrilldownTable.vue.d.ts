import { Props } from './types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    colorPercentageChange: number;
    colorPercentageDirection: "desc";
    colors: () => {
        readonly default: import('./types').DefaultColors;
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
    defaultColors: () => import('./types').DefaultColors;
    density: string;
    drilldownKey: string;
    elevation: number;
    expandOnClick: boolean;
    filterKeys: undefined;
    footerBackgroundColor: undefined;
    footerColor: undefined;
    footers: () => import('./types').Column[];
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
    "click:row": (...args: any[]) => void;
    "click:row:checkbox": (...args: any[]) => void;
    "update:expanded": (...args: any[]) => void;
    "update:drilldown": (...args: any[]) => void;
    "update:options": (...args: any[]) => void;
    "update:itemsPerPage": (...args: any[]) => void;
    "update:page": (...args: any[]) => void;
    "update:search": (...args: any[]) => void;
    "update:sortBy": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    colorPercentageChange: number;
    colorPercentageDirection: "desc";
    colors: () => {
        readonly default: import('./types').DefaultColors;
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
    defaultColors: () => import('./types').DefaultColors;
    density: string;
    drilldownKey: string;
    elevation: number;
    expandOnClick: boolean;
    filterKeys: undefined;
    footerBackgroundColor: undefined;
    footerColor: undefined;
    footers: () => import('./types').Column[];
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
    "onClick:row"?: ((...args: any[]) => any) | undefined;
    "onClick:row:checkbox"?: ((...args: any[]) => any) | undefined;
    "onUpdate:expanded"?: ((...args: any[]) => any) | undefined;
    "onUpdate:drilldown"?: ((...args: any[]) => any) | undefined;
    "onUpdate:options"?: ((...args: any[]) => any) | undefined;
    "onUpdate:itemsPerPage"?: ((...args: any[]) => any) | undefined;
    "onUpdate:page"?: ((...args: any[]) => any) | undefined;
    "onUpdate:search"?: ((...args: any[]) => any) | undefined;
    "onUpdate:sortBy"?: ((...args: any[]) => any) | undefined;
}, {
    page: string | number;
    colorPercentageChange: number;
    colorPercentageDirection: "desc" | "asc";
    density: any;
    drilldownKey: string;
    elevation: string | number;
    expandOnClick: boolean;
    footers: import('./types').Column[];
    height: string | number;
    hideNoData: boolean;
    hover: boolean;
    itemChildrenKey: string;
    itemSelectable: string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null;
    itemValue: string | boolean | readonly (string | number)[] | ((item: any, fallback?: any) => any) | null;
    items: readonly any[];
    itemsLength: number;
    itemsPerPage: string | number;
    level: number;
    levels: number;
    loaderProps: import('./types').LoaderProps;
    loaderType: string | false | string[] | null;
    loading: string | boolean;
    loadingText: string;
    matchColumnWidths: boolean;
    noDataText: string;
    search: string;
    searchContainerCols: import('./types').SearchContainerCols;
    searchDebounce: number | null;
    searchMaxWait: number | null;
    searchProps: import('./types').KeyStringAny<any>;
    selectStrategy: "page" | "all" | "single";
    separator: "horizontal" | "default" | "vertical" | "cell";
    server: boolean;
    showDrilldownWhenLoading: boolean;
    showExpand: boolean;
    showFooterRow: boolean;
    showSearch: boolean;
    showSelect: boolean;
    sortAscIcon: string | (string | [path: string, opacity: number])[] | import("vue").JSXComponent;
    sortBy: readonly {
        key: string;
        order?: boolean | "desc" | "asc" | undefined;
    }[];
    defaultColors: import('./types').DefaultColors;
    colors: import('./types').ColorsObject;
    headerBackgroundColor: string;
    footerBackgroundColor: string;
    footerColor: string;
    headerColor: string;
    columnWidths: number[];
    filterKeys: string | string[];
    isDrilldown: boolean;
    noFilter: boolean;
    returnObject: boolean;
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
