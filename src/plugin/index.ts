import type { App } from 'vue';
import type { GlobalOptions } from './types';
import './styles/main.scss';
import VDrilldownTable from './VDrilldownTable.vue';


export const globalOptions = Symbol();

export function createVDrilldownTable(options: GlobalOptions = {}) {
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
