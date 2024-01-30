import React, { useState } from 'react';
import { FaHome } from "react-icons/fa";
import { MdAddChart } from "react-icons/md";
import { RiLogoutBoxFill } from "react-icons/ri";
import { TbHeartRateMonitor } from "react-icons/tb";
import './Menu.css';

const MenuNav = ({ onChangeWindow }) => {
  const [activeNavItem, setActiveNavItem] = useState('monitor');

  const handleItemClick = (name) => {
    setActiveNavItem(name);
    onChangeWindow(name);
  };

  return (
    <main>
      <nav className="main-menu">
        <header>
          <FaHome size={32} color="white" className="home" />
          <h1>DudeMonitor</h1>
        </header>
        <ul>
          <li className={`nav-item ${activeNavItem === 'monitor' ? 'active' : ''}`}>
            <b></b>
            <b></b>
            <a href="#" name="monitor" onClick={() => handleItemClick('monitor')}>
              <i className="fa fa-user nav-icon"> <TbHeartRateMonitor size={32} /></i>
            </a>
          </li>

          <li className={`nav-item ${activeNavItem === 'cadastro' ? 'active' : ''}`}>
            <b></b>
            <b></b>
            <a href="#" name="cadastro" onClick={() => handleItemClick('cadastro')}>
              <i className="fa fa-user nav-icon"><MdAddChart size={32} /></i>
            </a>
          </li>

          <li className={`nav-item ${activeNavItem === 'logout' ? 'active' : ''}`}>
            <b></b>
            <b></b>
            <a href="#" name="logout" onClick={() => handleItemClick('logout')}>
              <i className="fa fa-calendar-check nav-icon"><RiLogoutBoxFill size={32} /></i>
            </a>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default MenuNav;
