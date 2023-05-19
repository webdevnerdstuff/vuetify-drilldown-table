import { useConvertToUnit } from './helpers';
import { useGetLevelColors } from './levelColors';
import {
	HeaderCellStyles,
	CellStyles,
	TableStyles,
} from '@/types';


// -------------------------------------------------- VDrilldownTable //
export const useTableStyles: TableStyles = (colors, level, theme) => {
	let baseColors: { border?: string; } = {};

	if (colors) {
		baseColors = useGetLevelColors(colors, level, theme, 'default');
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
export const useHeaderCellStyles: HeaderCellStyles = (colors, level, column, theme, dataTableExpand = false) => {
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

	if (colors === false) {
		return styles as CSSProperties;
	}

	const headerColors = useGetLevelColors(colors, level, theme, 'header');

	styles.backgroundColor = headerColors.bg;
	styles.color = headerColors.text;

	return styles as CSSProperties;
};


// -------------------------------------------------- Cell Styles //
export const useCellStyles: CellStyles = (colors, level, theme, elm) => {
	if (colors === false) {
		return {};
	}

	const baseColors = useGetLevelColors(colors, level, theme, elm);

	const styles = {
		backgroundColor: baseColors.bg,
		color: baseColors.text,
	};

	return styles as CSSProperties;
};


// -------------------------------------------------- TFootSlot //
export const useTfootCellStyles: CellStyles = (colors, level, theme, elm) => {
	if (colors === false) {
		return {};
	}

	const baseColors = useGetLevelColors(colors, level, theme, elm);

	const styles = {
		backgroundColor: baseColors.bg,
		color: baseColors.text,
	};

	return styles as CSSProperties;
};
