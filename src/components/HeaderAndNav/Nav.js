import React from 'react';
import './Nav.css';

const Nav = ({navigate}) => {
  function handleClick(event) {
    event.preventDefault();
    navigate();
  }

  return (
    <nav>
      <button className='nav-button' onClick={event => handleClick(event)}>Browse</button>
      <button className='nav-button'>Nav Button</button>
      <button className='nav-button'>Nav Button</button>
    </nav>
  );
}

export default Nav;
