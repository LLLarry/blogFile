const express=require('express')
const router=express.Router()
const connect= require('../../connect.js') //查询数据库
const util= require('../../utils/util.js')

router.post('/img',(req,res)=>{
    console.log(req.body)
})

module.exports= router