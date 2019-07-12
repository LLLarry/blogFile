<template>
    <div class="navDiv">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.navDiv {

    height: 45px;
    line-height: 45px;
    padding: 0 20px;     
}
.el-breadcrumb {
    height: 100%;
    line-height: 45px;
}
</style>


