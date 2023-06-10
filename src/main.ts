import '@/libraries/fontawesome';
import App from './App.vue';
import CodeBlock from 'vue3-code-block';
import VDrilldownTable from './index';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { makeServer } from './server';
import { registerPlugins } from './plugins';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

makeServer({ environment: 'demo' });

const app = createApp(App);
app.use(VDrilldownTable);
app.use(CodeBlock);
app.use(createPinia());
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('FaIcon', FontAwesomeIcon);

registerPlugins(app);

app.mount('#app');
