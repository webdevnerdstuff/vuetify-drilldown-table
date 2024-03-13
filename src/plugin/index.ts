import { defineAsyncComponent } from 'vue';
import type { App } from 'vue';
import type { GlobalOptions } from './types';
import './styles/main.scss';
import VDrilldownTable from './VDrilldownTable.vue';


export const globalOptions = Symbol();

export function createVDrilldownTable(options: GlobalOptions = {}) {
	const install = (app: App) => {
		app.provide(globalOptions, options);

		app.component('VDrilldownTable', defineAsyncComponent(() => import('./VDrilldownTable.vue')));
	};

	return {
		install,
	};
}

export default VDrilldownTable;

export {
	VDrilldownTable,
};
