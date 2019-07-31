const express=require('express')
const router=express.Router()
const connect= require('../../connect.js') //查询数据库
const util= require('../../utils/util.js')
/**
 * @param status {num} 1 在首页显示 0 在首页不显示
 */
router.get('/',function(req,res){
    // 获取前十条最新博文
    console.log(req.headers["user-agent"].toLowerCase())
    async function getNewArticle(){
        console.log(req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress)
        try {
            let newArticle= await connect('SELECT * from newarticle  where status = 1  ORDER BY create_time desc LIMIT 10')
            newArticle.forEach((item,i)=>{
                item.create_time= util.filterTime(item.create_time,'Y-M-D H:Mi:S')
            })
            res.type('html');
            res.render('index.html', {
                newArticle: newArticle
            })
        }catch(e){
            console.log(e)
        }
    }
    getNewArticle()
    
})

/**
 * 访问博客详情页面 
 */
router.get('/blogPage',function(req,res,next){ 
    // 获取前十条最新博文
    // console.log(req.headers["user-agent"].toLowerCase())
    const id= req.query.id || 1
    async function getNewArticle(){
        try {
            let articleInfo= await connect('SELECT * from newarticle  where id ='+id)
            articleInfo.forEach((item,i)=>{
                item.create_time= util.filterTime(item.create_time,'Y-M-D H:Mi:S')
            })
            res.type('html');
            console.log(articleInfo)
            res.render('blogPage.html', {
                articleInfo: articleInfo
            })
        }catch(e){
            console.log(e)
        }
    }
    getNewArticle()
    
})


module.exports= router