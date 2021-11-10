import userType from './../Constants/user.type';

const initialUser = { user: {email:'', username:'' } , isAuth : false };

const userReducer = (state = initialUser, action) => {
  
  switch(action.type) {
    case userType.LOGIN:       
      return {
        ...state,
        user: {
          email: action.data.email,
          username: action.data.email
        },
        isAuth: true
      }    
    case userType.LOGOUT:
      return {
        ...state,
        user: {
          email: '',
          username: ''
        },
        isAuth: false
      }
      
    default:  return state;
  } 

}

export default userReducer;