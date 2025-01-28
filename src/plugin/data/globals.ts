import type { InjectionKey } from 'vue';

export const componentName = 'v-drilldown-table';

export const globalOptions = {
	debug: false,
};


export const pluginOptionsInjectionKey: InjectionKey<PluginOptions> = Symbol();
