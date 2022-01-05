import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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

  const dispatchUserEvent = function (actionType, payload = {}) {
    switch (actionType) {
      case "login":
        setUsers({ ...users, ...payload });
        return;
      case "logout":
        setUsers({ ...users, loginStatus: false, userData: "", token: false });
        return;
      default:
        return;
    }
  };

  return (
    <AppContext.Provider value={{ dispatchUserEvent, users }}>
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
