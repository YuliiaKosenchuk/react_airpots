import "./HeaderContent.scss";
import airpotsForHeader from "../../images/airpods-blue.png";

export const HeaderContent = () => {
  return (
    <div className="header__content">
      <h1 className="title">
        <span className="title--air">Air</span>
        <span className="title--pod">Pod</span>
        <span className="title--s">S</span>
        <span className="title--m">M</span>
        <span className="title--ax">AX</span>
      </h1>
      <div className="header__content--img">
        <img src={airpotsForHeader} alt="" />
        <img src="imades" alt="" />
        <img src="imades" alt="" />
        <img src="imades" alt="" />
      </div>
    </div>
  );
};
