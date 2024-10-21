/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Nav.scss";

export const Nav = () => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <a href="#" className="menu__link">
            Info
          </a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__link">
            Product
          </a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__link">
            Contacts
          </a>
        </li>
        <li className="menu__item">
          <button href="#" className="menu__bts">
            BUY
          </button>
        </li>
      </ul>
    </nav>

  );
};
