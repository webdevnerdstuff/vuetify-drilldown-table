import {
	Props,
	UseGetHeaderColumnWidths,
	UseSetLoadedDrilldown,
} from '@/plugin/types';
import { useMergeDeep } from './helpers';


export const useGetHeaderColumnWidths: UseGetHeaderColumnWidths = (options) => {
	const { tableId } = options;
	const columnWidths = [] as number[];

	const id = unref(tableId);

	const domHeaders = document.querySelectorAll(`[data-vdt-id="${id}"] .v-drilldown-table--header-row-th-1`);

	if (Object.keys(domHeaders).length > 0) {
		for (let i = 0; i < domHeaders.length; i += 1) {
			const column = domHeaders[i] as HTMLElement;

			columnWidths.push(column.offsetWidth);
		}
	}

	return columnWidths;
};


export const useSetLoadedDrilldown: UseSetLoadedDrilldown = (options) => {
	const { drilldown, item, level, levels, loadedDrilldown } = options;
	let settings = loadedDrilldown;
	const rawItem = item;

	settings = useMergeDeep(loadedDrilldown, drilldown) as Props;
	const items = loadedDrilldown.items as Props['items'] || [{}];

	const drilldownItem = items.find(<T, K extends keyof T>(dItem: T) => {
		const thisItem = dItem[loadedDrilldown.drilldownKey as K];
		let propsItem = {};

		if (rawItem) {
			propsItem = rawItem[loadedDrilldown.drilldownKey as K];
		}

		return thisItem === propsItem;
	}) as Props;

	settings = useMergeDeep(
		loadedDrilldown,
		drilldownItem[loadedDrilldown.itemChildrenKey as keyof Props] as Props,
	) as Props;

	// Hide expand icon if this is the last drilldown level //
	if (levels === level) {
		settings.showExpand = false;
	}

	return settings;
};
