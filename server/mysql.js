
var mysql= require('mysql')
var connection= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hedong2018',
    database: 'blog'
})
connection.connect()

module.exports= connection