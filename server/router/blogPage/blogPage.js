const express=require('express')
const router=express.Router()
const connect= require('../../connect.js') //查询数据库
const util= require('../../utils/util.js')
/**
 * @param status {num} 1 在首页显示 0 在首页不显示
 * { scan_time: 1, 总浏览次数
  day_scan_time: 2, 今日浏览次数
  mobile: 0, 移动端总访问次数
  apple: 0, 苹果总访问次数
  android: 0, 安卓总访问次数
  pc: 0, 电脑端总访问次数
  ie: 0, ie浏览器总访问次数
  chrome: 0, chrome浏览器总访问次数
  opera: 0, opera浏览器总访问次数
  safari: 0  safari浏览器总访问次数
 }
 */
router.get('/',function(req,res){
    // 获取前十条最新博文
    console.log(req.headers["user-agent"].toLowerCase())
    var scanStr= req.headers["user-agent"].toLowerCase()
     /**获取客户端的ip */
     const ip= req.headers['x-forwarded-for'] ||
     req.connection.remoteAddress ||
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress

    async function getNewArticle(){
        try {
            let newArticle= await connect('SELECT * from newarticle  where status = 1  ORDER BY create_time desc LIMIT 10')
            newArticle.forEach((item,i)=>{
                item.create_time= util.filterTime(item.create_time,'Y-M-D H:Mi:S')
            })
            // 每次访问的时候，先判断今日访问记录的时间，如果不是今天则将今日访问次数变为1，后台访问变为0，时间更改为今天，如果是今天，则不执行此操作
            let dayscancreatetime= JSON.parse(JSON.stringify(await connect('SELECT * from dayscancreatetime where id=1')))[0]
            if(new Date().getTime() - new Date(dayscancreatetime.day_scan_create_time).getTime() > 24*60*60*1000){
                await connect(`update scaninfo set day_scan_time=1`)
                let time= util.filterTime(new Date().getTime())
                await connect(`update dayscancreatetime set day_scan_create_time='${time}'`)
            }
           

            const nowTime= new Date().getTime()
            let scanInfoArr= JSON.parse(JSON.stringify(await connect('SELECT * from scaninfo')))
            var scanInfo= null
            if(scanInfoArr.length <=0){
                scanInfo= { 
                    scan_time:0,
                    day_scan_time: 0,
                    mobile: 0,
                    apple: 0,
                    android: 0,
                    pc: 0,
                    ie: 0,
                    chrome: 0,
                    opera: 0,
                    safari: 0 }
            }else{
               scanInfo= scanInfoArr[0]
            }
            const reg1= /iphone/
            const reg2= /android/
            const reg3= /windows/
            const reg4= /chrome/
            const reg5= /safari/
            const reg6= /opera/
            
            scanInfo.scan_time++
            scanInfo.day_scan_time++
             if(reg1.test(scanStr)){
                scanInfo.mobile++
                scanInfo.apple++
             }else if(reg2.test(scanStr)){
                scanInfo.mobile++
                scanInfo.android++
             }else if(reg3.test(reg3)){
                scanInfo.pc++
             }
             if(reg4.test(scanStr)){
                scanInfo.chrome++
             }else if(reg5.test(scanStr)){
                scanInfo.safari++
             }else if(reg6.test(scanStr)){
                scanInfo.opera++
             }else {
                scanInfo.ie++
             }

            let ipList= await connect(`SELECT * from ipinfo  where ipaddress = '${ip}'`)
            if(ipList.length <= 0){ 
                // 将数据库和时间存入数据库
                //数据++
                const status= await connect(`INSERT INTO ipinfo VALUES ('${ip}','${util.filterTime(nowTime,true)}')`)
                await connect(`update scaninfo set scan_time=${scanInfo.scan_time},day_scan_time=${scanInfo.day_scan_time},mobile=${scanInfo.mobile},apple=${scanInfo.apple},android=${scanInfo.android},pc=${scanInfo.pc},ie=${scanInfo.ie},chrome=${scanInfo.chrome},opera=${scanInfo.opera},safari=${scanInfo.safari}`)
            }else {
                if(nowTime- new Date(ipList[0].atime).getTime() > 24*60*60*1000){ //大于24小时
                    let upDataStatus= await connect(`update ipinfo  set  atime = '${util.filterTime(nowTime,true)}'   where  ipaddress in ('${ip}')`) //将最新的时间存进数据库
                    if(JSON.parse(JSON.stringify(upDataStatus)).changedRows >=1){
                        await connect(`update scaninfo set scan_time=${scanInfo.scan_time},day_scan_time=${scanInfo.day_scan_time},mobile=${scanInfo.mobile},apple=${scanInfo.apple},android=${scanInfo.android},pc=${scanInfo.pc},ie=${scanInfo.ie},chrome=${scanInfo.chrome},opera=${scanInfo.opera},safari=${scanInfo.safari}`)
                    } 
                }
            }
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