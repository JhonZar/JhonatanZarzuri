import React, { useState } from 'react';
import './Header.css';
import Logo from './Logo'; // Ajusta la ruta según la estructura de tu proyecto

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="glassmorphism text-white shadow-md fixed w-full z-10 top-0 left-0">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <Logo />
          <span className="ml-2 text-xl font-bold">JZdev</span>
        </div>
        <nav className={`md:flex items-center transition-transform duration-300 ${menuOpen ? 'block' : 'hidden'} md:block`}>
          <NavItem href="#about" onClick={toggleMenu}>About</NavItem>
          <NavItem href="#projects" onClick={toggleMenu}>Projects</NavItem>
          <NavItem href="#contact" onClick={toggleMenu}>Contact</NavItem>
        </nav>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="outline-none mobile-menu-button" aria-label="Toggle menu">
            <svg className="w-6 h-6 text-white hover:text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

const NavItem = ({ href, onClick, children }) => (
  <a href={href} onClick={onClick} className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400 mr-4 transition duration-300 nav-item">
    {children}
  </a>
);

export default Header;
