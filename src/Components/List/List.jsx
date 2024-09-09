import React from "react";

const List = ({ className, children }) => {
  return (
    <ul className={`${className ? className : ""}`} onClick={(e) => onClick(e)}>
      {children}
    </ul>
  );
};

export default List;
