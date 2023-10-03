import { Column, DataTableItem } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    density: {
        type: globalThis.PropType<any>;
        required: true;
    };
    showSelect: {
        type: globalThis.PropType<boolean>;
    };
    items: {
        type: globalThis.PropType<any[] | undefined>;
        required: true;
    };
    itemSelectable: {
        type: globalThis.PropType<string | boolean | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null | undefined>;
        required: true;
    };
    expandOnClick: {
        type: globalThis.PropType<boolean | undefined>;
        required: true;
    };
    showExpand: {
        type: globalThis.PropType<boolean | undefined>;
        required: true;
    };
    level: {
        type: globalThis.PropType<number>;
        required: true;
    };
    slotProps: {
        type: globalThis.PropType<{
            columns: Column[];
            index?: number | undefined;
            internalItem: any;
            isExpanded: (item: DataTableItem<any>) => boolean;
            isSelected: (items: DataTableItem<any> | DataTableItem<any>[]) => boolean;
            item: any;
            level: number;
            toggleExpand: (item: DataTableItem<any>) => void;
            toggleSelect: (item: DataTableItem<any>) => void;
        }>;
        required: true;
    };
    levels: {
        type: globalThis.PropType<number>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:expanded": (...args: any[]) => void;
    "click:row": (...args: any[]) => void;
    "click:row:checkbox": (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    density: {
        type: globalThis.PropType<any>;
        required: true;
    };
    showSelect: {
        type: globalThis.PropType<boolean>;
    };
    items: {
        type: globalThis.PropType<any[] | undefined>;
        required: true;
    };
    itemSelectable: {
        type: globalThis.PropType<string | boolean | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null | undefined>;
        required: true;
    };
    expandOnClick: {
        type: globalThis.PropType<boolean | undefined>;
        required: true;
    };
    showExpand: {
        type: globalThis.PropType<boolean | undefined>;
        required: true;
    };
    level: {
        type: globalThis.PropType<number>;
        required: true;
    };
    slotProps: {
        type: globalThis.PropType<{
            columns: Column[];
            index?: number | undefined;
            internalItem: any;
            isExpanded: (item: DataTableItem<any>) => boolean;
            isSelected: (items: DataTableItem<any> | DataTableItem<any>[]) => boolean;
            item: any;
            level: number;
            toggleExpand: (item: DataTableItem<any>) => void;
            toggleSelect: (item: DataTableItem<any>) => void;
        }>;
        required: true;
    };
    levels: {
        type: globalThis.PropType<number>;
        required: true;
    };
}>> & {
    "onClick:row"?: ((...args: any[]) => any) | undefined;
    "onUpdate:expanded"?: ((...args: any[]) => any) | undefined;
    "onClick:row:checkbox"?: ((...args: any[]) => any) | undefined;
}, {}, {}>, Readonly<Record<string, any>>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
