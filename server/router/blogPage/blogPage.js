const express=require('express')
const router=express.Router()
const connect= require('../../connect.js') //查询数据库
const util= require('../../utils/util.js')
/**
 * @param status {num} 1 在首页显示 0 在首页不显示
 */
router.get('/',function(req,res){
    // 获取前十条最新博文
    async function getNewArticle(){
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

module.exports= router