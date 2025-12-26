import React, { useState } from 'react';
import burgerMenuIcon from '../../assets/download.svg';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = window.location.pathname;
  const getActiveClassName = path =>
    path === pathName ? 'text-white bg-green' : '';
  const menuClassList = isMenuOpen
    ? 'flex flex-col fixed top-15 left-0 w-full bg-[#2C3E50] p-4'
    : 'hidden';
  return (
    <nav className=" text-white flex items-center justify-between p-4 md:p-10 bg-[#2C3E50]">
      <Link className="font-bold text-xl" to="/">
        Frame work
      </Link>
      <div className={`${menuClassList} md:flex gap-6 pe-6`}>
        <NavLink to="/about" className={getActiveClassName('/about')}>
          About
        </NavLink>
        <NavLink to="/portfolio" className={getActiveClassName('/portfolio')}>
          Portfolio
        </NavLink>
        <NavLink to="/contact" className={getActiveClassName('/contact')}>
          Contact
        </NavLink>
      </div>
      <button
        className="block md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <img width={32} src={burgerMenuIcon} alt="burger-menu" />
      </button>
    </nav>
  );
}
