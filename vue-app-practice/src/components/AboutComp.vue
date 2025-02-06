<template>
    <div>
        <h1>About</h1>
        <p>Prop from parent is: {{ propTitle1 }} {{ propTitle2 }}</p>
        <button @click="submitEmit">Emit</button>
    </div>
</template>

<script>
export default {
    props:{propTitle1:String,
        propTitle2:Number},

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