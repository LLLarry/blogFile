
import axios from 'axios'
// export default function (obj){
//                     let method= obj.method || 'get'
//                     let url= obj.url || '#'  
//                     let params= obj.data || {}
//                     return  axios({
//                                 method,
//                                 url,
//                                 params
//                         });
//                 }
export default function (obj){
        let method= obj.method || 'get'
        let url= obj.url || '#'  
        let params= obj.data || {}
        let data= obj.data || {}
       if(method== 'get'){
               return axios.get(url,{params:params})
       }else{
                return axios.post(url,{data:data})   
       }
    }