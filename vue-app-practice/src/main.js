import { createApp } from 'vue'
import App from './App.vue'
import FormComp from './components/FormComp.vue'
import router from './router/router'



const app=createApp(App);


app.use(router);


app.component("FormComp",FormComp);


app.mount('#app');
