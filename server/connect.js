var connection= require('./mysql.js')
module.exports= function (selectStr){
    return new Promise((resolve,reject)=>{
            connection.query(selectStr,function(err,data){
                if(err){
                    reject(err)
                }else{
                    resolve(data)
                
                }
        }) 
    })
    
}
