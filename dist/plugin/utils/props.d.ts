import { Column, DefaultColors } from '../../types';
export declare const defaultColorValues: DefaultColors;
export declare const AllProps: {
    colorPercentageChange: number;
    colorPercentageDirection: "desc";
    colors: () => {
        readonly default: DefaultColors;
        readonly footer: {
            readonly background: undefined;
            readonly color: undefined;
        };
        readonly header: {
            readonly background: undefined;
            readonly color: undefined;
        };
        readonly percentageChange: 15;
        readonly percentageDirection: "desc";
    };
    columnWidths: () => never[];
    defaultColors: () => DefaultColors;
    density: string;
    drilldownKey: string;
    elevation: number;
    expandOnClick: boolean;
    filterKeys: undefined;
    footerBackgroundColor: undefined;
    footerColor: undefined;
    footers: () => Column[];
    headerBackgroundColor: undefined;
    headerColor: undefined;
    height: string;
    hideNoData: boolean;
    hover: boolean;
    isDrilldown: boolean;
    itemChildrenKey: string;
    itemSelectable: undefined;
    itemValue: string;
    items: () => never[];
    itemsLength: number;
    itemsPerPage: number;
    level: number;
    levels: number;
    loaderProps: () => {
        readonly circular: {
            readonly bgColor: "theme-surface";
            readonly color: "primary";
            readonly indeterminate: true;
        };
        readonly linear: {
            readonly color: "surface-variant";
            readonly height: "2px";
            readonly indeterminate: true;
        };
        readonly skelton: {
            readonly type: "heading@1";
        };
        readonly text: {
            readonly color: "surface-variant";
        };
    };
    loaderType: string;
    loading: boolean;
    loadingText: string;
    matchColumnWidths: boolean;
    noDataText: string;
    noFilter: boolean;
    page: number;
    returnObject: boolean;
    search: string;
    searchContainerCols: () => {
        lg: number;
        md: number;
        sm: number;
        xl: number;
        xs: number;
        xxl: number;
    };
    searchDebounce: number;
    searchEvents: () => {};
    searchMaxWait: number;
    searchProps: () => {};
    selectStrategy: "page";
    separator: "default";
    server: boolean;
    showDrilldownWhenLoading: boolean;
    showExpand: boolean;
    showFooterRow: boolean;
    showSearch: boolean;
    showSelect: boolean;
    sortAscIcon: string;
    sortBy: () => never[];
    tableType: () => {};
};
