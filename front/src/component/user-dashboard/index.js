import { useEffect, useState, useContext, PureComponent } from "react";
import io from 'socket.io-client'
import { Routes, Route } from "react-router-dom";
import "./../../assets/user/css/font-face.css";
import "./../../assets/user/js/main.js";
import "./../../assets/user/vendor/font-awesome-4.7/css/font-awesome.min.css";
import "./../../assets/user/vendor/font-awesome-5/css/fontawesome-all.min.css";
import "./../../assets/user/vendor/mdi-font/css/material-design-iconic-font.min.css";
import "./../../assets/user/vendor/animsition/animsition.min.css";
import "./../../assets/user/vendor/bootstrap-progressbar/bootstrap-progressbar-3.3.4.min.css";
import "./../../assets/user/vendor/wow/animate.css";
import "./../../assets/user/vendor/css-hamburgers/hamburgers.min.css";
import "./../../assets/user/vendor/select2/select2.min.css";
import "./../../assets/user/vendor/perfect-scrollbar/perfect-scrollbar.css";
import "./../../assets/user/css/theme.css";

import axios from "../api/baseAxios";
import Sidebar from "./layout/sidebar";
import Header from "./layout/header";
import Dashboard from "./dashboard";
import Setting from "./setting";
import Chat from "./chat1";
import Profile from "./profile";
import AppContext from "../../context";

class Index extends PureComponent {
  
  static contextType = AppContext;
  constructor() {
    super();
    this.state = {
      userData: {},
      socket:''
    };
  }

  componentDidMount() {
    const { users } = this.context;
    console.log(users, "users context");
    this.setState({ userData: users }, () => {
      console.log(this.state, " updated state value");
    });
  }

  render() {
    return (
      <div className=" layout user-layout">
        <div className="page-wrapper">
          {/* MAIN CONTENT */}
          <div className="page-container">
            <Sidebar />
            <Header />
            <div className="main-content">
              <div className="section__content section__content--p30">
                <div className="container-fluid">
                  <Routes>
                    <Route
                      path="/"
                      element={<Dashboard users={this.state.userData} />}
                    />
                    <Route
                      path="/dashboard"
                      element={<Dashboard users={this.state.userData} />}
                    />
                    <Route
                      path="chat"
                      element={<Chat users={this.state.userData} />}
                    />
                    <Route
                      path="setting"
                      element={<Setting users={this.state.userData} />}
                    />
                    <Route
                      path="profile"
                      element={<Profile users={this.state.userData} />}
                    />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
