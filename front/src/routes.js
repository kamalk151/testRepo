import { Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./context";
import About from "./component/about";
import Home from "./component/index";
import Login from "./component/login";
import Service from "./component/service";
import Signup from "./component/signup";
import Forget from "./component/forget";
import Dashboard from "./component/user-dashboard/index";
import ChatPage from "./component/user-dashboard/chat";
import Setting from "./component/user-dashboard/setting";
import Profile from "./component/user-dashboard/profile";
import AdminDashboard from "./component/admin-dashboard/index";
import Logout from "./component/logout";

/* App Route Component */
function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service" element={<Service />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forget" element={<Forget />} />
      <Route path="/logout" element={<Logout />} />

      <Route
        path="/admin/*"
        element={
          <RequireAuth redirectTo="/login">
            <AdminDashboard />
          </RequireAuth>
        }
      />
      <Route
        path="/user/*"
        element={
          <RequireAuth redirectTo="/login">
            <Dashboard />
          </RequireAuth>
        }
      />      
    </Routes>
  );
}

/**
 * Component to authenticate route
 * @param {children}
 * @param {redirectTo}
 * @returns
 */
function RequireAuth({ children, redirectTo }) {
  const { users } = useContext(AppContext);
  console.log(users.loginStatus, "require path");
  let isAuthenticated = users.loginStatus;
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

export default MyRoutes;
