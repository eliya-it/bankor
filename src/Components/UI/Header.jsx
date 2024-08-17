import React from "react";
import Hero from "../Icons/Hero";
import Reveal from "../Animations/Reveal";
const Header = () => {
  const scrollToHanlder = (e) => {
    e.preventDefault();
    document.getElementById("cta").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className="header" id="header">
      <div className=" header__container">
        <Reveal
          className="header__text"
          hidden={{ scale: 0, opacity: 0 }}
          visible={{ scale: 1, opacity: 1 }}
        >
          <h1 className="heading--primary">
            <span className="heading--primary--main">Bankor</span>
            <span className="heading--primary--sub">
              Your accounting is much easier with us!
            </span>
          </h1>
          <div className="u-center-text">
            <a
              href="#"
              className="btn btn--primary"
              onClick={(e) => scrollToHanlder(e)}
            >
              Try our tools
            </a>
          </div>
        </Reveal>
        <Reveal
          hidden={{ x: "100%", opacity: 0 }}
          visible={{ x: 0, opacity: 1 }}
        >
          <Hero />
        </Reveal>
      </div>
    </header>
  );
};

export default Header;
