import { useState } from 'react';
import { FaUserAlt, FaBook, FaCertificate, FaSignOutAlt, FaBars } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import "../assets/css/Sidebar.css";
import logo from "../assets/images/logo.png";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItems = [
    {
      path: "/profile",
      name: "Profile",
      icon: <FaUserAlt />
    },
    {
      path: "/institute",
      name: "Institutes",
      icon: <FaBook />
    },
    {
      path: "/enrolledcourse",
      name: "EnrolledCourses",
      icon: <FaCertificate />
    },
    // {
    //   path: "/points",
    //   name: "Points",
    //   icon: <FaTrophy />
    // },
    {
      path: "/login",
      name: "Logout",
      icon: <FaSignOutAlt />
    }
  ];

  return (
    <div className="sidebar-container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className={`Sidebar ${isOpen ? 'open' : ''}`}>
        <div className="top-section">
          <div style={{ display: isOpen ? "block" : "none" }} className="sidebar-logo">
            <img src={logo} alt="Logo" style={{ width: '80px', height: '80px' }} />
          </div>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItems.map((item, index) => (
          <NavLink to={item.path} key={index} className="sidebar-link" activeClassName="sidebar-active">
            <div className="sidebar-icon">{item.icon}</div>
            <div style={{ display: isOpen ? "block" : "none" }} className="link-text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      {children}
    </div>
  )
}

export default Sidebar;
