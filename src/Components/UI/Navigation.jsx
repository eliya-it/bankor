import React, { useState } from "react";
import logo from "../../assets/img/logo.png";
import List from "../List/List";
const Navigation = () => {
  const [isActive, setIsActive] = useState(false);
  const navLink = (text, path) => (
    <li>
      <a href={path} className="navigation__link">
        {text}
      </a>
    </li>
  );
  const scrollHandler = (e) => {
    e.preventDefault();
    if (e.target.classList.contains("navigation__link")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="navigation">
      <img src={logo} className="navigation__logo" />

      <List
        className={`navigation__list ${
          isActive ? "navigation__list--active" : ""
        }`}
        onClick={scrollHandler}
      >
        {[
          navLink("Home", "#header"),
          navLink("Users stories", "#story"),
          navLink("Pricing", "#pricing"),
          navLink("We are in", "#cities"),
          navLink("System & tools", "#cta"),
        ]}
      </List>
      <button
        className="navigation__btn"
        onClick={() => setIsActive(!isActive)}
      >
        <span
          className={`navigation__icon ${
            isActive ? "navigation__icon--active" : ""
          }`}
        >
          &nbsp;
        </span>
      </button>
    </div>
  );
};

export default Navigation;
