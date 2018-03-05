<template>
    <div class="HelloWorld">
        <h1>用router-link进行跳转</h1>
        <router-link to="/">跳转到page01</router-link>
        <!-- 设置 replace 属性的话，当点击时，会调用 router.replace() 而不是 router.push()，于是导航后不会留下 history 记录。 -->
        <router-link to="/" replace>替换到page01</router-link>
        <!-- index.js中的:id 在这里被设置为123  , page02.vue中的$route.params -->
        <router-link to="/02/123">动态路由跳转到Page02</router-link>
        <router-link :to="{ name:'Page02' , params:{ id:111 } }">动态路由跳转到Page02</router-link>
        <router-link :to="{ name:'Page03' , params:{ sex:'123' } , query:{ name:' hello query ' } }">动态路由跳转到Page03</router-link>
        <router-link to="/04">动态路由跳转到Page04</router-link>
        <router-link :to="{ path:'/05/111' , query:{ name:'query' , type:'object' } }"  replace>动态路由跳转到Page05</router-link>
        <router-link to="/03/1234">
            <button>用button动态跳转到page03</button>
        </router-link>

        <h1>用JS实现跳转</h1>
        <button @click="go01">page01</button>
        <button @click="go02">page02</button>
        <button @click="go03">page03</button>
        <button @click="go04">page04</button>
        <button @click="go05">page05</button>
        <button @click="back">back</button>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {

        }
    },
    watch: {
        '$route' (cur, old) {
            // console.log(this.$route);
            console.log(old, cur);
        }
    },
    methods: {
        go01() {
            this.$router.push({
                path: '/'
            });
        },
        go02() {
            this.$router.push({
                path: '/02/123'
            });
        },
        go03() {
            this.$router.push({
                name: 'Page03',
                params: {sex:'123'},
                query: {name:'hello query'}
            });
        },
        go04() {
            this.$router.push({
                path:'/04'
            });
        },
        go05() {
            this.$router.push({
                path:'/05/111',
                query:{
                    name:'query2',
                    type:'object'
                }
            });
        },
        back() {
            this.$router.go(-1);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
    text-decoration: none;
}
</style>
