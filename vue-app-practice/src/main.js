import { createApp } from 'vue'
import App from './App.vue'
import FormComp from './components/FormComp.vue'



const app=createApp(App);

app.mount('#app');

app.component("FormComp",FormComp);



