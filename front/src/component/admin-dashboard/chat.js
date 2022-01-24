import { useEffect, useState, useContext, Component } from "react";
import { useNavigate } from "react-router-dom";
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

class Chat extends Component {
  render() {
    
    return ( 
        <div className="col-lg-6">
          <div className="au-card au-card--no-shadow au-card--no-pad m-b-40 au-card--border">
            <div className="au-card-title">
              <div className="bg-overlay bg-overlay--blue"></div>
              <h3>
                <i className="zmdi zmdi-comment-text"></i>Chat 
              </h3>
              <button className="au-btn-plus">
                <i className="zmdi zmdi-plus"></i>
              </button>
            </div>
            
            <div className="au-inbox-wrap">
              <div className="au-chat au-chat--border">
                <div className="au-chat__title">
                  <div className="au-chat-info">
                    <div className="avatar-wrap online">
                      <div className="avatar avatar--small">
                        <img
                          src="images/icon/avatar-02.jpg"
                          alt="John Smith"
                        />
                      </div>
                    </div>
                    <span className="nick">
                      <a href="#">John Smith</a>
                    </span>
                  </div>
                </div>
                <div className="au-chat__content au-chat__content2 js-scrollbar5">
                  <div className="recei-mess-wrap">
                    <span className="mess-time">12 Min ago</span>
                    <div className="recei-mess__inner">
                      <div className="avatar avatar--tiny">
                        <img
                          src="images/icon/avatar-02.jpg"
                          alt="John Smith"
                        />
                      </div>
                      <div className="recei-mess-list">
                        <div className="recei-mess">
                          Lorem ipsum dolor sit amet elit
                        </div>
                        <div className="recei-mess">
                          Donec tempor viverra
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="send-mess-wrap">
                    <span className="mess-time">30 Sec ago</span>
                    <div className="send-mess__inner">
                      <div className="send-mess-list">
                        <div className="send-mess">
                          Lorem ipsum dolor sit amet elit
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="au-chat-textfield">
                  <form className="au-form-icon">
                    <input
                      className="au-input au-input--full au-input--h65"
                      type="text"
                      placeholder="Type a message"
                    />
                    <button className="au-input-icon">
                      <i className="zmdi zmdi-camera"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Chat;
