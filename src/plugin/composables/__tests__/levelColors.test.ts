import {
	describe,
	it,
	expect,
	vi,
} from 'vitest';
import {
	getSingleColor,
	useGetLevelColors,
} from '../levelColors';
import vuetify from '../../../plugins/vuetify';

const theme = vuetify.theme;


describe('Level Colors Composable', () => {
	describe('getSingleColor', () => {
		it('should return color name as HSL', () => {
			const color = getSingleColor('red', theme);
			expect(color).toMatchInlineSnapshot(`"hsl(0 100% 50%)"`);
		});

		it('should return hex value as HSL', () => {
			const color = getSingleColor('#f00', theme);
			expect(color).toMatchInlineSnapshot(`"hsl(0 100% 50%)"`);
		});

		it('should return RGB value as HSL', () => {
			const color = getSingleColor('rgb(255,0,0)', theme);
			expect(color).toMatchInlineSnapshot(`"hsl(0 100% 50%)"`);
		});

		it('should return HSL value as HSL', () => {
			const color = getSingleColor('hsl(0 100% 50%)', theme);
			expect(color).toMatchInlineSnapshot(`"hsl(0 100% 50%)"`);
		});

		it('should return theme variable as an RGB', () => {
			const color = getSingleColor('--v-theme-error', theme);
			expect(color).toMatchInlineSnapshot(`"rgb(var(--v-theme-error))"`);
		});

		it('should return a non theme color option as default HSL color value', () => {
			const color = getSingleColor('foobar', theme);

			expect(color).toMatchInlineSnapshot(`"hsl(0 0% 100% / 12%)"`);
		});

		it('should return a non theme variable as default HSL color value', () => {
			const color = getSingleColor('--v-foobar', theme);

			expect(color).toMatchInlineSnapshot(`"hsl(0 0% 100% / 12%)"`);
		});

		// console.warn tests //
		const logSpy = vi.spyOn(console, 'warn').mockImplementation(() => undefined);

		it('should console warn when color prop "foobar" doesn\'t exist in colors', () => {
			logSpy.mockReset();

			getSingleColor('foobar', theme);

			expect(logSpy).toHaveBeenCalled();
			expect(logSpy).toHaveBeenCalledTimes(1);
		});

		it('should console warn when color prop "--v-foobar" doesn\'t exist in colors', () => {
			logSpy.mockReset();

			getSingleColor('--v-foobar', theme);

			expect(logSpy).toHaveBeenCalled();
			expect(logSpy).toHaveBeenCalledTimes(1);
		});
	});

	describe('useGetLevelColors', () => {
		const colors = {
			default: {
				background: 'primary',
				border: 'primary',
				color: 'on-primary'
			},
			footer: {
				background: 'primary',
				color: 'on-primary'
			},
			header: {
				background: 'primary',
				color: 'on-primary'
			},
			percentageChange: 15,
			percentageDirection: 'desc'
		};

		it('should return default colors for level 1', () => {
			const color = useGetLevelColors({
				colors,
				level: 1,
				prop: 'default',
				themeColors: theme,
			});
			expect(color).toMatchInlineSnapshot(`
				{
				  "background": "hsl(207 90% 54% / 100%)",
				  "border": "hsl(207 90% 54% / 100%)",
				  "color": "hsl(0 0% 100% / 100%)",
				}
			`);
		});

		it('should return header colors for level 1', () => {
			const color = useGetLevelColors({
				colors,
				level: 1,
				prop: 'header',
				themeColors: theme,
			});
			expect(color).toMatchInlineSnapshot(`
				{
				  "background": "hsl(207 90% 54% / 100%)",
				  "color": "hsl(0 0% 100% / 100%)",
				}
			`);
		});

		it('should return header colors for level 2', () => {
			const color = useGetLevelColors({
				colors,
				level: 2,
				prop: 'header',
				themeColors: theme,
			});
			expect(color).toMatchInlineSnapshot(`
				{
				  "background": "hsl(207 90% 54% / 85%)",
				  "color": "hsl(0 0% 100% / 100%)",
				}
			`);
		});

		it('should return footer colors for level 1', () => {
			const color = useGetLevelColors({
				colors,
				level: 1,
				prop: 'footer',
				themeColors: theme,
			});
			expect(color).toMatchInlineSnapshot(`
				{
				  "background": "hsl(207 90% 54% / 100%)",
				  "color": "hsl(0 0% 100% / 100%)",
				}
			`);
		});

		it('should return footer colors for level 2', () => {
			const color = useGetLevelColors({
				colors,
				level: 2,
				prop: 'footer',
				themeColors: theme,
			});
			expect(color).toMatchInlineSnapshot(`
				{
				  "background": "hsl(207 90% 54% / 85%)",
				  "color": "hsl(0 0% 100% / 100%)",
				}
			`);
		});
	});
});
