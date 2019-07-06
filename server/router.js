const connect= require('./connect.js')
const util= require('./utils/util.js')
const express=require('express')
const router=express.Router()
const jwt= require('jsonwebtoken')

router.get('/index',function(req,res){
    console.log(555)
    var obj = {
        a: 1,
        b: 2
    };

    res.json(obj)
})
router.get('/login',function(req,res){
    connect('SELECT * FROM `user`')
    .then((data)=>{
       res.status(200).json({
           message: 'ok',
           data: data
       })
    })
    .catch((err)=>{
        res.status(200).json({
            message: 'error',
            err: err
        })
    })
})
/** 
router.get('/login/user',function(req,res){
    connect(`SELECT * FROM user WHERE name='${req.query.user}'`)
    .then((data)=>{
       var password= util.parseData(data)[0].password
      if(req.query.password == password){
        res.status(200).json({
            message: '登陆成功',
            code: 200
        })
      }else{
        res.status(200).json({
            message: '密码错误',
            code: 201
        })
      }
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).json({
            message: '请求错误',
            code: 202
        })
    })
})
*/

router.get('/login/user',function(req,res){ //登录校验
    async function handleLogin(sqlStr){
      try {
          
        let id= util.parseData(await connect(sqlStr))[0].id
        let password= util.parseData(await connect(sqlStr))[0].password 
        console.log(req.query.password ,password)
        if(req.query.password == password){
            let token= jwt.sign( //将数据传给token
                {id:id}, //将用户信息返回给客户端
                'dd5sada61sd5wqew5e4', //随机生成的秘钥
                {
                    expiresIn: 60*60*1 //设置过期时间
                }
            )
            res.status(200).json({
                message: '登录成功',
                code: 200,
                token: token //将token返回给客户端,客户端每次请求的时候都要携带者token
            })
        }else{
            res.status(200).json({
                message: '密码错误',
                code: 201
            }) 
        }
      }catch(e) {
          console.log(e)
        res.status(500).json({
            message: '未注册，请进入注册页面',
            code: 202
        })
      }
    }
    handleLogin(`SELECT * FROM user WHERE name='${req.query.user}'`)
})

router.get('/index/page',(req,res)=> {
    const token= req.headers.authorization.split(' ').pop()
    // const id= jwt.verify(token,
    //     'dd5sada61sd5wqew5e4', //上面生成的秘钥
    //     ).id//解密
    // console.log(id)
    // 或者进行判断，当本地保存的token和传过来的token相同的话就开放权限
    res.status(200).json({
        id:'5'
    }) 
})

// router.get('/register',(req,res)=> {
//     async function handleRegister(){

//     }
// })


module.exports= router