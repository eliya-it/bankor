import React from "react";

const PricingCard = (props) => {
  const { heading, price, description } = props;
  return (
    <React.Fragment>
      <div className="">
        <h3 className="pricing__heading">{heading}</h3>
        <p className="pricing__sub-heading">{description}</p>
      </div>
      <p className="pricing__price">{price}$</p>
      <div className="pricing__cta">
        <a href="#" className="btn btn--primary">
          Buy now
        </a>
        <a href="#" className="btn btn--white">
          Contact us
        </a>
      </div>
    </React.Fragment>
  );
};

export default PricingCard;
