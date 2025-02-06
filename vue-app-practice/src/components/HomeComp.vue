<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <router-link to="/About"><a class="nav-link" href="#">About</a></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Contact"><a class="nav-link" href="#">Contact</a></router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div>Welcome!!</div>
    <input v-model="name" />
    <p>I'm {{ name }}</p>
    <p><b>I m from child as emit :</b> {{ getEmitInfoParam }}</p>
    <p><b>Below data is from async comp:</b></p>
    <AsyncChildComp />
    <FormComp />
    <p><b>Below comp is loaded using dynamic comp:</b></p>
    <component :is="cmpNm" />
    <AboutComp
      :propTitle1="propData1"
      :propTitle2="propData2"
      @emitEvent="getEmitInfo"
    />
    <p><b>Mixins:</b></p>
    <button @click="incCounter">Counter</button>
    <p>Count is: {{ count }}</p>
    <p><b>Computed property:</b></p>
    <p>{{ fullName }}</p>
    <p><b>Watcher:</b></p>
    <input v-model="name" />
    <p>I'm {{ fullNm }}</p>
    <p><b>Api Integration:</b></p>
    <button @click="getApiData"> Get Api Data</button>
    {{ apiData }}
    <button @click="postApiData"> Post Api Data</button>
    <button @click="updateApiData(14)"> Update Api Data</button>
    <button @click="deleteApiData(1)"> Delete Api Data</button>

  </div>
</template>

<script>
import AboutComp from "./AboutComp.vue";
import DynamicChildComp from "./DynamicChildComp.vue";
import { defineAsyncComponent } from "vue";
import counter from "../mixins/counter";
import axios from "axios";

export default {
  components: {
    AboutComp,
    DynamicChildComp,
    AsyncChildComp: defineAsyncComponent(() => import("./AsyncChildComp.vue")),
  },
  mixins: [counter],
  name:'HomeComp',
  data() {
    return {
      name: "",
      propData1: "I m a prop1 from parent",
      propData2: "I m a prop2 from parent",
      getEmitInfoParam: "",
      providePram: "I m provide frpm parent",
      cmpNm: "DynamicChildComp1",
      count: 100,
      fName: "Abc",
      lName: "Xyz",
      fullNm: "",
      apiData:[]
    };
  },
  methods: {
    getEmitInfo(info) {
      this.getEmitInfoParam = info;
    },
    async getApiData(){
        this.apiData = await axios.get('http://localhost:1337/api/employees')
    },
    async postApiData(){
        this.apiData = await axios.post('http://localhost:1337/api/employees',{
            data:{
                empId:2001,
                empName:"ruhi",
                empEmail:"ruhi@gmail.com"
            }
        })
    },
    async updateApiData(id){
        this.apiData = await axios.put(`http://localhost:1337/api/employees/${id}`,{
            data:{
                empName:"Ivan"
            }
        })
    },
    async deleteApiData(id){
        this.apiData = await axios.delete(`http://localhost:1337/api/employees/${id}`)
    },
  },
  provide() {
    return {
      provideMsg: this.providePram,
    };
  },
  computed: {
    fullName() {
      return this.fName + this.lName;
    },
  },
  watch: {
    name() {
      this.fullNm = this.name + this.lName;
    },
  },
};
</script>

<style scoped></style>
