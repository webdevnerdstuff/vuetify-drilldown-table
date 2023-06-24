import { Column } from '../../types';
export declare const AllProps: {
    colors: () => {
        readonly body: {
            readonly base: "--v-theme-surface";
            readonly bg: "--v-theme-surface";
            readonly text: "--v-theme-on-surface";
        };
        readonly default: {
            readonly base: "primary";
            readonly bg: "primary";
            readonly border: "primary";
            readonly text: "on-primary";
        };
        readonly footer: {
            readonly bg: "--v-theme-surface";
            readonly text: "--v-theme-on-surface";
        };
        readonly header: {
            readonly bg: "primary";
            readonly text: "on-primary";
        };
        readonly percentageChange: 25;
        readonly percentageDirection: "desc";
    };
    columnWidths: () => never[];
    density: string;
    drilldownKey: string;
    elevation: number;
    expandOnClick: boolean;
    filterKeys: undefined;
    footers: () => Column[];
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
    multiSort: boolean;
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
