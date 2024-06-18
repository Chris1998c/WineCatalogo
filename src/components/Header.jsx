// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Immagine.png';

const Header = () => {
  return (
    <header className="header">
      <nav className="barra"></nav>
      <Link to="/">
        <img src={logo} alt="Vincent" className="logo" />
      </Link>
    </header>
  );
};

export default Header;
