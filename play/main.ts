import { createApp } from 'vue';
import App from './app.vue';
import trustui from '@trustui/components';
const app = createApp(App);
app.use(trustui);
app.mount('#app');
