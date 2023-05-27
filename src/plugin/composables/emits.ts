/* eslint-disable no-unused-vars */
import {
	EmitUpdatedExpanded,
} from '@/types';


// -------------------------------------------------- VDrilldownTable //
export const useEmitUpdatedExpanded: EmitUpdatedExpanded = (emit, data, drilldownData) => {
	if (data.isExpanded(data.item)) {
		emit('update:drilldown', drilldownData);
	}

	emit('update:expanded', data);
};
