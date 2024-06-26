import React, { useState } from "react";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import Flex from "../Flex";

const ShopbyPrice = ({
  ShopLeftPriceTitle,
  ShopByPriceData,
  dropdownisExpandis,
  dropdownis,
}) => {
  const [showPrice, setshowPrice] = useState(dropdownisExpandis);
  // HanldeBrand function implement
  const HanldePrice = () => {
    setshowPrice(!showPrice);
  };
  return (
    <>
      <div className="mt-10">
        <div className="mb-5 cursor-pointer" onClick={HanldePrice}>
          <Flex className={"items-center justify-between"}>
            <h1 className="font-DMsans text-xl font-bold md:text-[16px] lg:text-xl ">
              {ShopLeftPriceTitle ? ShopLeftPriceTitle : "Shop by Brand"}
            </h1>
            {dropdownis && (
              <div className="mr-2">
                {showPrice === true ? <BiSolidUpArrow /> : <BiSolidDownArrow />}
              </div>
            )}
          </Flex>
        </div>
        {showPrice && (
          <div className="divide-y-2 divide-solid divide-[#f0f0f0] ">
            {ShopByPriceData?.map((item) => (
              <div className="px-2 py-5">
                <h2 className="text-base font-normal text-secondary_font_color">
                  {item.title}
                </h2>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ShopbyPrice;
