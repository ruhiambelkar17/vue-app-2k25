import { createApp } from 'vue'
import App from './App.vue'
import FormComp from './components/FormComp.vue'
import router from './router/router'
import Store from './store/Index'
//import {piniaStore} from './piniaStore'

import {createPinia} from 'pinia'

const pinia=createPinia();


const app=createApp(App);
app.use(router);


app.use(Store);
app.use(pinia);


app.component("FormComp",FormComp);


app.mount('#app');
