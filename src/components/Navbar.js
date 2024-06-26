import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => (
  <nav className='navbar navbar-dark bg-primary navbar-expand-lg'>
    <div className='container'>
      <div className='navbar-brand'>
        Search
      </div>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <NavLink exact="true" to="/" className='nav-link'>Home</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to="/about" className='nav-link'>About</NavLink>
        </li>
      </ul>
    </div>
  </nav>
)