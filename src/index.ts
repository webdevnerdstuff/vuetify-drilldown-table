import { App, Plugin } from 'vue';
import VDrilldownTableComponent from './plugin';

const install = (app: App) => {
	app.component('VDrilldownTable', VDrilldownTableComponent);
};

VDrilldownTableComponent.install = install;


export const VDrilldownTable = VDrilldownTableComponent;

export default VDrilldownTableComponent as unknown as Plugin;
