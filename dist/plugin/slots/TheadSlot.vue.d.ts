import type { PropType as __PropType } from 'vue';
import { Column } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    slotProps: {
        type: __PropType<{
            columns: Column[];
            getSortIcon?: ((column: import('../../types').InternalDataTableHeader) => string | import("vue").JSXComponent | (string | [path: string, opacity: number])[]) | undefined;
            index?: number | undefined;
            item?: any;
            selectAll: (value: boolean) => void;
            someSelected: boolean;
            sortBy: readonly {
                key: string;
                order?: boolean | "asc" | "desc" | undefined;
            }[] | undefined;
            toggleSort: (column: import('../../types').InternalDataTableHeader) => void;
        }>;
        required: true;
    };
    colors: {
        type: __PropType<import('../../types').ColorsObject | null | undefined>;
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
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:sortBy" | "click:selectAll")[], "update:sortBy" | "click:selectAll", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    slotProps: {
        type: __PropType<{
            columns: Column[];
            getSortIcon?: ((column: import('../../types').InternalDataTableHeader) => string | import("vue").JSXComponent | (string | [path: string, opacity: number])[]) | undefined;
            index?: number | undefined;
            item?: any;
            selectAll: (value: boolean) => void;
            someSelected: boolean;
            sortBy: readonly {
                key: string;
                order?: boolean | "asc" | "desc" | undefined;
            }[] | undefined;
            toggleSort: (column: import('../../types').InternalDataTableHeader) => void;
        }>;
        required: true;
    };
    colors: {
        type: __PropType<import('../../types').ColorsObject | null | undefined>;
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
    "onUpdate:sortBy"?: ((...args: any[]) => any) | undefined;
    "onClick:selectAll"?: ((...args: any[]) => any) | undefined;
}, {
    showSelect: boolean | undefined;
}, {}>;
export default _sfc_main;
