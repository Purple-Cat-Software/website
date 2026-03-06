import { registerPlugins } from '@/plugins'
import App from './App.vue'
import { createApp } from 'vue'
import { router } from "@/router/Router.ts";
import 'unfonts.css'
import '@/assets/style.css';

//https://v3.vuetifyjs.com/en/features/internationalization/#supported-languages
const app = createApp(App)
  .use(router);

registerPlugins(app)

app.mount('#app')
