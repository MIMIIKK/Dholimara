import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Navbar for larger screens */}
      <nav className="navbar">
        <ul>
        <li className='logo'>DHOLIMARA</li>
          <li>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/explore' className={({ isActive }) => (isActive ? 'active' : '')}>Explore</NavLink>
          </li>
          <li>
            <NavLink to='/gallery' className={({ isActive }) => (isActive ? 'active' : '')}>Gallery</NavLink>
          </li>
          <li>
            <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : '')}>About us</NavLink>
          </li>
          <li>
            <NavLink to='/contact' className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
          </li>
        </ul>
      </nav>

      {/* Sidebar and Toggle button for smaller screens */}
      <button className="toggle-btn" onClick={toggleSidebar}>
        ☰
      </button>

      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul>
        <li className='logo'>DHOLIMARA</li>
          <li>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/explore' className={({ isActive }) => (isActive ? 'active' : '')}>Explore</NavLink>
          </li>
          <li>
            <NavLink to='/gallery' className={({ isActive }) => (isActive ? 'active' : '')}>Gallery</NavLink>
          </li>
          <li>
            <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : '')}>About us</NavLink>
          </li>
          <li>
            <NavLink to='/contact' className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
