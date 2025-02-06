<template>
    <div>
        <div>Welcome!!</div>
        <input v-model="name">
        <p  >I'm {{ name }}</p>
        <p> I m from child as emit : {{ getEmitInfoParam }}</p>
        <FormComp/>
        <AboutComp :propTitle1="propData1" :propTitle2="propData2" @emitEvent="getEmitInfo"/>
    </div>
</template>

<script>
import AboutComp from './AboutComp.vue';
export default{
    components:{AboutComp},
    data(){
        return {
            name:"",
            propData1:"I m a prop1 from parent",
            propData2:"I m a prop2 from parent",
            getEmitInfoParam:""
        }
    },
    methods:{
        getEmitInfo(info){
            this.getEmitInfoParam=info;
        }
    }
    
}

</script>

<style scoped>

</style>