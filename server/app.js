const express = require('express');
const path= require('path')
const router= require('./router.js')
const app = express();
const mysql= require('./mysql.js')

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next()
})
app.use('/',router)
// app.get('/',function(req,res){
    
// });

app.listen("8888",'localhost',function(err){if(err){
    console.log(err);return;
}
console.log('Listening at http://localhost:8888');
});


