import React from "react";
import Navigation from "../UI/Navigation";

import Footer from "../UI/Footer";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
