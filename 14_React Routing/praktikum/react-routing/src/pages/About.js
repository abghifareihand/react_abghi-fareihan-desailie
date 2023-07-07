import React, { useState } from "react";
import { Route, Link, useRouteMatch } from "react-router-dom";
import AboutApp from "./AboutApp";
import AboutAuthor from "./AboutAuthor";
import "../components/style/Navbar.css";

const Navbar = () => (
  <div className="navbar">
    <Link to="/">Home</Link>
  </div>
);

const About = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleClick = (link) => {
    setActiveLink(link);
  };
  const { path, url } = useRouteMatch();

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Navbar />
          </li>
          <li>
            <Link
              to={`${url}/about-app`}
              onClick={() => handleClick("about-app")}
              className={activeLink === "about-app" ? "active-link" : ""}
            >
              About App
            </Link>
          </li>
          <li>
            <Link
              to={`${url}/about-author`}
              onClick={() => handleClick("about-author")}
              className={activeLink === "about-author" ? "active-link" : ""}
            >
              About Author
            </Link>
          </li>
        </ul>
      </nav>
      <Route exact path={`${path}/about-app`} component={AboutApp} />
      <Route exact path={`${path}/about-author`} component={AboutAuthor} />
      
    </div>
  );
};

export default About;
