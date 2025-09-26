import { NavLink } from 'react-router';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io"; 
import '../styles/navbar.css';
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return ( 
    <nav>
      <div className="nav-center">
        {/* Desktop logo */}
        <div className="logo desktop-logo">
          <h2>Blessing's <span>Elixirs</span></h2>
        </div>

        {/* Slide-in menu */}
        <ul className={`links ${isOpen ? "active" : ""}`}>
          <div className="menu-header">
            <div className="logo mobile-logo">
              <h2>Blessing's <span>Elixirs</span></h2>
            </div>

           
            <button 
              className="close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <IoMdClose />
            </button>
          </div>

          <li>
            <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
          </li>
          <li>
            <NavLink to="/training" onClick={() => setIsOpen(false)}>Training</NavLink>
          </li>
        </ul>

        {/* Hamburger toggle */}
        <button
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  );
}
 
export default Navbar;
