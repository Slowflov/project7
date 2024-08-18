// src/components/Header.js
import React from 'react';
import '../styles/main.css';
import logo from '../assets/image/LOGO.png';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="header_inner">
        <img className="header_img" src={logo} alt="LOGO" />
        <ul className="header_list">
          <li className="header_item">
            <Link className="header_link" to="/">Accueil</Link>
          </li>
          <li className="header_item">
            <Link className="header_link" to="/Propos">A Propos</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;

