import React from "react";

const Section = ({ className, children, id }) => {
  return (
    <section className={`section ${className ? className : ""}`} id={id}>
      {children}
    </section>
  );
};

export default Section;
