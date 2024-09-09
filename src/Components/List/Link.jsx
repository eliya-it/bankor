import React from "react";

const Link = ({ className, path, children }) => {
  return (
    <a className={`${className ? className : ""}`} href={path || "#"}>
      {children}
    </a>
  );
};

export default Link;
