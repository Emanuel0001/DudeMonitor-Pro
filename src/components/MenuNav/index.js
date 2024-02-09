import React, { useState } from 'react';
import { FaHome } from "react-icons/fa";
import { MdAddChart } from "react-icons/md";
import { TbHeartRateMonitor } from "react-icons/tb";
import { FaWifi } from "react-icons/fa";
import './Menu.css';
import Buttonlogout from '../logout';

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
          <h1 >DudeMonitor</h1>
        </header>
        <ul>
          <li className={`nav-item ${activeNavItem === 'monitor' ? 'active' : ''}`}>
            <b></b>
            <b></b>
            <a href="#" name="monitor" onClick={() => handleItemClick('monitor')}>
              <i className="fa fa-user nav-icon"> <TbHeartRateMonitor size={32} /></i>
            </a>
          </li>

          <li className={`nav-item ${activeNavItem === 'antenas' ? 'active' : ''}`}>
            <b></b>
            <b></b>
            <a href="#" name="antenas" onClick={() => handleItemClick('antenas')}>
              <i className="fa fa-user nav-icon"><FaWifi size={32} /></i>
            </a>
          </li>

          <li className={`nav-item ${activeNavItem === 'cadastro' ? 'active' : ''}`}>
            <b></b>
            <b></b>
            <a href="#" name="cadastro" onClick={() => handleItemClick('cadastro')}>
              <i className="fa fa-user nav-icon"><MdAddChart size={32} /></i>
            </a>
          </li>
        </ul>
        <Buttonlogout />
      </nav>
    </main>
  );
};

export default MenuNav;
