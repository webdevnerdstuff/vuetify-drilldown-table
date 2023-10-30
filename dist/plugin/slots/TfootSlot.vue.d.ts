import { ColorsObject, Column } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    density: {
        type: globalThis.PropType<any>;
        required: true;
    };
    selectStrategy: {
        type: globalThis.PropType<"page" | "all" | "single" | undefined>;
        required: true;
    };
    items: {
        type: globalThis.PropType<any[] | undefined>;
        required: true;
    };
    colors: {
        type: globalThis.PropType<ColorsObject | null | undefined>;
        required: true;
    };
    level: {
        type: globalThis.PropType<number>;
        required: true;
    };
    slotProps: {
        type: globalThis.PropType<{
            allSelected?: boolean | undefined;
            columns: Column[];
            getFixedStyles?: ((column: import('../../types').InternalDataTableHeader, y: number) => globalThis.CSSProperties | undefined) | undefined;
            getSortIcon?: ((column: import('../../types').InternalDataTableHeader) => string | import("vue").JSXComponent | (string | [path: string, opacity: number])[]) | undefined;
            headers?: import("vue").DeepReadonly<{
                key?: (string & {}) | "data-table-group" | "data-table-select" | "data-table-expand" | undefined;
                value?: string | boolean | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null | undefined;
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
                key?: (string & {}) | "data-table-group" | "data-table-select" | "data-table-expand" | undefined;
                value?: string | boolean | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null | undefined;
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
            }[][]> | undefined;
            index?: number | undefined;
            isExpanded: (item: import('../../types').DataTableItem<any>) => boolean;
            item?: any;
            selectAll: (value: boolean) => void;
            someSelected?: boolean | undefined;
            sortBy?: readonly {
                key: string;
                order?: boolean | "asc" | "desc" | undefined;
            }[] | undefined;
            toggleExpand: (item: import('../../types').DataTableItem<any>) => void;
            toggleSelect: (item: import('../../types').DataTableItem<any>) => void;
            toggleSort?: ((column: import('../../types').InternalDataTableHeader) => void) | undefined;
        }>;
        required: true;
    };
    tableModelValue: {
        type: globalThis.PropType<unknown[]>;
    };
    footers: {
        type: globalThis.PropType<Column[]>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "click:selectAll": (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    density: {
        type: globalThis.PropType<any>;
        required: true;
    };
    selectStrategy: {
        type: globalThis.PropType<"page" | "all" | "single" | undefined>;
        required: true;
    };
    items: {
        type: globalThis.PropType<any[] | undefined>;
        required: true;
    };
    colors: {
        type: globalThis.PropType<ColorsObject | null | undefined>;
        required: true;
    };
    level: {
        type: globalThis.PropType<number>;
        required: true;
    };
    slotProps: {
        type: globalThis.PropType<{
            allSelected?: boolean | undefined;
            columns: Column[];
            getFixedStyles?: ((column: import('../../types').InternalDataTableHeader, y: number) => globalThis.CSSProperties | undefined) | undefined;
            getSortIcon?: ((column: import('../../types').InternalDataTableHeader) => string | import("vue").JSXComponent | (string | [path: string, opacity: number])[]) | undefined;
            headers?: import("vue").DeepReadonly<{
                key?: (string & {}) | "data-table-group" | "data-table-select" | "data-table-expand" | undefined;
                value?: string | boolean | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null | undefined;
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
                key?: (string & {}) | "data-table-group" | "data-table-select" | "data-table-expand" | undefined;
                value?: string | boolean | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null | undefined;
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
            }[][]> | undefined;
            index?: number | undefined;
            isExpanded: (item: import('../../types').DataTableItem<any>) => boolean;
            item?: any;
            selectAll: (value: boolean) => void;
            someSelected?: boolean | undefined;
            sortBy?: readonly {
                key: string;
                order?: boolean | "asc" | "desc" | undefined;
            }[] | undefined;
            toggleExpand: (item: import('../../types').DataTableItem<any>) => void;
            toggleSelect: (item: import('../../types').DataTableItem<any>) => void;
            toggleSort?: ((column: import('../../types').InternalDataTableHeader) => void) | undefined;
        }>;
        required: true;
    };
    tableModelValue: {
        type: globalThis.PropType<unknown[]>;
    };
    footers: {
        type: globalThis.PropType<Column[]>;
        required: true;
    };
}>> & {
    "onClick:selectAll"?: ((...args: any[]) => any) | undefined;
}, {}, {}>, Partial<Record<string, (_: {
    column: Column;
}) => any>>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
