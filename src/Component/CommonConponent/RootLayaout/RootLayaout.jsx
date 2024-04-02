import React from "react";
import Header from "../../Header/Header";
import MenuBar from "../../MenuBar/MenuBar";
import Footer from "../../Footer/Footer";
import { Outlet } from "react-router-dom";
const RootLayaout = () => {
  return (
    <div>
      <Header />
      <MenuBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayaout;
