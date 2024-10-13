/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Header.scss";
import logoApple from "../../images/logo_apple.svg";

function Header() {
  //some//
 
  return (
    <div className="header">
      <div className="container">
        <div className="header__top">
          <a href="#" className="logo">
            <img src={logoApple} alt="logo" />
          </a>
          <nav className="menu">
            <ul className="menu__list">
              <li className="menu__item">
                <a href="#" className="menu__link">Info</a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">Product</a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">Contacts</a>
              </li>
              <li className="menu__item">
                <button href="#" className="menu__bts">BUY</button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header__content">
          <div className="h1 title"></div>
          <img src="imades" alt="" />
          <img src="imades" alt="" />
          <img src="imades" alt="" />
          <img src="imades" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
