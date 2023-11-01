import { useConvertToUnit } from './helpers';
import { useGetLevelColors } from './levelColors';
import {
	UseHeaderCellStyles,
	UseTableStyles,
	UseTFootCellStyles,
} from '@/types';


// -------------------------------------------------- VDrilldownTable //
export const useTableStyles: UseTableStyles = (options) => {
	const { colors, level, theme } = options;
	let baseColors: { border?: string; } = {};

	if (typeof colors === 'object' && colors !== null) {
		baseColors = useGetLevelColors({
			colors,
			level,
			prop: 'default',
			themeColors: theme,
		});
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
export const useHeaderCellStyles: UseHeaderCellStyles = (options) => {
	const { colors, column, dataTableExpand = false, level, theme } = options;
	const styles: {
		backgroundColor?: string | unknown;
		color?: string | unknown;
		minWidth?: string | number | unknown;
		width?: string | number | unknown;
	} = {
		minWidth: column.width ? useConvertToUnit({ str: column.width }) : 'auto',
		width: column.width ? useConvertToUnit({ str: column.width }) : 'auto',
	};

	if (dataTableExpand && !column.width) {
		styles.width = column.width ? useConvertToUnit({ str: column.width }) : '56px';
		styles.minWidth = column.width ? useConvertToUnit({ str: column.width }) : '56px';
	}

	const headerColors = useGetLevelColors({
		colors,
		level,
		prop: 'header',
		themeColors: theme,
	});

	styles.backgroundColor = headerColors.background;
	styles.color = headerColors.color;

	return styles as CSSProperties;
};


// -------------------------------------------------- TFootSlot //
export const useTFootCellStyles: UseTFootCellStyles = (options) => {
	const { colors, elm, level, theme } = options;

	const baseColors = useGetLevelColors({
		colors,
		level,
		prop: elm,
		themeColors: theme,
	});

	const styles = {
		backgroundColor: baseColors.background,
		color: baseColors.color,
	};

	return styles as CSSProperties;
};
