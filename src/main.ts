import { createApp } from 'vue'
import { createPinia } from 'pinia'
import HighchartsVue from "highcharts-vue";
import Highcharts from "highcharts";
import darkUnica from 'highcharts/themes/dark-unica';

import '@assets/css/reset.css'
import '@assets/css/style.css'
import App from './App.vue'

const store = createPinia()
const app = createApp(App)

darkUnica(Highcharts);
// TODO: fix type error problem
// @ts-ignore
app.use(HighchartsVue);

app.use(store).mount('#app');
