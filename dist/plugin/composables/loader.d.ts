import { UseLoaderContainerClasses, UseLoaderStyles } from '../../types';
/**
* Checks if the loader is only linear
*/
export declare function useIsOnlyLinearLoader(loaderType: string | string[]): boolean;
/**
* Get's the loader height
*/
export declare function useLoaderHeight(loaderHeight: string | number): string | undefined;
export declare const useLoaderTrStyles: UseLoaderStyles;
export declare const useLoaderTdStyles: UseLoaderStyles;
export declare const useLoaderContainerClasses: UseLoaderContainerClasses;
export declare const useLoaderVRowClasses: () => {
    [x: string]: boolean;
    'align-center': boolean;
    'd-grid': boolean;
    'flex-column': boolean;
    'ma-0': boolean;
    'pa-0': boolean;
    'text-center': boolean;
};
