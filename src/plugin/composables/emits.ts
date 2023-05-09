/* eslint-disable no-unused-vars */

import {
	DrilldownEvent,
	LoadedDrilldown,
} from '@/types';


export function useEmitUpdatedExpanded(
	emit: {
		(e: 'update:drilldown', drilldownData: LoadedDrilldown): void;
		(e: 'update:expanded', data: DrilldownEvent): void;
	},
	data: DrilldownEvent,
	drilldownData: LoadedDrilldown,
): void {
	if (data.isExpanded(data.item)) {
		emit('update:drilldown', drilldownData);
	}

	emit('update:expanded', data);
}
