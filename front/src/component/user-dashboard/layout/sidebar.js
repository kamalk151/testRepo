import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      {/* HEADER MOBILE  */}

      <header className="header-mobile d-block d-lg-none">
        <div className="header-mobile__bar">
          <div className="container-fluid">
            <div className="header-mobile-inner">
              <a className="logo" href="index.html">
                <img src="images/icon/logo.png" alt="CoolAdmin" />
              </a>
              <button className="hamburger hamburger--slider" type="button">
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
            </div>
          </div>
        </div>
        <nav className="navbar-mobile">
          <div className="container-fluid">
            <ul className="navbar-mobile__list list-unstyled">
              <li className="has-sub">
                <Link to="" className="js-arrow">
                  <i className="fas fa-tachometer-alt"></i>Dashboard
                </Link>
              </li>
              <li>
                <Link to="">
                  <i className="fas fa-table"></i> Chat Board
                </Link>
              </li>
              <li>
                <Link to="">
                  <i className="fas fa-table"></i> Profile
                </Link>
              </li>
              <li>
                <Link to="">
                  <i className="fas fa-table"></i> Setting
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {/* END HEADER MOBILE *}

      {/* MENU SIDEBAR */}
      <aside className="menu-sidebar d-none d-lg-block">
        <div className="logo">
          <a href="#">
            <img src="images/icon/logo.png" alt="Cool Admin" />
          </a>
        </div>
        <div className="menu-sidebar__content js-scrollbar1">
          <nav className="navbar-sidebar">
            <ul className="list-unstyled navbar__list">
              <li className="active has-sub">
                <Link to="/user/dashboard">
                  <i className="fas fa-tachometer-alt"></i>Dashboard
                </Link>
              </li>
              <li>
                <Link to="/user/chat">
                  <i className="fas fa-table"></i> Chat Board
                </Link>
              </li>
              <li>
                <Link to="/user/profile">
                  <i className="fas fa-table"></i> Profile
                </Link>
              </li>
              <li>
                <Link to="/user/setting">
                  <i className="fas fa-table"></i> Setting
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
