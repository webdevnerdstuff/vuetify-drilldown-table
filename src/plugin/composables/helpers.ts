import {
	Column,
	Props,
} from '@/types';
import { getPropertyFromItem } from 'vuetify/lib/util/helpers.mjs';


/**
* Get's the sort direction for a column
*/
export function useGetSortDirection(sortBy: Props['sortBy'], id: string): string | boolean | void {
	if (sortBy) {
		const item = sortBy.find(item => item.key === id);

		if (item) {
			return item.order;
		}
	}

	return;
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
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	item: any,
	column: Column,
): unknown {
	// const itemValue = item[column.key as keyof object];

	// Credit: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/util/helpers.ts
	const itemValue = getPropertyFromItem(item, column.key);

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
