import type { PropType as __PropType } from 'vue';
import { ColorsObject, Column, InternalDataTableHeader } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    columnWidths: {
        type: __PropType<number[] | undefined>;
        required: true;
    };
    isTheadSlot: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    items: {
        type: __PropType<any[] | undefined>;
        required: true;
    };
    loaderSettings: {
        type: __PropType<{
            colspan: number;
            height?: string | number | undefined;
            loaderType: string | false | string[] | null | undefined;
            loading: string | boolean | undefined;
            loadingText?: string | undefined;
            size?: string | number | undefined;
            skeltonType: string | undefined;
            textLoader?: boolean | undefined;
        }>;
        required: true;
    };
    matchColumnWidths: {
        type: __PropType<boolean | undefined>;
        required: true;
    };
    selectStrategy: {
        type: __PropType<"page" | "all" | "single" | undefined>;
        required: true;
    };
    slotProps: {
        type: __PropType<{
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
    sortAscIcon: {
        type: __PropType<(string | import("vue").JSXComponent | (string | [path: string, opacity: number])[]) | undefined>;
        required: false;
    };
    tableModelValue: {
        type: __PropType<unknown[] | undefined>;
        required: false;
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
    showSelect: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    sortBy: {
        type: __PropType<readonly {
            key: string;
            order?: boolean | "asc" | "desc" | undefined;
        }[] | undefined>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click:selectAll"[], "click:selectAll", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    columnWidths: {
        type: __PropType<number[] | undefined>;
        required: true;
    };
    isTheadSlot: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    items: {
        type: __PropType<any[] | undefined>;
        required: true;
    };
    loaderSettings: {
        type: __PropType<{
            colspan: number;
            height?: string | number | undefined;
            loaderType: string | false | string[] | null | undefined;
            loading: string | boolean | undefined;
            loadingText?: string | undefined;
            size?: string | number | undefined;
            skeltonType: string | undefined;
            textLoader?: boolean | undefined;
        }>;
        required: true;
    };
    matchColumnWidths: {
        type: __PropType<boolean | undefined>;
        required: true;
    };
    selectStrategy: {
        type: __PropType<"page" | "all" | "single" | undefined>;
        required: true;
    };
    slotProps: {
        type: __PropType<{
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
    sortAscIcon: {
        type: __PropType<(string | import("vue").JSXComponent | (string | [path: string, opacity: number])[]) | undefined>;
        required: false;
    };
    tableModelValue: {
        type: __PropType<unknown[] | undefined>;
        required: false;
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
    showSelect: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    sortBy: {
        type: __PropType<readonly {
            key: string;
            order?: boolean | "asc" | "desc" | undefined;
        }[] | undefined>;
        required: true;
    };
}>> & {
    "onClick:selectAll"?: ((...args: any[]) => any) | undefined;
}, {
    showSelect: boolean | undefined;
    isTheadSlot: boolean | undefined;
}, {}>;
export default _sfc_main;
