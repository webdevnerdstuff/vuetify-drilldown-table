declare const _default: import("vue").DefineComponent<{
    height: {
        type: globalThis.PropType<string | number>;
        default: number;
    };
    loading: {
        type: globalThis.PropType<string | boolean | undefined>;
        required: true;
    };
    loadingText: {
        type: globalThis.PropType<string>;
        default: string;
    };
    colspan: {
        type: globalThis.PropType<number>;
        required: true;
    };
    size: {
        type: globalThis.PropType<string | number>;
        default: string;
    };
    colors: {
        type: globalThis.PropType<import('../../types').ColorsObject | null | undefined>;
        required: true;
    };
    level: {
        type: globalThis.PropType<number>;
        required: true;
    };
    loaderType: {
        type: globalThis.PropType<string | false | string[] | null | undefined>;
        required: true;
        default: string;
    };
    loaderProps: {
        type: globalThis.PropType<import('../../types').LoaderProps>;
    };
    textLoader: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    height: {
        type: globalThis.PropType<string | number>;
        default: number;
    };
    loading: {
        type: globalThis.PropType<string | boolean | undefined>;
        required: true;
    };
    loadingText: {
        type: globalThis.PropType<string>;
        default: string;
    };
    colspan: {
        type: globalThis.PropType<number>;
        required: true;
    };
    size: {
        type: globalThis.PropType<string | number>;
        default: string;
    };
    colors: {
        type: globalThis.PropType<import('../../types').ColorsObject | null | undefined>;
        required: true;
    };
    level: {
        type: globalThis.PropType<number>;
        required: true;
    };
    loaderType: {
        type: globalThis.PropType<string | false | string[] | null | undefined>;
        required: true;
        default: string;
    };
    loaderProps: {
        type: globalThis.PropType<import('../../types').LoaderProps>;
    };
    textLoader: {
        type: globalThis.PropType<boolean>;
        default: boolean;
    };
}>>, {
    height: string | number;
    loadingText: string;
    size: string | number;
    loaderType: string | false | string[] | null | undefined;
    textLoader: boolean;
}, {}>;
export default _default;
