import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router } from "react-router-dom";
import MyRoutes from "./routes";
import Navbar from "./component/layout/navbar";

function App() {
  return (
    <Router>
      
      <Navbar />
      <React.StrictMode>
        <MyRoutes />
      </React.StrictMode>
    </Router>
  );
}

export default App;
