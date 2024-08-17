import React from "react";

const Link = (props) => {
  return (
    <a
      className={`${props.className ? props.className : ""}`}
      href={props.path || "#"}
    >
      {props.children}
    </a>
  );
};

export default Link;
