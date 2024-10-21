/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Header.scss";
import logoApple from "../../images/logo_apple.svg";
import { Nav } from "../Nav/Nav";
import { HeaderContent } from "../HeaderContent/HeaderContent";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__top">
          <a href="#" className="logo">
            <img src={logoApple} alt="logo" />
          </a>
          <Nav />
        </div>
        <HeaderContent />
      </div>
    </div>
  );
};

export default Header;
