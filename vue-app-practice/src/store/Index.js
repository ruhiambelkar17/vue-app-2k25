import {createStore} from 'vuex';
import axios from "axios";

export default createStore({
    state:{
        count:0
    },
    mutations:{
        incCount(state){
            state.count +=1;
        }
    },
    actions:{
       async getApiInfo({commit}){
           await axios.get("http://localhost:1337/api/employees").then(response => commit('incCount',response.data.data[1].id))
        }
    },
    getters:{
        sqCount(state){
            return state.count *state.count;
        }
    }
})