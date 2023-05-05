import { Column, DrilldownDebounce, LoadedDrilldown } from '../../types';
/**
* Debounce the drilldown
*/
export declare function useDrilldownDebounce<T extends DrilldownDebounce>(func: T, wait: number, immediate: boolean): () => void;
/**
* Converts a string to a number with a unit.
*/
export declare function useConvertToUnit(str: string | number, unit?: string): string | void;
/**
 * Render the cell item
 */
export declare function useRenderCellItem(item: object, column: Column, index: number): unknown;
/**
* Render the cell
* Used for both header and footer
*/
export declare function useRenderCell(loadedDrilldown: LoadedDrilldown, column: Column, index: number): unknown;
/**
 * Deep merge objects.
 */
export declare function useMergeDeep(target: object | object[], ...sources: object[]): object;
