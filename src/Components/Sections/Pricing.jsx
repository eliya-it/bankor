import React from "react";
import Heading from "../UI/Heading";
import PricingCard from "../PricingCard/PricingCard";
import Reveal from "../Animations/Reveal";
import Section from "../Section/Section";
const Pricing = () => {
  return (
    <Section className="section--pricing" id="pricing">
      <Heading text="Pick a packge that is perfect for you" />

      <div className=" pricing__container">
        <div className="pricing">
          <Reveal
            hidden={{ y: 200, x: -200, opacity: 0 }}
            visible={{ y: 0, x: 0, opacity: 1 }}
            className="pricing__card"
          >
            <PricingCard
              heading="Basic business"
              description="Management pack & Security"
              price="200"
            />
          </Reveal>
          <Reveal
            hidden={{ y: 200, opacity: 0 }}
            visible={{ y: 0, opacity: 1 }}
            delay={0.1}
            className="pricing__card"
          >
            <PricingCard
              heading="Mid-size business"
              description="Management pack & Security & analytics tools"
              price="200"
            />
          </Reveal>

          <Reveal
            hidden={{ y: 200, x: 200, opacity: 0 }}
            visible={{ y: 0, x: 0, opacity: 1 }}
            delay={0.2}
            className="pricing__card"
          >
            <PricingCard
              heading="Enterprise"
              description="Contact us for features"
              price="+1000"
            />
          </Reveal>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
