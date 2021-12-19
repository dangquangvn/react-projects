import React, { useState, useRef, useEffect } from "react";
import { FaCreditCard } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const {
    isSubmenuOpen,
    leftPosition,
    location,
    currentSubmenu: { page, links },
  } = useGlobalContext();
  const [columns, setColumns] = useState("col-2");
  const submenuRef = useRef(null);
  // const { page, links } = currentSubmenu;
  useEffect(() => {
    setColumns("col-2");
    const submenu = submenuRef.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    if (links.length === 3) {
      setColumns("col-3");
    } else if (links.length > 3) {
      setColumns("col-4");
    }
    console.log(
      "🚀TCL: ~ file: Submenu.js ~ line 21 ~ useEffect ~ links.length",
      links.length,
      columns
    );
  }, [location, page, links]);
  return (
    <aside
      className={`submenu ${isSubmenuOpen ? "show" : ""}`}
      ref={submenuRef}
      // style={{ "--left-position": `${leftPosition}px` }}
    >
      <h4>{page}</h4>
      {/* <div className='submenu-center'> */}
      {/* <h4>Products</h4> */}
      <ul className={`submenu-center ${columns}`}>
        {links.map(({ label, icon, url }, index) => (
          <li key={index}>
            <a href={url}>
              {icon}
              {label}
            </a>
          </li>
        ))}
        {/* <li>
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
        </li> */}
      </ul>
      {/* </div> */}
    </aside>
  );
};

export default Submenu;
