import React from "react";
import AboutAuthorIcon from "../assets/about_author.png";
import "../main.css";

const AboutApp = () => (
  <div className="page-container">
    <h1 className="heading">About the Author</h1>
    <img className="page-icon" src={AboutAuthorIcon} alt="about-app" />
  </div>
);

export default AboutApp;