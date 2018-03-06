<!-- 第一部分 -->

<template>
    <div class="hello">
        <ul>
            <li v-for="item in this.task">{{item.albumname}},{{item.singername}}</li>
        </ul>
        <div class="box" ref="box">
            
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            task: [],
            template: ''
        }
    },
    mounted() {
        this.$nextTick(function() {
            this.fire(true);

            this.axiosTest();

            this.templateStringTest();

            this.defaultArg();

            let nums = [1,2,3,4,5,6];
            let total = 0;
            total = this.sum(...nums);
            console.log(total);
        });
    },
    methods: {
        fire(bool) {
            if (bool) {
                //let定义的变量不存在变量提升，只在代码块内有效
                let foo = "bar";
                console.log(foo);
            }
            //在这里会报错，但是若把let改为var则由于变量提升，不会报错。
            //console.log(foo);
        },
        axiosTest() {
            //axios与箭头函数测试
            //let that = this;

            /*this.$http.get('http://route.showapi.com/213-1').then(function(res){
                console.log(res.data);
            });*/

            /*axios.get('https://route.showapi.com/213-1?keyword=海阔天空&page=1&showapi_appid=58249&showapi_test_draft=false&showapi_timestamp=20180306170935&showapi_sign=67d717741e899a50042c53bef1892808').then(function(res) {
                console.log(res.data);
                that.task = res.data.showapi_res_body.pagebean.contentlist;
            });*/


            /*axios.get('https://route.showapi.com/213-1?keyword=海阔天空&page=1&showapi_appid=58249&showapi_test_draft=false&showapi_timestamp=20180306174644&showapi_sign=d5a030db2a2cd9523e51606801723dcf').then(res => {
                this.task = res.data.showapi_res_body.pagebean.contentlist;
            });*/


            //当箭头函数有多个参数时，例:(x,y) => x+y
            //当箭头函数只有一个参数时，可省略括号，例：res => this.task = res.data;
            //当箭头函数没有参数时，例：() => x+y
        },
        templateStringTest() {
            let name = "jack";
            let age = 23;
            let template = `<div class="container">
                                <p>${name} is {100 + ${age}}</p>
                            </div>`.trim();
            console.log(template);
            this.template = template;
            //创建一个div并且吧template加进去
            let div = document.createElement('div');
            div.innerHTML = template;
            console.log(div);
            this.$refs.box.innerHTML = div.innerHTML;
        },
        defaultArg( price = 25 , message = 'msg'){
            console.log(price,message);
        },
        sum(...num){
            //  num 即为参数构成的数组
            let total = 0;

            for(let i=0;i<num.length;i++){
                console.log(num[i]);
            }

            return num.reduce( (preval , curval) => {
                return preval + curval;
            });
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
}
ul{
    width:300px;
}
li{
    width:100%;
    text-align: left;
}
</style>
