import '@/libraries/fontawesome';
import App from './App.vue';
import CodeBlock from '@wdns/vue-code-block';
import { createVDrilldownTable } from './plugin/index';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { makeServer } from './server';
import { registerPlugins } from './plugins';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

makeServer({ environment: 'demo' });

const app = createApp(App);
app.use(createVDrilldownTable());
app.component('CodeBlock', CodeBlock);
app.use(createPinia());
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('FaIcon', FontAwesomeIcon);

registerPlugins(app);

app.mount('#app');
