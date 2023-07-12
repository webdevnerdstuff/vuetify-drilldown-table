declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    item: {
        type: globalThis.PropType<any>;
    };
    itemsPerPageOptions: {
        type: globalThis.PropType<readonly {
            title: string;
            value: number;
        }[]>;
    };
    customFilter: {
        type: globalThis.PropType<(value: string, query: string, item?: any) => number | boolean | [number, number] | [number, number][]>;
    };
    customKeyFilter: {
        type: globalThis.PropType<{
            [x: string]: (value: string, query: string, item?: any) => number | boolean | [number, number] | [number, number][];
        }>;
    };
    filterKeys: {
        type: globalThis.PropType<string | string[]>;
        default: undefined;
    };
    filterMode: {
        type: globalThis.PropType<"every" | "some" | "union" | "intersection">;
    };
    noFilter: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    density: {
        type: globalThis.PropType<any>;
        default: string;
    };
    fixedHeader: {
        type: globalThis.PropType<boolean>;
    };
    fixedFooter: {
        type: globalThis.PropType<boolean>;
    };
    height: {
        type: globalThis.PropType<string | number>;
        default: string;
    };
    hover: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    loading: {
        type: globalThis.PropType<string | boolean>;
        default: boolean;
    };
    multiSort: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    sortAscIcon: {
        type: globalThis.PropType<string | import("vue").JSXComponent | (string | [path: string, opacity: number])[]>;
        default: string;
    };
    sortBy: {
        type: globalThis.PropType<readonly {
            key: string;
            order?: boolean | "asc" | "desc" | undefined;
        }[]>;
        default: () => never[];
    };
    mustSort: {
        type: globalThis.PropType<boolean>;
    };
    showSelect: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    selectStrategy: {
        type: globalThis.PropType<"page" | "all" | "single">;
        default: "page";
    };
    modelValue: {
        type: globalThis.PropType<unknown[]>;
    };
    items: {
        type: globalThis.PropType<any[]>;
        default: () => never[];
    };
    itemValue: {
        type: globalThis.PropType<string | boolean | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any)>;
        default: string;
    };
    itemSelectable: {
        type: globalThis.PropType<string | boolean | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any)>;
        default: undefined;
    };
    returnObject: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    headers: {
        type: globalThis.PropType<import("vue").DeepReadonly<{
            key: string;
            value?: (string | boolean | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any)) | undefined;
            title: string;
            colspan?: number | undefined;
            rowspan?: number | undefined;
            fixed?: boolean | undefined;
            align?: "start" | "end" | "center" | undefined;
            width?: string | number | undefined;
            minWidth?: string | undefined;
            maxWidth?: string | undefined;
            sortable?: boolean | undefined;
            sort?: ((a: any, b: any) => number) | undefined;
        }[] | {
            key: string;
            value?: (string | boolean | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any)) | undefined;
            title: string;
            colspan?: number | undefined;
            rowspan?: number | undefined;
            fixed?: boolean | undefined;
            align?: "start" | "end" | "center" | undefined;
            width?: string | number | undefined;
            minWidth?: string | undefined;
            maxWidth?: string | undefined;
            sortable?: boolean | undefined;
            sort?: ((a: any, b: any) => number) | undefined;
        }[][]>>;
    };
    groupBy: {
        type: globalThis.PropType<readonly {
            key: string;
            order?: boolean | "asc" | "desc" | undefined;
        }[]>;
    };
    expandOnClick: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    showExpand: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    expanded: {
        type: globalThis.PropType<readonly string[]>;
    };
    width: {
        type: globalThis.PropType<string | number>;
    };
    search: {
        type: globalThis.PropType<string>;
        default: string;
    };
    loadingText: {
        type: globalThis.PropType<string>;
        default: string;
    };
    hideNoData: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    noDataText: {
        type: globalThis.PropType<string>;
        default: string;
    };
    page: {
        type: globalThis.PropType<string | number>;
        default: number;
    };
    itemsPerPage: {
        type: globalThis.PropType<string | number>;
        default: number;
    };
    itemsLength: {
        type: globalThis.PropType<number>;
        default: number;
    };
    colors: {
        type: globalThis.PropType<import('../types').ColorsObject | null>;
        default: () => {
            readonly default: {
                readonly background: "primary";
                readonly base: "primary";
                readonly border: "primary";
                readonly color: "on-primary";
            };
            readonly footer: {
                readonly background: "--v-theme-surface";
                readonly color: "--v-theme-on-surface";
            };
            readonly header: {
                readonly background: "primary";
                readonly color: "on-primary";
            };
            readonly percentageChange: 15;
            readonly percentageDirection: "desc";
            readonly table: {
                readonly bottomBorder: "primary";
            };
        };
    };
    level: {
        type: globalThis.PropType<number>;
        required: true;
        default: number;
    };
    columnWidths: {
        type: globalThis.PropType<number[]>;
        default: () => never[];
    };
    loaderType: {
        type: globalThis.PropType<string | false | string[] | null>;
        default: string;
    };
    matchColumnWidths: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    loaderProps: {
        type: globalThis.PropType<import('../types').LoaderProps>;
        default: () => {
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
    };
    levels: {
        type: globalThis.PropType<number>;
        required: true;
        default: number;
    };
    elevation: {
        type: globalThis.PropType<string | number>;
        default: number;
    };
    separator: {
        type: globalThis.PropType<"default" | "horizontal" | "vertical" | "cell">;
        default: "default";
    };
    isDrilldown: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    footers: {
        type: globalThis.PropType<import('../types').Column[]>;
        default: () => import('../types').Column[];
    };
    searchContainerCols: {
        type: globalThis.PropType<import('../types').SearchContainerCols>;
        default: () => {
            lg: number;
            md: number;
            sm: number;
            xl: number;
            xs: number;
            xxl: number;
        };
    };
    searchEvents: {
        type: globalThis.PropType<import('../types').KeyStringAny<any>>;
        default: () => {};
    };
    searchProps: {
        type: globalThis.PropType<import('../types').KeyStringAny<any>>;
        default: () => {};
    };
    showSearch: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    drilldown: {
        type: globalThis.PropType<object>;
    };
    drilldownKey: {
        type: globalThis.PropType<string>;
        default: string;
    };
    itemChildrenKey: {
        type: globalThis.PropType<string>;
        default: string;
    };
    loaderSize: {
        type: globalThis.PropType<string | number>;
    };
    searchDebounce: {
        type: globalThis.PropType<number | null>;
        default: number;
    };
    searchMaxWait: {
        type: globalThis.PropType<number | null>;
        default: number;
    };
    server: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    showDrilldownWhenLoading: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    showFooterRow: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    tableType: {
        type: globalThis.PropType<unknown>;
        default: () => {};
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:drilldown" | "update:expanded" | "click:row" | "click:row:checkbox" | "update:sortBy" | "update:search" | "update:options" | "update:itemsPerPage" | "update:page")[], "update:drilldown" | "update:expanded" | "click:row" | "click:row:checkbox" | "update:sortBy" | "update:search" | "update:options" | "update:itemsPerPage" | "update:page", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    item: {
        type: globalThis.PropType<any>;
    };
    itemsPerPageOptions: {
        type: globalThis.PropType<readonly {
            title: string;
            value: number;
        }[]>;
    };
    customFilter: {
        type: globalThis.PropType<(value: string, query: string, item?: any) => number | boolean | [number, number] | [number, number][]>;
    };
    customKeyFilter: {
        type: globalThis.PropType<{
            [x: string]: (value: string, query: string, item?: any) => number | boolean | [number, number] | [number, number][];
        }>;
    };
    filterKeys: {
        type: globalThis.PropType<string | string[]>;
        default: undefined;
    };
    filterMode: {
        type: globalThis.PropType<"every" | "some" | "union" | "intersection">;
    };
    noFilter: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    density: {
        type: globalThis.PropType<any>;
        default: string;
    };
    fixedHeader: {
        type: globalThis.PropType<boolean>;
    };
    fixedFooter: {
        type: globalThis.PropType<boolean>;
    };
    height: {
        type: globalThis.PropType<string | number>;
        default: string;
    };
    hover: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    loading: {
        type: globalThis.PropType<string | boolean>;
        default: boolean;
    };
    multiSort: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    sortAscIcon: {
        type: globalThis.PropType<string | import("vue").JSXComponent | (string | [path: string, opacity: number])[]>;
        default: string;
    };
    sortBy: {
        type: globalThis.PropType<readonly {
            key: string;
            order?: boolean | "asc" | "desc" | undefined;
        }[]>;
        default: () => never[];
    };
    mustSort: {
        type: globalThis.PropType<boolean>;
    };
    showSelect: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    selectStrategy: {
        type: globalThis.PropType<"page" | "all" | "single">;
        default: "page";
    };
    modelValue: {
        type: globalThis.PropType<unknown[]>;
    };
    items: {
        type: globalThis.PropType<any[]>;
        default: () => never[];
    };
    itemValue: {
        type: globalThis.PropType<string | boolean | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any)>;
        default: string;
    };
    itemSelectable: {
        type: globalThis.PropType<string | boolean | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any)>;
        default: undefined;
    };
    returnObject: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    headers: {
        type: globalThis.PropType<import("vue").DeepReadonly<{
            key: string;
            value?: (string | boolean | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any)) | undefined;
            title: string;
            colspan?: number | undefined;
            rowspan?: number | undefined;
            fixed?: boolean | undefined;
            align?: "start" | "end" | "center" | undefined;
            width?: string | number | undefined;
            minWidth?: string | undefined;
            maxWidth?: string | undefined;
            sortable?: boolean | undefined;
            sort?: ((a: any, b: any) => number) | undefined;
        }[] | {
            key: string;
            value?: (string | boolean | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any)) | undefined;
            title: string;
            colspan?: number | undefined;
            rowspan?: number | undefined;
            fixed?: boolean | undefined;
            align?: "start" | "end" | "center" | undefined;
            width?: string | number | undefined;
            minWidth?: string | undefined;
            maxWidth?: string | undefined;
            sortable?: boolean | undefined;
            sort?: ((a: any, b: any) => number) | undefined;
        }[][]>>;
    };
    groupBy: {
        type: globalThis.PropType<readonly {
            key: string;
            order?: boolean | "asc" | "desc" | undefined;
        }[]>;
    };
    expandOnClick: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    showExpand: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    expanded: {
        type: globalThis.PropType<readonly string[]>;
    };
    width: {
        type: globalThis.PropType<string | number>;
    };
    search: {
        type: globalThis.PropType<string>;
        default: string;
    };
    loadingText: {
        type: globalThis.PropType<string>;
        default: string;
    };
    hideNoData: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    noDataText: {
        type: globalThis.PropType<string>;
        default: string;
    };
    page: {
        type: globalThis.PropType<string | number>;
        default: number;
    };
    itemsPerPage: {
        type: globalThis.PropType<string | number>;
        default: number;
    };
    itemsLength: {
        type: globalThis.PropType<number>;
        default: number;
    };
    colors: {
        type: globalThis.PropType<import('../types').ColorsObject | null>;
        default: () => {
            readonly default: {
                readonly background: "primary";
                readonly base: "primary";
                readonly border: "primary";
                readonly color: "on-primary";
            };
            readonly footer: {
                readonly background: "--v-theme-surface";
                readonly color: "--v-theme-on-surface";
            };
            readonly header: {
                readonly background: "primary";
                readonly color: "on-primary";
            };
            readonly percentageChange: 15;
            readonly percentageDirection: "desc";
            readonly table: {
                readonly bottomBorder: "primary";
            };
        };
    };
    level: {
        type: globalThis.PropType<number>;
        required: true;
        default: number;
    };
    columnWidths: {
        type: globalThis.PropType<number[]>;
        default: () => never[];
    };
    loaderType: {
        type: globalThis.PropType<string | false | string[] | null>;
        default: string;
    };
    matchColumnWidths: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    loaderProps: {
        type: globalThis.PropType<import('../types').LoaderProps>;
        default: () => {
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
    };
    levels: {
        type: globalThis.PropType<number>;
        required: true;
        default: number;
    };
    elevation: {
        type: globalThis.PropType<string | number>;
        default: number;
    };
    separator: {
        type: globalThis.PropType<"default" | "horizontal" | "vertical" | "cell">;
        default: "default";
    };
    isDrilldown: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    footers: {
        type: globalThis.PropType<import('../types').Column[]>;
        default: () => import('../types').Column[];
    };
    searchContainerCols: {
        type: globalThis.PropType<import('../types').SearchContainerCols>;
        default: () => {
            lg: number;
            md: number;
            sm: number;
            xl: number;
            xs: number;
            xxl: number;
        };
    };
    searchEvents: {
        type: globalThis.PropType<import('../types').KeyStringAny<any>>;
        default: () => {};
    };
    searchProps: {
        type: globalThis.PropType<import('../types').KeyStringAny<any>>;
        default: () => {};
    };
    showSearch: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    drilldown: {
        type: globalThis.PropType<object>;
    };
    drilldownKey: {
        type: globalThis.PropType<string>;
        default: string;
    };
    itemChildrenKey: {
        type: globalThis.PropType<string>;
        default: string;
    };
    loaderSize: {
        type: globalThis.PropType<string | number>;
    };
    searchDebounce: {
        type: globalThis.PropType<number | null>;
        default: number;
    };
    searchMaxWait: {
        type: globalThis.PropType<number | null>;
        default: number;
    };
    server: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    showDrilldownWhenLoading: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    showFooterRow: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    tableType: {
        type: globalThis.PropType<unknown>;
        default: () => {};
    };
}>> & {
    "onClick:row"?: ((...args: any[]) => any) | undefined;
    "onUpdate:expanded"?: ((...args: any[]) => any) | undefined;
    "onClick:row:checkbox"?: ((...args: any[]) => any) | undefined;
    "onUpdate:sortBy"?: ((...args: any[]) => any) | undefined;
    "onUpdate:search"?: ((...args: any[]) => any) | undefined;
    "onUpdate:drilldown"?: ((...args: any[]) => any) | undefined;
    "onUpdate:options"?: ((...args: any[]) => any) | undefined;
    "onUpdate:itemsPerPage"?: ((...args: any[]) => any) | undefined;
    "onUpdate:page"?: ((...args: any[]) => any) | undefined;
}, {
    filterKeys: string | string[];
    noFilter: boolean;
    density: any;
    height: string | number;
    hover: boolean;
    loading: string | boolean;
    multiSort: boolean;
    sortAscIcon: string | import("vue").JSXComponent | (string | [path: string, opacity: number])[];
    sortBy: readonly {
        key: string;
        order?: boolean | "asc" | "desc" | undefined;
    }[];
    showSelect: boolean;
    selectStrategy: "page" | "all" | "single";
    items: any[];
    itemValue: string | boolean | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any);
    itemSelectable: string | boolean | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any);
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
    colors: import('../types').ColorsObject | null;
    level: number;
    columnWidths: number[];
    loaderType: string | false | string[] | null;
    matchColumnWidths: boolean;
    loaderProps: import('../types').LoaderProps;
    levels: number;
    elevation: string | number;
    separator: "default" | "horizontal" | "vertical" | "cell";
    isDrilldown: boolean;
    footers: import('../types').Column[];
    searchContainerCols: import('../types').SearchContainerCols;
    searchEvents: import('../types').KeyStringAny<any>;
    searchProps: import('../types').KeyStringAny<any>;
    showSearch: boolean;
    drilldownKey: string;
    itemChildrenKey: string;
    searchDebounce: number | null;
    searchMaxWait: number | null;
    server: boolean;
    showDrilldownWhenLoading: boolean;
    showFooterRow: boolean;
    tableType: {};
}, {}>, Partial<Record<NonNullable<string | number>, (_: any) => any>> & Partial<Record<NonNullable<string | number>, (_: {
    column: import('../types').Column;
}) => any>> & Partial<Record<NonNullable<string | number>, (_: {
    columns: import('../types').Column[];
    index: number | undefined;
    item: any;
}) => any>> & Partial<Record<string, (_: {}) => any>> & Partial<Record<NonNullable<string | number>, (_: any) => any>> & Partial<Record<NonNullable<string | number>, (_: {
    column: import('../types').Column;
}) => any>> & Partial<Record<NonNullable<string | number>, (_: any) => any>> & {
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
