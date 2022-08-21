import React, {useContext} from 'react';
import Novigation from './Novigation';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ModalContext, ModalProvider } from '../../contexts';
import image from "../../img/683.jpg" 
import "./header.scss";
const Header = () => {
  const { openModal, closeModal } = useContext(ModalContext);
  const handleClickFirstButton = ()=>{
openModal({
  title: 'Opened by First Button'
});
  }

    return (
      <ModalProvider>
        <header className='header'>
        <Link className='header__logo' to={'/'}>
           <h2>ЭМАКОМ</h2>
        </Link>  
        <Link className='header__logo-link' to={'/obout'}>
          О компании
        </Link>
        <div className='controls'> 
        <button onClick={handleClickFirstButton} className='header__right-btn'>
        СВЯЗАТЬСЯ <i className="fa-solid fa-phone"></i>
         </button>
        </div>
        </header>
      </ModalProvider>
        
);
};
export default Header;