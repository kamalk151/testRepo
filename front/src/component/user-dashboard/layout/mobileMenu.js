import { Link } from "react-router-dom";
import logo from "./../../../assets/images/icon/logo.png";

function MobileMenu() {
  return (
    <>
      {/* HEADER MOBILE  */}
      {/* <!--Navbar--> */}
  <nav className="navbar navbar-light light-blue lighten-4">

  {/* <!-- Navbar brand --> */}
  <a className="navbar-brand" href="#">Navbar</a>

  {/* <!-- Collapse button --> */}
  <button className="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
    aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span className="dark-blue-text"><i
        className="fas fa-bars fa-1x"></i></span></button>

  {/* <!-- Collapsible content --> */}
  <div className="collapse navbar-collapse" id="navbarSupportedContent1">

    {/* <!-- Links --> */}
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
    </ul>
    {/* <!-- Links --> */}

  </div>
  {/* <!-- Collapsible content --> */}

</nav>
{/* <!--/.Navbar--> */}
      {/* END HEADER MOBILE */}
    </>
  );
}

export default MobileMenu;
