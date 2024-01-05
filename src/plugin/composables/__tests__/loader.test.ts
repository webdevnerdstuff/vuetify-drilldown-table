import { describe, it, expect } from 'vitest';
import { ref } from 'vue';
import {
	useIsOnlyLinearLoader,
	useLoaderContainerClasses,
	useLoaderHeight,
	useLoaderTdStyles,
	useLoaderTrStyles,
	useLoaderVRowClasses,
} from '../loader';

describe('Loader Composable', () => {
	describe('useIsOnlyLinearLoader', () => {
		it('should return true if "linear"', () => {
			const data = useIsOnlyLinearLoader('linear');
			expect(data).toBeTruthy();
		});

		it('should return true if "[\'linear\']"', () => {
			const data = useIsOnlyLinearLoader(['linear']);
			expect(data).toBeTruthy();
		});

		it('should return false if "circular"', () => {
			const data = useIsOnlyLinearLoader('circular');
			expect(data).toBeFalsy();
		});

		it('should return false if "[\'linear\', \'circular\']"', () => {
			const data = useIsOnlyLinearLoader(['linear', 'circular']);
			expect(data).toBeFalsy();
		});
	});

	describe('useLoaderContainerClasses', () => {
		it('should return class object using value as true', () => {
			const data = useLoaderContainerClasses({ isLinearOnly: true });
			expect(data).toMatchSnapshot();
		});

		it('should return class object using value as false', () => {
			const data = useLoaderContainerClasses({ isLinearOnly: false });
			expect(data).toMatchSnapshot();
		});

		it('should return class object using value as ref true', () => {
			const data = useLoaderContainerClasses({ isLinearOnly: ref(true) });
			expect(data).toMatchSnapshot();
		});

		it('should return class object using value as ref false', () => {
			const data = useLoaderContainerClasses({ isLinearOnly: ref(false) });
			expect(data).toMatchSnapshot();
		});
	});

	describe('useLoaderHeight', () => {
		it('should return the default of 2px if no value (empty string) is passed in', () => {
			const data = useLoaderHeight('');
			expect(data).toMatchInlineSnapshot(`"2px"`);
		});

		it('should return number value passed in as pixel value', () => {
			const data = useLoaderHeight(5);
			expect(data).toMatchInlineSnapshot(`"5px"`);
		});

		it('should return string value passed in as pixel value', () => {
			const data = useLoaderHeight('5');
			expect(data).toMatchInlineSnapshot(`"5px"`);
		});
	});

	describe('useLoaderTdStyles', () => {
		it('should return styles if isLinearOnly is true and loaderHeight as number', () => {
			const data = useLoaderTdStyles({
				isLinearOnly: true,
				loaderHeight: 5,
			});
			expect(data).toMatchSnapshot();
		});

		it('should return styles if isLinearOnly is true and loaderHeight as string', () => {
			const data = useLoaderTdStyles({
				isLinearOnly: true,
				loaderHeight: '5',
			});
			expect(data).toMatchSnapshot();
		});

		it('should return styles if isLinearOnly is ref true and loaderHeight as number', () => {
			const data = useLoaderTdStyles({
				isLinearOnly: ref(true),
				loaderHeight: 5,
			});
			expect(data).toMatchSnapshot();
		});

		it('should return no styles isLinearOnly is false', () => {
			const data = useLoaderTdStyles({
				isLinearOnly: false,
				loaderHeight: 5,
			});
			expect(data).toMatchInlineSnapshot(`{}`);
		});

		it('should return no styles isLinearOnly is ref false', () => {
			const data = useLoaderTdStyles({
				isLinearOnly: ref(false),
				loaderHeight: 5,
			});
			expect(data).toMatchInlineSnapshot(`{}`);
		});
	});

	describe('useLoaderTrStyles', () => {
		it('should return styles if isLinearOnly is true and loaderHeight as number', () => {
			const data = useLoaderTrStyles({
				isLinearOnly: true,
				loaderHeight: 5,
			});
			expect(data).toMatchSnapshot();
		});

		it('should return styles if isLinearOnly is true and loaderHeight as string', () => {
			const data = useLoaderTrStyles({
				isLinearOnly: true,
				loaderHeight: '5',
			});
			expect(data).toMatchSnapshot();
		});

		it('should return styles if isLinearOnly is ref true and loaderHeight as number', () => {
			const data = useLoaderTrStyles({
				isLinearOnly: ref(true),
				loaderHeight: 5,
			});
			expect(data).toMatchSnapshot();
		});

		it('should return styles using 0 as the value if isLinearOnly is false', () => {
			const data = useLoaderTrStyles({
				isLinearOnly: false,
				loaderHeight: 5,
			});
			expect(data).toMatchSnapshot();
		});

		it('should return styles using 0 as the value if isLinearOnly is ref false', () => {
			const data = useLoaderTrStyles({
				isLinearOnly: ref(false),
				loaderHeight: 5,
			});
			expect(data).toMatchSnapshot();
		});
	});

	describe('useLoaderVRowClasses', () => {
		it('should return classes as object using component name in the vrow class', () => {
			expect(useLoaderVRowClasses()).toMatchSnapshot();
		});
	});
});
