import Vue from 'vue'
import Router from 'vue-router'


import Index from '../views/index/index.vue'
import Manage from '../views/manage/index.vue'
Vue.use(Router)

export default new Router({
	routes: [
		/*{
		  path: '/',
		  name: 'HelloWorld',
		  component: HelloWorld
		}*/
		{
			path: '/',
			name: 'Index',
			component: Index
		}, {
			path: '/manage',
			name: 'Manage',
			component: Manage
		}
	]
})