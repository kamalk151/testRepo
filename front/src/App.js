import React, { useState, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from './component/api/baseAxios'
import { BrowserRouter as Router } from "react-router-dom";
import MyRoutes from "./routes";
import { AppContext } from "./context";
import Navbar from "./component/layout/navbar";

function App() {
  let [users, setUsers] = useState({
    loginStatus: false,
    userData: "",
    token: false,
  });

  useMemo(() => {    
    RefreshToken()
  },[])

  const dispatchUserEvent = function (actionType, payload = {}) {
    switch (actionType) {
      case "login":
        setUsers({ ...users, ...payload });
        return;
      case "logout":
        setUsers({ ...users, loginStatus: false, userData: "", token: false });
        return;
      case "updateToken":
        setUsers({ ...users, token: payload.token });
        return;
      default:
        return;
    }
  };

  return (
    <AppContext.Provider value={{ dispatchUserEvent, users }}>
      <Router>
        <Navbar users={users} />
        <React.StrictMode>          
          <MyRoutes />
        </React.StrictMode>
      </Router>
    </AppContext.Provider>
  );
}

function RefreshToken () {
  console.log('refreshj')
   
    axios.post('auth/refresh-token')
    .then(res=>{
      console.log(res)
    }).catch(err=>{
      console.warn(err);
     // res('good')
    })  
   
  return true
}
export default App;
