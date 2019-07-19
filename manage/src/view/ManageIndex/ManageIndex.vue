<template>
    <div class="manageIndex">
        <div class="title">修改轮播图片</div>
       <div class="imgDiv clearfix">
            <div class="demo-image__placeholder">
                <div class="block">
                    <span class="demonstration">图片一</span>
                        <div class="imgPar">
                           <div class="firstDiv" :class="{rev180: isRev1801}"  @mouseenter="show1=true" @mouseleave="show1=false">
                                <div class="mask">
                                    <transition name="el-zoom-in-center">
                                        <div v-show="show1" class="transition-box showInfo">
                                            <div @click="handleReversal(1)">
                                                <div>更换图片</div>
                                                <div><i class="el-icon-picture"></i></div>
                                            </div>
                                        </div>
                                    </transition>
                                </div>
                                <el-image :src="src">
                                <div slot="placeholder" class="image-slot">
                                    加载中<span class="dot">...</span>
                                </div>
                                </el-image>
                           </div>
                           <div class="secondDiv" :class="{rev0: isRev1801}">
                               <br>
                               <el-input placeholder="请输入跳转链接" v-model="redVal1">
                                    <template slot="prepend">Http://</template>
                                </el-input>
                                <el-input placeholder="修改图片链接" v-model="urlVal1">
                                    <template slot="prepend">Http://</template>
                                </el-input>
                                <br>
                                <div class="upFileDiv">
                                    <input type="file">
                                     <span>请选择上传的图片</span>
                                </div>
                                <div class="secondBottom"> 
                                    <el-button type="primary" plain @click="exitUpdateImp(1)">取消</el-button>
                                    <el-button type="primary" plain>上传</el-button>
                                  </div>
                           </div>
                        </div>
                </div>
            </div> 
             <div class="demo-image__placeholder">
                <div class="block">
                    <span class="demonstration">图片二</span>
                        <div class="imgPar">
                           <div class="firstDiv" :class="{rev180: isRev1802}"  @mouseenter="show2=true" @mouseleave="show2=false">
                                <div class="mask">
                                    <transition name="el-zoom-in-center">
                                        <div v-show="show2" class="transition-box showInfo">
                                            <div @click="handleReversal(2)">
                                                <div>更换图片</div>
                                                <div><i class="el-icon-picture"></i></div>
                                            </div>
                                        </div>
                                    </transition>
                                </div>
                                <el-image :src="src">
                                <div slot="placeholder" class="image-slot">
                                    加载中<span class="dot">...</span>
                                </div>
                                </el-image>
                           </div>
                           <div class="secondDiv" :class="{rev0: isRev1802}">
                               <br>
                               <el-input placeholder="请输入跳转链接" v-model="redVal2">
                                    <template slot="prepend">Http://</template>
                                </el-input>
                                <el-input placeholder="修改图片链接" v-model="urlVal2">
                                    <template slot="prepend">Http://</template>
                                </el-input>
                                <br>
                                <div class="upFileDiv">
                                    <input type="file">
                                     <span>请选择上传的图片</span>
                                </div>
                                <div class="secondBottom"> 
                                    <el-button type="primary" plain @click="exitUpdateImp(2)">取消</el-button>
                                    <el-button type="primary" plain>上传</el-button>
                                  </div>
                           </div>
                        </div>
                </div>
            </div> 
             <div class="demo-image__placeholder">
                <div class="block">
                    <span class="demonstration">图片三</span>
                        <div class="imgPar">
                           <div class="firstDiv" :class="{rev180: isRev1803}"  @mouseenter="show3=true" @mouseleave="show3=false">
                                <div class="mask">
                                    <transition name="el-zoom-in-center">
                                        <div v-show="show3" class="transition-box showInfo">
                                            <div @click="handleReversal(3)">
                                                <div>更换图片</div>
                                                <div><i class="el-icon-picture"></i></div>
                                            </div>
                                        </div>
                                    </transition>
                                </div>
                                <el-image :src="src">
                                <div slot="placeholder" class="image-slot">
                                    加载中<span class="dot">...</span>
                                </div>
                                </el-image>
                           </div>
                           <div class="secondDiv" :class="{rev0: isRev1803}">
                               <br>
                               <el-input placeholder="请输入跳转链接" v-model="redVal3">
                                    <template slot="prepend">Http://</template>
                                </el-input>
                                <el-input placeholder="修改图片链接" v-model="urlVal3">
                                    <template slot="prepend">Http://</template>
                                </el-input>
                                <br>
                                <div class="upFileDiv">
                                    <input type="file">
                                     <span>请选择上传的图片</span>
                                </div>
                                <div class="secondBottom"> 
                                    <el-button type="primary" plain @click="exitUpdateImp(3)">取消</el-button>
                                    <el-button type="primary" plain>上传</el-button>
                                  </div>
                           </div>
                        </div>
                </div>
            </div>  
             <div class="demo-image__placeholder">
                <div class="block">
                    <span class="demonstration">图片四</span>
                        <div class="imgPar">
                           <div class="firstDiv" :class="{rev180: isRev1804}"  @mouseenter="show4=true" @mouseleave="show4=false">
                                <div class="mask">
                                    <transition name="el-zoom-in-center">
                                        <div v-show="show4" class="transition-box showInfo">
                                            <div @click="handleReversal(4)">
                                                <div>更换图片</div>
                                                <div><i class="el-icon-picture"></i></div>
                                            </div>
                                        </div>
                                    </transition>
                                </div>
                                <el-image :src="src">
                                <div slot="placeholder" class="image-slot">
                                    加载中<span class="dot">...</span>
                                </div>
                                </el-image>
                           </div>
                           <div class="secondDiv" :class="{rev0: isRev1804}">
                               <br>
                               <el-input placeholder="请输入跳转链接" v-model="redVal4">
                                    <template slot="prepend">Http://</template>
                                </el-input>
                                <el-input placeholder="修改图片链接" v-model="urlVal4">
                                    <template slot="prepend">Http://</template>
                                </el-input>
                                <br>
                                <div class="upFileDiv">
                                    <input type="file">
                                     <span>请选择上传的图片</span>
                                </div>
                                <div class="secondBottom"> 
                                    <el-button type="primary" plain @click="exitUpdateImp(4)">取消</el-button>
                                    <el-button type="primary" plain>上传</el-button>
                                  </div>
                           </div>
                        </div>
                </div>
            </div> 
       </div>
       <div class="title">修改导航图片</div>
       <div class="imgDiv clearfix">
           <div class="demo-image__placeholder">
                <div class="block">
                    <span class="demonstration">图片一</span>
                        <div class="imgPar">
                           <div class="firstDiv" :class="{rev180: isRev180Nav1}"  @mouseenter="showNav1=true" @mouseleave="showNav1=false">
                                <div class="mask">
                                    <transition name="el-zoom-in-center">
                                        <div v-show="showNav1" class="transition-box showInfo">
                                            <div @click="handleReversalNav(1)">
                                                <div>更换图片</div>
                                                <div><i class="el-icon-picture"></i></div>
                                            </div>
                                        </div>
                                    </transition>
                                </div>
                                <el-image :src="src">
                                <div slot="placeholder" class="image-slot">
                                    加载中<span class="dot">...</span>
                                </div>
                                </el-image>
                           </div>
                           <div class="secondDiv" :class="{rev0: isRev180Nav1}">
                               <br>
                               <el-input placeholder="请输入跳转链接" v-model="redUrlVal1">
                                    <template slot="prepend">Http://</template>
                                </el-input>
                                <el-input placeholder="修改图片文字" v-model="imgTextVal1">
                                </el-input>
                                <br>
                                <div class="upFileDiv">
                                    <input type="file">
                                     <span>请选择上传的图片</span>
                                </div>
                                <div class="secondBottom"> 
                                    <el-button type="primary" plain @click="exitUpdateImpNav(1)">取消</el-button>
                                    <el-button type="primary" plain>上传</el-button>
                                  </div>
                           </div>
                        </div>
                </div>
            </div> 

            <div class="demo-image__placeholder">
                <div class="block">
                    <span class="demonstration">图片二</span>
                        <div class="imgPar">
                           <div class="firstDiv" :class="{rev180: isRev180Nav2}"  @mouseenter="showNav2=true" @mouseleave="showNav2=false">
                                <div class="mask">
                                    <transition name="el-zoom-in-center">
                                        <div v-show="showNav2" class="transition-box showInfo">
                                            <div @click="handleReversalNav(2)">
                                                <div>更换图片</div>
                                                <div><i class="el-icon-picture"></i></div>
                                            </div>
                                        </div>
                                    </transition>
                                </div>
                                <el-image :src="src">
                                <div slot="placeholder" class="image-slot">
                                    加载中<span class="dot">...</span>
                                </div>
                                </el-image>
                           </div>
                           <div class="secondDiv" :class="{rev0: isRev180Nav2}">
                               <br>
                               <el-input placeholder="请输入跳转链接" v-model="redUrlVal2">
                                    <template slot="prepend">Http://</template>
                                </el-input>
                                <el-input placeholder="修改图片文字" v-model="imgTextVal2">
                                </el-input>
                                <br>
                                <div class="upFileDiv">
                                    <input type="file">
                                     <span>请选择上传的图片</span>
                                </div>
                                <div class="secondBottom"> 
                                    <el-button type="primary" plain @click="exitUpdateImpNav(2)">取消</el-button>
                                    <el-button type="primary" plain>上传</el-button>
                                  </div>
                           </div>
                        </div>
                </div>
            </div> 
       </div>
       <div class="title">管理最新博文</div>
       <div class="manageNewArticle">
          <el-table
            ref="multipleTable"
            :data="newArticle"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
            type="selection"
            align="center"
           >
            </el-table-column>
            <el-table-column
            label="日期"
            prop= "create_time"
            align="center"
            >
           </el-table-column>
            <el-table-column
            prop="title"
            label="标题"
            align="center"
           >
            </el-table-column>
            <el-table-column label="操作" align="center" >
                <template  slot-scope="scope">
                    <el-button
                    size="mini" >显示</el-button>
                    <el-button
                    size="mini"
                    type="danger" @click="removeArticle([scope.row.id])">移除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div style="margin-top: 20px; text-align: center;">
            <el-button type="danger" plain @click="handleMoreData"  >批量移除</el-button>
            <el-button type="primary" plain  @click="handleAddArticle">添加博文</el-button>
        </div>
       </div>
         <transition name="el-zoom-in-top">
             <div class="propoverDiv transition-box" v-show="maskIsShow">
                <i class="el-icon-close" @click="maskIsShow= !maskIsShow"></i>
                <div>
                    <el-table
                        ref="multipleTable"
                        :data="newArticleList"
                        tooltip-effect="dark"
                        style="width: 100%"
                        @selection-change="handleSelectionChangeNo">
                        <el-table-column
                        type="selection"
                        align="center">
                        </el-table-column>
                        <el-table-column
                        label="日期"
                        prop="create_time"
                        align="center">
                        </el-table-column>
                        <el-table-column
                        prop="title"
                        label="标题"
                        align="center">
                        </el-table-column>
                        <el-table-column label="操作" align="center">
                        <template slot-scope="scope">
                            <el-button size="mini" type="primary" plain  @click="addNewArticle([scope.row.id])">添加</el-button>
                        </template>
                    </el-table-column>
                    </el-table>
                    <div style="margin-top: 20px; text-align:center;">
                        <el-button type="primary" plain @click="handleMoreDataNo">批量添加</el-button>
                    </div>
            </div>
            
        </div>
       </transition>
        
        <transition name="el-fade-in-linear">
             <div class="maskDiv transition-box" v-show="maskIsShow"></div>
      </transition>
       
     </div>
</template>

<script>
import { mapActions } from 'vuex'
import { Message } from 'element-ui';
export default {
    data() {
      return {
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        show1: false,
        show2: false,
        show3: false,
        show4: false,
        isRev1801: false,
        isRev1802: false,
        isRev1803: false,
        isRev1804: false,
        urlVal1: '',
        urlVal2: '',
        urlVal3: '',
        urlVal4: '',
        redVal1: '',
        redVal2: '',
        redVal3: '',
        redVal4: '',
        redUrlVal1: '', //导航图片跳转连接
        imgTextVal1: '', //导航图片文字，
        redUrlVal2: '', //导航图片跳转连接
        imgTextVal2: '', //导航图片文字，
        isRev180Nav1: false,
        isRev180Nav2: false,
        showNav1: false,
        showNav2: false,
        
          maskIsShow: false,
          newArticle: [],
          newArticleList: [],//没有选中的文章
          data: {}, //更新文章传递的参数
          multipleSelection: [], //复选框选中列表
          multipleSelectionNo: []
      }
    },
    created(){
         let artFn= this.$store.dispatch('asyGetNewArticle') //获取显示的最新文章
         artFn.then(res=>{
           if(res.data.code === 200){
               this.newArticle= res.data.newArticle
           }
         }).catch(err=>{
             console.log(err)
         })
         
         let articleFn= this.$store.dispatch('asyGetDataNewArticleStatusNo')//获取所有不显示的最新文章
         articleFn.then(res=>{
           if(res.data.code === 200){
               this.newArticleList= res.data.list
           }
         }).catch(err=>{
             console.log(err)
         })
    },
    computed: {
    //   ...mapActions['asyUpDataNewArticleStatus']
        
    },
     methods:{
         handleReversal(index){
             this['isRev180'+index]= true
         },
         exitUpdateImp(index){
             this['isRev180'+index]= false
             this['redUrlVal'+index]= ''
         },
          handleReversalNav(index){
             this['isRev180Nav'+index]= true
         },
         exitUpdateImpNav(index){
             this['isRev180Nav'+index]= false
             this['redUrlVal'+index]= ''
         },
         handleAddArticle(){ //添加博文
            this.maskIsShow= true
         },
        toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleSelectionChangeNo(val){
        this.multipleSelectionNo = val;
      },
      handleMoreData(){ //批量处理
        //获取批量移除的id列表然后发送请求，改变数据库的状态
        var idList= []    
        this.multipleSelection.forEach((item,i)=>{
            idList.push(item.id)
        })
        if(idList.length <= 0){
            // 提示
            Message({message: '请先选择要移除的文章列表！',type: 'warning'})
            return
        }
        this.removeArticle(idList)
      },
      handleMoreDataNo(){ //批量添加
        //获取批量移除的id列表然后发送请求，改变数据库的状态
        var idList= []    
        this.multipleSelectionNo.forEach((item,i)=>{
            idList.push(item.id)
        })
        if(idList.length <= 0){
            // 提示
            Message({message: '请先选择要添加的文章列表！',type: 'warning'})
            return
        }
        this.addNewArticle(idList)
      },
      removeArticle(id){ //移除文章
         this.data={
             status: 0,
             id: id
         }
          var tt= this.$store.dispatch('asyUpDataNewArticleStatus', this.data)
          console.log(id)
         tt.then((res)=>{ //执行更新newArticle的status
            if(res.data.code === 200){ //执行成功
                // 删除vuex中对应的id
                let oldNewArticle= this.newArticle
                let newNewArticle= oldNewArticle.filter((item,i) => {
                     if(id.indexOf(item.id) !== -1){
                        this.newArticleList.push(item)
                    }
                    return id.indexOf(item.id) == -1
                })
                this.$store.commit('upDataNewArticle',newNewArticle)
                console.log(newNewArticle)
                this.newArticle= newNewArticle
            }
        }).catch(err => {
            console.log(err)
        })
      },
      addNewArticle(id){ //添加文章
        this.data={
             status: 1,
             id: id  //这个id是数组，如 [3]
         }
          var tt= this.$store.dispatch('asyUpDataNewArticleStatus', this.data)
          
         tt.then((res)=>{ //执行更新newArticle的status
            if(res.data.code === 200){ //执行成功
                // 删除vuex中对应的id
                let oldNewArticle= this.newArticleList
                let newNewArticle= oldNewArticle.filter((item,i) => {
                    if(id.indexOf(item.id) !== -1){
                        this.newArticle.push(item)
                    }
                   return id.indexOf(item.id) == -1
                })
                this.$store.commit('upDataNewArticle',newNewArticle)
                this.newArticleList= newNewArticle
            }
        }).catch(err => {
            console.log(err)
        })
      }
         
      }
}
</script>

<style scoped>
.manageIndex {
    padding: 0 20px 20px;
}
.propoverDiv {
    padding: 40px 20px;
    width: 42%;
    min-width: 600px;
    height: 700px;
    position: fixed;
    left: calc(50% + 100px);
    top: calc(50% + 30px);
    border: 1px solid #999;
    background-color: #fff;
    z-index: 100;
    transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    -o-transform: translate(-50%,-50%);
    border-radius: 8px;
    overflow-y: auto;
    /* display: none; */

}
.propoverDiv .el-icon-close {
    position: absolute;
    top: 15px;
    right:15px;
    font-size: 25px;
    color: #666;
}
.maskDiv {
    position: fixed;
    left: 200px;
    top: 60px;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.4);
    z-index: 99;
    /* display: none; */
}
.title {
    color: #333;
    font-size: 16px;
    position: relative;
    padding-left: 6px;
    margin-bottom: 15px;
    margin-top: 30px;
}
.title::before {
    content: '';
    position: absolute;
    left: 0;
    top: 1px;
    width: 3px;
    bottom: 1px;
    background-color: #FF7F27;
}
.demo-image__placeholder {
    width: 20%;
    min-width: 280px;
    float: left;
    margin-right: 20px;
}

.imgDiv .block {
    text-align: center;
}
.imgDiv .block span {
    padding-bottom: 10px;
    display: block;
}
.imgDiv .block .imgPar{
    transition: all .3s;
    position: relative;
    min-height: 230px;  
}
.imgDiv .block .imgPar>div {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    -webkit-transition:.8s ease-in-out;
    -moz-transition:.8s ease-in-out;
    -webkit-backface-visibility: hidden;
     -moz-backface-visibility: hidden;

}
.imgDiv .block .imgPar>div.firstDiv{
    z-index: 2;
    -webkit-transform:rotateY(0);
    -moz-transform:rotateY(0);
}
.imgDiv .block .imgPar .el-image {
    width: 100%;
    height: 100%;
}
.imgDiv .block .imgPar>div.secondDiv{
     z-index: 1;
    -webkit-transform:rotateY(180deg);
    -moz-transform:rotateY(180deg);
    border: 1px solid #ccc;
    background-color: #f5f7fa;
    padding: 15px;
}
.imgDiv .block .imgPar>div.secondDiv .el-input {
    margin-bottom: 10px;
}
.upFileDiv {
    height: 40px;
    border: 1px solid #DCDFE6;
    background-color: #f5f7fa;
    border-radius: 4px;
    padding: 0 20px;
    line-height: 40px;
    color: #999;
    text-align: left;
    position: relative;
    overflow: hidden;
    margin-bottom: 10px;
}
.upFileDiv input {
    height: 100%;
    opacity: 0;
    position: absolute;
    z-index: 99;
}
.upFileDiv span{
    position: absolute;
    z-index: 9;
    font-size: 14px;
}
.secondBottom button {
    padding: 9px 20px !important;
}
.imgDiv .block .imgPar .mask {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: transparent;
    z-index: 9;
    transition: all .3s;
}
.imgDiv .block .el-image {
   display: block;
}
.imgDiv .block .imgPar .firstDiv:hover{
    transform: scale(1.03);
}
.imgDiv .block .imgPar:hover .mask {
    background: rgba(0,0,0,.3);
}
.showInfo {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
}
.showInfo .el-icon-picture{
    font-size: 30px;
    margin-top: 5px;
}

.rev180 {
    -webkit-transform:rotateY(-180deg) !important;
    -moz-transform:rotateY(-180deg) !important;
}
.rev0 {
    -webkit-transform:rotateY(0) !important;
    -moz-transform:rotateY(0) !important;
}


</style>


