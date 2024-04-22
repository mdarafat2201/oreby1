import React, { useState } from "react";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import Flex from "../Flex";
const ShopbyBrand = ({ ShopLeftBrandTitle, ShopByBrandData }) => {
  const [showBrand, setshowBrand] = useState(false);
  // HanldeBrand function implement
  const HanldeBrand = () => {
    setshowBrand(!showBrand);
  };
  return (
    <>
      <div className="mt-10">
        <div onClick={HanldeBrand}>
          <Flex className={"items-center justify-between"}>
            <h1 className="font-DMsans font-bold  text-xl ">
              {ShopLeftBrandTitle ? ShopLeftBrandTitle : "Shop by Brand"}
            </h1>
            <div className="mr-2">
              {showBrand === true ? <BiSolidUpArrow /> : <BiSolidDownArrow />}
            </div>
          </Flex>
        </div>
        {showBrand && (
          <div className="divide-y-2 divide-[#f0f0f0] divide-solid ">
            {ShopByBrandData?.map((item) => (
              <div className="px-2 py-5">
                <h2 className="text-base text-secondary_font_color font-normal">
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

export default ShopbyBrand;
