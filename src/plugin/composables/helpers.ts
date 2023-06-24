/* eslint-disable no-param-reassign */
import {
	Column,
	UseGetSortDirection,
	UseConvertToUnit,
} from '@/types';
import { useGetPropertyFromItem } from './vuetifyHelpers';


/**
* Get's the sort direction for a column
*/
export const useGetSortDirection: UseGetSortDirection = (options) => {
	const { id, sortBy } = options;

	if (sortBy) {
		const item = sortBy.find(item => item.key === id);

		if (item) {
			return item.order;
		}
	}

	return;
};

/**
* Converts a string to a number with a unit.
*/
export const useConvertToUnit: UseConvertToUnit = (options) => {
	const { str, unit = 'px' } = options;

	if (str == null || str === '') {
		return undefined;
	}

	if (!+str) {
		return String(str);
	}

	return `${Number(str)}${unit}`;
};


// -------------------------------------------------- Render Cells #
/**
 * Render the cell item
 */
export function useRenderCellItem(
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	item: any,
	column: Column,
): unknown {
	if (!column.key) {
		return '';
	}

	const itemValue = useGetPropertyFromItem(item, column.key);

	if (column.renderItem) {
		return column.renderItem(itemValue, item, column);
	}

	return itemValue;
}

/**
* Render the cell
* Used for both header and footer
*/
export function useRenderCell(column: Column): unknown {
	const columnTitle = column['title'];
	const cellData = [columnTitle, column] as [string, Column];

	if (column.renderer) {
		return column.renderer([...cellData]);
	}

	if (column.renderHeader) {
		return column.renderHeader([...cellData]);
	}

	if (column.renderFooter) {
		return column.renderFooter([...cellData]);
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
	}

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
