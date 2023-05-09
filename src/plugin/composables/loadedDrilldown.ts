
import { DataTableItem, InternalItem, LoadedDrilldown } from '@/types';
import { useMergeDeep } from './helpers';
import { toReactive } from '@vueuse/core';


export function useSetLoadedDrilldown(
	loadedDrilldown: LoadedDrilldown,
	props: { [key: string]: unknown; },
): LoadedDrilldown {
	const { drilldown } = toReactive(props);
	let settings: LoadedDrilldown = loadedDrilldown;

	if (drilldown) {
		const { item: propItem, level, levels } = toReactive(props);
		const rawItem = JSON.parse(JSON.stringify(propItem)) as DataTableItem;

		settings = useMergeDeep(loadedDrilldown, drilldown) as LoadedDrilldown;

		const drilldownItem = loadedDrilldown.items.find(<T, K extends keyof T>(item: T) => {
			const thisItem = item[loadedDrilldown.drilldownKey as K];
			let propsItem = {};

			if (rawItem.raw) {
				propsItem = rawItem.raw[loadedDrilldown.drilldownKey] as InternalItem;
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

	return useMergeDeep(settings, props) as LoadedDrilldown;
}
