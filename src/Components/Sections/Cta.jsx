import React from "react";
import Reveal from "../Animations/Reveal";
import Section from "../Section/Section";
const Cta = () => {
  return (
    <Section className="section--cta" id="cta">
      <div className="container">
        <Reveal
          className="cta"
          visible={{ y: 0, opacity: 1 }}
          hidden={{ y: 200, opacity: 0 }}
          delay=".1"
        >
          <p className="cta__heading">
            Try new tools to improve your Finace, use our most advanced system
          </p>
          <p className="cta__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus doloribus laborum deleniti magni error in molestiae
            reiciendis, dignissimos debitis dicta non, amet voluptatem officia
            quia libero cupiditate corrupti reprehenderit quaerat.
          </p>
          <div className="u-center-text">
            <a href="#" className="btn btn--white">
              Join now!
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
};

export default Cta;
