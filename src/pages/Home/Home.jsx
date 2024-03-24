import React from "react";
import Header from "../../Component/Header/Header";
import MenuBar from "../../Component/MenuBar/MenuBar";
import Banner from "../../Component/Banner/Banner";
import Shipping from "../../Component/Shipping/Shipping";
import SeleInfu from "../../Component/SeleInfu/SeleInfu";
import Arrival from "../../Component/NewArrival/Arrival";
import PhoneOfTheYear from "../../Component/PhoneOfTheYear/PhoneOfTheYear";
import {
  ArrivalData,
  BesellingData,
  BestsellerData,
} from "../../../NewArrivalData/ArrivalData";

const Home = () => {
  return (
    <div>
      <Header />
      <MenuBar />
      <Banner />
      <Shipping />
      <SeleInfu />
      <Arrival headingTitle="New Arrival" ArrivalData={ArrivalData} />
      <Arrival headingTitle="Our Best Selling" ArrivalData={BesellingData} />
      <PhoneOfTheYear />
      <Arrival headingTitle="Special Offers" ArrivalData={BestsellerData} />
    </div>
  );
};

export default Home;
