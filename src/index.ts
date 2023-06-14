import { App, Plugin } from 'vue';
import { VDrilldownTable } from './plugin';

const install = (app: App) => {
	app.component('VDrilldownTable', VDrilldownTable);
};

VDrilldownTable.install = install;

export default VDrilldownTable as unknown as Plugin;
