import { useEffect, useState, useContext, Component } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import Message from "./messages";
import MessageInput from "./messageInput";
import "./../../assets/user/css/font-face.css"; 

function Chat1() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    console.log(window.location.hostname,'=====')
    const newSocket = io(`http://${window.location.hostname}:1000`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

    return ( 
        <div className="col-lg-6">
          <div className="au-card au-card--no-shadow au-card--no-pad m-b-40 au-card--border">
            <div className="au-card-title">
              <div className="bg-overlay bg-overlay--blue"></div>
              <h3>
                <i className="zmdi zmdi-comment-text"></i> 
                Chat 
              </h3>
              {/* <button className="au-btn-plus">
                <i className="zmdi zmdi-plus"></i>
              </button> */}
            </div>
            
            <div className="au-inbox-wrap">
            
            { socket ? (
              <div className="chat-container">
                <Message socket={socket} />
                <MessageInput socket={socket} />
              </div>
            ) : (
              <div>Not Connected</div>
            )}
            </div>
          </div>
        </div>
    );
}

export default Chat1;
