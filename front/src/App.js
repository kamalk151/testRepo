import React, { useState, useMemo, Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "./component/api/baseAxios";
import cookie from "react-cookies";
import { BrowserRouter as Router } from "react-router-dom";
import MyRoutes from "./routes";
import AppContext, { AppProvider } from "./context";
import Navbar from "./component/layout/navbar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loginStatus: false,
      userData: "",
      token: false,
      role: false,
      status: {
        active: "Active",
        inActive: "In-Active",
      },
    };
    this.dispatchUserEvent = this.dispatchUserEvent.bind(this);

    if (!this.state.loginStatus) {
      RefreshToken(this.dispatchUserEvent);
    }
  }

  dispatchUserEvent = function (actionType, payload = {}) {
    switch (actionType) {
      case "login":
        this.setState({ ...this.state, ...payload });
        console.log(this.state, " stat ");
        return;
      case "logout":
        this.setState({
          ...this.state,
          loginStatus: false,
          userData: "",
          token: false,
          role: false,
        });
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
      <AppProvider
        value={{ dispatchUserEvent: this.dispatchUserEvent, users: this.state }}
      >
        <Router>
          <Navbar users={this.state} />
          <React.StrictMode>
            <MyRoutes />
          </React.StrictMode>
        </Router>
      </AppProvider>
    );
  }
}

function RefreshToken(dispatchUserEvent) {
  console.log("onload refresh token");
  axios
    .post("auth/refresh-token")
    .then((res) => {
      console.log(res);
      dispatchUserEvent("login", {
        loginStatus: true,
        userData: res.data.data,
        token: res.data.token,
        role: res.data.role,
      });
    })
    .catch((err) => {
      console.warn(err);
    });

  return true;
}
export default App;
