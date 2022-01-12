import React, { useState, useMemo, Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from './component/api/baseAxios'
import cookie from 'react-cookies'
import { BrowserRouter as Router } from "react-router-dom";
import MyRoutes from "./routes";
import { AppContext } from "./context";
import Navbar from "./component/layout/navbar";

class App extends Component {
  constructor() {
    super()
    this.state = {
      loginStatus: cookie.load('loginStatus') !== undefined ? cookie.load('loginStatus') : false,
      userData: '',
      token: false
    }
    console.warn(cookie.load('loginStatus'));
    this.dispatchUserEvent = this.dispatchUserEvent.bind(this)

    if(!this.state.loginStatus) {
      RefreshToken(this.dispatchUserEvent)
      alert(cookie.load('loginStatus'))
    } 

  } 

  dispatchUserEvent = function (actionType, payload = {}) {
    switch (actionType) {
      case "login":
        console.log(this.state,' stat ')
        this.setState({...this.state, ...payload });
        return;
      case "logout":
        this.setState({ ...this.state, loginStatus: false, userData: "", token: false });
        return;
      case "updateToken":
        this.setState({ ...this.state, token: payload.token });
        return;
      default:
        return;
    }
  };

  

  render() {
     
    return (
      
      <AppContext.Provider value={{ dispatchUserEvent: this.dispatchUserEvent, users: this.state }}>
        <Router>
          <Navbar users={this.state} />
          <React.StrictMode>
            <MyRoutes />
          </React.StrictMode>
        </Router>
      </AppContext.Provider>
    );
  }
}

function RefreshToken(dispatchUserEvent) {
  console.log('refreshj')

  axios.post('auth/refresh-token')
    .then(res => {
      console.log(res)
      dispatchUserEvent("login", {
        loginStatus: true,
        userData: res.data,
        token: res.data.token,
      });
    }).catch(err => {
      console.warn(err)
    })

  return true
}
export default App;
