import type { PropType as __PropType } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    colors: {
        type: __PropType<import('../../types').ColorsObject | null | undefined>;
        required: true;
    };
    colspan: {
        type: __PropType<number>;
        required: true;
    };
    height: {
        type: __PropType<string | number | undefined>;
        required: false;
        default: number;
    };
    level: {
        type: __PropType<number>;
        required: true;
    };
    loaderType: {
        type: __PropType<string | false | string[] | null | undefined>;
        required: true;
        default: string;
    };
    loading: {
        type: __PropType<string | boolean | undefined>;
        required: true;
    };
    loaderProps: {
        type: __PropType<import('../../types').LoaderProps | undefined>;
        required: false;
    };
    loadingText: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    size: {
        type: __PropType<string | number | undefined>;
        required: false;
        default: string;
    };
    textLoader: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    colors: {
        type: __PropType<import('../../types').ColorsObject | null | undefined>;
        required: true;
    };
    colspan: {
        type: __PropType<number>;
        required: true;
    };
    height: {
        type: __PropType<string | number | undefined>;
        required: false;
        default: number;
    };
    level: {
        type: __PropType<number>;
        required: true;
    };
    loaderType: {
        type: __PropType<string | false | string[] | null | undefined>;
        required: true;
        default: string;
    };
    loading: {
        type: __PropType<string | boolean | undefined>;
        required: true;
    };
    loaderProps: {
        type: __PropType<import('../../types').LoaderProps | undefined>;
        required: false;
    };
    loadingText: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    size: {
        type: __PropType<string | number | undefined>;
        required: false;
        default: string;
    };
    textLoader: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
}>>, {
    height: string | number | undefined;
    loadingText: string | undefined;
    size: string | number | undefined;
    loaderType: string | false | string[] | null | undefined;
    textLoader: boolean | undefined;
}, {}>;
export default _sfc_main;
