
import { App } from 'vue';
import './styles/main.scss';
import type { Props } from './types';
import VDrilldownTable from './VDrilldownTable.vue';


export const globalOptions = Symbol();

export function createVDrilldownTable(options: Omit<Props,
	'colors' | 'columnWidths' | 'drilldown' | 'isDrilldown' | 'item' | 'tableType'
> = {}) {
	const install = (app: App) => {
		app.provide(globalOptions, options);

		app.component('VDrilldownTable', VDrilldownTable);
	};

	return {
		install,
	};
}

export default VDrilldownTable;

export {
	VDrilldownTable,
};
