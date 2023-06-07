import type { PropType as __PropType } from 'vue';
import { ColorsObject, Column } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    footers: {
        type: __PropType<Column[]>;
        required: true;
    };
    slotProps: {
        type: __PropType<{
            allRowsSelected: boolean;
            columns: Column[];
            getFixedStyles?: ((column: import('../../types').InternalDataTableHeader, y: number) => globalThis.CSSProperties | undefined) | undefined;
            getSortIcon?: ((column: import('../../types').InternalDataTableHeader) => string | import("vue").JSXComponent | (string | [path: string, opacity: number])[]) | undefined;
            headers?: import("vue").DeepReadonly<{
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
    colors: {
        type: __PropType<ColorsObject | null | undefined>;
        required: true;
    };
    density: {
        type: __PropType<any>;
        required: true;
    };
    level: {
        type: __PropType<number>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click:selectAll"[], "click:selectAll", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    footers: {
        type: __PropType<Column[]>;
        required: true;
    };
    slotProps: {
        type: __PropType<{
            allRowsSelected: boolean;
            columns: Column[];
            getFixedStyles?: ((column: import('../../types').InternalDataTableHeader, y: number) => globalThis.CSSProperties | undefined) | undefined;
            getSortIcon?: ((column: import('../../types').InternalDataTableHeader) => string | import("vue").JSXComponent | (string | [path: string, opacity: number])[]) | undefined;
            headers?: import("vue").DeepReadonly<{
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
    colors: {
        type: __PropType<ColorsObject | null | undefined>;
        required: true;
    };
    density: {
        type: __PropType<any>;
        required: true;
    };
    level: {
        type: __PropType<number>;
        required: true;
    };
}>> & {
    "onClick:selectAll"?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _sfc_main;
