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
        type: __PropType<string | string[] | undefined>;
        required: true;
        default: string;
    };
    loading: {
        type: __PropType<string | boolean | undefined>;
        required: true;
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
    skeltonType: {
        type: __PropType<string | undefined>;
        required: true;
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
        type: __PropType<string | string[] | undefined>;
        required: true;
        default: string;
    };
    loading: {
        type: __PropType<string | boolean | undefined>;
        required: true;
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
    skeltonType: {
        type: __PropType<string | undefined>;
        required: true;
    };
    textLoader: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
}>>, {
    height: string | number | undefined;
    size: string | number | undefined;
    loadingText: string | undefined;
    loaderType: string | string[] | undefined;
    textLoader: boolean | undefined;
}, {}>;
export default _sfc_main;
