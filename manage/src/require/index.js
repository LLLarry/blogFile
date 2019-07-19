import ajax from './ajax'
const base_url= 'http://127.0.0.1:8888/manage'
// const base_url= 'http://localhost:8888'
import './axiosConfig'
export const handleLogin= function (data){ //处理login
       return ajax({
                url: base_url+'/login',
                data: data
            })
}

export const getNewArticle= function (){ //请求newArticle
    return ajax({
             url: base_url+'/getNewArticle'
         })
}

export const upDataNewArticleStatus= function(data){ //更新最新文章的status
    data.id= data.id.toString()
    return ajax({
        url: base_url+'/upDataNewArticleStatus',
        data: data
    })
}

export const getDataNewArticleStatusNo= function(){
    return ajax({
        url: base_url+'/getDataNewArticleStatusNo',
    })
}