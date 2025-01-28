import type { PluginOptions } from './types';
import type { App, Plugin } from 'vue';
import './styles/main.scss';
import { useDeepMerge } from './composables/helpers';
import { pluginOptionsInjectionKey } from './data/globals';
import { AllProps } from './data/props';
import VDrilldownTable from './VDrilldownTable.vue';


export const globalOptions = Symbol();

export function createVDrilldownTable(options: PluginOptions = {}): Plugin {
	const install = (app: App) => {
		const pluginOptions: PluginOptions = useDeepMerge(options, AllProps);

		app.provide(pluginOptionsInjectionKey, pluginOptions);

		// eslint-disable-next-line no-param-reassign
		app.config.idPrefix = 'vdt';

		app.component('VDrilldownTable', defineAsyncComponent(() => import('./VDrilldownTable.vue')));
	};

	return {
		install,
	} as Plugin;
}

export default VDrilldownTable;

export {
	VDrilldownTable,
};
