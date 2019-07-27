const express=require('express')
const app = express();
const bodyParser = require('body-parser')
const router=express.Router()
const path= require('path')
const util= require('../../utils/util.js')

router.post('/uploadArticle',(req,res,next)=>{
    const time= util.filterTime(new Date(),true)
    util.setData({sql: `INSERT INTO newarticle VALUES (null, '${req.body.data.title}','${req.body.data.content}',0,'${req.body.data.author}',0,'${time}')`},req,res)
})

module.exports= router