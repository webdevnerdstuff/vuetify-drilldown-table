import { Column, Props } from '../../types';
/**
* Get's the sort direction for a column
*/
export declare function useGetSortDirection(sortBy: Props['sortBy'], id: string): string | boolean | void;
/**
* Converts a string to a number with a unit.
*/
export declare function useConvertToUnit(str: string | number, unit?: string): string | void;
/**
 * Render the cell item
 */
export declare function useRenderCellItem(item: any, column: Column): unknown;
/**
* Render the cell
* Used for both header and footer
*/
export declare function useRenderCell(column: Column): unknown;
/**
 * Deep merge objects.
 */
export declare function useMergeDeep(target: object | object[], ...sources: object[]): object;
/**
 * Debugging Log Helper
 */
export declare function useLogHelper(options: any): void;
