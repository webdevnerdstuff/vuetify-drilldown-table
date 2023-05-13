import type { VDataTable } from 'vuetify/labs/components';
import {
	Column,
	LoadedDrilldown,
} from '@/types';


/**
* Get's the sort direction for a column
*/
export function useGetSortDirection(sortBy: VDataTable['$props']['sortBy'], id: string): string | boolean | void {
	if (sortBy) {
		const item = sortBy.find(item => item.key === id);

		if (item) {
			return item.order;
		}
	}

	return;
}


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
	itemTitle: LoadedDrilldown['itemTitle'],
	column: Column,
	index: number
): unknown {
	const columnTitle = column[itemTitle as string];
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
