import React from "react";
import Input from "../UI/Input";
import Reveal from "../Animations/Reveal";
import Heading from "../UI/Heading";
import Section from "../Section/Section";

const Contact = () => {
  return (
    <Section className="section--contact">
      <Heading text="Contact us" />
      <Reveal
        hidden={{ opacity: 0 }}
        visible={{ opacity: 1 }}
        className="contact"
      >
        <form className="form">
          <Input
            label="Please enter your name"
            placeholder="John Doe"
            min="5"
            validationMsg="Your name must be at least 5 charecters or more!"
          />
          <Input
            type="select"
            options={[
              { label: "Where have your heard about us?" },
              { label: "Google Ads", value: "ads" },
              { label: "Search engine", value: "search" },
              { label: "Friends", value: "friends" },
            ]}
          />
          <Input
            label="Please enter your email"
            type="email"
            placeholder="johndoe@bankor.com"
          />
          <button type="submit" className="btn btn--primary">
            Send
          </button>
        </form>
      </Reveal>
    </Section>
  );
};
export default Contact;
