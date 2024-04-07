import React from "react";
import Header from "../../HomeComponent/Header/Header";
import MenuBar from "../../HomeComponent/MenuBar/MenuBar";
import Footer from "../../HomeComponent/Footer/Footer";
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
