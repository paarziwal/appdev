/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/Navbar.css";
import i from '../assets/images/logo.png';

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/">
            <img src={i} alt="Logo" style={{ width: '4rem', maxWidth: '4rem', height: '4rem', marginRight: '20px' }} />
          </NavLink>
          <h3 style={{ fontFamily: 'cursive', color: 'white',paddingRight:'56rem' }}>Edu Connect</h3>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times icon" : "fas fa-bars icon"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink exact to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>

           


            <li className="nav-item">
              <NavLink
                exact
                to="/aboutus"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
               About Us
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
               Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;