/* eslint-disable no-unused-vars */
import {
	Column,
	LoadedDrilldown,
} from '@/types/types';


/**
* Debounce the drilldown
*/
export function useDrilldownDebounce(
	func: () => void,
	wait: number,
	immediate: boolean
): () => void {
	let timeout: ReturnType<typeof setTimeout> | null;

	return (...args: undefined[]) => {
		// const args = arguments;

		const later = () => {
			timeout = null;
			if (!immediate) func.apply(this, args);
		};

		const callNow = immediate && !timeout;

		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) {
			func.apply(this, args);
		};
	};
}


/**
* Converts a string to a number with a unit.
*/
export function useConvertToUnit(str: string | number, unit = 'px'): string {
	if (str == null || str === '') {
		return undefined;
	}

	if (!+str) {
		return String(str);
	}

	return `${Number(str)}${unit}`;
}


// -------------------------------------------------- Render Cells #
/**
* Render the cell header
*/
export function useRenderCellHeader(
	loadedDrilldown: LoadedDrilldown,
	column: Column,
	index: number
): unknown {
	if (column.renderHeader) {
		return column.renderHeader(column[loadedDrilldown.itemTitle], column, index);
	}

	return column[loadedDrilldown.itemTitle];
}


/**
 * Render the cell item
 */
export function useRenderCellItem(
	item: object,
	column: Column,
	index: number
): unknown {
	const itemValue = item[column.key];

	if (column.renderItem) {
		return column.renderItem(itemValue, item, column, index);
	}

	return itemValue;
}


// -------------------------------------------------- Deep Merging #
/**
 * Object check.
 */
function isObject(item: object): boolean {
	return (item && typeof item === 'object' && !Array.isArray(item));
}


/**
 * Deep merge objects.
 */
export function useMergeDeep(target: object, ...sources: object[]): object {
	if (!sources.length) {
		return target;
	};

	const source = sources.shift();

	if (isObject(target) && isObject(source)) {
		for (const key in source) {
			if (isObject(source[key])) {
				if (!target[key]) {
					Object.assign(target, { [key]: {} });
				}

				useMergeDeep(target[key], source[key]);
			}
			else {
				Object.assign(target, { [key]: source[key] });
			}
		}
	}

	return useMergeDeep(target, ...sources);
}
