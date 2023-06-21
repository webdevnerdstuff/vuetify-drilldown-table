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


/**
 * Debugging Log Helper
 */
export function useLogHelper(options) {
	const { borderColor, filename, method, values } = options;

	const logColors = [
		'background: black',
		`border: 3px dashed ${borderColor}`,
		`border-radius: 5px`,
		`color: white`,
		'font-family: monospace',
		'font-size: 1.2em',
		'padding: 10px',
		'margin: 5px 0'
	];

	// File name + method //
	const output = [
		'%c%s',
		logColors.join(';'),
		`${filename} - ${method}:`,
	];


	// Values to log //
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	Object.values(values).forEach((obj: any) => {
		const { key, val } = obj;

		const value = unref(val);
		const booleanValue = value || value === true ? true : false;
		const valueColor = booleanValue ? 'lime' : 'red';

		output[0] = output[0] + `%c%s%c%s`;

		output.push(
			`color: white`,
			`\t${key} = `,
			`color: ${valueColor}`,
			`${value}`,
		);
	});

	console.log(...output);
};
