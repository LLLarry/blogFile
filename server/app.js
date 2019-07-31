const express = require('express');
const path= require('path')
const router= require('./router.js')
const blogPage= require('./router/blogPage/blogPage.js')
const managePage= require('./router/managePage/managePage.js')
const ueditorRouter= require('./router/ueditor/ueditor.js')
const app = express();
const mysql= require('./mysql.js')
const log4js = require('log4js'); /** nodeJs log4js工作日志*/

var bodyParser = require('body-parser')
var ueditor = require("ueditor")
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json());
app.use('/ueditor', express.static(path.join(__dirname, './ueditor')));

// app.use('/src/static', express.static(path.join(__dirname, './src/static')));//开放静态文件夹
app.use('/static', express.static(path.join(__dirname, './src/static')));

app.engine('html', require('express-art-template'));
app.set('views',path.join(__dirname,'src/views'), {
    debug: process.env.NODE_ENV !== 'production',
    escape: true
});
app.set('view engine', '.html')


app.use(function(req,res,next){
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "X-Requested-With","Content-Type,Access-Token");
    // res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    // res.header("X-Powered-By",' 3.2.1');
    // res.header("Content-Type", "application/json;charset=utf-8");
    res.setHeader("Access-Control-Allow-Origin", "*");  
    res.setHeader("Access-Control-Allow-Credentials", "true");  
    res.setHeader("Access-Control-Allow-Methods", "*");  
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Access-Token");//这里“Access-Token”是我要传到后台的内容key  
    res.setHeader("Access-Control-Expose-Headers", "*");  
    next()
})

app.use('/manage',router)//后台管理系统
app.use('/',blogPage)  // blog页面路由
app.use('/manage',managePage)
app.use('/ueditor',ueditorRouter)  // ueditor请求路由
  app.use("/ueditor/ue", ueditor(path.join(__dirname, 'public'), function (req, res, next) {
    //客户端上传文件设置
    var imgDir = '/img/ueditor/'
    var ActionType = req.query.action;
    console.log(ActionType);
    if (ActionType === 'uploadimage' || ActionType === 'uploadfile' || ActionType === 'uploadvideo') {
        var file_url = imgDir;//默认图片上传地址
        /*其他上传格式的地址*/
        if (ActionType === 'uploadfile') {
            file_url = '/file/ueditor/'; //附件  
        }
        if (ActionType === 'uploadvideo') {
            file_url = '/video/ueditor/'; //视频
        }
        res.ue_up(file_url); //你只要输入要保存的地址 。保存操作交给ueditor来做
        res.setHeader('Content-Type', 'text/html');
        console.log('上传成功')
    }
    //  客户端发起图片列表请求
    else if (req.query.action === 'listimage') {
        var dir_url = imgDir;
        res.ue_list(dir_url); // 客户端会列出 dir_url 目录下的所有图片
    }
    // 客户端发起其它请求
    else {
        console.log('congfig正常')
         res.setHeader('Content-Type', 'application/json; charset=utf-8;');
         res.redirect('/ueditor/config.json');
    }

}))

/**log4js配置 */

log4js.configure(
          {
            appenders: {
              file: {
                  type : 'file',
                filename: __dirname + '/logs/test.log',//文件目录，当目录文件或文件夹不存在时，会自动创建
                maxLogSize : 10,//文件最大存储空间，当文件内容超过文件存储空间会自动生成一个文件test.log.1的序列自增长的文件
                backups : 3,//当文件内容超过文件存储空间时，备份文件的数量
                //compress : true,//是否以压缩的形式保存新文件,默认false。如果true，则新增的日志文件会保存在gz的压缩文件内，并且生成后将不被替换，false会被替换掉
                encoding : 'utf-8',//default "utf-8"，文件的编码
                category : 'log_file',
                numBackups: 5, // keep five backup files
                compress: true, // compress the backups
                encoding: 'utf-8',
              },
              dateFile: {
                type: 'dateFile',
                filename: __dirname +'/logs/more-important-things.log',
                pattern: 'yyyy-MM-dd-hh',
                compress: true
              },
              out: {
                type: 'stdout'
              }
            },
            categories: {
              default: { appenders: ['file', 'dateFile', 'out'], level: 'trace' }
            }
          }
        );


app.listen("8888",'localhost',function(err){if(err){
    console.log(err);return;
}
console.log('Listening at http://localhost:8888');
});


