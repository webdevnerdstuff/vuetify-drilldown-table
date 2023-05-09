import { componentName } from '../utils/globals';
import { StyleValue } from 'vue';
import { LoadedDrilldown } from '@/types';
import { ThemeInstance } from 'vuetify';
import { useGetLevelColors } from './levelColors';


export function useTableClasses(
	loadedDrilldown: LoadedDrilldown,
	isDrilldown: boolean,
): object {
	const elevation = loadedDrilldown.elevation;

	const classes = {
		[`${componentName}`]: true,
		[`${componentName}--level-${loadedDrilldown.level}`]: true,
		[`${componentName}--hover`]: loadedDrilldown.hover,
		[`${componentName}--child`]: isDrilldown,
		[`elevation-${elevation}`]: parseInt(elevation as string) > 0,
		'pb-2': true,
	};

	return classes;
};


export function useTableStyles(
	loadedDrilldown: LoadedDrilldown,
	theme: ThemeInstance,
): StyleValue {
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
