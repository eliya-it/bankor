import React from "react";

const Item = ({ className, children }) => {
  return <li className={`${className ? className : ""}`}>{children}</li>;
};

export default Item;
