import React from "react";
import { FaBars } from "react-icons/fa";
import { links, SocialBar } from "./links";
import {useGlobalContext} from "./context";


const Navbar = () => {
  const {openSidebar} = useGlobalContext();
  
  return <nav className="nav">
    <header className="nav-header">
      <div className="nav-brand">
        <h4>Navbar</h4>
      </div>
      <button className="btn nav-toggler" onClick={openSidebar}>
        <FaBars className="nav-icon"></FaBars>
      </button>
      <div className="links-container">
        <ul className="nav-links">
          {
            links.map(link => {
              return <li key={link.id} className='link'>
                <a href={link.url}>
                  {link.text}
                </a>
              </li>
            })
          }
        </ul>
      </div>
    </header>
    <div className="social-links">
      <SocialBar></SocialBar>
    </div>
  </nav>;
};

export default Navbar;
