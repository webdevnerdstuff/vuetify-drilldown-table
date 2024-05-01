import { describe, it, expect } from 'vitest';
import {
	useTableClasses,
	useCellAlignClasses,
	useCheckBoxClasses,
	useCellClasses,
	useHeaderRowClasses,
	useHeaderCellClasses,
	useSortIconClasses,
	useBodyCellClasses,
	useBodyRowClasses,
	useTFootClasses,
	useTFootRowClasses,
	useTFootCellClasses,
} from '../classes';


describe('Classes Composable', () => {

	describe('useTableClasses', () => {
		it('should return class object', () => {
			const classes = useTableClasses({
				elevation: 5,
				fixedHeader: true,
				isDrilldown: true,
				isHover: true,
				isServerSide: true,
				level: 1,
				mobile: false,
				separator: true,
			});

			expect(classes).toMatchSnapshot();
		});
	});

	describe('useCellAlignClasses', () => {
		it('should return class object', () => {
			const classes = useCellAlignClasses({});
			expect(classes).toMatchSnapshot();
		});

		it('should return class object', () => {
			const classes = useCellAlignClasses({ align: 'start' });
			expect(classes).toMatchSnapshot();
		});
	});

	describe('useCheckBoxClasses', () => {
		it('should return class object', () => {
			const classes = useCheckBoxClasses({ level: 0 });
			expect(classes).toMatchSnapshot();
		});

		it('should return class object', () => {
			const classes = useCheckBoxClasses({ level: 1 });
			expect(classes).toMatchSnapshot();
		});
	});

	describe('useCellClasses', () => {
		it('should return class object', () => {
			const classes = useCellClasses({
				column: {},
				elm: 'header',
				level: 0,
			});
			expect(classes).toMatchSnapshot();
		});

		it('should return class object', () => {
			const classes = useCellClasses({
				column: { cellClass: 'foo-cell' },
				elm: 'header',
				level: 0,
			});
			expect(classes).toMatchSnapshot();
		});
	});

	describe('useHeaderRowClasses', () => {
		it('should return class object', () => {
			const classes = useHeaderRowClasses({ level: 0 });
			expect(classes).toMatchSnapshot();
		});

		it('should return class object', () => {
			const classes = useHeaderRowClasses({ level: 1 });
			expect(classes).toMatchSnapshot();
		});
	});

	describe('useHeaderCellClasses', () => {
		it('should return class object', () => {
			const classes = useHeaderCellClasses({
				column: {
					align: 'start',
					key: 'name',
					title: 'Name',
				},
				level: 0,
				slotName: 'header-data-table-select',
			});
			expect(classes).toMatchSnapshot();
		});
	});

	describe('useSortIconClasses', () => {
		it('should return class object', () => {
			const classes = useSortIconClasses({
				iconOptions: {
					defaultSet: 'mdi',
					id: 'id',
					level: 0,
					sortBy: [{
						key: 'id',
						order: 'asc',
					}],
				},
				key: 'id',
				level: 0,
				sortBy: [{
					key: 'id',
					order: 'desc',
				}],
			});
			expect(classes).toMatchSnapshot();
		});
	});

	describe('useBodyCellClasses', () => {
		it('should return class object', () => {
			const classes = useBodyCellClasses({
				column: {
					align: 'start',
					key: 'name',
					title: 'Name',
				},
				level: 0,
			});
			expect(classes).toMatchSnapshot();
		});
	});

	describe('useBodyRowClasses', () => {
		it('should return class object', () => {
			const classes = useBodyRowClasses({
				expandOnClick: true,
				level: 0,
				levels: 2,
			});
			expect(classes).toMatchSnapshot();
		});

		it('should return class object', () => {
			const classes = useBodyRowClasses({
				expandOnClick: false,
				level: 0,
				levels: 2,
			});
			expect(classes).toMatchSnapshot();
		});

		it('should return class object', () => {
			const classes = useBodyRowClasses({
				expandOnClick: true,
				level: 2,
				levels: 1,
			});
			expect(classes).toMatchSnapshot();
		});
	});

	describe('useTFootClasses', () => {
		it('should return class object', () => {
			const classes = useTFootClasses({ level: 0 });
			expect(classes).toMatchSnapshot();
		});

		it('should return class object', () => {
			const classes = useTFootClasses({ level: 1 });
			expect(classes).toMatchSnapshot();
		});
	});

	describe('useTFootRowClasses', () => {
		it('should return class object', () => {
			const classes = useTFootRowClasses({ level: 0 });
			expect(classes).toMatchSnapshot();
		});

		it('should return class object', () => {
			const classes = useTFootRowClasses({ level: 1 });
			expect(classes).toMatchSnapshot();
		});
	});

	describe('useTFootCellClasses', () => {
		it('should return class object', () => {
			const classes = useTFootCellClasses({
				column: {
					align: 'start',
					key: 'name',
					title: 'Name',
				},
				level: 0,
				slotName: 'tfoot-data-table-expand'
			});
			expect(classes).toMatchSnapshot();
		});
	});
});
