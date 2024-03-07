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
            <div className="w-full">
              <picture>
                <img src={SeleLeftimg} alt={SeleLeftimg} />
              </picture>
              <div>
                <h3>Phones Sele</h3>
                <p>
                  Up to <span>30%</span> Sele for all phones
                </p>
                <Button />
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