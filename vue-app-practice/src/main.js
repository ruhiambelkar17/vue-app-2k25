import { createApp } from 'vue'
import App from './App.vue'
import FormComp from './components/FormComp.vue'
import router from './router/router'
import Store from './store/Index'



const app=createApp(App);
app.use(router);


app.use(Store);


app.component("FormComp",FormComp);


app.mount('#app');
