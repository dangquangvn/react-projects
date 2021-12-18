import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  // const [showlinks, setShowLinks]
  const [isExpand, setExpand] = useState(false);
  // ref to div
  const linksContainerRef = useRef(null);
  // ref to out links list
  const linksRef = useRef(null);
  const handleToggler = () => {
    // console.log(linksRef);
    setExpand(!isExpand);
  };
  useEffect(() => {
    // if (isExpand) {
    //   linksRef.current.style.height = "200px";
    // } else {
    //   linksRef.current.style.height = `0px`;
    // }
    //& get height of links list
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    console.log(
      "🚀TCL: ~ file: Navbar.js ~ line 25 ~ useEffect ~ linksHeight",
      linksHeight
    );
    if (isExpand) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = `0px`;
    }
  }, [isExpand]);

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='Coding Addict' className='logo' />
          <button className='nav-toggle' onClick={handleToggler}>
            <FaBars />
          </button>
        </div>
        {/* <div className={`links-container ${isExpand ? 'show-container' : ''}`} ref={linksRef}> */}
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links &&
              links.map(({ id, url, text }) => (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              ))}
          </ul>
        </div>
        <ul className='social-icons'>
          {social &&
            social.map(({ id, url, icon }) => (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
