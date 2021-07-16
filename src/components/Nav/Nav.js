import React from 'react';
import './Nav.css';
import { NavLink, useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <nav>
      {pathname === '/' ? (
        <Link
          to='movieCards'
          spy={true}
          smooth={true}
          duration={500}
          className='nav-button'
        >
          Browse Movies
        </Link>
      ) : (
        <NavLink to='/' activeClassName='nav-button'>
          Home
        </NavLink>
      )}
    </nav>
  );
};

export default Nav;
