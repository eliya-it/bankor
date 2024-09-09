import React from "react";

const HowBox = ({ icon, step, text }) => {
  return (
    <div className="how__step">
      {icon}
      <div className="how__text">
        <p className="how__number">{step}</p>
        <p className="paragraph">{text}</p>
      </div>
    </div>
  );
};

export default HowBox;
