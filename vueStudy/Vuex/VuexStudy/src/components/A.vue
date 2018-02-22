<template>
    <div class="">
        多页面显示同一个state数据： {{ $store.state.count }}
        <button @click="increment">同步+1</button>
    </div>
</template>

<script>
export default {
    name: '',
    data() {
        return {

        }
    },
    methods:{
    	increment(){
    		// 使用mutations同步修改state
    		this.$store.commit('increment');
    	}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
