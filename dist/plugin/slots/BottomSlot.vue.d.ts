declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
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
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
}>>, {}, {}>, {
    bottom?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
