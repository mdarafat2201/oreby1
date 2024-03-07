import React from "react";
import Header from "../../Component/Header/Header";
import MenuBar from "../../Component/MenuBar/MenuBar";
import Banner from "../../Component/Banner/Banner";
import Shipping from "../../Component/Shipping/Shipping";
import SeleInfo from "../../Component/SeleInfo/SeleInfo";
const Home = () => {
  return (
    <div>
      <Header />
      <MenuBar />
      <Banner />
      <Shipping />
      <SeleInfo />
    </div>
  );
};

export default Home;
