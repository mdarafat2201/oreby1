import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import Flex from "../Flex";
const ShopCatagories = ({ CatagorseData, ShopLeftCategoryTitle }) => {
  const [showCatagories, setshowCatagories] = useState(false);

  // HanldeBrand function implement
  const HanldeCatagories = () => {
    setshowCatagories(!showCatagories);
  };
  const [showCatagoriesToggle, setshowCatagoriesToggle] = useState(
    CatagorseData.map(() => false)
  );

  const HanldeCategoryToggle = (id) => {
    setshowCatagoriesToggle((previousState) => {
      return previousState.map((value, index) =>
        id === index ? !value : false
      );
    });
  };

  return (
    <>
      <div className=" mb-5" onClick={HanldeCatagories}>
        <Flex className={"items-center justify-between"}>
          <h1 className="font-DMsans font-bold text-xl">
            {ShopLeftCategoryTitle ? ShopLeftCategoryTitle : "title is missing"}
          </h1>
          <div className="mr-2">
            {showCatagories === true ? (
              <BiSolidUpArrow />
            ) : (
              <BiSolidDownArrow />
            )}
          </div>
        </Flex>
      </div>
      {showCatagories && (
        <div>
          <div className="divide-y-2 divide-[#f0f0f0] divide-solid ">
            {CatagorseData?.map((item, index) =>
              item.subcategores.length > 0 ? (
                <div>
                  <div
                    className="py-5 px-2 cursor-pointer "
                    key={item.id}
                    onClick={() => HanldeCategoryToggle(index)}
                  >
                    <Flex className={"items-center justify-between"}>
                      <h2 className="text-base text-secondary_font_color font-normal">
                        {item.title}
                      </h2>
                      <FaPlus className="text-secondary_font_color" />
                    </Flex>
                  </div>
                  <div className={`${showCatagoriesToggle && "mb-4"}`}>
                    {showCatagoriesToggle[index] &&
                      item.subcategores.map((subitem) => (
                        <div
                          className="px-3 py-2 cursor-pointer"
                          key={subitem.id}
                        >
                          <h2 className="text-base text-secondary_font_color font-normal">
                            {subitem.title}
                          </h2>
                        </div>
                      ))}
                  </div>
                </div>
              ) : (
                <div className="py-5 px-2 cursor-pointer">
                  <h2 className="text-base text-secondary_font_color font-normal">
                    {item.title}
                  </h2>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ShopCatagories;
