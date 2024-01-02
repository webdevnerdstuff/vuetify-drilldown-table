import { describe, it, expect } from 'vitest';
import {
	useConvertToUnit,
	useGetSortDirection,
	useMergeDeep,
	useRenderCell,
	useRenderCellItem,
} from '../helpers';

describe('Helpers Composable', () => {
	describe('useConvertToUnit', () => {
		it('should return string with a default px unit', () => {
			const unit = useConvertToUnit({ str: '10' });
			expect(unit).toBe('10px');
		});

		it('should return number with a default px unit', () => {
			const unit = useConvertToUnit({ str: 10 });
			expect(unit).toBe('10px');
		});

		it('should return string with a supplied unit', () => {
			const unit = useConvertToUnit({ str: '10', unit: 'em' });
			expect(unit).toBe('10em');
		});

		it('should return number with a supplied unit', () => {
			const unit = useConvertToUnit({ str: 10, unit: 'em' });
			expect(unit).toBe('10em');
		});
	});

	describe('useGetSortDirection', () => {
		it('should return asc', () => {
			const response = useGetSortDirection({
				id: 'id',
				sortBy: [{
					key: 'id',
					order: 'asc',
				}],
			});
			expect(response).toMatchInlineSnapshot(`"asc"`);
		});

		it('should return desc', () => {
			const response = useGetSortDirection({
				id: 'id',
				sortBy: [{
					key: 'id',
					order: 'desc',
				}],
			});
			expect(response).toMatchInlineSnapshot(`"desc"`);
		});
	});

	describe('useRenderCellItem', () => {
		it('should return "The ID is 1"', () => {
			const item = { id: 1 };
			const column = {
				key: 'id',
				renderItem(value: { id: number; }) {
					return `The ID is ${value}`;
				},
			};

			const response = useRenderCellItem(item, column);
			expect(response).toMatchInlineSnapshot(`"The ID is 1"`);
		});
	});

	describe('useRenderCell', () => {
		it('should return "Name Column"', () => {
			const column = {
				align: 'start',
				key: 'name',
				renderer(value: string) {
					return `${value} Column`;
				},
				title: 'Name',
			};

			const response = useRenderCell(column);
			expect(response).toMatchInlineSnapshot(`"Name Column"`);
		});

		it('should return "Name Header Column"', () => {
			const column = {
				align: 'start',
				key: 'name',
				renderHeader(value: string) {
					return `${value} Header Column`;
				},
				title: 'Name',
			};

			const response = useRenderCell(column);
			expect(response).toMatchInlineSnapshot(`"Name Header Column"`);
		});

		it('should return "Name Footer Column"', () => {
			const column = {
				align: 'start',
				key: 'name',
				renderFooter(value: string) {
					return `${value} Footer Column`;
				},
				title: 'Name',
			};

			const response = useRenderCell(column);
			expect(response).toMatchInlineSnapshot(`"Name Footer Column"`);
		});
	});

	describe('useMergeDeep', () => {
		it('should return an object with merged properties', () => {
			const obj1 = {
				foo: {
					bar: 'bar',
					baz: {
						bar: 'bar-baz',
					}
				}
			};
			const obj2 = {
				foo: {
					bar: 'bar',
					baz: {
						foo: 'foo-baz',
					}
				}
			};

			const response = useMergeDeep(obj1, obj2);
			expect(response).toMatchSnapshot();
		});
	});
});
