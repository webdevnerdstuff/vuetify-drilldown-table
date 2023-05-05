import * as DrilldownTypes from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    items: {
        required: true;
        type: globalThis.PropType<DrilldownTypes.DataTableItem[]>;
    };
    loadedDrilldown: {
        required: true;
        type: globalThis.PropType<DrilldownTypes.LoadedDrilldown>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:sortBy" | "click:selectAll")[], "update:sortBy" | "click:selectAll", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        required: true;
        type: globalThis.PropType<DrilldownTypes.DataTableItem[]>;
    };
    loadedDrilldown: {
        required: true;
        type: globalThis.PropType<DrilldownTypes.LoadedDrilldown>;
    };
}>> & {
    "onUpdate:sortBy"?: ((...args: any[]) => any) | undefined;
    "onClick:selectAll"?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
