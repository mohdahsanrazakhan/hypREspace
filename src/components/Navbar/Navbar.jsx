import { useState, useEffect } from 'react'
import './Navbar.css'
import hypREspaceLogo from '../../assets/images/hypREspace.png'
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    sectionElement.scrollIntoView({ behavior: 'smooth' })
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClose = () => {
    setShowMenu(false)
  }

  return (
    <nav className='navbar'>
      <img className='hypREspace-logo' src={hypREspaceLogo} alt="hypREspace logo" />
        <ul className={`navbar-list ${showMenu ? 'show' : ''}`} onClick={handleClose}>
          <li onClick={() => scrollToSection("hero")}>Home</li>
          <li onClick={() => scrollToSection("mission")}>Mission</li>
          <li onClick={() => scrollToSection("ourvalues")}>Our Values</li>
          <li onClick={() => scrollToSection("partners")}>Partners</li>
          <li onClick={() => scrollToSection("contactus")}>Contact Us</li>
        </ul>
      <div className='menu' onClick={toggleMenu}>
        {!showMenu ? (<FiMenu />) : (<FiX />)}
      </div>


    </nav>
  )
}

export default Navbar