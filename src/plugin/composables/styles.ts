import { useConvertToUnit } from './helpers';
import { useGetLevelColors } from './levelColors';
import {
	HeaderCellStyles,
	CellStyles,
	TableStyles,
} from '@/types';


// -------------------------------------------------- VDrilldownTable //
export const useTableStyles: TableStyles = (loadedDrilldown, theme) => {
	let baseColors: { border?: string; } = {};

	if (loadedDrilldown.colors) {
		baseColors = useGetLevelColors(loadedDrilldown, theme, 'default');
	}

	const styles: { borderBottom: string; } = {
		borderBottom: 'none',
	};

	if (baseColors.border) {
		styles.borderBottom = `1px solid ${baseColors.border}`;
	}

	return styles;
};


// -------------------------------------------------- HeaderSlot //
export const useHeaderCellStyles: HeaderCellStyles = (loadedDrilldown, column, theme, dataTableExpand = false) => {
	const styles: {
		backgroundColor?: string | unknown;
		color?: string | unknown;
		minWidth?: string | number | unknown;
		width?: string | number | unknown;
	} = {
		minWidth: column.width ? useConvertToUnit(column.width) : 'auto',
		width: column.width ? useConvertToUnit(column.width) : 'auto',
	};

	if (dataTableExpand && !column.width) {
		styles.width = '48px';
		styles.minWidth = '48px';
	}

	if (loadedDrilldown.colors === false) {
		return styles as CSSProperties;
	}

	const headerColors = useGetLevelColors(loadedDrilldown, theme, 'header');

	styles.backgroundColor = headerColors.bg;
	styles.color = headerColors.text;

	return styles as CSSProperties;
};


// -------------------------------------------------- TFootSlot //
export const useCellStyles: CellStyles = (loadedDrilldown, theme, elm,) => {
	if (loadedDrilldown.colors === false) {
		return {};
	}

	const baseColors = useGetLevelColors(loadedDrilldown, theme, elm);

	const styles = {
		backgroundColor: baseColors.bg,
		color: baseColors.text,
	};

	return styles as CSSProperties;
};
