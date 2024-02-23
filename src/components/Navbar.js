import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [menuHidden, setMenuHidden] = useState(true);
  const location = useLocation();
  const [dropdownHidden, setDropdownHidden] = useState(true);

  const toggleMenu = () => {
    setMenuHidden(!menuHidden);
  };

  const toggleDropdown = () => {
    setDropdownHidden(!dropdownHidden);
  };

  return (
    <nav className="bg-gradient-to-br from-[#560e04] via-red-800 to-[#f43c0e] fixed left-0 right-0 top-0 z-50">
      <div className="flex flex-wrap items-center justify-between md:p-4 lg:p-0">
        <div className="p-2 px-5">
          <img
            className="w-[150px] cursor-pointer"
            src="https://www.iitbracing.org/assets/Blog-post/racing_website_logo_white.png"
            alt="logo"
          />
        </div>
        <div
          className="p-3 cursor-pointer lg:hidden"
          id="menu-button"
          onClick={toggleMenu}
        >
          <img
            className="w-6 h-6"
            src="/static_files/svgs/bars.svg"
            alt="menu"
          />
        </div>
        <div
          className={
            menuHidden
              ? "hidden w-screen px-3 lg:block lg:w-auto"
              : "w-screen px-3 lg:block lg:w-auto"
          }
          id="menu"
        >
          <ul className="font-semibold text-center text-white uppercase transform md:p-2 md:m-3 lg:-skew-x-12 lg:p-0 lg:m-0 lg:flex lg:divide-x">
          <li
              className={`pb-[10px] my-2 text-black bg-white shadow-xl md:pt-3 md:px-7 nav-item lg:m-0 ${
                location.pathname === "/" ? "bg-white " : "bg-gradient-to-r from-blue-900 to-blue-500 text-white"
              }`}
            >
              <div className="transform lg:skew-x-12">
                <div className="md:text-xl">
                    <Link to={'/'} onClick={() => window.scrollTo(0, 0)}>
                     Home
                    </Link>
                 
                  {/* <span className="text-lg font-thin">season 1</span> */}
                </div>
              </div>
            </li>
            <li
              className={`p-0 my-2 text-black bg-white shadow-xl md:pt-3 md:px-7 nav-item lg:m-0 ${
                location.pathname === "/cars" ? "bg-white " : "bg-gradient-to-r from-blue-900 to-blue-500 text-white"
              }`}
            >
              <div className="transform lg:skew-x-12">
                <Link to={'/cars'} onClick={() => window.scrollTo(0, 0)}>
                <div className="md:text-xl text-center">Cars</div>
                </Link>
                  
               
              </div>
            </li>
            <li
              className={`p-0 my-2 text-black bg-white shadow-xl md:pt-3 md:px-7 nav-item lg:m-0 ${
                location.pathname === "/team" ? "bg-white " : "bg-gradient-to-r from-blue-900 to-blue-500 text-white"
              }`}
            >
              <div className="transform lg:skew-x-12">
                <Link to="/team" onClick={() => window.scrollTo(0, 0)}>
                  <div className="md:text-xl">Team</div>
                </Link>
              </div>
            </li>
            <li
              className={`p-0 my-2 text-black bg-white shadow-xl md:pt-3 md:px-7 nav-item lg:m-0 ${
                location.pathname === "/achievement" ? "bg-white " : "bg-gradient-to-r from-blue-900 to-blue-500 text-white"
              }`}
            >
              <div className="transform lg:skew-x-12">
                <Link to="/achievement" onClick={() => window.scrollTo(0, 0)}>
                  <div className="md:text-xl">Achievement</div>
                </Link>
              </div>
            </li>
      
            <li
              className={`p-0 my-2 text-black bg-white shadow-xl md:pt-3 md:px-7 nav-item lg:m-0 ${
                location.pathname === "/gallery" ? "bg-white " : "bg-gradient-to-r from-blue-900 to-blue-500 text-white"
              }`}
            >
              <div className="transform lg:skew-x-12">
                <Link to="/gallery" onClick={() => window.scrollTo(0, 0)}>
                  <div className="md:text-xl">Gallery</div>
                </Link>
              </div>
            </li>
            <li
              className={`p-0 my-2 text-black bg-white shadow-xl md:pt-3 md:px-7 nav-item lg:m-0 ${
                location.pathname === "/events" ? "bg-white " : "bg-gradient-to-r from-blue-900 to-blue-500 text-white"
              }`}
            >
              <div className="transform lg:skew-x-12">
              <Link to={'/events'} onClick={() => window.scrollTo(0, 0)}>
                  <div className="md:text-xl">Events</div>
              </Link>
              
               
              </div>
            </li>
            <div
              className={
                dropdownHidden
                  ? "hidden lg:absolute top-24 left-20"
                  : "lg:absolute top-24 left-20"
              }
              id="drp-list"
            >
              {/* Dropdown content */}
            </div>
            {/* Remaining list items */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
