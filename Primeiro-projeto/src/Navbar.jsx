import React from 'react';
import './Navbar.css';
function Navbar() {
  return (
    <nav className="navbar">
      <h1 className='text'>Stranger Things</h1>
      <ul className="navlinks">
        <li><a href="#">Netflix</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Sobre</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;