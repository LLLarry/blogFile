
import axios from 'axios'
export default function (obj){
                    let method= obj.method || 'get'
                    let url= obj.url || '#'  
                    let params= obj.data || {}
                    return  axios({
                                method,
                                url,
                                params
                        });
                }