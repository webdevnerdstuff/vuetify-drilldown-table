import * as DrilldownTypes from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    items: {
        required: true;
        type: globalThis.PropType<unknown[]>;
    };
    loadedDrilldown: {
        required: true;
        type: globalThis.PropType<DrilldownTypes.LoadedDrilldown>;
    };
    /**
     * @name slotProps
     *
     * @param { Boolean } allRowsSelected
     * @param { object[] } columns
     * 		@returns { object }
     * 			[{
     * 				align:			@type { String },
     * 				fixeOffset:	@type { Number },
     * 				key:				@type { String },
     * 				sortable:		@type { Boolean },
     * 				title:			@type { String },
     * 				width:			@type { Number },
     *			}]
     * @param { Number } index
     * @param { Function } isExpanded
     * 		@param { DrilldownTypes.DataTableItem } item
     * 		@returns { Boolean }
     * @param { Function } isSelected
     * 		@param { DrilldownTypes.DataTableItem[] } items
     * 		@returns { Boolean }
     * @param { DrilldownTypes.DataTableItem } item
     * @param { Number } level
     * @param { Function } toggleExpand
     * 		@param { DrilldownTypes.DataTableItem } item
     * 		@returns { void }
     * @param { Function } toggleSelect
     * 		@param { DrilldownTypes.DataTableItem } item
     * 		@returns { void }
    */
    slotProps: {
        required: true;
        type: ObjectConstructor;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click:row" | "click:row:checkbox" | "update:expanded")[], "click:row" | "click:row:checkbox" | "update:expanded", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        required: true;
        type: globalThis.PropType<unknown[]>;
    };
    loadedDrilldown: {
        required: true;
        type: globalThis.PropType<DrilldownTypes.LoadedDrilldown>;
    };
    /**
     * @name slotProps
     *
     * @param { Boolean } allRowsSelected
     * @param { object[] } columns
     * 		@returns { object }
     * 			[{
     * 				align:			@type { String },
     * 				fixeOffset:	@type { Number },
     * 				key:				@type { String },
     * 				sortable:		@type { Boolean },
     * 				title:			@type { String },
     * 				width:			@type { Number },
     *			}]
     * @param { Number } index
     * @param { Function } isExpanded
     * 		@param { DrilldownTypes.DataTableItem } item
     * 		@returns { Boolean }
     * @param { Function } isSelected
     * 		@param { DrilldownTypes.DataTableItem[] } items
     * 		@returns { Boolean }
     * @param { DrilldownTypes.DataTableItem } item
     * @param { Number } level
     * @param { Function } toggleExpand
     * 		@param { DrilldownTypes.DataTableItem } item
     * 		@returns { void }
     * @param { Function } toggleSelect
     * 		@param { DrilldownTypes.DataTableItem } item
     * 		@returns { void }
    */
    slotProps: {
        required: true;
        type: ObjectConstructor;
    };
}>> & {
    "onClick:row"?: ((...args: any[]) => any) | undefined;
    "onUpdate:expanded"?: ((...args: any[]) => any) | undefined;
    "onClick:row:checkbox"?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
