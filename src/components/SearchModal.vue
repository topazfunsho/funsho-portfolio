<template>
<div class="modal">
    <div class="search-modal">
       <div class="container">
        <div><i @click="closeModal"><X :size="70" /></i></div>
         <form @submit.prevent="handleSearch">
            <input type="text" v-model="search">
            <button @click="handleSearch" class="desktop-search-button">
                search
            </button>
        </form>
       </div>
    </div>
    <div v-if="search" class="list">
        <p v-for="name in matchingNames" :key="name">{{name}}</p>
    </div>
    
    <!-- <p class="list">{{search}}</p> -->
</div>
  
</template>

<script>
import { X } from "lucide-vue-next";
import { ref, computed } from "vue";
export default {
    name: 'SearchModal',
    components: { X,},
    data(){
        const search = ref('')
        const names = ref(['tuniss', 'john', 'james', 'mary', 'sarah', 'matthew', 'bola'])

      const matchingNames = computed(()=>{
        return names.value.filter((name) => name.includes(search.value))
      })
      return{
        search,
        matchingNames,
        names,
      }
    },
    methods:{
        handleSearch(){

        },
        closeModal(){
            this.$emit('close')
        },
    }
}
</script>

<style>
    .modal{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background: rgba(51, 51, 51, 0.5);
        backdrop-filter: blur(4px);
    }
    .container{
        width: 100%;
        height: auto;
        text-align: center;
    }
    .container i{
        color: #fff;
    }
    form{
        justify-self: center;
    }
    .search-modal, form{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .search-modal{

        position: relative;
    }
    .list{
        background: #fff;
        color: red;
        position: absolute;
        top: 65%;
        left: 25%;
        padding: 0 50px;
        width: 35%;
        height: auto;
        overflow: hidden;
        scroll-behavior: smooth;
        border-radius: 20px;
        cursor: pointer;
    }
    form{
        width: 60%;
        margin-top: 30px;
    }
    input{
        padding: 20px;
        border-radius: 50px;
        width: 70%;
        outline: none;
        border: none;
        margin-right: -20px;
        font-size: 20px;
        color: #50C878;
    }
    .desktop-search-button{
        padding: 20px 50px;
        font-size: 20px;
        border-radius: 50px;
        mask: radial-gradient(circle 38px at 0% , transparent 98%, black 100%);
        cursor: pointer;
        background: #50C878;
        color: #fff;
        letter-spacing: 1px;
        font-weight: 400;
        text-transform: capitalize;
    }
    button:hover{
        background: #009a33;
    }
</style>