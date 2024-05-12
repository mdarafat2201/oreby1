import React, { useState } from "react";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";

import Flex from "../Flex";
const ShopByColor = ({
  ShopLeftColorTitle,
  ShopByColorData,
  dropdownisExpandis,
  dropdownis,
}) => {
  const [showColor, setshowColor] = useState(dropdownisExpandis);
  // HanldeColor function implement

  const HanldeColor = () => {
    setshowColor(!showColor);
  };

  return (
    <>
      <div className=" mt-10  ">
        <div className="mb-5 cursor-pointer" onClick={HanldeColor}>
          <Flex className={"items-center justify-between"}>
            <h1 className="font-DMsans text-xl font-bold md:text-[16px]  lg:text-xl ">
              {ShopLeftColorTitle ? ShopLeftColorTitle : "Title is missing"}
            </h1>
            {dropdownis && (
              <div className="mr-2">
                {showColor === true ? <BiSolidUpArrow /> : <BiSolidDownArrow />}
              </div>
            )}
          </Flex>
        </div>
        {showColor && (
          <div className="divide-y-2 divide-solid divide-[#f0f0f0] ">
            {ShopByColorData?.map((item) => (
              <div className="px-2 py-5">
                <Flex className={"items-center gap-x-3"}>
                  <div
                    className="h-3 w-3 rounded-full bg-green-400"
                    style={{ backgroundColor: `${item.Colorcode}` }}
                  ></div>
                  <h2 className="text-base font-normal text-secondary_font_color">
                    {item.title}
                  </h2>
                </Flex>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ShopByColor;
