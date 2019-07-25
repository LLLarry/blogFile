<template>
    <div>
        <div class="leftCom" :style="{width: slideWidth+'px'}">
             <router-link to="/" tag="div" class="firstDiv" @click="handleSlide">
                <span class="iconSpan"><i class="el-icon-s-home"></i></span>
                <span>首页 </span>
                <span class="arrowRight" v-if="false">
                    <i class="el-icon-arrow-right"></i>
                </span>
            </router-link>
            <div class="firstDiv" @click="handleSlide(2)">
                <span class="iconSpan"><i class="el-icon-s-custom"></i></span>
                <span>管理首页 </span>
                <span class="arrowRight">
                    <i class="el-icon-arrow-right"  :class="{'rotate_90' : show2}"></i>
                </span>
            </div>
             <el-collapse-transition>
                <div v-show="show2">
                <router-link to="/home/manageIndex" tag="div" class="transition-box">更换图片</router-link>
                <router-link to="/home/manageIndexText" tag="div" class="transition-box">更换文本</router-link>
                </div>
            </el-collapse-transition>

            <div class="firstDiv" @click="handleSlide(3)">
                <span class="iconSpan"><i class="el-icon-s-custom"></i></span>
                <span>图形统计 </span>
                <span class="arrowRight">
                    <i class="el-icon-arrow-right"  :class="{'rotate_90' : show3}"></i>
                </span>
            </div>
             <el-collapse-transition>
                <div v-show="show3">
                <div class="transition-box">图形统计1</div>
                <div class="transition-box">图形统计2</div>
                </div>
            </el-collapse-transition>

            <div class="firstDiv" @click="handleSlide(4)">
                <span class="iconSpan"><i class="el-icon-s-custom"></i></span>
                <span>图形统计 </span>
                <span class="arrowRight">
                    <i class="el-icon-arrow-right"  :class="{'rotate_90' : show4}"></i>
                </span>
            </div>
             <el-collapse-transition>
                <div v-show="show4">
                <div class="transition-box">图形统计1</div>
                <div class="transition-box">图形统计2</div>
                </div>
            </el-collapse-transition>
        </div>
        <div class="slideIcon" @click="handleSlideIcon"><i class="el-icon-s-fold"></i></div>
    </div>
</template>

<script>
export default {
     data: () => ({
      show2: false,
      show3: false,
      show4: false,
      slideWidth: 200, //测边栏宽度
      isSlideMin: false, //是否滑到最小
      isMoving:  false //是否正在滑到
    }),
    methods: {
        handleSlide(num){
            if(this['show'+num]){
               this['show'+num]= false
            }else{
               this['show'+num]= true
            }
            
        },
        handleSlideIcon(){
            if(this.isMoving) return
            this.isMoving= true
            if(!this.isSlideMin){
                let timer= null
                timer= setInterval(()=>{
                    this.slideWidth= this.slideWidth-3
                    if(this.slideWidth <= 30){
                        clearInterval(timer)
                        this.isSlideMin= true //滑动到最小变为true
                        this.isMoving= false
                    }
                },2)
            }else{ //滑到最小了，开始变大
                let timer= null
                timer= setInterval(()=>{
                    this.slideWidth= this.slideWidth+3
                    if(this.slideWidth >= 200){
                        clearInterval(timer)
                        this.isSlideMin= false //滑动到最小变为true
                         this.isMoving= false
                    }
                },2)
            }     
        }
    }
}
</script>

<style scoped>
.leftCom {
    font-size: 12px;
    width: 200px;
    background-color: #324057;
    color: #fff;
    position: absolute;
    left: 0;
    top: 60px;
    bottom: 0;
    overflow: hidden;
}
.slideIcon {
    position: absolute;
    bottom: 10px;
    left: 0;
    z-index: 100;
}
.slideIcon i {
    font-size: 20px;
    color: #fff;
}
.leftCom .firstDiv {
    height: 56px;
    width: 200px;
    line-height: 56px;
    /* border-bottom: 1px solid #ccc; */
    padding-left: 10px;
    position: relative;
}
.leftCom .firstDiv:hover {
    background-color: rgb(40,51,70);
}
.leftCom .firstDiv .arrowRight i {
    position: absolute;
    top: 50%;
    right: 20px;
    margin-top: -7px;
    transition: -webkit-transform .5s;
    transition: transform .5s;
    transition: transform .3s,-webkit-transform .3s;
    font-size: 12px;
}
.leftCom .firstDiv .arrowRight i.rotate_90 {
    transform: rotate(90deg);
}
.leftCom .firstDiv .iconSpan {
    margin-right: 10px;
}
.leftCom .transition-box {
    height: 50px;
    width: 200px;
    line-height: 50px;
    padding-left: 40px;
  }
  .leftCom .transition-box:hover {
      background-color: rgb(40,51,70);
  }
</style>

