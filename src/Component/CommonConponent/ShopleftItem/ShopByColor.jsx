import React, { useState } from "react";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";

import Flex from "../Flex";
const ShopByColor = ({ ShopLeftColorTitle, ShopByColorData }) => {
  const [showColor, setshowColor] = useState(false);
  // HanldeColor function implement

  const HanldeColor = () => {
    setshowColor(!showColor);
  };

  return (
    <>
      <div className=" mt-10  ">
        <div className="mb-5" onClick={HanldeColor}>
          <Flex className={"items-center justify-between"}>
            <h1 className="font-DMsans font-bold  text-xl ">
              {ShopLeftColorTitle ? ShopLeftColorTitle : "Title is missing"}
            </h1>
            <div className="mr-2">
              {showColor === true ? <BiSolidUpArrow /> : <BiSolidDownArrow />}
            </div>

            {/* <BiSolidUpArrow className="mr-2" /> */}
          </Flex>
        </div>
        {showColor && (
          <div className="divide-y-2 divide-[#f0f0f0] divide-solid ">
            {ShopByColorData?.map((item) => (
              <div className="px-2 py-5">
                <Flex className={"items-center gap-x-3"}>
                  <div
                    className="w-3 h-3 rounded-full bg-green-400"
                    style={{ backgroundColor: `${item.Colorcode}` }}
                  ></div>
                  <h2 className="text-base text-secondary_font_color font-normal">
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