import App from './App.vue';
import CodeBlock from 'vue3-code-block';
import VDrilldownTable from './index';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { registerPlugins } from './plugins';

const app = createApp(App);
app.use(VDrilldownTable);
app.use(CodeBlock);
app.use(createPinia());

registerPlugins(app);

app.mount('#app');
