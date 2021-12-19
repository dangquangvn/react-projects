import React, { useState, useRef, useEffect } from "react";
import { FaCreditCard } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const { isSubmenuOpen, leftPosition, location } = useGlobalContext();
  const submenuRef = useRef();
  useEffect(() => {
    const submenu = submenuRef.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location]);
  return (
    <aside
      className={`submenu ${isSubmenuOpen ? "show" : ""}`}
      ref={submenuRef}
      // style={{ "--left-position": `${leftPosition}px` }}
    >
      {/* <div className='submenu-center'> */}
      <h4>Products</h4>
      <ul className='submenu-center col-4'>
        <li>
          <a href=''>
            <FaCreditCard /> Payment
          </a>
        </li>
        <li>
          <a href=''>
            <FaCreditCard /> Payment
          </a>
        </li>
        <li>
          <a href=''>
            <FaCreditCard /> Payment
          </a>
        </li>
        <li>
          <a href=''>
            <FaCreditCard /> Payment
          </a>
        </li>
      </ul>
      {/* </div> */}
    </aside>
  );
};

export default Submenu;
