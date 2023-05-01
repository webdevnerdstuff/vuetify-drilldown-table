import {
	Column,
	DrilldownDebounce,
	LoadedDrilldown,
} from '@/types';


/**
* Debounce the drilldown
*/
export function useDrilldownDebounce<T extends DrilldownDebounce>(
	func: T,
	wait: number,
	immediate: boolean
): () => void {
	let timeout: ReturnType<typeof setTimeout> | undefined;

	function debouncedFunction(this: undefined, ...args: undefined[]) {
		// eslint-disable-next-line @typescript-eslint/no-this-alias
		const context = this;

		const later = () => {
			timeout = undefined;
			if (!immediate) {
				func.apply(context, args);
			}
		};

		const callNow = immediate && timeout === undefined;

		clearTimeout(timeout);
		timeout = setTimeout(later, wait);

		if (callNow) {
			func.apply(context, args);
		};
	};

	return debouncedFunction as T;
}


/**
* Converts a string to a number with a unit.
*/
export function useConvertToUnit(str: string | number, unit = 'px'): string | void {
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
 * Render the cell item
 */
export function useRenderCellItem(
	item: object,
	column: Column,
	index: number
): unknown {
	const itemValue = item[column.key as keyof object];

	if (column.renderItem) {
		return column.renderItem(itemValue, item, column, index);
	}

	return itemValue;
}

/**
* Render the cell
* Used for both header and footer
*/
export function useRenderCell(
	loadedDrilldown: LoadedDrilldown,
	column: Column,
	index: number
): unknown {
	const columnTitle = column[loadedDrilldown.itemTitle as keyof Column];
	const cellData = [columnTitle, column, index] as [string, Column, number];

	if (column.renderer) {
		return column.renderer(...cellData);
	}

	if (column.renderHeader) {
		return column.renderHeader(...cellData);
	}

	if (column.renderFooter) {
		return column.renderFooter(...cellData);
	}

	if (columnTitle) {
		return columnTitle;
	}

	return '';
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
export function useMergeDeep(target: object | object[], ...sources: object[]): object {
	if (!sources.length) {
		return target;
	};

	const source = sources.shift() as object[];

	if (isObject(target) && isObject(source)) {
		for (const key in source) {
			// @ts-ignore
			if (isObject(source[key])) {
				if (!target[key as keyof object]) {
					Object.assign(target, { [key]: {} });
				}

				// @ts-ignore
				useMergeDeep(target[key as keyof object], source[key]);
			}
			else {
				Object.assign(target, { [key]: source[key] });
			}
		}
	}

	return useMergeDeep(target, ...sources);
}
