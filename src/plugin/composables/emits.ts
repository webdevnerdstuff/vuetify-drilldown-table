/* eslint-disable no-unused-vars */
import {
	EmitUpdatedExpanded,
} from '@/types';


// -------------------------------------------------- VDrilldownTable //
export const useEmitUpdatedExpanded: EmitUpdatedExpanded = (emit, data, drilldownData) => {
	if (data.isExpanded(data.item)) {
		emit('update:drilldown', drilldownData);
	}

	// const emitData = {
	// 	columns: data.columns,
	// 	index: data.index,
	// 	isExpanded: data.isExpanded,
	// 	item: data.item,
	// 	level: data.level,
	// 	toggleExpand: data.toggleExpand,
	// };

	emit('update:expanded', data);
};
