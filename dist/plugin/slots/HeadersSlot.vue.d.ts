import type { PropType as __PropType } from 'vue';
import { ColorsObject, Column, InternalDataTableHeader } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    isTheadSlot: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    slotProps: {
        type: __PropType<{
            allRowsSelected: boolean;
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
    isTheadSlot: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    slotProps: {
        type: __PropType<{
            allRowsSelected: boolean;
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
