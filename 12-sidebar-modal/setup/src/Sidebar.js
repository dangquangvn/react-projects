import React, { useRef } from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { useGlobalContext } from "./context";
import { useOnClickOutside } from "./hooks/onClickOutsideHook";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  const sidebarRef = useRef();
  useOnClickOutside(sidebarRef, closeSidebar);
  return (
    <div
      className={`sidebar ${isSidebarOpen ? "show-sidebar" : ""}`}
      ref={sidebarRef}
    >
      <div className='sidebar-header'>
        <img src={logo} alt='coding addict' className='logo' />
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links.map(({ id, url, text, icon }) => (
          <li key={id}>
            <a href={url}>
              {icon} {text}
            </a>
          </li>
        ))}
      </ul>
      <ul className='social-icons'>
        {social.map(({ id, url, icon }) => (
          <li key={id}>
            <a href={url}>{icon}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
