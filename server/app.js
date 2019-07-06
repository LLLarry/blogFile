const express = require('express');
const path= require('path')
const router= require('./router.js')
const app = express();
const mysql= require('./mysql.js')

app.use('/',router)
app.get('/',function(req,res){
    
});

app.listen("8888",'localhost',function(err){if(err){
    console.log(err);return;
}
console.log('Listening at http://localhost:8888');
});


