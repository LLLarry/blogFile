
var mysql= require('mysql')
var connection= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hedong2018',
    database: 'blog'
})
// var connection= mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '123456',
//     database: 'blog'
// })
// var connection= mysql.createConnection({
//     host: 'http://39.97.98.149',
//     user: 'root',
//     password: '123456',
//     database: 'blog'
// })
connection.connect()

module.exports= connection