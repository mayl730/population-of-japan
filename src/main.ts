import { createApp } from 'vue'
import { createPinia } from 'pinia'
import HighchartsVue from "highcharts-vue";

import './style.css'
import App from './App.vue'

const store = createPinia()
const app = createApp(App)

// TODO: fix type error problem
// @ts-ignore
app.use(HighchartsVue);

app.use(store).mount('#app');
