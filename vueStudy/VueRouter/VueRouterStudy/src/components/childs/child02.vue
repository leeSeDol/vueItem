<template>
    <div>
        <h1>child02</h1>
        <button @click="back">back</button>
        <router-link :to="{ name:'Page03' , params:{ sex:'female' } }">03</router-link>
    </div>
</template>
<script>
    export default{
        methods:{
            back(){
                this.$router.go(-1);
            }
        }
    }
</script>