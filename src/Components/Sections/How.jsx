import React from "react";
import HowOne from "../Icons/HowOne";
import HowTwo from "../Icons/HowTwo";
import HowThree from "../Icons/HowThree";
import HowBox from "../HowBox/HowBox";
import Reveal from "../Animations/Reveal";
import Heading from "../UI/Heading";
import Section from "../Section/Section";
const How = () => {
  return (
    <Section className="section--how">
      <Heading text="So... How it works?" />

      <div className="how">
        <Reveal
          hidden={{ y: 200, x: -200, opacity: 0 }}
          visible={{ y: 0, x: 0, opacity: 1 }}
        >
          <HowBox
            text=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, quo?
    Cupiditate soluta veritatis vitae et."
            icon={<HowOne />}
            step="1"
          />{" "}
        </Reveal>
        <Reveal
          hidden={{ y: 200, opacity: 0 }}
          visible={{ y: 0, opacity: 1 }}
          delay={0.1}
        >
          <HowBox
            text="accusamus minima alias molestias blanditiis quos, enim aspernatur rerum
          voluptatum reiciendis consequatur! Blanditiis sit."
            icon={<HowTwo />}
            step="2"
          />{" "}
        </Reveal>

        <Reveal
          hidden={{ y: 200, x: 200, opacity: 0 }}
          visible={{ y: 0, x: 0, opacity: 1 }}
          delay={0.2}
        >
          {" "}
          <HowBox
            text=" incidunt ipsa distinctio at, fugiat nihil mollitia nostrum labore
        laboriosam numquam atque sint dicta illum."
            icon={<HowThree />}
            step="3"
          />
        </Reveal>
      </div>
    </Section>
  );
};

export default How;
