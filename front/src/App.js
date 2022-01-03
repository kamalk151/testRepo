import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, useResolvedPath } from "react-router-dom";
import MyRoutes from "./routes";
import {AppContext} from './context'
import Navbar from "./component/layout/navbar";

function App() {
  let [user,setUser] = useState([loginStatus=>false, userData=>{}])
  let dispatchAction = (actionType, payload) => {
    console.log(actionType, payload,'===========')
    switch(actionType){
      case 'login': 
       setUser([...user, ...payload])
       return;
      case 'logout': 
        setUser([...user, loginStatus=>false, userData=>{}])
        return 
      default : return 
    }
  };
  return (
    <AppContext.Provider value={{ user, dispatchAction }}>
    <Router>      
      <Navbar />
      <React.StrictMode>
        <MyRoutes />
      </React.StrictMode>
    </Router>
    </AppContext.Provider>
  );
}

export default App;
