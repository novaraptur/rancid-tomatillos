import React, { Component } from 'react';
import './Header.css';

import Nav from './Nav';

const Header = () => {
  return (
    <header>
      <img src='https://www.growstuff.org/crops/tomatillo.svg' className='logo' />
      <h1>Rancid Tomatillos</h1>
      <Nav />
    </header>
  )
}

export default Header;
