import { Column } from '../../types';
export declare const AllProps: {
    colors: {
        body: {
            base: string;
            bg: string;
            text: string;
        };
        default: {
            base: string;
            bg: string;
            border: string;
            text: string;
        };
        footer: {
            bg: string;
            text: string;
        };
        header: {
            bg: string;
            text: string;
        };
        loader: {
            circular: string;
            color: string;
            linear: string;
            text: string;
        };
        percentageChange: number;
        percentageDirection: string;
    };
    density: string;
    drilldownKey: string;
    elevation: number;
    expandOnClick: boolean;
    filterKeys: undefined;
    fixedFooter: boolean;
    fixedHeader: boolean;
    footers: () => Column[];
    height: string;
    hideNoData: boolean;
    hover: boolean;
    isDrilldown: boolean;
    itemChildrenKey: string;
    itemValue: string;
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
    returnObject: boolean;
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
    server: boolean;
    showDrilldownWhenLoading: boolean;
    showExpand: boolean;
    showFooterRow: boolean;
    showSearch: boolean;
    showSelect: boolean;
    skeltonType: string;
    sortBy: () => never[];
    tableType: () => {};
    width: string;
};
