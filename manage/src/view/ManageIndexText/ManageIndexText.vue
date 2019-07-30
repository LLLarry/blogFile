<template>
   <div class="hello">
     <div class="clearfix">  
     <div class="articleTop first">
        <span>请输入文章标题</span>
        <el-input
          placeholder="请输入文章标题"
          v-model="articleTitle"
          clearable>
        </el-input>
     </div>


     <div class="articleTop">
      <span>请输入文章作者</span>
      <el-input
        placeholder="请输入文章作者"
        v-model="articleAuthor"
        clearable>
      </el-input>
     </div>
     <div class="articleTop">
        <span>请输入文章简介</span>
       <!-- <el-form-item label="活动形式" prop="desc"> -->
        <el-input type="textarea" v-model="synopsis" placeholder="请输入文章简介"></el-input>
      <!-- </el-form-item> -->
     </div>
    </div>
    <script id="editor" type="text/plain" :style="{ height: mainHeight + 'px' }"></script>
    <el-button type="primary" @click="show">上传文章</el-button>
  </div>
</template>

<script>
import { Message } from 'element-ui';
export default {
  name: 'HelloWorld',
  data () {
    return {
      editor: null,
      articleTitle: '', //文章标题
      articleAuthor: '', //文章作者
      synopsis: '', //文章简介
    }
  },
  props:['mainHeight'],
  methods: {
    show () {
      console.log(this.editor.getContent())
      let content= this.editor.getContent()
      let title= this.articleTitle
      let synopsis= this.synopsis
      let author= this.articleAuthor
      if(title == '' || title == null){
        Message({message: '请输入文章标题',type: 'warning',duration: 2000})
        return
      }
      if(author == '' || author == null){
        Message({message: '请输入文章作者',type: 'warning',duration: 2000})
        return
      }
      if(synopsis == '' || synopsis == null){
        Message({message: '请输入文章简介',type: 'warning',duration: 2000})
        return
      }
      if(content == '' || content == null){
        Message({message: '请输入文章内容',type: 'warning',duration: 2000})
        return
      }

      let articleData= {
        title: title,
        author: author,
        synopsis: synopsis,
        content: content
      }
      const result= this.$store.dispatch('asyUploadArticle',articleData)
      try{
        result.then(res=>{
          if(res.data.code == 200){
             Message({message: '添加成功',type: 'success',duration: 2000})
          }else {
             Message({message: '添加失败',type: 'error',duration: 2000})
          }
        })
      }catch(e){
        console.log()
      }
    }
  },
  mounted () {
     require('../../../static/utf8-php/ueditor.config.js')
     require('../../../static/utf8-php/ueditor.all.min.js')
     require('../../../static/utf8-php/lang/zh-cn/zh-cn.js')
     require('../../../static/utf8-php/ueditor.parse.min.js')
    this.editor = window.UE.getEditor('editor')
  },
  destroyed () {
    this.editor.destroy()
  }
    
}
</script>

<style scoped>
  .hello {
    padding: 20px;
  }
   .articleTop {
     width: 45%;
     float: left;
   }
   .first.articleTop {
     margin-right: 10%;
   }
  .articleTop {
    margin-bottom: 25px;  
  }
  .articleTop span {
    display: block;
    margin-bottom: 10px;
    color: #666;
  }
</style>


