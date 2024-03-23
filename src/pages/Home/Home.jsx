import React from "react";
import Header from "../../Component/Header/Header";
import MenuBar from "../../Component/MenuBar/MenuBar";
import Banner from "../../Component/Banner/Banner";
import Shipping from "../../Component/Shipping/Shipping";
import SeleInfu from "../../Component/SeleInfu/SeleInfu";
import Arrival from "../../Component/NewArrival/Arrival";
import SpecialOffer from "../../Component/SpecialOffer/SpecialOffer";
const Home = () => {
  return (
    <div>
      <Header />
      <MenuBar />
      <Banner />
      <Shipping />
      <SeleInfu />
      <Arrival />
      <SpecialOffer />
    </div>
  );
};

export default Home;
