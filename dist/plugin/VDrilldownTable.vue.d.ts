import { DataTableItem } from '../types';
declare const _sfc_main: import("vue").DefineComponent<{
    colors?: {
        default: boolean;
        required: boolean;
        type: globalThis.PropType<boolean> | globalThis.PropType<import('../types').ColorsObject>;
    } | undefined;
    debounceDelay: {
        default: number;
        required: boolean;
        type: globalThis.PropType<number>;
    };
    density?: {
        default: string;
        required: boolean;
        type: globalThis.PropType<("default" | "comfortable" | "compact" | null) | undefined>;
    } | undefined;
    drilldown: {
        default: () => void;
        required: boolean;
        type: globalThis.PropType<object>;
    };
    drilldownKey?: {
        default: string;
        required: boolean;
        type: globalThis.PropType<string>;
    } | undefined;
    elevation?: {
        default: number;
        required: boolean;
        type: globalThis.PropType<string | number | undefined>;
    } | undefined;
    expandOnClick?: {
        default: boolean;
        required: boolean;
        type: globalThis.PropType<boolean>;
    } | undefined;
    footers: {
        default: () => {
            key: string;
            value?: (string | boolean | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any)) | undefined;
            title: string;
            colspan?: number | undefined;
            rowspan?: number | undefined;
            fixed?: boolean | undefined;
            align?: "start" | "end" | undefined;
            width?: number | undefined;
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
            align?: "start" | "end" | undefined;
            width?: number | undefined;
            minWidth?: string | undefined;
            maxWidth?: string | undefined;
            sortable?: boolean | undefined;
            sort?: ((a: any, b: any) => number) | undefined;
        }[][] | undefined;
        required: boolean;
        type: globalThis.PropType<{
            key: string;
            value?: (string | boolean | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any)) | undefined;
            title: string;
            colspan?: number | undefined;
            rowspan?: number | undefined;
            fixed?: boolean | undefined;
            align?: "start" | "end" | undefined;
            width?: number | undefined;
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
            align?: "start" | "end" | undefined;
            width?: number | undefined;
            minWidth?: string | undefined;
            maxWidth?: string | undefined;
            sortable?: boolean | undefined;
            sort?: ((a: any, b: any) => number) | undefined;
        }[][] | undefined>;
    };
    headers: {
        default: () => {
            key: string;
            value?: (string | boolean | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any)) | undefined;
            title: string;
            colspan?: number | undefined;
            rowspan?: number | undefined;
            fixed?: boolean | undefined;
            align?: "start" | "end" | undefined;
            width?: number | undefined;
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
            align?: "start" | "end" | undefined;
            width?: number | undefined;
            minWidth?: string | undefined;
            maxWidth?: string | undefined;
            sortable?: boolean | undefined;
            sort?: ((a: any, b: any) => number) | undefined;
        }[][] | undefined;
        required: boolean;
        type: globalThis.PropType<{
            key: string;
            value?: (string | boolean | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any)) | undefined;
            title: string;
            colspan?: number | undefined;
            rowspan?: number | undefined;
            fixed?: boolean | undefined;
            align?: "start" | "end" | undefined;
            width?: number | undefined;
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
            align?: "start" | "end" | undefined;
            width?: number | undefined;
            minWidth?: string | undefined;
            maxWidth?: string | undefined;
            sortable?: boolean | undefined;
            sort?: ((a: any, b: any) => number) | undefined;
        }[][] | undefined>;
    };
    hover?: {
        default: boolean;
        required: boolean;
        type: globalThis.PropType<boolean>;
    } | undefined;
    isDrilldown: {
        default: boolean;
        required: boolean;
        type: globalThis.PropType<boolean>;
    };
    item: {
        default: object | DataTableItem;
        required: boolean;
        type: globalThis.PropType<DataTableItem>;
    };
    itemChildrenKey: {
        default: string;
        required: boolean;
        type: globalThis.PropType<string>;
    };
    items: {
        default: () => unknown;
        required: boolean;
        type: globalThis.PropType<object>;
    };
    itemsLength?: {
        default: number;
        required: boolean;
        type: globalThis.PropType<number>;
    } | undefined;
    level: {
        default: number;
        required: boolean;
        type: globalThis.PropType<number>;
    };
    levels: {
        default: number;
        required: boolean;
        type: globalThis.PropType<number>;
    };
    loaderType: {
        default: string | string[];
        required: boolean;
        type: globalThis.PropType<string | string[]>;
    };
    loading: {
        default: boolean;
        required: boolean;
        type: globalThis.PropType<boolean>;
    };
    loadingText: {
        default: string;
        required: boolean;
        type: globalThis.PropType<string>;
    };
    noDataText: {
        default: string;
        required: boolean;
        type: globalThis.PropType<string>;
    };
    searchProps: {
        default: () => import('../types').SearchProps;
        required?: boolean | undefined;
        type?: globalThis.PropType<import('../types').SearchProps> | undefined;
    };
    showFooterRow?: {
        default: boolean;
        required: boolean;
        type: globalThis.PropType<boolean>;
    } | undefined;
    showSearch?: {
        default: boolean;
        required: boolean;
        type: globalThis.PropType<boolean>;
    } | undefined;
    skeltonType?: {
        default: string;
        required: boolean;
        type: globalThis.PropType<string>;
    } | undefined;
    sortBy: {
        default: object | object[];
        required: boolean;
        type: globalThis.PropType<{
            key: string;
            order?: boolean | "asc" | "desc" | undefined;
        }[] | undefined>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click:row" | "click:row:checkbox" | "update:expanded" | "update:drilldown" | "update:sortBy")[], "click:row" | "click:row:checkbox" | "update:expanded" | "update:drilldown" | "update:sortBy", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    colors?: {
        default: boolean;
        required: boolean;
        type: globalThis.PropType<boolean> | globalThis.PropType<import('../types').ColorsObject>;
    } | undefined;
    debounceDelay: {
        default: number;
        required: boolean;
        type: globalThis.PropType<number>;
    };
    density?: {
        default: string;
        required: boolean;
        type: globalThis.PropType<("default" | "comfortable" | "compact" | null) | undefined>;
    } | undefined;
    drilldown: {
        default: () => void;
        required: boolean;
        type: globalThis.PropType<object>;
    };
    drilldownKey?: {
        default: string;
        required: boolean;
        type: globalThis.PropType<string>;
    } | undefined;
    elevation?: {
        default: number;
        required: boolean;
        type: globalThis.PropType<string | number | undefined>;
    } | undefined;
    expandOnClick?: {
        default: boolean;
        required: boolean;
        type: globalThis.PropType<boolean>;
    } | undefined;
    footers: {
        default: () => {
            key: string;
            value?: (string | boolean | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any)) | undefined;
            title: string;
            colspan?: number | undefined;
            rowspan?: number | undefined;
            fixed?: boolean | undefined;
            align?: "start" | "end" | undefined;
            width?: number | undefined;
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
            align?: "start" | "end" | undefined;
            width?: number | undefined;
            minWidth?: string | undefined;
            maxWidth?: string | undefined;
            sortable?: boolean | undefined;
            sort?: ((a: any, b: any) => number) | undefined;
        }[][] | undefined;
        required: boolean;
        type: globalThis.PropType<{
            key: string;
            value?: (string | boolean | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any)) | undefined;
            title: string;
            colspan?: number | undefined;
            rowspan?: number | undefined;
            fixed?: boolean | undefined;
            align?: "start" | "end" | undefined;
            width?: number | undefined;
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
            align?: "start" | "end" | undefined;
            width?: number | undefined;
            minWidth?: string | undefined;
            maxWidth?: string | undefined;
            sortable?: boolean | undefined;
            sort?: ((a: any, b: any) => number) | undefined;
        }[][] | undefined>;
    };
    headers: {
        default: () => {
            key: string;
            value?: (string | boolean | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any)) | undefined;
            title: string;
            colspan?: number | undefined;
            rowspan?: number | undefined;
            fixed?: boolean | undefined;
            align?: "start" | "end" | undefined;
            width?: number | undefined;
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
            align?: "start" | "end" | undefined;
            width?: number | undefined;
            minWidth?: string | undefined;
            maxWidth?: string | undefined;
            sortable?: boolean | undefined;
            sort?: ((a: any, b: any) => number) | undefined;
        }[][] | undefined;
        required: boolean;
        type: globalThis.PropType<{
            key: string;
            value?: (string | boolean | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any)) | undefined;
            title: string;
            colspan?: number | undefined;
            rowspan?: number | undefined;
            fixed?: boolean | undefined;
            align?: "start" | "end" | undefined;
            width?: number | undefined;
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
            align?: "start" | "end" | undefined;
            width?: number | undefined;
            minWidth?: string | undefined;
            maxWidth?: string | undefined;
            sortable?: boolean | undefined;
            sort?: ((a: any, b: any) => number) | undefined;
        }[][] | undefined>;
    };
    hover?: {
        default: boolean;
        required: boolean;
        type: globalThis.PropType<boolean>;
    } | undefined;
    isDrilldown: {
        default: boolean;
        required: boolean;
        type: globalThis.PropType<boolean>;
    };
    item: {
        default: object | DataTableItem;
        required: boolean;
        type: globalThis.PropType<DataTableItem>;
    };
    itemChildrenKey: {
        default: string;
        required: boolean;
        type: globalThis.PropType<string>;
    };
    items: {
        default: () => unknown;
        required: boolean;
        type: globalThis.PropType<object>;
    };
    itemsLength?: {
        default: number;
        required: boolean;
        type: globalThis.PropType<number>;
    } | undefined;
    level: {
        default: number;
        required: boolean;
        type: globalThis.PropType<number>;
    };
    levels: {
        default: number;
        required: boolean;
        type: globalThis.PropType<number>;
    };
    loaderType: {
        default: string | string[];
        required: boolean;
        type: globalThis.PropType<string | string[]>;
    };
    loading: {
        default: boolean;
        required: boolean;
        type: globalThis.PropType<boolean>;
    };
    loadingText: {
        default: string;
        required: boolean;
        type: globalThis.PropType<string>;
    };
    noDataText: {
        default: string;
        required: boolean;
        type: globalThis.PropType<string>;
    };
    searchProps: {
        default: () => import('../types').SearchProps;
        required?: boolean | undefined;
        type?: globalThis.PropType<import('../types').SearchProps> | undefined;
    };
    showFooterRow?: {
        default: boolean;
        required: boolean;
        type: globalThis.PropType<boolean>;
    } | undefined;
    showSearch?: {
        default: boolean;
        required: boolean;
        type: globalThis.PropType<boolean>;
    } | undefined;
    skeltonType?: {
        default: string;
        required: boolean;
        type: globalThis.PropType<string>;
    } | undefined;
    sortBy: {
        default: object | object[];
        required: boolean;
        type: globalThis.PropType<{
            key: string;
            order?: boolean | "asc" | "desc" | undefined;
        }[] | undefined>;
    };
}>> & {
    "onClick:row"?: ((...args: any[]) => any) | undefined;
    "onUpdate:sortBy"?: ((...args: any[]) => any) | undefined;
    "onUpdate:expanded"?: ((...args: any[]) => any) | undefined;
    "onClick:row:checkbox"?: ((...args: any[]) => any) | undefined;
    "onUpdate:drilldown"?: ((...args: any[]) => any) | undefined;
}, {
    loading: boolean;
    sortBy: {
        key: string;
        order?: boolean | "asc" | "desc" | undefined;
    }[] | undefined;
    noDataText: string;
    headers: {
        key: string;
        value?: (string | boolean | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any)) | undefined;
        title: string;
        colspan?: number | undefined;
        rowspan?: number | undefined;
        fixed?: boolean | undefined;
        align?: "start" | "end" | undefined;
        width?: number | undefined;
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
        align?: "start" | "end" | undefined;
        width?: number | undefined;
        minWidth?: string | undefined;
        maxWidth?: string | undefined;
        sortable?: boolean | undefined;
        sort?: ((a: any, b: any) => number) | undefined;
    }[][] | undefined;
    items: object;
    debounceDelay: number;
    drilldown: object;
    footers: {
        key: string;
        value?: (string | boolean | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any)) | undefined;
        title: string;
        colspan?: number | undefined;
        rowspan?: number | undefined;
        fixed?: boolean | undefined;
        align?: "start" | "end" | undefined;
        width?: number | undefined;
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
        align?: "start" | "end" | undefined;
        width?: number | undefined;
        minWidth?: string | undefined;
        maxWidth?: string | undefined;
        sortable?: boolean | undefined;
        sort?: ((a: any, b: any) => number) | undefined;
    }[][] | undefined;
    isDrilldown: boolean;
    item: DataTableItem;
    itemChildrenKey: string;
    level: number;
    levels: number;
    loaderType: string | string[];
    loadingText: string;
    searchProps: import('../types').SearchProps;
}>;
export default _sfc_main;
