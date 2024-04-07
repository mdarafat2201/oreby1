import React from "react";
import Flex from "../../CommonConponent/Flex";
import SeleLeftimg from "../../../assets/seleLeft img.png";
import electronicImg from "../../../assets/electronicImg.png";
import FurnitureImg from "../../../assets/FurnitureImg.png";
import Overlay from "../../CommonConponent/Overlay";
const SeleInfo = () => {
  return (
    <>
      <div className="lg:py-16 py-10">
        <div className="container">
          <Flex className={"gap-x-6 lg:gap-x-10 flex-col sm:flex-row gap-y-4"}>
            <div className="w-full relative">
              <picture>
                <img src={SeleLeftimg} alt={SeleLeftimg} />
              </picture>

              <Overlay
                className=" bottom-8 left-4"
                titel="Phones Sele"
                discountdetilsFost={`Up to`}
                discountdetilslost={`sele for all Phones!`}
                discountAmount="30%"
                btnTitle="Shop Now"
              />
            </div>

            <div className="w-full ">
              <Flex className={"flex-col gap-y-4 lg:gap-y-9"}>
                <div className="w-full relative ">
                  <picture>
                    <img src={electronicImg} alt={electronicImg} />
                  </picture>
                  <Overlay
                    className="  top-1/2 -translate-y-1/2 left-4 lg:left-16"
                    titel="Electronics Sale"
                    discountdetilsFost={`Up to`}
                    discountdetilslost={`sele for all electronics!`}
                    discountAmount="70%"
                    btnTitle="Shop Now"
                  />
                </div>
                <div className="w-full relative ">
                  <picture>
                    <img src={FurnitureImg} alt={FurnitureImg} />
                  </picture>
                  <Overlay
                    className=" top-1/2 -translate-y-1/2 left-4 lg:left-16"
                    titel="Furniture offer"
                    discountdetilsFost={`Up to`}
                    discountdetilslost={`sele for all Furniture offer!`}
                    discountAmount="50%"
                    btnTitle="Shop Now"
                  />
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
