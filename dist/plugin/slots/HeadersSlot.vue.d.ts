import * as DrilldownTypes from '../../types';
declare const _sfc_main: import("vue").DefineComponent<{
    isTheadSlot: {
        default: boolean;
        required: false;
        type: BooleanConstructor;
    };
    loadedDrilldown: {
        required: true;
        type: globalThis.PropType<DrilldownTypes.LoadedDrilldown>;
    };
    /**
     * @name slotProps
     *
     * @param { Boolean } allSelected
     * @param { object[] } columns
     * 		@returns { DrilldownTypes.Column[] }
     * @param { Function } getFixedStyles
     * 		@param { InternalDataTableHeader } column
     * 		@param { Number } y
     * 		@returns { object }
     * 			{
     *				left:				@type { String | Number | undefined },
     *				position:		@type { String },
     *				top:				@type { String | Number | undefined },
     *				zIndex:			@type { Number | undefined },
     *			}
     * @param { Function } getSortIcon
     *		@returns { IconValue }
     *			@type { String } $sortAsc | $sortDesc
     * @param {( DataTableHeader[] | DataTableHeader[][] )} headers.
     * @param { Function } selectAll
     * 		@param { Boolean } value
     * 		@returns { void }
     * @param { Boolean } someSelected
     * @param { Object } sortBy
     * 		@returns { SortItem[] }
     * 			[{
     * 				key: 		@type { String },
     * 				order?:	@type { boolean | 'asc' | 'desc' },
     * 			}]
     * @param { Function } toggleSort
     * 		@param { String } key
     * 		@returns { void }
    */
    slotProps: {
        required: false;
        type: ObjectConstructor;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:sortBy" | "click:selectAll")[], "update:sortBy" | "click:selectAll", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    isTheadSlot: {
        default: boolean;
        required: false;
        type: BooleanConstructor;
    };
    loadedDrilldown: {
        required: true;
        type: globalThis.PropType<DrilldownTypes.LoadedDrilldown>;
    };
    /**
     * @name slotProps
     *
     * @param { Boolean } allSelected
     * @param { object[] } columns
     * 		@returns { DrilldownTypes.Column[] }
     * @param { Function } getFixedStyles
     * 		@param { InternalDataTableHeader } column
     * 		@param { Number } y
     * 		@returns { object }
     * 			{
     *				left:				@type { String | Number | undefined },
     *				position:		@type { String },
     *				top:				@type { String | Number | undefined },
     *				zIndex:			@type { Number | undefined },
     *			}
     * @param { Function } getSortIcon
     *		@returns { IconValue }
     *			@type { String } $sortAsc | $sortDesc
     * @param {( DataTableHeader[] | DataTableHeader[][] )} headers.
     * @param { Function } selectAll
     * 		@param { Boolean } value
     * 		@returns { void }
     * @param { Boolean } someSelected
     * @param { Object } sortBy
     * 		@returns { SortItem[] }
     * 			[{
     * 				key: 		@type { String },
     * 				order?:	@type { boolean | 'asc' | 'desc' },
     * 			}]
     * @param { Function } toggleSort
     * 		@param { String } key
     * 		@returns { void }
    */
    slotProps: {
        required: false;
        type: ObjectConstructor;
    };
}>> & {
    "onUpdate:sortBy"?: ((...args: any[]) => any) | undefined;
    "onClick:selectAll"?: ((...args: any[]) => any) | undefined;
}, {
    isTheadSlot: boolean;
}>;
export default _sfc_main;
