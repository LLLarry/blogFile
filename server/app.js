const express = require('express');
const path= require('path')
const router= require('./router.js')
const blogPage= require('./router/blogPage/blogPage.js')
const app = express();
const mysql= require('./mysql.js')

// app.use('/src/static', express.static(path.join(__dirname, './src/static')));//开放静态文件夹
app.use('/static', express.static(path.join(__dirname, './src/static')));

app.engine('html', require('express-art-template'));
app.set('views',path.join(__dirname,'src/views'), {
    debug: process.env.NODE_ENV !== 'production',
    escape: true
});
app.set('view engine', '.html')


app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With","Content-Type,Access-Token");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next()
})

app.use('/manage',router)//后台管理系统
app.use('/',blogPage)  // blog页面路由


app.listen("8888",'localhost',function(err){if(err){
    console.log(err);return;
}
console.log('Listening at http://localhost:8888');
});


