import { Link } from "react-router-dom";
import avtar1 from './../../../assets/images/icon/avatar-01.jpg'
import Search from './search'

function Header() {
  return (
    <header className="header-desktop">
      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="header-wrap">
            
            <Search />
            
            <div className="header-button">
              <div className="noti-wrap">
                <div className="noti__item js-item-menu">
                  <i className="zmdi zmdi-comment-more"></i>
                  <span className="quantity">1</span>                  
                </div>
                <div className="noti__item js-item-menu">
                  <i className="zmdi zmdi-email"></i>
                  <span className="quantity">1</span>                  
                </div>
                <div className="noti__item js-item-menu">
                  <i className="zmdi zmdi-notifications"></i>
                  <span className="quantity">3</span>                  
                </div>
              </div>
              <div className="account-wrap">
                <div className="account-item clearfix js-item-menu">
                  <div className="image">
                    <img  src={avtar1} alt="John Doe" />
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    //  HEADER DESKTOP
  );
}

export default Header;
