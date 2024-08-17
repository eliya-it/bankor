import React from "react";
import PropTypes from "prop-types";
const Heading = (props) => {
  return (
    <div className=" u-center-text u-margin-bottom-big">
      <h2 className="heading--secondary">{props.text}</h2>
    </div>
  );
};
Heading.propTypes = {
  text: PropTypes.string,
};
export default Heading;
