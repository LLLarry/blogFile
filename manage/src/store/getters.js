
export default {
    getUserInfo(state){
        let obj= {}
        if(JSON.stringify(state.userInfo) !== "{}"){
            obj= {
                name: state.userInfo.userName,
                classify: state.userInfo.classify ,
                token: state.userInfo.token
            }
        }
       return obj
      
    },
    getRoutes(state){
        return JSON.parse(JSON.stringify(state.routes))
    }
}