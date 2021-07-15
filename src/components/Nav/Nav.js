import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav>
      <NavLink to='/' exact activeClassName='active' className='nav-button'>
        Home
      </NavLink>
      <Link
        to='movieCards'
        spy={true}
        smooth={true}
        duration={500}
        className='nav-button'
      >
        Browse Movies
      </Link>
    </nav>
  );
};

export default Nav;
