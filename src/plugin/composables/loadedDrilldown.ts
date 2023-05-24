import { DataTableItem, Props } from '@/types';
import { useMergeDeep } from './helpers';


export function useSetLoadedDrilldown(
	loadedDrilldown: Props,
	drilldown: object,
	rawItem: DataTableItem['raw'],
	level: number,
	levels: number,
): Props {
	let settings = loadedDrilldown;

	settings = useMergeDeep(loadedDrilldown, drilldown) as Props;
	const items = loadedDrilldown.items as Props['items'] || [{}];

	const drilldownItem = items.find(<T, K extends keyof T>(item: T) => {
		const thisItem = item[loadedDrilldown.drilldownKey as K];
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
}
