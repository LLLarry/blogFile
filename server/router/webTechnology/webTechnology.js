const express=require('express')
const router=express.Router()
const connect= require('../../connect.js') //查询数据库
const util= require('../../utils/util.js')

router.get('*',function(req,res,next){
    console.log(req.originalUrl)
    let obj= {}
    if(req.originalUrl == '/technology/'){
        obj= { from: '/'}
    }else if(req.originalUrl == '/technology/javascript/'){
        obj= { from: 'javascript'}
    }else if(req.originalUrl == '/technology/CSS3_HTML5/'){
        obj= { from: 'CSS3_HTML5'}
    }else if(req.originalUrl == '/technology/frame/'){
        obj= { from: '前端框架'}
    }else if(req.originalUrl == '/technology/procedures/'){
        obj= { from: '小程序'}
    }
    res.render('前端技术.html',{obj})
})

module.exports= router