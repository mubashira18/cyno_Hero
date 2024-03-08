import {React,useState} from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
export const Navbar = () => {
   const [isActive, setIsActive] = useState(false);

   const toggleMenu = () => {
     setIsActive(!isActive);
   };

  return (
    <div className="Navbar">
      <ul>
        <i
          className={`bx ${isActive ? "bx-x" : "bx-menu"}`}
          id="menu-icon"
          onClick={toggleMenu}
        ></i>
        <nav className='navbar'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/join">Join us</NavLink>
        </nav>
      </ul>
      <div
        className={`nav-bg ${isActive ? "active" : ""}`}
        onClick={toggleMenu}
      ></div>
    </div>
  );
}
