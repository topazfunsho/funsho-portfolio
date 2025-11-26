<template>

    <div class="search-modal">
        <form @submit.prevent="handleSearch">
            <input type="text" v-model="search">
            <button @click="handleSearch">
                search
            </button>
        </form>
    </div>

  
</template>

<script>
export default {
    name: 'SearchModal',
    components: {},
    methods:{
        handleSearch(){

        }
    }
}
</script>

<style>

    .search-modal{
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
    form{
        width: 60%;
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
    button{
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