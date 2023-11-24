import React from "react";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <div>
      <div className=" mb-20 ">
        <Navigation />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
