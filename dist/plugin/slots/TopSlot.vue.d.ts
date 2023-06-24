import type { PropType as __PropType } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    items: {
        type: __PropType<any[] | undefined>;
        required: true;
    };
    level: {
        type: __PropType<number>;
        required: true;
    };
    loading: {
        type: __PropType<string | boolean | undefined>;
        required: true;
    };
    searchContainerCols: {
        type: __PropType<import('../../types').SearchContainerCols>;
        required: true;
    };
    searchEvents: {
        type: __PropType<import('../../types').KeyStringAny<any> | undefined>;
        required: false;
    };
    searchProps: {
        type: __PropType<import('../../types').KeyStringAny<any> | undefined>;
        required: false;
    };
    showSearch: {
        type: __PropType<boolean>;
        required: true;
    };
    slotProps: {
        type: __PropType<{
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
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:search" | "click:selectAll")[], "update:search" | "click:selectAll", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        type: __PropType<any[] | undefined>;
        required: true;
    };
    level: {
        type: __PropType<number>;
        required: true;
    };
    loading: {
        type: __PropType<string | boolean | undefined>;
        required: true;
    };
    searchContainerCols: {
        type: __PropType<import('../../types').SearchContainerCols>;
        required: true;
    };
    searchEvents: {
        type: __PropType<import('../../types').KeyStringAny<any> | undefined>;
        required: false;
    };
    searchProps: {
        type: __PropType<import('../../types').KeyStringAny<any> | undefined>;
        required: false;
    };
    showSearch: {
        type: __PropType<boolean>;
        required: true;
    };
    slotProps: {
        type: __PropType<{
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
}>> & {
    "onUpdate:search"?: ((...args: any[]) => any) | undefined;
    "onClick:selectAll"?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _sfc_main;
