import React from "react";

const List = (props) => {
  return (
    <ul
      className={`${props.className ? props.className : ""}`}
      onClick={(e) => props.onClick(e)}
    >
      {props.children}
    </ul>
  );
};

export default List;
