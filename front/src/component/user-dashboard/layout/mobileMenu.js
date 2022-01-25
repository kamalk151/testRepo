import { Link } from "react-router-dom";
import logo from "./../../../assets/images/icon/logo.png";

function MobileMenu() {
  return (
    <>
      {/* HEADER MOBILE  */}
      <header className="header-mobile d-block d-lg-none">
        <div className="header-mobile__bar">
          <div className="container-fluid">
            <div className="header-mobile-inner">
              <Link to={"/"} className="logo">
                <img src={logo} alt="CoolAdmin" />
              </Link>
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
      {/* END HEADER MOBILE */}
    </>
  );
}

export default MobileMenu;
