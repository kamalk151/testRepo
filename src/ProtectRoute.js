import React,{useState} from 'react'
import {Route,Redirect,useHistory} from 'react-router-dom';
import useLocalStorag from './Components/customHooks/index'

function ProtectRoute({ component: Component,  ...rest }) {
  const userDetail = useLocalStorag({type:'get', itemKey: 'userDetail'})
  const history = useHistory()
  let isAuthenticated = false
  let [localPath,setLocalPath] = useState()
  let [component,setComponent] = useState()
  
  if(userDetail && userDetail.isAuth) {
    // setLocalPath(path)
    isAuthenticated = true
   
    // setComponent(component)
  }
  return (
    <Route
      {...rest}  
      render={(props) =>         
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
 
export default ProtectRoute;
