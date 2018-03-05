<template>
    <div>
        <h1>page05</h1>
        <h3>测试传入多个参数</h3>
        <h3>{{ $route.query.name }}</h3>
        <h3>{{ $route.query.type }}</h3>
    </div>
</template>
<script>
    export default{
        mounted(){
            console.log(this.$route);
        }
    }    
</script>