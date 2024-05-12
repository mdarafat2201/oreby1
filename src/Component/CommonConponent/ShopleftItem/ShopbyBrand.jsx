import React, { useState } from "react";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import Flex from "../Flex";
const ShopbyBrand = ({
  ShopLeftBrandTitle,
  ShopByBrandData,
  dropdownisExpandis,
  dropdownis,
}) => {
  const [showBrand, setshowBrand] = useState(dropdownisExpandis);
  // HanldeBrand function implement
  const HanldeBrand = () => {
    setshowBrand(!showBrand);
  };
  return (
    <>
      <div className="mt-10">
        <div className="mb-5 cursor-pointer" onClick={HanldeBrand}>
          <Flex className={"items-center justify-between"}>
            <h1 className="font-DMsans text-xl  font-bold md:text-[16px] lg:text-xl ">
              {ShopLeftBrandTitle ? ShopLeftBrandTitle : "Shop by Brand"}
            </h1>
            {dropdownis && (
              <div className="mr-2">
                {showBrand === true ? <BiSolidUpArrow /> : <BiSolidDownArrow />}
              </div>
            )}
          </Flex>
        </div>
        {showBrand && (
          <div className="divide-y-2 divide-solid divide-[#f0f0f0] ">
            {ShopByBrandData?.map((item) => (
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

export default ShopbyBrand;
