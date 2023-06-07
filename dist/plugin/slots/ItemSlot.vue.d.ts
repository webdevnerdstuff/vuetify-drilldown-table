import type { PropType as __PropType } from 'vue';
import { Column, DataTableItem } from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    expandOnClick: {
        type: __PropType<boolean | undefined>;
        required: true;
    };
    items: {
        type: __PropType<any[] | undefined>;
        required: true;
    };
    levels: {
        type: __PropType<number>;
        required: true;
    };
    showExpand: {
        type: __PropType<boolean | undefined>;
        required: true;
    };
    slotProps: {
        type: __PropType<{
            allRowsSelected: boolean;
            columns: Column[];
            index?: number | undefined;
            isExpanded: (item: DataTableItem<any>) => boolean;
            isSelected: (items: DataTableItem<any> | DataTableItem<any>[]) => boolean;
            item: any;
            level: number;
            toggleExpand: (item: DataTableItem<any>) => void;
            toggleSelect: (item: DataTableItem<any>) => void;
        }>;
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
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:expanded" | "click:row" | "click:row:checkbox")[], "update:expanded" | "click:row" | "click:row:checkbox", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    expandOnClick: {
        type: __PropType<boolean | undefined>;
        required: true;
    };
    items: {
        type: __PropType<any[] | undefined>;
        required: true;
    };
    levels: {
        type: __PropType<number>;
        required: true;
    };
    showExpand: {
        type: __PropType<boolean | undefined>;
        required: true;
    };
    slotProps: {
        type: __PropType<{
            allRowsSelected: boolean;
            columns: Column[];
            index?: number | undefined;
            isExpanded: (item: DataTableItem<any>) => boolean;
            isSelected: (items: DataTableItem<any> | DataTableItem<any>[]) => boolean;
            item: any;
            level: number;
            toggleExpand: (item: DataTableItem<any>) => void;
            toggleSelect: (item: DataTableItem<any>) => void;
        }>;
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
    };
}>> & {
    "onClick:row"?: ((...args: any[]) => any) | undefined;
    "onUpdate:expanded"?: ((...args: any[]) => any) | undefined;
    "onClick:row:checkbox"?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _sfc_main;
