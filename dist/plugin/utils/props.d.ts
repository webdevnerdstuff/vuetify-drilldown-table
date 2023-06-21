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
        readonly loader: {
            readonly circular: "primary";
            readonly color: "primary";
            readonly linear: "surface-variant";
            readonly text: "surface-variant";
        };
        readonly percentageChange: 25;
        readonly percentageDirection: "desc";
    };
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
    loaderHeight: string;
    loaderSize: string;
    loaderType: string;
    loading: boolean;
    loadingText: string;
    multiSort: boolean;
    noDataText: string;
    noFilter: boolean;
    page: number;
    search: string;
    searchDebounce: number;
    searchMaxWait: number;
    searchProps: () => {
        readonly cols: {
            readonly lg: 3;
            readonly md: 6;
            readonly sm: 12;
            readonly xl: 3;
            readonly xs: 12;
            readonly xxl: 2;
        };
        readonly density: "comfortable";
        readonly variant: "underlined";
    };
    selectStrategy: "page";
    server: boolean;
    showDrilldownWhenLoading: boolean;
    showExpand: boolean;
    showFooterRow: boolean;
    showSearch: boolean;
    showSelect: boolean;
    skeltonType: string;
    sortAscIcon: string;
    sortBy: () => never[];
    tableType: () => {};
};
