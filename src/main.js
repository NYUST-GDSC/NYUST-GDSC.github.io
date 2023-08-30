import { createApp } from 'vue'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap'
import { loadFonts } from './plugins/webfontloader';
import '@mdi/font/css/materialdesignicons.css';
import 'aos/dist/aos.css';

import App from './App.vue'
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import AOS from 'aos';
import store from './store';
import i18n from "./plugins/i18n.js";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(VueAxios, axios);
app.use(loadFonts);
app.use(AOS.init());
app.use(i18n);
app.mount('#app');