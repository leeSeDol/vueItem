<template>
    <div class="">
        多页面显示同一个state数据：{{ $store.state.count }}
    	<button @click="increment">异步+5</button>
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
    		// 使用actions异步提交mutations来修改state
    		this.$store.dispatch('incrementAsyncWithValue',5);
    	}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
