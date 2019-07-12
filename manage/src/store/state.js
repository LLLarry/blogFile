let obj= {
    userInfo: {},
    routes: [],
    logoutTime: 0
}

let state= JSON.parse(sessionStorage.getItem('state') || JSON.stringify(obj))
export default state