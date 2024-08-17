import React from "react";

const Item = (props) => {
  return (
    <li className={`${props.className ? props.className : ""}`}>
      {props.children}
    </li>
  );
};

export default Item;
