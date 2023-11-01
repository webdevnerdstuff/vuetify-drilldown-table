import { TopSlotProps } from '../../types';
declare function selectAllCallback(val: boolean): void;
declare function toggleSelectAllCallback(): void;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<TopSlotProps>, {}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "click:selectAll": (...args: any[]) => void;
    "update:search": (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<TopSlotProps>, {}>>> & {
    "onClick:selectAll"?: ((...args: any[]) => any) | undefined;
    "onUpdate:search"?: ((...args: any[]) => any) | undefined;
}, {}, {}>, {
    top?(_: {
        allSelected: boolean;
        columns: import('../../types').InternalDataTableHeader[];
        headers: import('../../types').InternalDataTableHeader[][];
        items: globalThis.ComputedRef<any[] | undefined>;
        itemsPerPage: string | number | undefined;
        level: number;
        loading: string | boolean | undefined;
        page: string | number | undefined;
        pageCount: number;
        search: string;
        selectAll: typeof selectAllCallback;
        setItemsPerPage: (itemsPerPage: number) => void;
        toggleSelectAll: typeof toggleSelectAllCallback;
    }): any;
    "top.left"?(_: {
        allSelected: boolean;
        columns: import('../../types').InternalDataTableHeader[];
        headers: import('../../types').InternalDataTableHeader[][];
        items: globalThis.ComputedRef<any[] | undefined>;
        itemsPerPage: string | number | undefined;
        level: number;
        loading: string | boolean | undefined;
        page: string | number | undefined;
        pageCount: number;
        search: string;
        selectAll: typeof selectAllCallback;
        setItemsPerPage: (itemsPerPage: number) => void;
        toggleSelectAll: typeof toggleSelectAllCallback;
    }): any;
    "top.right"?(_: {
        allSelected: boolean;
        columns: import('../../types').InternalDataTableHeader[];
        headers: import('../../types').InternalDataTableHeader[][];
        items: globalThis.ComputedRef<any[] | undefined>;
        itemsPerPage: string | number | undefined;
        level: number;
        loading: string | boolean | undefined;
        page: string | number | undefined;
        pageCount: number;
        search: string;
        selectAll: typeof selectAllCallback;
        setItemsPerPage: (itemsPerPage: number) => void;
        toggleSelectAll: typeof toggleSelectAllCallback;
    }): any;
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
