import { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MyRoutes from "./routes";
import Navbar from "./component/layout/navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <MyRoutes />
    </Router>
  );
}

export default App;
