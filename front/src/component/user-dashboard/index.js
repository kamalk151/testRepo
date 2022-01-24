import { useEffect, useState, useContext, Component } from "react";
import { Routes,Route } from "react-router-dom";
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
import Chat from "./chat";
import Profile from "./profile";

class Index extends Component {
  render() {
    return (
      <div className=" layout user-layout">
        <div className="page-wrapper">
          {/* MAIN CONTENT */}
          <div class="page-container">
            <Sidebar />
            <Header />
            <div className="main-content">
              <div className="section__content section__content--p30">
                <div className="container-fluid">
                  <Routes>
                    <Route path="/" element = {<Dashboard />} />
                    <Route path="chat" element = {<Chat />} />  
                    <Route path="setting" element = {<Setting />} />  
                    <Route path="profile" element = {<Profile />} />  
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

export default  Index;
