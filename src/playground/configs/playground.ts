import PlaygroundApp from './PlaygroundApp.vue';
import VDrilldownTable from '@/index';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { registerPlugins } from '@/plugins';

const app = createApp(PlaygroundApp);
app.use(VDrilldownTable);
app.use(createPinia());

registerPlugins(app);

app.mount('#app');
