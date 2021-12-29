import "./../../assets/login.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="App">
      <header className="App-header">
        <ul className="">
          <li className="inline pad-10">
            <NavLink to="/">Home </NavLink>
          </li>
          <li className="inline pad-10">
            <NavLink to="/service">Service </NavLink>
          </li>
          <li className="inline pad-10">
            <NavLink to="/about">About </NavLink>
          </li>
          <li className="inline pad-10">
            <NavLink to="/login">Login </NavLink>
          </li>
          <li className="inline pad-10">
            <NavLink to="/signup">SignUp </NavLink>
          </li>
          <li className="inline pad-10">
            <NavLink to="/dashboard">Dashboard </NavLink>
          </li>
          <li className="inline pad-10">
            <NavLink to="/admin-dashboard">Admin Dashboard </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Navbar;
