import {defineStore} from "pinia";

export   const piniaStore=defineStore({
    id:'piniaCounter',
    state:()=>{
        return {
            piniaCount:0,
        }
    },
    actions:{
        incPiniaCount(){
            this.piniaCount +=1;
        }
    },
    getters:{
        doublePiniaCount(){
            this.piniaCount *2;
        }
    }
})