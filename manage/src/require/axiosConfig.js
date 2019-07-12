
import axios from 'axios'
import store from '../store/index'
// export default axios.interceptors.request.use(function(config){ 
//             // 获取token
//             let token= store.state.token
//             console.log(token,'token')
//                 if(token){
//                     config.headers.accessToken= token
//                     return config
//                 }
//                 config.headers.accessToken= ''
//                 return config
//             }
//             ,function (error){
//                 return  Promise.reject(error)
//             })
export default {}