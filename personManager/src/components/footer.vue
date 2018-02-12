<template>
	<div class="footer fixed">
		<ul>
			<li>
				<router-link to='/'>首页</router-link>
			</li>
			<li>
				<router-link to="/manage">人员管理</router-link>	
			</li>
			<!-- <li @click="$router.forward('/')">首页</li>
			<li @click="$router.forward('/manage')">人员管理</li> -->
		</ul>
	</div>
</template>

<style scoped lang="less">
.footer{
	width:100%;
	height:50px;
	bottom:0;
}
ul{
	display:flex;
	height:100%;
	line-height: 50px;
	li{
		flex:1;
		color: #41b883;
		background-color: #f1f1f1;
		a{
			width:100%;
			height:100%;
			text-align:center;
			display:inline-block;
		}
	}
}
.isIndex{
	li:first-child{
		background-color: #d3d3d3;
		a{
			
			color:#41b883;
		}
	}
}
.isManage{
	li:last-child{
		background-color: #d3d3d3;
		a{
			
			color:#41b883;
		}
	}
}
</style>