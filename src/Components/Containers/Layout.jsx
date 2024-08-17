import React from "react";
import Navigation from "../UI/Navigation";
import Auxiliary from "./Auxiliary";

import Footer from "../UI/Footer";

const Layout = (props) => {
  return (
    <div className="container">
      <Navigation />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
