<template>
    <div>
        <div>Welcome!!</div>
        <input v-model="name">
        <p  >I'm {{ name }}</p>
        <p> <b>I m from child as emit :</b> {{ getEmitInfoParam }}</p>
        <p><b>Below data is from async comp:</b></p>
        <AsyncChildComp/>
        <FormComp/> 
        <p><b>Below comp is loaded using dynamic comp:</b></p>
        <component :is="cmpNm" />
        <AboutComp  :propTitle1="propData1" :propTitle2="propData2" @emitEvent="getEmitInfo"/>
        <p><b>Mixins:</b></p>
        <button @click="incCounter">Counter</button>
        <p>Count is: {{ count }}</p>

    </div>
</template>

<script>
import AboutComp from './AboutComp.vue';
import DynamicChildComp from './DynamicChildComp.vue';
import { defineAsyncComponent } from 'vue';
import counter from '../mixins/counter';
export default{
    components:{AboutComp,DynamicChildComp,
        AsyncChildComp:defineAsyncComponent(()=> import('./AsyncChildComp.vue'))
    },
    mixins:[counter],
    data(){
        return {
            name:"",
            propData1:"I m a prop1 from parent",
            propData2:"I m a prop2 from parent",
            getEmitInfoParam:"",
            providePram:"I m provide frpm parent",
            cmpNm:"DynamicChildComp1",
            count:100
        }
    },
    methods:{
        getEmitInfo(info){
            this.getEmitInfoParam=info;
        }
    },
    provide(){
        return {
            provideMsg:this.providePram,
        }
    }
    
}

</script>

<style scoped>

</style>