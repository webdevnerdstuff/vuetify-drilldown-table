import { KeyStringAny } from '../../types';
declare function selectAllCallback(val: boolean): void;
declare function toggleSelectAllCallback(): void;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    loading: {
        type: globalThis.PropType<string | boolean | undefined>;
        required: true;
    };
    items: {
        type: globalThis.PropType<any[] | undefined>;
        required: true;
    };
    level: {
        type: globalThis.PropType<number>;
        required: true;
    };
    slotProps: {
        type: globalThis.PropType<{
            allSelected: boolean;
            columns: import('../../types').InternalDataTableHeader[];
            headers: import('../../types').InternalDataTableHeader[][];
            isExpanded: (item: import('../../types').DataTableItem<any>) => boolean;
            isSelected: (items: import('../../types').DataTableItem<any> | import('../../types').DataTableItem<any>[]) => boolean;
            items: readonly import('../../types').DataTableItem<any>[];
            itemsPerPage: string | number | undefined;
            page: string | number | undefined;
            pageCount: number;
            select: (items: import('../../types').DataTableItem<any>[], value: boolean) => void;
            selectAll: (value: boolean) => void;
            setItemsPerPage: (itemsPerPage: number) => void;
            someSelected: boolean;
            sortBy: readonly {
                key: string;
                order?: boolean | "asc" | "desc" | undefined;
            }[] | undefined;
            toggleExpand: (item: import('../../types').DataTableItem<any>) => void;
            toggleSelect: (item: import('../../types').DataTableItem<any>) => void;
            toggleSort: (column: import('../../types').InternalDataTableHeader) => void;
        }>;
        required: true;
    };
    searchContainerCols: {
        type: globalThis.PropType<import('../../types').SearchContainerCols>;
    };
    searchEvents: {
        type: globalThis.PropType<KeyStringAny<any>>;
    };
    searchProps: {
        type: globalThis.PropType<KeyStringAny<any>>;
    };
    showSearch: {
        type: globalThis.PropType<boolean>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click:selectAll" | "update:search")[], "click:selectAll" | "update:search", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    loading: {
        type: globalThis.PropType<string | boolean | undefined>;
        required: true;
    };
    items: {
        type: globalThis.PropType<any[] | undefined>;
        required: true;
    };
    level: {
        type: globalThis.PropType<number>;
        required: true;
    };
    slotProps: {
        type: globalThis.PropType<{
            allSelected: boolean;
            columns: import('../../types').InternalDataTableHeader[];
            headers: import('../../types').InternalDataTableHeader[][];
            isExpanded: (item: import('../../types').DataTableItem<any>) => boolean;
            isSelected: (items: import('../../types').DataTableItem<any> | import('../../types').DataTableItem<any>[]) => boolean;
            items: readonly import('../../types').DataTableItem<any>[];
            itemsPerPage: string | number | undefined;
            page: string | number | undefined;
            pageCount: number;
            select: (items: import('../../types').DataTableItem<any>[], value: boolean) => void;
            selectAll: (value: boolean) => void;
            setItemsPerPage: (itemsPerPage: number) => void;
            someSelected: boolean;
            sortBy: readonly {
                key: string;
                order?: boolean | "asc" | "desc" | undefined;
            }[] | undefined;
            toggleExpand: (item: import('../../types').DataTableItem<any>) => void;
            toggleSelect: (item: import('../../types').DataTableItem<any>) => void;
            toggleSort: (column: import('../../types').InternalDataTableHeader) => void;
        }>;
        required: true;
    };
    searchContainerCols: {
        type: globalThis.PropType<import('../../types').SearchContainerCols>;
    };
    searchEvents: {
        type: globalThis.PropType<KeyStringAny<any>>;
    };
    searchProps: {
        type: globalThis.PropType<KeyStringAny<any>>;
    };
    showSearch: {
        type: globalThis.PropType<boolean>;
        required: true;
    };
}>> & {
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
