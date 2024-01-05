import { UseEmitUpdatedExpanded } from '@/plugin/types';


// -------------------------------------------------- VDrilldownTable //
export const useEmitUpdatedExpanded: UseEmitUpdatedExpanded = (options) => {
	const { data, drilldownData, emit } = options;

	if (data.isExpanded(data.internalItem)) {
		emit('update:drilldown', drilldownData);
	}

	emit('update:expanded', data.item);
};
