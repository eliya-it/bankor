import React from "react";
import City from "../City/City";
import moscow from "../../assets/img/moscow.jpg";
import london from "../../assets/img/london.jpg";
import newyork from "../../assets/img/newyork.jpg";
import berlin from "../../assets/img/berlin.jpg";
import Reveal from "../Animations/Reveal";
import Heading from "../UI/Heading";
import Section from "../Section/Section";
const Cities = () => {
  return (
    <Section className="section--cities" id="cities">
      <Heading text="We are in..." />

      <div className="cities">
        <Reveal
          hidden={{ y: 200, x: -200, opacity: 0 }}
          visible={{ y: 0, x: 0, opacity: 1 }}
        >
          <City name="London" photo={london} users="1000" accounters="20" />
        </Reveal>
        <Reveal
          hidden={{ y: 200, opacity: 0 }}
          visible={{ y: 0, opacity: 1 }}
          delay={0.1}
        >
          <City
            name="Moscow"
            photo={moscow}
            users="2500"
            accounters="35"
            delay="2"
          />
        </Reveal>
        <Reveal
          hidden={{ y: 200, x: 200, opacity: 0 }}
          visible={{ y: 0, x: 0, opacity: 1 }}
          delay={0.2}
        >
          <City name="Berlin" photo={berlin} users="4750" accounters="50" />
        </Reveal>
      </div>
    </Section>
  );
};

export default Cities;
