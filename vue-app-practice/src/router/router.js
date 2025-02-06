
import { createRouter, createWebHistory } from "vue-router";

const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:"/",
            name:'HomeComp',
            component:()=>import('../components/HomeComp.vue')

        },
        {
            path:"/About",
            name:'AboutComp',
            component:()=>import('../components/AboutComp.vue')
        }
    ]
})

export default router;