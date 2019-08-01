const express=require('express')
const router=express.Router()
const connect= require('../../connect.js') //查询数据库
const util= require('../../utils/util.js')

/**
 * 获取首页数据统计
 */
router.post('/getDataCensus',(req,res,next)=>{ 
   async function asyGetDataCensus(){
        try{
            let getDataCensusData= await connect('SELECT * FROM scaninfo WHERE id=1')
            console.log(getDataCensusData)
            res.status(200).json({
                code: 200,
                censusData: getDataCensusData 
            })
        }catch(e){
            console.log(e)
            res.status(500).json({
                code: 202,
                message: '获取失败' 
            })
        }
    }
    
    asyGetDataCensus()
})

router.post('/isCheckDayScanHistory',(req,res,next)=>{//当登录访问后台首页的时候，访问当天浏览次数的时间，和现在时间相比（2019-08-01）如果小于24小时候则不操作，大于24小时，将今日
    // 访问量置为0，时间设置为今天时间
    async function asyIsCheckDayScanHistory(){
        let dayscancreatetime= JSON.parse(JSON.stringify(await connect('SELECT * from dayscancreatetime where id=1')))[0]
        if(new Date().getTime() - new Date(dayscancreatetime.day_scan_create_time).getTime() > 24*60*60*1000){
            await connect(`update scaninfo set day_scan_time=0`)
            let time= util.filterTime(new Date().getTime())
            await connect(`update dayscancreatetime set day_scan_create_time='${time}'`)
        }
    }
    asyIsCheckDayScanHistory()
})

module.exports= router