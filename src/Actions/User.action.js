import userType from './../Constants/user.type'

const Login = (data) => {    
    console.log(data)
    return {
        type: userType.LOGIN,
        data: data
    }
}

const Logout = (data) => {
    console.log('logout', data)
    return {
        type: userType.LOGOUT,
        data:  ''
    }    
}

export default {Login, Logout}