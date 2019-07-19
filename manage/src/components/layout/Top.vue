<template>
    <header class="topDiv">
      <h1>个人博客后台管理系统</h1>
      <div class="rightInfo">
          <span>
            <img src="../../assets/images/avatar.png" alt="头像">
          </span>
         <span class="spanP">
             <p class="top">欢迎</p>
             <p class="userName">{{userInfo.userName}}</p>
         </span>
         <el-dropdown  class="slideSpan" >
            <span class="el-dropdown-link">
                <i class="el-icon-caret-bottom"></i>
            </span>
            <el-dropdown-menu slot="dropdown"  >
                <span ><el-dropdown-item>修改信息</el-dropdown-item></span>
                <span><el-dropdown-item>修改密码</el-dropdown-item></span>
                <span @click="handleLogoutCopy1"><el-dropdown-item >退出</el-dropdown-item></span>
            </el-dropdown-menu>
        </el-dropdown>
         <span @click="handleLogout"><i class="iconfont icon-tuichu" style="font-size: 15px;"></i></span>
      </div>
    </header>
</template>

<script>
export default {
    data(){
        return {
            show: false,
            userInfo: {}
        }
    },
    created(){
        this.userInfo= {
            userName: this.$store.state.userInfo.userName,
            classify: this.$store.state.userInfo.classify
        }
    },
    methods: {
        handleLogoutCopy1(){
           
        },
        handleLogout(){
            // 置空vuex中的数据，并发送请求
            clearInterval(this.$store.timer) //清理刷新开启的定时器
            this.$store.commit('logOut')
            this.$router.push({path: '/login'})
        }
    }
}
</script>

<style scoped>
.topDiv {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 60px;
    background-color: pink;
    background: url(../../assets/images/topbg.png);
    z-index: 9;
}
.topDiv h1{
    display: inline-block;
    vertical-align: middle;
    font-size: 22px;
    font-family: cursive;
    letter-spacing: 3px;
    line-height: 60px;
    color: #fff;
}
.rightInfo {
    height: 60px;
    float: right;
    /* min-width: 400px; */
    color: #fff;
}
.rightInfo img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    vertical-align: middle;
}
.rightInfo span  {
    float: left;
    height: 60px;
    line-height: 60px;
    padding: 0 10px;
}

.rightInfo .spanP {
  text-align: center;
  line-height: 20px;
  padding-top: 10px;
  font-size: 12px;
}
.rightInfo .spanP .userName{
    font-weight: 600;
    color: #a9d86e;
    font-size: 16px;
}
.rightInfo span i {
    font-size: 18px;
}
.slideSpan {
    position: relative;
    -moz-user-select:none;
    float: left;
    height: 60px;
    line-height: 60px;
    padding: 0 10px;
    color: #fff;
}
</style> 
