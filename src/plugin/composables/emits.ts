import { UseEmitUpdatedExpanded } from '@/types';


// -------------------------------------------------- VDrilldownTable //
export const useEmitUpdatedExpanded: UseEmitUpdatedExpanded = (options) => {
	const { data, drilldownData, emit } = options;

	if (data.isExpanded(data.item)) {
		emit('update:drilldown', drilldownData);
	}

	emit('update:expanded', data.item);
};
