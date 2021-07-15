import React from 'react';
import './Header.css';

import Nav from './Nav';

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <img
          src='https://www.growstuff.org/crops/tomatillo.svg'
          className='logo-image'
          alt='A small, light green tomatillo.'
        />
        <h1>Rancid Tomatillos</h1>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
