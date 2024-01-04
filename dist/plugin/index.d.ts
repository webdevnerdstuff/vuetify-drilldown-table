import { App } from 'vue';
import type { Props } from './types';
import VDrilldownTable from './VDrilldownTable.vue';
export declare const globalOptions: unique symbol;
export declare function createVDrilldownTable(options?: Partial<Props>): {
    install: (app: App) => void;
};
export default VDrilldownTable;
export { VDrilldownTable, };
