import React, { useRef, useState } from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { openSubmenu, closeSubmenu, openSidebar, sublinks } =
    useGlobalContext();
  // console.log("🚀TCL: ~ file: Navbar.js ~ line 8 ~ Navbar ~ data", data);
  // const submenuRef = useRef();
  const handleLocationSubmenu = (e) => {
    const name = e.target.textContent;
    const btnCoordinate = e.target.getBoundingClientRect();
    const center = (btnCoordinate.left + btnCoordinate.right) / 2;
    const bottom = btnCoordinate.bottom - 3;
    const position = { center, bottom };
    console.log(
      "🚀TCL: ~ file: Navbar.js ~ line 14 ~ handleLocationSubmenu ~ btnCoordinate",
      btnCoordinate
    );
    openSubmenu(name, position);
    // const position = submenuRef.current;
    console.log(name);
  };
  const handleDisplaySubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };
  return (
    <nav className='nav ' onMouseOver={handleDisplaySubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='Stripe' className='nav-logo' />
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {sublinks.map(({ page }, index) => {
            return (
              <li
                // ref={submenuRef}
                className='link-btn'
                key={index}
                // onMouseEnter={openSubmenu}
                onMouseOver={handleLocationSubmenu}
                // onMouseLeave={closeSubmenu}
              >
                <button className='link-btn'>{page}</button>
              </li>
            );
            // return <MapItemComponent index={index} page={page} />;
          })}
          {/* <li
            className='link-btn'
            onMouseEnter={openSubmenu}
            // onMouseEnter={() => console.log("cuoc song ma")}
            onMouseLeave={closeSubmenu}
          >
            Products
          </li>
          <li className='link-btn'>Developer</li>
          <li className='link-btn'>Company</li> */}
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  );
};

// const MapItemComponent = ({ index, page }) => {
//   const {
//     openSubmenu,
//     closeSubmenu,
//     openSidebar,
//     sublinks,
//     setLeftPosition,
//     handleLeftPosition,
//   } = useGlobalContext();
//   const submenuRef = useRef();
//   const handleLocationSubmenu = () => {
//     const positionLeft = submenuRef.current.getBoundingClientRect().left;
//     const positionWidth = submenuRef.current.getBoundingClientRect().width;
//     const position = positionLeft + positionWidth / 2;
//     openSubmenu();
//     handleLeftPosition(position);
//     // const position = submenuRef.current;
//     console.log(
//       "🚀TCL: ~ file: Navbar.js ~ line 68 ~ //handleLocationSubmenu ~ position",
//       position,
//       positionLeft,
//       positionWidth
//     );
//   };
//   return (
//     <li
//       ref={submenuRef}
//       key={index}
//       // onMouseEnter={() => openSubmenu(position)}
//       onMouseOver={handleLocationSubmenu}
//     >
//       <button className='link-btn'>{page}</button>
//     </li>
//   );
// };

export default Navbar;
