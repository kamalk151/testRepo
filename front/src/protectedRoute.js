import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import {AppContext} from './context'
import Home from "./component/index";
import Login from "./component/login";

/**
 * Function to handle the protected route
 * @returns 
 */
function ProtectedRoute({component, props}) {
  const contextApi = useContext(AppContext)
  console.log(contextApi)
  return (    
     <Route {...props} element={ <component />} /> 
  );
}

export default ProtectedRoute;