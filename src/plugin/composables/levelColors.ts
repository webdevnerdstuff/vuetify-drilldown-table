import {
	HEXColor,
	HSLColor,
	LevelColorResponse,
	LoadedDrilldown,
	RGBColor,
} from '@/types/types';
import { ThemeInstance } from 'vuetify';

/**
 * Converts the colors to HSL values
 */
function convertLevelColors(
	loadedDrilldown: LoadedDrilldown,
	theme: ThemeInstance,
	prop: string | null,
	type: string | null,
): LevelColorResponse {
	const direction = loadedDrilldown.colors.percentageDirection;
	const level = loadedDrilldown.level;
	const propOptionResponse = { ...loadedDrilldown?.colors[prop ?? 'default'] };

	// Color prop does not exist //
	if (typeof propOptionResponse === 'undefined') {
		throw new Error(`[VDrilldownTable]: The color option '${prop}' does not exist`);
	}

	let percentage = levelPercentage(loadedDrilldown, level, direction);

	// Convert colors to HSL //
	if (!type) {
		Object.entries(propOptionResponse).forEach(([key, value]) => {
			const theTheme = theme.global.current.value.colors;
			let color = theTheme[value as string] ?? value as string;

			// If color is null set to transparent //
			if (!color) {
				color = 'transparent';
			}

			// If color is a property that should not be converted, return the value //
			if (color === 'transparent' || color === 'none' || color === 'inherit' || color === 'currentColor' || color === 'initial' || color === 'unset') {
				propOptionResponse[key] = color;
				return;
			}

			// Top Level should always be set to 100% //
			if (key === 'text' && level === 0 && (direction === 'asc')) {
				percentage = 100;
			}

			// If color is a theme variable, return the RGB with variable //
			if (color.includes('--v-theme')) {
				propOptionResponse[key] = `rgb(var(${color}))`;
				return;
			}

			propOptionResponse[key] = `hsl(${convertToHSL(color)} / ${percentage}%)`;
		});
	}

	return propOptionResponse;
}

/**
 * Gets the percentage difference for the current drilldown level
 */
function levelPercentage(
	loadedDrilldown: LoadedDrilldown,
	level: number,
	direction: string,
): number {
	let percentage = 100;
	let percentageChange = loadedDrilldown.colors.percentageChange ?? 0;

	if (isNaN(percentageChange)) {
		percentage = 100;
	}

	percentageChange = percentageChange * level;

	if (direction === 'desc' || direction === 'descending') {
		percentage = 100 - percentageChange;
	}

	if (direction === 'asc' || direction === 'ascending') {
		percentage = 0 + percentageChange;
	}

	if (percentage < 0) {
		percentage = 0;
	}

	if (percentage > 100) {
		percentage = 100;
	}

	// check if percentage is NaN
	if (isNaN(percentage)) {
		percentage = 100;
	}

	return percentage;
}


/**
 * Converts the color to HSL values
 */
function convertToHSL(color: string): string {
	// console.log('convertToHSL', color);
	let newColor: HEXColor | RGBColor | HSLColor = checkColorNames(color);
	let h = 0;
	let s = 0;
	let l = 0;
	let r = 0;
	let g = 0;
	let b = 0;

	// Convert hex color to RGB if necessary
	if (newColor.substring(0, 1) === '#') {
		newColor = hexToRGB(newColor) as RGBColor;
	}
	// Convert RGB to array values if necessary
	else if (newColor.includes('rgb')) {
		newColor = [...newColor.matchAll(/\d+/g)].map(Number) as RGBColor;
	}
	// If HSL is passed in, extract values
	else if (newColor.includes('hsl')) {
		newColor = [...newColor.matchAll(/\d+/g)].map(Number) as HSLColor;

		h = newColor[0];
		s = newColor[1];
		l = newColor[2];

		// Return HSL values
		return `${h} ${s}% ${l}%`;
	}

	// Extract RGB values
	[r, g, b] = newColor as RGBColor;

	// Convert RGB to HSL
	r /= 255;
	g /= 255;
	b /= 255;
	const max = Math.max(r, g, b), min = Math.min(r, g, b);
	h = (max + min) / 2;
	s = (max + min) / 2;
	l = (max + min) / 2;

	if (max == min) {
		h = s = 0; // achromatic
	}
	else {
		const d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		switch (max) {
			case r: h = (g - b) / d + (g < b ? 6 : 0); break;
			case g: h = (b - r) / d + 2; break;
			case b: h = (r - g) / d + 4; break;
			default: break;
		}
		h /= 6;
	}

	h = Math.round(h * 360);
	s = Math.round(s * 100);
	l = Math.round(l * 100);

	// Return HSL values
	return `${h} ${s}% ${l}%`;
}


/**
 * Checks if the color is a color name and converts it to a hex value
 */
function checkColorNames(color: string): HEXColor {
	const colors = {
		AliceBlue: '#F0F8FF',
		AntiqueWhite: '#FAEBD7',
		Aqua: '#00FFFF',
		Aquamarine: '#7FFFD4',
		Azure: '#F0FFFF',
		Beige: '#F5F5DC',
		Bisque: '#FFE4C4',
		Black: '#000000',
		BlanchedAlmond: '#FFEBCD',
		Blue: '#0000FF',
		BlueViolet: '#8A2BE2',
		Brown: '#A52A2A',
		BurlyWood: '#DEB887',
		CadetBlue: '#5F9EA0',
		Chartreuse: '#7FFF00',
		Chocolate: '#D2691E',
		Coral: '#FF7F50',
		CornflowerBlue: '#6495ED',
		Cornsilk: '#FFF8DC',
		Crimson: '#DC143C',
		Cyan: '#00FFFF',
		DarkBlue: '#00008B',
		DarkCyan: '#008B8B',
		DarkGoldenRod: '#B8860B',
		DarkGray: '#A9A9A9',
		DarkGreen: '#006400',
		DarkGrey: '#A9A9A9',
		DarkKhaki: '#BDB76B',
		DarkMagenta: '#8B008B',
		DarkOliveGreen: '#556B2F',
		DarkOrange: '#FF8C00',
		DarkOrchid: '#9932CC',
		DarkRed: '#8B0000',
		DarkSalmon: '#E9967A',
		DarkSeaGreen: '#8FBC8F',
		DarkSlateBlue: '#483D8B',
		DarkSlateGray: '#2F4F4F',
		DarkSlateGrey: '#2F4F4F',
		DarkTurquoise: '#00CED1',
		DarkViolet: '#9400D3',
		DeepPink: '#FF1493',
		DeepSkyBlue: '#00BFFF',
		DimGray: '#696969',
		DimGrey: '#696969',
		DodgerBlue: '#1E90FF',
		FireBrick: '#B22222',
		FloralWhite: '#FFFAF0',
		ForestGreen: '#228B22',
		Fuchsia: '#FF00FF',
		Gainsboro: '#DCDCDC',
		GhostWhite: '#F8F8FF',
		Gold: '#FFD700',
		GoldenRod: '#DAA520',
		Gray: '#808080',
		Green: '#008000',
		GreenYellow: '#ADFF2F',
		Grey: '#808080',
		HoneyDew: '#F0FFF0',
		HotPink: '#FF69B4',
		IndianRed: '#CD5C5C',
		Indigo: '#4B0082',
		Ivory: '#FFFFF0',
		Khaki: '#F0E68C',
		Lavender: '#E6E6FA',
		LavenderBlush: '#FFF0F5',
		LawnGreen: '#7CFC00',
		LemonChiffon: '#FFFACD',
		LightBlue: '#ADD8E6',
		LightCoral: '#F08080',
		LightCyan: '#E0FFFF',
		LightGoldenRodYellow: '#FAFAD2',
		LightGray: '#D3D3D3',
		LightGreen: '#90EE90',
		LightGrey: '#D3D3D3',
		LightPink: '#FFB6C1',
		LightSalmon: '#FFA07A',
		LightSeaGreen: '#20B2AA',
		LightSkyBlue: '#87CEFA',
		LightSlateGray: '#778899',
		LightSlateGrey: '#778899',
		LightSteelBlue: '#B0C4DE',
		LightYellow: '#FFFFE0',
		Lime: '#00FF00',
		LimeGreen: '#32CD32',
		Linen: '#FAF0E6',
		Magenta: '#FF00FF',
		Maroon: '#800000',
		MediumAquaMarine: '#66CDAA',
		MediumBlue: '#0000CD',
		MediumOrchid: '#BA55D3',
		MediumPurple: '#9370DB',
		MediumSeaGreen: '#3CB371',
		MediumSlateBlue: '#7B68EE',
		MediumSpringGreen: '#00FA9A',
		MediumTurquoise: '#48D1CC',
		MediumVioletRed: '#C71585',
		MidnightBlue: '#191970',
		MintCream: '#F5FFFA',
		MistyRose: '#FFE4E1',
		Moccasin: '#FFE4B5',
		NavajoWhite: '#FFDEAD',
		Navy: '#000080',
		OldLace: '#FDF5E6',
		Olive: '#808000',
		OliveDrab: '#6B8E23',
		Orange: '#FFA500',
		OrangeRed: '#FF4500',
		Orchid: '#DA70D6',
		PaleGoldenRod: '#EEE8AA',
		PaleGreen: '#98FB98',
		PaleTurquoise: '#AFEEEE',
		PaleVioletRed: '#DB7093',
		PapayaWhip: '#FFEFD5',
		PeachPuff: '#FFDAB9',
		Peru: '#CD853F',
		Pink: '#FFC0CB',
		Plum: '#DDA0DD',
		PowderBlue: '#B0E0E6',
		Purple: '#800080',
		RebeccaPurple: '#663399',
		Red: '#FF0000',
		RosyBrown: '#BC8F8F',
		RoyalBlue: '#4169E1',
		SaddleBrown: '#8B4513',
		Salmon: '#FA8072',
		SandyBrown: '#F4A460',
		SeaGreen: '#2E8B57',
		SeaShell: '#FFF5EE',
		Sienna: '#A0522D',
		Silver: '#C0C0C0',
		SkyBlue: '#87CEEB',
		SlateBlue: '#6A5ACD',
		SlateGray: '#708090',
		SlateGrey: '#708090',
		Snow: '#FFFAFA',
		SpringGreen: '#00FF7F',
		SteelBlue: '#4682B4',
		Tan: '#D2B48C',
		Teal: '#008080',
		Thistle: '#D8BFD8',
		Tomato: '#FF6347',
		Turquoise: '#40E0D0',
		Violet: '#EE82EE',
		Wheat: '#F5DEB3',
		White: '#FFFFFF',
		WhiteSmoke: '#F5F5F5',
		Yellow: '#FFFF00',
		YellowGreen: '#9ACD32',
	};
	let response = color;

	// console.log({ color });
	Object.entries(colors).forEach(([key, value]) => {
		if (color.toLowerCase() == key.toLowerCase()) {
			response = value;
			return;
		}
	});

	return response;
}

/**
 * Converts the HEX color to RGB
 */
function hexToRGB(hex: string): RGBColor {
	let newHex = hex.replace('#', '');

	// Convert 3-digit hex colors to 6-digit hex colors
	if (newHex.length === 3) {
		newHex = newHex.split('').map(char => char + char).join('');
	}

	// Extract the red, green, and blue values from the hex string
	const r = parseInt(newHex.substring(0, 2), 16);
	const g = parseInt(newHex.substring(2, 4), 16);
	const b = parseInt(newHex.substring(4, 6), 16);

	// Return an array of the RGB values
	return [r, g, b];
}


/**
 * Gets the colors for the current drilldown level
 */
export function useGetLevelColors(
	loadedDrilldown: LoadedDrilldown,
	themeColors: ThemeInstance,
	prop = 'default',
	type: string | null = null
): LevelColorResponse {
	const levelColorOptions = convertLevelColors(loadedDrilldown, themeColors, prop, type);

	if (!type) {
		return levelColorOptions;
	}

	return levelColorOptions[type];
}
