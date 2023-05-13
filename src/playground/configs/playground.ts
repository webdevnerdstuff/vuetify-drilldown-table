import '@/Libraries/fontawesome';
import PlaygroundApp from './PlaygroundApp.vue';
import VDrilldownTable from '../../index';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { registerPlugins } from '../../plugins';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { makeServer } from '../../server';

makeServer();

const app = createApp(PlaygroundApp);
app.use(VDrilldownTable);
app.use(createPinia());
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('FaIcon', FontAwesomeIcon);

registerPlugins(app);

app.mount('#app');
