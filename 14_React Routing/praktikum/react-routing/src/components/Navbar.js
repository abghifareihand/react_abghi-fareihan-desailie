import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style/Navbar.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            onClick={() => handleClick("home")}
            activeClassName={activeLink === "home" ? "active-link" : ""}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={() => handleClick("about")}
            activeClassName={activeLink === "about" ? "active-link" : ""}
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
