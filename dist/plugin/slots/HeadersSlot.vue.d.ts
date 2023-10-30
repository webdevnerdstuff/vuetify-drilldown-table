import { ColorsObject, Column, InternalDataTableHeader } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    density: {
        type: globalThis.PropType<any>;
        required: true;
    };
    sortAscIcon: {
        type: globalThis.PropType<string | import("vue").JSXComponent | (string | [path: string, opacity: number])[]>;
    };
    sortBy: {
        type: globalThis.PropType<readonly {
            key: string;
            order?: boolean | "asc" | "desc" | undefined;
        }[] | undefined>;
        required: true;
    };
    showSelect: {
        type: globalThis.PropType<boolean>;
        default: boolean;
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
    columnWidths: {
        type: globalThis.PropType<number[] | undefined>;
        required: true;
    };
    matchColumnWidths: {
        type: globalThis.PropType<boolean | undefined>;
        required: true;
    };
    slotProps: {
        type: globalThis.PropType<{
            allSelected?: boolean | undefined;
            columns: Column[];
            getSortIcon: (column: InternalDataTableHeader) => string | import("vue").JSXComponent | (string | [path: string, opacity: number])[];
            index?: number | undefined;
            item?: any;
            selectAll: (value: boolean) => void;
            someSelected: boolean;
            sortBy: readonly {
                key: string;
                order?: boolean | "asc" | "desc" | undefined;
            }[] | undefined;
            toggleSort: (column: InternalDataTableHeader) => void;
        }>;
        required: true;
    };
    loaderSettings: {
        type: globalThis.PropType<{
            colspan: number;
            height?: string | number | undefined;
            loaderType: string | false | string[] | null | undefined;
            loading: string | boolean | undefined;
            loadingText?: string | undefined;
            size?: string | number | undefined;
            textLoader?: boolean | undefined;
        }>;
        required: true;
    };
    isTheadSlot: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    loaderProps: {
        type: globalThis.PropType<import('../../types').LoaderProps>;
    };
    tableModelValue: {
        type: globalThis.PropType<unknown[]>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "click:selectAll": (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    density: {
        type: globalThis.PropType<any>;
        required: true;
    };
    sortAscIcon: {
        type: globalThis.PropType<string | import("vue").JSXComponent | (string | [path: string, opacity: number])[]>;
    };
    sortBy: {
        type: globalThis.PropType<readonly {
            key: string;
            order?: boolean | "asc" | "desc" | undefined;
        }[] | undefined>;
        required: true;
    };
    showSelect: {
        type: globalThis.PropType<boolean>;
        default: boolean;
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
    columnWidths: {
        type: globalThis.PropType<number[] | undefined>;
        required: true;
    };
    matchColumnWidths: {
        type: globalThis.PropType<boolean | undefined>;
        required: true;
    };
    slotProps: {
        type: globalThis.PropType<{
            allSelected?: boolean | undefined;
            columns: Column[];
            getSortIcon: (column: InternalDataTableHeader) => string | import("vue").JSXComponent | (string | [path: string, opacity: number])[];
            index?: number | undefined;
            item?: any;
            selectAll: (value: boolean) => void;
            someSelected: boolean;
            sortBy: readonly {
                key: string;
                order?: boolean | "asc" | "desc" | undefined;
            }[] | undefined;
            toggleSort: (column: InternalDataTableHeader) => void;
        }>;
        required: true;
    };
    loaderSettings: {
        type: globalThis.PropType<{
            colspan: number;
            height?: string | number | undefined;
            loaderType: string | false | string[] | null | undefined;
            loading: string | boolean | undefined;
            loadingText?: string | undefined;
            size?: string | number | undefined;
            textLoader?: boolean | undefined;
        }>;
        required: true;
    };
    isTheadSlot: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
    loaderProps: {
        type: globalThis.PropType<import('../../types').LoaderProps>;
    };
    tableModelValue: {
        type: globalThis.PropType<unknown[]>;
    };
}>> & {
    "onClick:selectAll"?: ((...args: any[]) => any) | undefined;
}, {
    showSelect: boolean;
    isTheadSlot: boolean;
}, {}>, Partial<Record<string, (_: {
    column: Column;
}) => any>> & {
    "header.sortIcon"?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
