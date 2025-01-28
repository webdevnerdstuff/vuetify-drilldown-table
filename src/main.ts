import '@/libraries/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VCodeBlock from '@wdns/vue-code-block';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import { createVDrilldownTable } from './plugin/index';
import { registerPlugins } from './plugins';
import { makeServer } from './server';

makeServer({ environment: 'demo' });

const app = createApp(App);
app.use(createVDrilldownTable());
app.component('VCodeBlock', VCodeBlock);
app.use(createPinia());
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('FaIcon', FontAwesomeIcon);

registerPlugins(app);

app.mount('#app');
