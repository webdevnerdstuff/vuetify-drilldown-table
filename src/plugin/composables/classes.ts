import { componentName } from '../utils/globals';
import { useGetSortDirection } from './helpers';
import {
	BodyCellClasses,
	BodyRowClasses,
	CellClasses,
	HeaderCellClasses,
	SortIconClasses,
	TableClasses,
} from '@/types';


// -------------------------------------------------- VDrilldownTable //
export const useTableClasses: TableClasses = (
	isDrilldown,
	elevation,
	isHover,
	level,
	isServerSide,
) => {
	const classes = {
		'pb-2': true,
		[`${componentName}--child`]: isDrilldown,
		[`${componentName}--hover`]: isHover,
		[`${componentName}--level-${level}`]: true,
		[`${componentName}--server`]: isServerSide,
		[`${componentName}`]: true,
		[`elevation-${elevation}`]: parseInt(elevation as string) > 0,
	};

	return classes;
};


// -------------------------------------------------- Table Cells //
export const useCellClasses: CellClasses = (elm, column, level) => {
	return {
		[`${componentName}--${elm}-row-td`]: true,
		[`${componentName}--${elm}-row-td-${level}`]: true,
		[`${column.cellClass}`]: column.cellClass,
	};
};


// -------------------------------------------------- HeaderSlot //
// ------------------------- Header Row //
export function useHeaderRowClasses(level: number): object {
	const classes = {
		[`${componentName}--header-row`]: true,
		[`${componentName}--header-row-${level}`]: true,
	};

	return classes;
};


// ------------------------- Header Row Cells //
export function useCellAlignClasses(align: string): object {
	const classes = {
		'd-flex align-center': true,
		[`justify-${align}`]: align,
		[`justify-start`]: !align,
	};

	return classes;
};


export const useHeaderCellClasses: HeaderCellClasses = (colors, level, column, slotName = '') => {
	const classes = {
		[`${componentName}--header-row-th`]: true,
		[`${componentName}--header-row-th-${slotName}`]: slotName !== '',
		[`${componentName}--header-row-th-${slotName}-${level}`]: slotName,
		[`${componentName}--header-row-th-${level}`]: true,
		[`${componentName}--header-row-th-sortable`]: column.sortable,
		[`${componentName}--header-row-th-sortable-default-color`]: column.sortable && colors === false,
		[`${column.cellClass}`]: column.cellClass,
	};

	return classes;
};


// ------------------------- Checkbox //
export function useCheckBoxClasses(level: number): object {
	const classes = {
		'd-flex': true,
		[`${componentName}--header-select-all-checkbox`]: true,
		[`${componentName}--header-select-all-checkbox-${level}`]: true,
	};

	return classes;
};


// ------------------------- Sort Icon //
export const useSortIconClasses: SortIconClasses = (sortBy, level, key) => {
	return {
		'px-1': true,
		[`${componentName}--header-row-th-sortable-sort-icon`]: true,
		[`${componentName}--header-row-th-sortable-sort-icon-${level}`]: true,
		[`${componentName}--header-row-th-sortable-sort-icon-desc`]: useGetSortDirection(sortBy, key) === 'desc',
		[`${componentName}--header-row-th-sortable-sort-icon-asc`]: useGetSortDirection(sortBy, key) === 'asc',
	};
};


// -------------------------------------------------- ItemSlot //
export const useBodyCellClasses: BodyCellClasses = (column, level) => {
	const classes = {
		[`${componentName}--body-row-td`]: true,
		[`${componentName}--body-row-td-${level}`]: true,
		[`${column.cellClass}`]: column.cellClass,
	};

	return classes;
};


export const useBodyRowClasses: BodyRowClasses = (expandOnClick, level, levels) => {
	const classes = {
		'v-data-table__tr': true,
		'v-data-table__tr--clickable': expandOnClick && (level < levels),
		[`${componentName}--body-row`]: true,
		[`${componentName}--body-row-${level}`]: true,
	};

	return classes;
};