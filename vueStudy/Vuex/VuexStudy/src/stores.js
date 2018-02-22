export default {
    // 存储状态值
    state: {
        count: 0
    },
    // 状态值的改变方法,操作状态值
    // 提交mutations是更改Vuex状态的唯一方法
    mutations: {
        //修改state，第一个参数就是state
        increment(state) {
            state.count++;
        },
        add(state, n) {
            state.count += n;
        }
    },
    // 在store中定义getters（可以认为是store的计算属性）。Getters接收state作为其第一个函数
    getters: {
        done(state) {
            return state.count + 5;
        }
    },
    actions: {
        // 这里使用context来提交mutations
        increment(context){
            context.commit('increment');
        },
        incrementAsync(context){
            setTimeout( () => {
                context.commit('increment');
            } );
        },
        incrementAsyncWithValue(context , value){
            setTimeout( () => {
                context.commit('add' , value);
            } , 1000);
        }
    }
}