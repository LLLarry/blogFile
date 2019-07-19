const fs = require("fs");
/**解析node 从mysql去除数据带RowDataPacket的数据 */
const connect= require('../connect.js')
const parseData= function (data){ 
    return JSON.parse(JSON.stringify(data))
}
/**
 * 读取文件
 * @params url： 请求地址
 * @params type： 读取文件类型
 */
function readFile(url,type){
    if(arguments.length <= 1){
        type= 'utf-8'
    }
    new Promise((resolve,reject)=>{
        fs.readFile(url,type,(error,data)=>{
            if(error){
                reject(error)
            }else{
                resolve(data)
            }
        })
    })
    
}

function filterTime(date,type){  //时间过滤器
    let dt= new Date(date)
    let y= dt.getFullYear()
    let m= dt.getMonth()+1 >= 10 ? dt.getMonth()+1 : '0'+ (dt.getMonth()+1)
    let d= dt.getDate() >= 10 ? dt.getDate() : '0'+dt.getDate()
    if(typeof type == 'undefined'){
        return `${y}-${m}-${d}`
    }
    let h= dt.getHours() >=10? dt.getHours() : '0'+dt.getHours()
    let mi= dt.getMonth() >= 10 ?  dt.getMonth() : '0'+  dt.getMonth()
    let s= dt.getSeconds() >= 10 ? dt.getSeconds() : '0'+ dt.getSeconds()
    return `${y}-${m}-${d} ${h}:${mi}:${s}`
}

function getData(data,req,res){ //获取数据  
        async function getNewArticle(){
            try {
                var list= await connect(data.sql)
                if(data.time){
                    list.forEach((item,i)=>{
                        item.create_time= filterTime(item.create_time)
                    })
                }
                console.log(list)
               res.status(200).json({
                code: 200,
                list: list   
               })
            }catch(e){
                res.status(500).json({
                    code: 202
                }) 
            }
        }
        getNewArticle()
}

function setData (data,req,res){
    async function asySetData(){
        try{
          let upDataStatus= await connect(data.sql)
           res.status(200).json({
               code: 200,
               message: '更新成功'
           })
        }catch(e){
            console.log(e)
            res.status(500).json({
                code: 202,
                message: '更新失败'
            })
        }
    }
    asySetData()
}

exports.parseData= parseData
exports.readFile= readFile
exports.filterTime= filterTime
exports.getData= getData
exports.setData= setData