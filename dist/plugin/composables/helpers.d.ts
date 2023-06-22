import { Column, UseGetSortDirection, UseConvertToUnit } from '../../types';
/**
* Get's the sort direction for a column
*/
export declare const useGetSortDirection: UseGetSortDirection;
/**
* Converts a string to a number with a unit.
*/
export declare const useConvertToUnit: UseConvertToUnit;
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
