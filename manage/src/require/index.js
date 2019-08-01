import ajax from './ajax'
const base_url= 'http://127.0.0.1:8888/manage'
const ueditor_url= 'http://127.0.0.1:8888/ueditor'
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

export const uploadArticle= function(data){ //上传文章
    console.log(data)
    return ajax({
        url: ueditor_url+'/uploadArticle',
        method: 'post',
        data: data
    })
}

export const getDataCensus= function(){ //获取数据统计
    return ajax({
        url: base_url+'/getDataCensus',
        method: 'post'
    })
}

export const isCheckDayScanHistory= function(){ //当登录访问后台首页的时候，访问当天浏览次数的时间，和现在时间相比（2019-08-01）如果小于24小时候则不操作，大于24小时，将今日
    // 访问量置为0，时间设置为今天时间
    return ajax({
        url: base_url+'/isCheckDayScanHistory',
        method: 'post'
    })
}