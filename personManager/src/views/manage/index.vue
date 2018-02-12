<template>
	<div class="manage tc">
		<button class="add" @click="add">新增</button>
		<div class="input-area" v-show="showAdd">
			<input type="text" name="" placeholder="请输入人员姓名" v-model="nameValue">
			<button @click="addName">确定</button>
		</div>
		<table>
			<tr>
				<th>姓名</th>
				<th>操作</th>
			</tr>
			<tr v-for="(item,index) in peoples">
				<td>{{item.name}}</td>
				<td :id="index"><span @click="edit">编辑</span> <span @click="del">删除</span></td>
			</tr>
		</table>
		<div class="wrap" v-show="showEdit">
			<div class="content">
				<input type="text" placeholder="请输入新姓名" v-model="newName">
				<button class="cancel" @click="cancel">取消</button>
				<button class="edit" @click="editName">确定</button>
			</div>
		</div>
		<footer-nav :class="{'isManage':isNowPage}"></footer-nav>
	</div>
</template>

<script>
import FooterNav from '../../components/footer.vue'
export default {
	components: {
		FooterNav
	},
	data() {
		return {
			isNowPage: true,
			showAdd: false,
			showEdit: false,
			peoples: [{
				'name': 'Jack'
			}, {
				'name': 'Joe'
			}],
			nameValue: '',
			newName: '',
			editId: 0
		}
	},
	methods: {
		add() {
			this.showAdd = true;
		},
		addName() {
			var value = this.nameValue;
			if (value.trim() == "") {
				alert("请输入新增人员姓名");
			} else {
				var data = {};
				data.name = value;
				this.peoples.push(data);
				this.nameValue = '';
			}
		},
		del(e) {
			var id = e.target.offsetParent.id;
			this.peoples.splice(id, 1);
		},
		edit(e) {
			var id = e.target.offsetParent.id;
			this.showEdit = true;
			this.editId = id;
			console.log(id);
			this.newName = this.peoples[id].name;
		},
		cancel() {
			this.showEdit = false;
		},
		editName() {
			var value = this.newName;
			if (value.trim() == "") {
				alert("请输入姓名");
			} else {
				this.peoples[this.editId].name = value;
				this.showEdit = false;
			}
		}
	}
}
</script>
<style scoped lang="less">
*{
	font-size: 0.85rem;
}
.add{
	width:60%;
	height:2rem;
	border-radius:10px;
	font-size: 0.85rem;
	color: #fff;
	border:none;
	background-color: #3fb984;
}
.input-area{
	width:80%;
	margin:0 auto;
	margin-top: 1rem;
	input{
		width:70%;
		border:1px solid #ccc;
		height:2rem;
		font-size: 0.85rem;
		padding-left: 10px;
	}
	button{
		width:20%;
		height:2rem;
		transform:translateY(1px);
		border:none;
		border-radius:5px;
		color: #fff;
		background-color: #3fb984;
	}
}
table{
	width:100%;
	margin-top: 1rem;
	tr{
		width:100%;
		th{
			width:50%;
		}
		td{
			width:50%;
		}
	}
	
}
.wrap{
	width:100%;
	height:100%;
	position: fixed;
	top:0;
	left:0;
	background-color:rgba(0,0,0,0.8);
	z-index:100;
	.content{
		width:80%;
		opacity: 1;
		position: absolute;
		top:43%;
		left:50%;
		margin-left:-40%;
		input{
			width:100%;
			height:2.5rem;
			line-height: 2.5rem;
			padding-left:0.5rem;
			box-sizing:border-box;
			//border:none;
		}
		button{
			margin-top:10px;
			width:49%;
			height:2rem;
			border-radius:5px;
			background-color: #3fb984;
			color:#fff;
			border:none;
		}
	}
}
</style>