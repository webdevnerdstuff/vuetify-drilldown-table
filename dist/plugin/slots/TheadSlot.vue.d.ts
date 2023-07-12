import { Column } from '../../types';
declare const _default: import("vue").DefineComponent<{
    density: {
        type: globalThis.PropType<any>;
        required: true;
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
        type: globalThis.PropType<import('../../types').ColorsObject | null | undefined>;
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
            getSortIcon: (column: import('../../types').InternalDataTableHeader) => string | import("vue").JSXComponent | (string | [path: string, opacity: number])[];
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
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click:selectAll" | "update:sortBy")[], "click:selectAll" | "update:sortBy", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    density: {
        type: globalThis.PropType<any>;
        required: true;
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
        type: globalThis.PropType<import('../../types').ColorsObject | null | undefined>;
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
            getSortIcon: (column: import('../../types').InternalDataTableHeader) => string | import("vue").JSXComponent | (string | [path: string, opacity: number])[];
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
}>> & {
    "onClick:selectAll"?: ((...args: any[]) => any) | undefined;
    "onUpdate:sortBy"?: ((...args: any[]) => any) | undefined;
}, {
    showSelect: boolean;
}, {}>;
export default _default;
