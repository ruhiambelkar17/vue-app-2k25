<template>
    <div>
        <h1>About</h1>
        <p><b>Prop from parent is:</b> {{ propTitle1 }} {{ propTitle2 }}</p>
        <p><b>provide from parent is :</b> {{ provideMsg }}</p>
        <button @click="submitEmit">Emit</button>
       
    </div>
</template>

<script>
export default {
    props:{propTitle1:String,
        propTitle2:Number},
    inject:['provideMsg'],
    data() 
        {
        return {
            info:""
        }
    },
    methods: {
        submitEmit(){
            this.info="I m emit from child";
            this.$emit('emitEvent',this.info)
        }
    }

}
</script>