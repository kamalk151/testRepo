import { Route, Routes } from "react-router-dom";
import About from "./component/about";
import Home from "./component/index";
import Login from "./component/login";
import Service from "./component/service";
import Signup from "./component/signup";
import Forget from "./component/forget";
import Dashboard from "./component/user-dashboard/dashboard";
import AdminDashboard from "./component/admin-dashboard/dashboard";

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service" element={<Service />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forget" element={<Forget />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}

export default MyRoutes;
