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
      <Route path="/forget" element={<Forget />} />
      <Route path="/logout" element={<Logout />} />

      <Route
        path="/login"
        element={
          <ProtectPage>
            <Login />
          </ProtectPage>
        }
      />
      <Route
        path="/signup"
        element={
          <ProtectPage>
            <Signup />
          </ProtectPage>
        }
      />
      <Route
        path="/admin/*"
        element={
          <RequireAuth userType="admin" redirectTo="/login">
            <AdminDashboard />
          </RequireAuth>
        }
      />
      <Route
        path="/user/*"
        element={
          <RequireAuth userType="user" redirectTo="/login">
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
function RequireAuth({ children, redirectTo, userType }) {
  const { users } = useContext(AppContext);
  console.log(users.loginStatus, "require path");
  let isAuthenticated = users.loginStatus;
  return isAuthenticated && userType === users.role ? (
    children
  ) : (
    <Navigate to={redirectTo} />
  );
}

/**
 * Component to protect pages
 * @param {children}
 * @param {redirectTo}
 * @returns
 */
function ProtectPage({ children }) {
  const { users } = useContext(AppContext);
  let isAuthenticated = users.loginStatus;
  return isAuthenticated && users.role !== "" && users.role !== undefined ? (
    <Navigate to={"/" + users.role} />
  ) : (
    children
  );
}

export default MyRoutes;
