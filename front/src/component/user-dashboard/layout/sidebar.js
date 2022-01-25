import { Link } from "react-router-dom";
import MobileMenu from "./mobileMenu";
import logo from "./../../../assets/images/icon/logo.png";

function Sidebar() {
  return (
    <>
      {/* HEADER MOBILE  */}
      <MobileMenu />
      {/* END HEADER MOBILE *}

      {/* MENU SIDEBAR */}
      <aside className="menu-sidebar d-none d-lg-block">
        <div className="logo">
          <Link to={"/"}>
            <img src={logo} alt="Cool Admin" />
          </Link>
        </div>
        <div className="menu-sidebar__content js-scrollbar1">
          <nav className="navbar-sidebar">
            <ul className="list-unstyled navbar__list">
              <li className="active has-sub">
                <Link to="/user/dashboard">
                  <i className="fas fa-tachometer-alt"></i>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/user/chat">
                  <i className="fas fa-table"></i>
                  Chat Board
                </Link>
              </li>
              <li>
                <Link to="/user/profile">
                  <i className="fas fa-table"></i>
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/user/setting">
                  <i className="fas fa-table"></i>
                  Setting
                </Link>
              </li>
              <li>
                <Link to="/logout">
                  <i className="fas fa-table"></i>
                  Logout
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
