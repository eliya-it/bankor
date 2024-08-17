import React from "react";

const Section = (props) => {
  return (
    <section
      className={`section ${props.className ? props.className : ""}`}
      id={props.id}
    >
      {props.children}
    </section>
  );
};

export default Section;
