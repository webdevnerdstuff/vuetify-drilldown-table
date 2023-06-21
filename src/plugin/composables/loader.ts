import { componentName } from '../utils/globals';
import { useConvertToUnit } from './helpers';
import {
	UseLoaderContainerClasses,
	UseLoaderStyles
} from '@/types';


/**
* Checks if the loader is only linear
*/
export function useIsOnlyLinearLoader(loaderType: string | string[]): boolean {
	let linearOnly = false;

	if (loaderType === 'linear') {
		linearOnly = true;
	}

	if (Array.isArray(loaderType)) {
		linearOnly = loaderType.length === 1 && loaderType[0] === 'linear';
	}

	return linearOnly;
};


/**
* Get's the loader height
*/
export function useLoaderHeight(loaderHeight: string | number): string | undefined {
	return useConvertToUnit({ str: loaderHeight }) || '2px';
};


// -------------------------------------------------- Styles //
export const useLoaderTrStyles: UseLoaderStyles = (options) => {
	const { isLinearOnly, loaderHeight } = options;

	let styles: {
		height: string | number | undefined;
		minHeight: string | number | undefined;
	} = {
		height: 0,
		minHeight: 0,
	};

	if (unref(isLinearOnly)) {
		styles = {
			height: unref(loaderHeight),
			minHeight: unref(loaderHeight),
		};
	}

	return styles;
};

export const useLoaderTdStyles: UseLoaderStyles = (options) => {
	const { isLinearOnly, loaderHeight } = options;

	if (unref(isLinearOnly)) {
		return {
			height: unref(loaderHeight),
			position: 'absolute',
			top: 0,
			width: '100%',
		};
	}

	return {};
};


// -------------------------------------------------- Classes //
export const useLoaderContainerClasses: UseLoaderContainerClasses = (options) => {
	const { isLinearOnly } = options;

	const classes = {
		[`${componentName}--loader-tr`]: true,
		[`${componentName}--loader-tr-not-linear`]: !unref(isLinearOnly),
		'ma-0': true,
		'pa-0': true,
		'text-center': true,
	};

	return classes;
};

export const useLoaderVRowClasses = () => {
	return {
		[`${componentName}--loader-tr-vrow`]: true,
		'align-center': false,
		'd-grid': false,
		'flex-column': true,
		'ma-0': true,
		'pa-0': true,
		'text-center': true,
	};
};

