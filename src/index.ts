import { App, Plugin } from 'vue';
import { VDrilldownTable } from './plugin';
import './plugin/styles/main.scss';

const install = (app: App) => {
	app.component('VDrilldownTable', VDrilldownTable);
};

VDrilldownTable.install = install;

export default VDrilldownTable as unknown as Plugin;
