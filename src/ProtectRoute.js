import React,{useState} from 'react'
import {Route,Redirect,useHistory} from 'react-router-dom';
import useLocalStorag from './Components/customHooks/index'
import Login from './Components/Login'

function ProtectRoute({ component: Component, path:path, ...rest }) { 
  const userDetail = useLocalStorag({type:'get', itemKey: 'userDetail'})
  const history = useHistory()
  let [localPath,setLocalPath] = useState()
  let [component,setComponent] = useState()
  
  if(userDetail && userDetail.isAuth) {
    setLocalPath(path)
    setComponent(component)
  } else {
    setLocalPath('/login')
    setComponent(Login)
  }

  return (    

    <Route path={ localPath } 
      render = {component}/>    
    
  );
}
 
export default ProtectRoute;
