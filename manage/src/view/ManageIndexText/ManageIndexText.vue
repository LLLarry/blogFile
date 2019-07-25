<template>
   <div class="hello">
    <script id="editor" type="text/plain"></script>
    <button @click="show">你敢点一下吗？</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      editor: null
    }
  },
  methods: {
    show () {
      console.log(this.editor.getContent())
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

</style>


