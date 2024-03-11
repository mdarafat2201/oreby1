import React from "react";
import Flex from "../CommonConponent/Flex";
import SeleLeftimg from "../../assets/seleLeft img.png";
import electronicImg from "../../assets/electronicImg.png";
import FurnitureImg from "../../assets/FurnitureImg.png";
import Button from "../CommonConponent/Button";

const SeleInfo = () => {
  return (
    <>
      <div className="py-32">
        <div className="container">
          <Flex className={"gap-x-10"}>
            <div className="w-full relative">
              <picture>
                <img src={SeleLeftimg} alt={SeleLeftimg} />
              </picture>
              <div className="absolute bottom-16 left-16">
                <h3 className="text-main_font_color font-bold font-DMsans text-[39px]">
                  Phones Sele
                </h3>
                <p className="mt-12 text-main_font_color font-normal font-DMsans text-base opacity-75">
                  Up to{" "}
                  <span className="font-bold text-4xl align-middle">40%</span>{" "}
                  Sele for all phones
                </p>
                <Button
                  className={"py-4 px-14 bg-main_font_color text-main_bg_color"}
                  title="Shop Now"
                />
              </div>
            </div>
            <div className="w-full">
              <Flex className={"flex-col gap-y-9"}>
                <div className="w-full">
                  <picture>
                    <img src={electronicImg} alt={electronicImg} />
                  </picture>
                </div>
                <div className="w-full">
                  <picture>
                    <img src={FurnitureImg} alt={FurnitureImg} />
                  </picture>
                </div>
              </Flex>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default SeleInfo;
