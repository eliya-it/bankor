import React from "react";
import {
  HiCalculator,
  HiInformationCircle,
  HiLockClosed,
  HiUserGroup,
} from "react-icons/hi";
import List from "../List/List";
import Item from "../List/Item";
const City = (props) => {
  const { photo, name, users, accounters } = props;
  return (
    <div className="cities__box">
      <img src={photo} alt={`Bankor in ${name}`} className="cities__img" />

      <h4 className="cities__heading">{name}</h4>

      <List className="cities__items">
        <Item className="cities__item">
          <HiUserGroup className="cities__icon" />
          <p className="cities__text">200 Customers</p>
        </Item>
        <Item className="cities__item">
          <HiCalculator className="cities__icon" />
          <p className="cities__text">5 accounters</p>
        </Item>
        <Item className="cities__item">
          <HiInformationCircle className="cities__icon" />
          <p className="cities__text">24/7 Support</p>
        </Item>
        <Item className="cities__item">
          <HiLockClosed className="cities__icon" />
          <p className="cities__text">Secure payments</p>
        </Item>
      </List>
      <button className="btn btn--white">Contact Emploey</button>
    </div>
  );
};
export default City;
