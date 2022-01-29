import { Link } from "react-router-dom";
import MobileMenu from "./mobileMenu";
import logo from "./../../../assets/admin/images/icon/admin-logo.png";

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
                <Link to="/admin/dashboard">
                  <i className="fas fa-tachometer-alt"></i>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/admin/chat">
                  <i className="fas fa-table"></i>
                  Chat Board
                </Link>
              </li>
              <li>
                <Link to="/admin/customers">
                  <i className="fas fa-table"></i>
                  Customer
                </Link>
              </li>
              <li>
                <Link to="/admin/setting">
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
