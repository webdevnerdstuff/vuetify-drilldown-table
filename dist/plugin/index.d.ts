import type { App } from 'vue';
import type { GlobalOptions } from './types';
import VDrilldownTable from './VDrilldownTable.vue';
export declare const globalOptions: unique symbol;
export declare function createVDrilldownTable(options?: GlobalOptions): {
    install: (app: App) => void;
};
export default VDrilldownTable;
export { VDrilldownTable, };
