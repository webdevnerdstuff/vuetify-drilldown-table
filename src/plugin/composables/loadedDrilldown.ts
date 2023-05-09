import { DataTableItem, LoadedDrilldown } from '@/types';
import { useMergeDeep } from './helpers';


export function useSetLoadedDrilldown(
	loadedDrilldown: LoadedDrilldown,
	drilldown: object,
	rawItem: DataTableItem['raw'],
	level: number,
	levels: number,
): LoadedDrilldown {
	let settings = loadedDrilldown;

	settings = useMergeDeep(loadedDrilldown, drilldown) as LoadedDrilldown;

	const drilldownItem = loadedDrilldown.items.find(<T, K extends keyof T>(item: T) => {
		const thisItem = item[loadedDrilldown.drilldownKey as K];
		let propsItem = {};

		if (rawItem) {
			propsItem = rawItem[loadedDrilldown.drilldownKey];
		}

		return thisItem === propsItem;
	}) as LoadedDrilldown;

	settings = useMergeDeep(
		loadedDrilldown,
		drilldownItem[loadedDrilldown.itemChildrenKey] as LoadedDrilldown,
	) as LoadedDrilldown;

	// Hide expand icon if this is the last drilldown level //
	if (levels === level) {
		settings.showExpand = false;
	}

	return settings;
}
