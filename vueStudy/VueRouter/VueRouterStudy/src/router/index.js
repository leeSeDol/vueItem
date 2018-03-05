import Vue from 'vue'
import Router from 'vue-router'
import page01 from './../components/page01'
import page02 from './../components/page02'
import page03 from './../components/page03'
import page04 from './../components/page04'
import page05 from './../components/page05'

import child01 from './../components/childs/child01'
import child02 from './../components/childs/child02'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'Page01',
		component: page01
	}, {
		path: '/02/:id',
		name: 'Page02',
		component: page02
	}, {
		path: '/03/:sex',
		name: 'Page03',
		component: page03
	}, {
		path: '/04',
		name: 'Page04',
		component: page04,
		children: [{
			name: 'child01',
			path: '/',
			component: child01
		}, {
			name: 'child02',
			path: '/c02',
			component: child02
		}]
	}, {
		path: '/05/:txt',
		name: 'Page05',
		component: page05
	}]
})