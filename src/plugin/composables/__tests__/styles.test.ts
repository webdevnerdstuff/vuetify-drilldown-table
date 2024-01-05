import { describe, it, expect } from 'vitest';
import {
	useTableStyles,
	useHeaderCellStyles,
	useTFootCellStyles,
} from '../styles';
import vuetify from '../../../plugins/vuetify';

const theme = vuetify.theme;

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

describe('Styles Composable', () => {
	describe('useTableStyles', () => {
		it('should return tables styles for level 1', () => {
			const data = useTableStyles({
				colors,
				level: 1,
				theme,
			});
			expect(data).toMatchSnapshot();
		});

		it('should return tables styles for level 2', () => {
			const data = useTableStyles({
				colors,
				level: 2,
				theme,
			});
			expect(data).toMatchSnapshot();
		});
	});

	describe('useHeaderCellStyles', () => {
		const options = {
			colors,
			column: {
				width: undefined as string | number | undefined,
			},
			dataTableExpand: false,
			level: 1,
			theme,
		};

		it('should return header cell styles for level 1 using an undefined width to equal "auto"', () => {
			const data = useHeaderCellStyles(options);
			expect(data).toMatchSnapshot();
		});


		it('should return header cell styles for level 1 using an width as number', () => {
			options.column.width = 100;
			const data = useHeaderCellStyles(options);
			expect(data).toMatchSnapshot();
		});


		it('should return header cell styles for level 1 using an width as string without unit', () => {
			options.column.width = '100';
			const data = useHeaderCellStyles(options);
			expect(data).toMatchSnapshot();
		});

		it('should return header cell styles for level 1 using an width as string with unit', () => {
			options.column.width = '100px';
			const data = useHeaderCellStyles(options);
			expect(data).toMatchSnapshot();
		});

		it('should return header cell styles for level 2', () => {
			options.column.width = '100px';
			options.level = 2;
			const data = useHeaderCellStyles(options);
			expect(data).toMatchSnapshot();
		});
	});

	describe('useTFootCellStyles', () => {
		const options = {
			colors,
			elm: 'footer',
			level: 1,
			theme,
		};

		it('should return footer cell styles level 1', () => {
			const data = useTFootCellStyles(options);
			expect(data).toMatchSnapshot();
		});

		it('should return footer cell styles level 2', () => {
			options.level = 2;
			const data = useTFootCellStyles(options);
			expect(data).toMatchSnapshot();
		});
	});
});
