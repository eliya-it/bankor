import React from "react";
import Heading from "../UI/Heading";
import Reveal from "../Animations/Reveal";
import Section from "../Section/Section";

const Process = () => {
  return (
    <Section className="section--process">
      <Heading text="How are we take care of your bussines?" />

      <Reveal
        className="process"
        visible={{ y: 0, opacity: 1 }}
        hidden={{ y: 200, opacity: 0 }}
        delay=".1"
      >
        <p className="paragraph process__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          veritatis voluptatibus asperiores impedit ab fugit sunt dicta
          blanditiis, repellat, architecto esse, saepe exercitationem ipsum,
          Velit molestiae nobis, voluptatibus iste delectus repellendus nostrum!
          Veritatis iure molestias soluta voluptatem dolores blanditiis libero
          dolor, voluptatibus beatae nisi esse velit asperiores, voluptates
          adipisci exercitationem. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Laboriosam ut deserunt velit deleniti tempore.
          Cumque corrupti odit eaque nemo ea necessitatibus a accusamus ipsum!
          Aliquid!
        </p>
        <div className="u-center-text">
          <a href="#" className="btn--inline">
            Learn more &rarr;
          </a>
        </div>
      </Reveal>
    </Section>
  );
};

export default Process;
