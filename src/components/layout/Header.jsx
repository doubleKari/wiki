import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../assets/images/logo.png";

const Header = () => {
  let Links = [
    { name: "INFO", link: "info" },
    { name: "CHARACTER", link: "characters" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <header className="shadow-md w-full fixed top-0 left-0 font-herculanum ">
      <div className="flex  md:flex items-center justify-between  py-4 md:px-10 px-7 bg-orange-800">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" className="w-48" />
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl w-11 h-11 cursor-pointer md:hidden"
        >
          <RxHamburgerMenu
            name={open ? "hidden" : "block"}
            className="w-full h-full text-orange-400"
          />
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0  absolute md:static font-bold bg-yellow-500 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-28 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <NavLink
                to={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
