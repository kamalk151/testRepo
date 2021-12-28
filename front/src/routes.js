import { Route, Routes, Link } from "react-router-dom";
import Home from "./component/index";

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default MyRoutes;
