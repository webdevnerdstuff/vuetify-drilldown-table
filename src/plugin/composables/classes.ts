import { componentName } from '../utils/globals';
import { useGetSortDirection } from './helpers';
import {
	UseBodyCellClasses,
	UseBodyRowClasses,
	UseCellAlignClasses,
	UseCellClasses,
	UseCheckBoxClasses,
	UseHeaderCellClasses,
	UseHeaderRowClasses,
	UseSortIconClasses,
	UseTFootCellClasses,
	UseTableClasses,
	UseTFootClasses,
	UseTFootRowClasses,
} from '@/types';


// -------------------------------------------------- VDrilldownTable //
export const useTableClasses: UseTableClasses = (options) => {
	const { elevation, isDrilldown, isHover, isServerSide, level, separator } = options;

	const classes = {
		[`${componentName}--child`]: isDrilldown,
		[`${componentName}--hover`]: isHover,
		[`${componentName}--level-${level}`]: true,
		[`${componentName}--server`]: isServerSide,
		[`${componentName}--separator-${separator}`]: separator,
		[`${componentName}`]: true,
		[`elevation-${elevation}`]: parseInt(elevation as string) > 0,
	};

	return classes;
};

// ------------------------- Cell Align //
export const useCellAlignClasses: UseCellAlignClasses = (options) => {
	const { align } = options;

	const classes = {
		'd-flex align-center': true,
		[`justify-${align}`]: align,
		[`justify-start`]: !align,
	};

	return classes;
};

// ------------------------- Checkbox //
export const useCheckBoxClasses: UseCheckBoxClasses = (options) => {
	const { level } = options;

	const classes = {
		'd-flex': true,
		[`${componentName}--header-select-all-checkbox`]: true,
		[`${componentName}--header-select-all-checkbox-${level}`]: true,
	};

	return classes;
};


// -------------------------------------------------- Table Cells //
// ------------------------- TD Cells //
export const useCellClasses: UseCellClasses = (options) => {
	const { column, elm, level } = options;

	return {
		[`${componentName}--${elm}-row-td`]: true,
		[`${componentName}--${elm}-row-td-${level}`]: true,
		[`${column.cellClass}`]: column.cellClass,
	};
};


// -------------------------------------------------- HeaderSlot //
// ------------------------- Header Row //
export const useHeaderRowClasses: UseHeaderRowClasses = (options) => {
	const { level } = options;

	const classes = {
		[`${componentName}--header-row`]: true,
		[`${componentName}--header-row-${level}`]: true,
	};

	return classes;
};

// ------------------------- Header Cells //
export const useHeaderCellClasses: UseHeaderCellClasses = (options) => {
	const { colors, column, level, slotName = '' } = options;

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

// ------------------------- Header Sort Icon //
export const useSortIconClasses: UseSortIconClasses = (options) => {
	const { iconOptions, key, level, sortBy } = options;

	return {
		'fa-fw': iconOptions?.defaultSet === 'fa',
		'mx-1': true,
		[`${componentName}--header-row-th-sortable-sort-icon`]: true,
		[`${componentName}--header-row-th-sortable-sort-icon-${level}`]: true,
		[`${componentName}--header-row-th-sortable-sort-icon-desc`]: useGetSortDirection({ id: key, sortBy }) === 'desc',
		[`${componentName}--header-row-th-sortable-sort-icon-asc`]: useGetSortDirection({ id: key, sortBy }) === 'asc',
	};
};


// -------------------------------------------------- ItemSlot //
// ------------------------- Body Cells //
// ! Not being used currently //
export const useBodyCellClasses: UseBodyCellClasses = (options) => {
	const { column, level } = options;

	const classes = {
		[`${componentName}--body-row-td`]: true,
		[`${componentName}--body-row-td-${level}`]: true,
		[`${column.cellClass}`]: column.cellClass,
	};

	return classes;
};

// ------------------------- Body Row //
export const useBodyRowClasses: UseBodyRowClasses = (options) => {
	const { expandOnClick, level, levels } = options;

	const classes = {
		'v-data-table__tr': true,
		'v-data-table__tr--clickable': expandOnClick && (level < levels),
		[`${componentName}--body-row`]: true,
		[`${componentName}--body-row-${level}`]: true,
	};

	return classes;
};


// -------------------------------------------------- TfootSlot //
// ------------------------- Tfoot //
export const useTFootClasses: UseTFootClasses = (options) => {
	const { level } = options;

	const classes = {
		[`${componentName}--tfoot`]: true,
		[`${componentName}--tfoot-${level}`]: true,
	};

	return classes;
};

// ------------------------- Tfoot Row //
export const useTFootRowClasses: UseTFootRowClasses = (options) => {
	const { level } = options;

	const classes = {
		[`${componentName}--tfoot-row`]: true,
		[`${componentName}--tfoot-row-${level}`]: true,
	};

	return classes;
};

// ------------------------- Tfoot Row Cell //
export const useTFootCellClasses: UseTFootCellClasses = (options) => {
	const { column, level, slotName = '' } = options;

	const classes = {
		[`${componentName}--tfoot-row-td`]: true,
		[`${componentName}--tfoot-row-td-${slotName}`]: slotName !== '',
		[`${componentName}--tfoot-row-td-${slotName}-${level}`]: slotName,
		[`${componentName}--tfoot-row-td-${level}`]: true,
		[`${column.cellClass}`]: column.cellClass,
	};

	return classes;
};
