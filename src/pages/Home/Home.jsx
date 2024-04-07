import React from "react";
import Banner from "../../Component/HomeComponent/Banner/Banner";
import Shipping from "../../Component/HomeComponent/Shipping/Shipping";
import SeleInfu from "../../Component/HomeComponent/SeleInfu/SeleInfu";
import Arrival from "../../Component/HomeComponent/NewArrival/Arrival";
import PhoneOfTheYear from "../../Component/HomeComponent/PhoneOfTheYear/PhoneOfTheYear";
import {
  ArrivalData,
  BesellingData,
  BestsellerData,
} from "../../../NewArrivalData/ArrivalData";

const Home = () => {
  return (
    <div>
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
