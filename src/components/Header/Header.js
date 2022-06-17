import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import "./header.scss";
const Header = () => {
    return (
        <header className='header'>
        <Link className='header__logo' to={'/'}>
           <h2>ЭМАКОМ</h2>
        </Link>  
        <Link className='header__logo-link' to={'/obout'}>
          О компании
        </Link>   
        <button className='header__right-btn'>
        СВЯЗАТЬСЯ <i className="fa-solid fa-phone"></i>
         </button>
        </header>
);
};
export default Header;