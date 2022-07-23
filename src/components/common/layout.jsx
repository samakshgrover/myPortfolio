import React from "react";

import { Header } from "./header";
import { Footer } from "./footer";

import "./layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{}}>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout; 
