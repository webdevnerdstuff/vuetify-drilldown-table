import { App, Plugin } from 'vue';
import {
	VDrilldownTable,
	VDrilldownServerTable,
} from './plugin';

const install = (app: App) => {
	app.component('VDrilldownTable', VDrilldownTable);
	app.component('VDrilldownServerTable', VDrilldownServerTable);
};

VDrilldownTable.install = install;
VDrilldownServerTable.install = install;

export default VDrilldownTable as unknown as Plugin;
