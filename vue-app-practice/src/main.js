import { createApp } from 'vue'
import App from './App.vue'
import FormComp from './components/FormComp.vue'
import router from './router/router'
import axios from 'axios'


const app=createApp(App);


app.use(router);
app.use(axios)

app.component("FormComp",FormComp);


app.mount('#app');
