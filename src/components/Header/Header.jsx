import React, { useContext } from "react";
import Novigation from "./Novigation";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ModalContext, ModalProvider } from "../../contexts";
import image from "../../img/683.jpg";
import "./header.scss";

const Header = () => {
  const [showBurger, setShowBurger] = useState(false);
  const burgerFunc = () => {
    setShowBurger(!showBurger);
  };
  const { openModal, closeModal } = useContext(ModalContext);
  const handleClickFirstButton = () => {
    openModal({
      title: "Opened by First Button",
    });
  };

  return (
    <ModalProvider>
      <header className="header">
        <Link className="header__logo" to={"/"}>
          <h2>ЭМАКОМ</h2>
        </Link>
        <nav className="header__nav">
          <ul className={showBurger ? 'header__menu showBurger' : 'header__menu'}>
            <li className="header__menu-link">
              <Link to={"/obout"}>О_компании</Link>
            </li>
          </ul>
          <div className="burger" onClick={burgerFunc}>
            {showBurger ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars fax"></i>}
          </div>
        </nav>
        <div className="controls">
          <button
            onClick={handleClickFirstButton}
            className="header__right-btn"
          >
            СВЯЗАТЬСЯ <i className="fa-solid fa-phone"></i>
          </button>
        </div>
      </header>
    </ModalProvider>
  );
};
export default Header;
