
import { Link, NavLink } from 'react-router';
import { GiHamburgerMenu } from "react-icons/gi";
import '../styles/navbar.css'
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
    return ( 
       <nav>
           <div className="nav-center">
             <div className="logo">
                <h2>Blessed-<span>Cocktail</span></h2>
             </div>
             <div>
                <ul className="links">
                  <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/training" className={({ isActive }) => isActive ? 'active' : ''}>Training</NavLink>
                  </li>
                </ul>
             </div>
                {/* Hamburger (stays at the end) */}
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