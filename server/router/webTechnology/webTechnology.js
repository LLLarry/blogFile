const express=require('express')
const router=express.Router()
const connect= require('../../connect.js') //查询数据库
const util= require('../../utils/util.js')

router.get('*',function(req,res,next){
    console.log(req.originalUrl)
    let obj= {}
    let categary= 1 //文章分类  1、javascript  2、css|html  3、框架  4、小程序',
    if(req.originalUrl == '/technology/'){
        obj= { from: '/'}
        categary= 1
    }else if(req.originalUrl == '/technology/javascript/'){
        obj= { from: 'javascript'}
        categary= 1
    }else if(req.originalUrl == '/technology/CSS3_HTML5/'){
        obj= { from: 'CSS3_HTML5'}
        categary= 2
    }else if(req.originalUrl == '/technology/frame/'){
        obj= { from: '前端框架'}
        categary= 3
    }else if(req.originalUrl == '/technology/procedures/'){
        obj= { from: '小程序'}
        categary= 4
    }
    async function getNewArticle(){
        try {
            let articleInfo= await connect('SELECT * from newarticle  where categary ='+categary)
            articleInfo.forEach((item,i)=>{
                item.create_time= util.filterTime(item.create_time,'Y-M-D H:Mi:S')
            })
            res.type('html');
            console.log(articleInfo)
            res.render('前端技术.html',{obj,articleInfo})
        }catch(e){
            console.log(e)
        }
    }
    getNewArticle()
   
})

module.exports= router