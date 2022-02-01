import { useEffect, useState, useContext, Component } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import "./../../assets/user/css/font-face.css"; 

function MessageInput({socket}) {
    const [value, setValue] = useState('');
    const submitForm = (e) => {
      e.preventDefault();
      socket.emit('message', value);
      setValue('');
    };
  
    return (
      <form onSubmit={submitForm}>
        <input
          autoFocus
          value={value}
          placeholder="Type your message"
          onChange={(e) => {
            setValue(e.currentTarget.value);
          }}
        />
      </form>
    );
}


export default MessageInput;
