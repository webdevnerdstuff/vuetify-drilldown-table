import { componentName } from '../utils/globals';
import {
	useConvertToUnit,
} from './helpers';
import {
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
	return useConvertToUnit(loaderHeight) || '2px';
};


// -------------------------------------------------- Styles //
export const useLoaderTrStyles: UseLoaderStyles = (options) => {
	const { isLinearOnly, loaderHeight } = options;
	let styles = {};

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
export const useLoaderContainerClasses = () => {
	return {
		[`${componentName}--loader-tr`]: true,
		'ma-0': true,
		'pa-0': true,
		'text-center': true,
	};
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

