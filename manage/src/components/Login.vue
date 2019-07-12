<template>
 <div class="login_page">
	  	<transition name="form-fade" mode="in-out">
	  		<section class="form_contianer">
		  		<div class="manage_tip">
		  			<span class="title">个人博客后台管理系统</span>
		  		</div>
		    	<el-form :model="loginForm" :rules="rules" ref="loginForm" class="loginForm">
					<el-form-item prop="username" class="login-item">
					    <span class="fa-tips"><i class="fa fa-user"></i></span>
						<el-input @keyup.enter.native ="submitForm('loginForm')"  class="area" type="text" placeholder="请输入用户名" v-model="loginForm.username" ></el-input>
					</el-form-item>
					<el-form-item prop="password" class="login-item">
					    <span class="fa-tips"><i class="fa fa-lock"></i></span>
						<el-input @keyup.enter.native ="submitForm('loginForm')" class="area" type="password" placeholder="请输入密码" v-model="loginForm.password"></el-input>
					</el-form-item>
					<el-form-item>
				    	<el-button type="primary"  @click="submitForm('loginForm')" class="submit_btn">登陆</el-button>
				  	</el-form-item> 	
					<div class="sanFangArea">
						<p class="title">第三方账号登录</p>
						<ul class="rflex">
							<li>
								<img :src="sanFangImgs.wechat" alt="">
							</li>
							<li>
								<img :src="sanFangImgs.weibo" alt="">
							</li>
							<li>
								<img :src="sanFangImgs.gitHub" alt="">
							</li>
						</ul>
				    </div>
				</el-form>
	  		</section>
	  	</transition>
  	</div>
</template>

<script>
	export default {
	    data(){
			return {
				loginForm: {
					username: '',
					password: ''
				},
				rules: {
					username: [
			            { required: true, message: '请输入用户名', trigger: 'blur' },
						{ min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
			        ],
					password: [
						{ required: true, message: '请输入密码', trigger: 'blur' }
					],
				},
				sanFangImgs:{
					wechat:'',
					weibo:'',
					gitHub:''
				}
			}
		},
		mounted(){
		},
		methods: {
			showMessage(type,message){
                this.$message({
                    type: type,
                    message: message
                });
            },
		    submitForm(loginForm) {
				this.$refs[loginForm].validate((valid) => { //当所有的表单校验通过后valid为true，否则为false
					this.$store.dispatch('asyHandleLogin',{username:this.loginForm.username,password:this.loginForm.password})
					
				});
			}
		}
	}
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.login_page .el-input {
		background-color: transparent !important;
	}
	.el-input__inner {
		background-color: transparent !important;
	}
 .login_page{
		position: absolute;
		width: 100%;
		height: 100%;
		background: url(../assets/images/bg9.jpg) no-repeat center center;
		background-size: 100% 100%;
	}
	.loginForm{
		 background-color: rgba(255,255,255,.2);
		 padding:20px;
		 border-radius:3px;
		 box-shadow: 5px 5px 10px #01144c;	
	}
	.loginForm .fa-tips{
			position: absolute;
			left: 10px;
			z-index: 20;
			color: #FF7C1A;
			font-size: 18px;
			top: 50%;
			transform: translateY(-50%);
		}
	.manage_tip{
		margin-bottom:20px;
	}
 .manage_tip .title{
			font-family: cursive;
			font-weight: bold;
			font-size: 26px;
			color:#fff;
		}
.manage_tip	.logo{
			width:60px;
			height:60px;
		}
	.form_contianer{
		width:370px;
		height:210px;
		position: absolute;
		top: 20%;
        left: 34%;
		padding: 25px;
		border-radius: 5px;
		text-align: center;
	}
	.form_contianer  .submit_btn{
			width: 100%;
			font-size: 16px;
			letter-spacing:20px;
		}
	.tiparea{
		text-align:left;
		font-size: 12px;
		color: #4cbb15;
		
	}
 .tiparea .tip{
			margin-left: 54px;
		}
	.tiparea	.tips{
			color:red;
		}
	
	.form-fade-enter-active, .form-fade-leave-active {
	  	transition: all 1s;
	}
	.form-fade-enter, .form-fade-leave-active {
	  	transform: translate3d(0, -50px, 0);
	  	opacity: 0;
	}

	.loginForm	.el-button--primary{
			background-color:#FF7C1A;
			border:1px solid #FF7C1A;
		}

	.sanFangArea{
		border-top: 1px solid #DCDFE6;
		margin-top: 5px;
		padding: 5px;
		display: none;
	}
  .title{
			font-size: 14px;
			color: #8b9196;
		}
.sanFangArea ul li{
				flex:1;
				display: flex;
				align-items: center;
				justify-content: center;
				cursor: pointer;
}
	.sanFangArea ul  img{
					width:40px;
					height:40px;
}
			
			

</style>
