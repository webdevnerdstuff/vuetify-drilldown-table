import {
	describe,
	expect,
	it,
	test,
} from 'vitest';
import { mount } from '@vue/test-utils';
import vuetify from '../../../plugins/vuetify.js';

import {
	HeadersSlot,
	ItemSlot,
	TfootSlot,
	TheadSlot,
	TopSlot,
} from '../';


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

const headerProps = {
	global: {
		plugins: [vuetify],
	},
	props: {
		colors,
		columnWidths: [],
		density: 'compact',
		items: [],
		level: 1,
		loaderSettings: {},
		matchColumnWidths: false,
		selectStrategy: 'none',
		slotProps: {
			selectAll: () => { },
		},
		sortBy: [],
	},
};

describe('Slot Components', () => {
	describe('HeadersSlot Component', () => {
		const wrapper = mount(HeadersSlot, headerProps);

		test('emitted click:selectAll', async () => {
			wrapper.vm.selectAllBoxes();

			// Wait until $emits have been handled
			await wrapper.vm.$nextTick();
			expect(wrapper.emitted()).toHaveProperty('click:selectAll');
		});
	});

	describe('ItemSlot Component', async () => {
		const wrapper = mount(ItemSlot, {
			global: {
				plugins: [vuetify],
			},
			props: {
				density: 'compact',
				expandOnClick: true,
				isRow: true,
				itemSelectable: true,
				items: [],
				level: 1,
				levels: 2,
				showExpand: true,
				slotProps: {},
			},
		});

		const data = {
			$event: () => { },
			columns: [],
			index: 0,
			internalItem: {},
			isExpanded: false,
			isRow: true,
			item: {},
			level: 1,
			toggleExpand: () => { },
		};

		wrapper.vm.drilldownEvent(data);
		await wrapper.vm.$nextTick();

		test('emitted click:row', () => {
			expect(wrapper.emitted()).toHaveProperty('click:row');
		});

		test('emitted update:expanded', async () => {
			expect(wrapper.emitted()).toHaveProperty('update:expanded');
		});
	});

	describe('TfootSlot Component', () => {
		test('emitted click:selectAll', async () => {
			const wrapper = mount(TfootSlot, {
				global: {
					plugins: [vuetify],
				},
				props: {
					colors,
					density: 'compact',
					footers: [],
					items: [],
					level: 1,
					selectStrategy: 'none',
					slotProps: {
						selectAll: () => { },
					},
				},
			});

			wrapper.vm.selectAllBoxes();

			// Wait until $emits have been handled
			await wrapper.vm.$nextTick();

			expect(wrapper.emitted()).toHaveProperty('click:selectAll');
		});
	});

	describe('TheadSlot Component', () => {
		const wrapper = mount(TheadSlot, headerProps);

		test('emitted click:selectAll', async () => {
			wrapper.vm.clickSelectAll();

			// Wait until $emits have been handled
			await wrapper.vm.$nextTick();

			expect(wrapper.emitted()).toHaveProperty('click:selectAll');
		});

		test('emitted update:sortBy', async () => {
			wrapper.vm.updateSortBy();

			// Wait until $emits have been handled
			await wrapper.vm.$nextTick();
			expect(wrapper.emitted()).toHaveProperty('update:sortBy');
		});
	});

	describe('TopSlot Component', async () => {
		const topProps = { ...headerProps };
		topProps.props = { ...topProps.props, ...{ loading: false, showSearch: true } };

		const wrapper = mount(TopSlot, topProps);

		test('emitted selectAllCallback click:selectAll', async () => {
			wrapper.vm.selectAllCallback();

			// Wait until $emits have been handled
			await wrapper.vm.$nextTick();

			expect(wrapper.emitted()).toHaveProperty('click:selectAll');
		});

		test('emitted toggleSelectAllCallback click:selectAll', async () => {
			wrapper.vm.toggleSelectAllCallback();

			// Wait until $emits have been handled
			await wrapper.vm.$nextTick();

			expect(wrapper.emitted()).toHaveProperty('click:selectAll');
		});

		it('should emit update:search with the value of [\'foobar\']', async () => {
			const searchValue = 'foobar';
			const textInput = wrapper.find('input');
			await textInput.setValue(searchValue);

			// Wait until $emits have been handled
			await wrapper.vm.$nextTick();

			expect(wrapper.emitted()).toHaveProperty('update:search');
			expect(wrapper.emitted()['update:search'][0]).toStrictEqual([searchValue]);
		});
	});
});

