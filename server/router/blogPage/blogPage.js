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
            let scanInfo= JSON.parse(JSON.stringify(await connect('SELECT * from scaninfo')))[0]
            console.log(scanInfo)
            const nowTime= new Date().getTime()
            const reg1= /iphone/
            const reg2= /android/
            const reg3= /windows/
            const reg4= /chrome/
            const reg5= /safari/
            const reg6= /opera/
            // 
             if(reg1.test(scanStr)){
       
             }
            let ipList= await connect(`SELECT * from ipinfo  where ipaddress = '${ip}'`)
            if(ipList.length <= 0){
                // 将数据库和时间存入数据库
                //数据++
                const status= await connect(`INSERT INTO ipinfo VALUES ('${ip}','${util.filterTime(nowTime,true)}')`)
                
                
            }else {
                if(nowTime- new Date(ipList[0].atime).getTime() > 24*60*60*1000){ //大于24小时
                    let upDataStatus= await connect(`update ipinfo  set  atime = '${util.filterTime(nowTime,true)}'   where  ipaddress in ('${ip}')`) //将最新的时间存进数据库
                    if(JSON.parse(JSON.stringify(upDataStatus)).length >=0){
                        //await connect(`update scaninfo set scan_time=1,day_scan_time=2`)
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