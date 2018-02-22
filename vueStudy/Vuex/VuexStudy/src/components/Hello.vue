<template>
    <div class="">
        获取state：{{ $store.state.count }} {{ getState }}
        <br>
        获取getter：{{ $store.getters.done }} {{ getGetter }}
        <br>
        提交mutations increment:
        <button @click="increment()">+1</button>
        <br>
        提交mutations add:
        <button @click="add(5)">+5</button>
    </div>
</template>

<script>
export default {
	name: '',
	computed: {
		//代码获取state
		getState() {
			return this.$store.state.count;
		},
		getGetter() {
			return this.$store.getters.done;
		}
	},
	data() {
		return {

		}
	},
	methods: {
		increment() {
			//逻辑为state.count++;
			this.$store.commit('increment');
		},
		add(n){
			//逻辑为 state.count += n;
			this.$store.commit('add',n);
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
