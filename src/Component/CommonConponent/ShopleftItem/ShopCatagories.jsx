import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import Flex from "../Flex";
const ShopCatagories = ({
  CatagorseData,
  dropdownis,
  dropdownisExpandis,
  ShopLeftCategoryTitle,
}) => {
  const [showCatagories, setshowCatagories] = useState(dropdownisExpandis);

  // HanldeBrand function implement
  const HanldeCatagories = () => {
    setshowCatagories(!showCatagories);
  };
  const [showCatagoriesToggle, setshowCatagoriesToggle] = useState(
    CatagorseData.map(() => !true),
  );

  const HanldeCategoryToggle = (id) => {
    setshowCatagoriesToggle((previousState) => {
      return previousState.map((value, index) =>
        id === index ? !value : false,
      );
    });
  };
  console.log(showCatagoriesToggle);
  return (
    <>
      <div className=" mb-5 cursor-pointer" onClick={HanldeCatagories}>
        <Flex className={"items-center justify-between"}>
          <h1 className="font-DMsans text-xl font-bold md:text-[16px] lg:text-xl">
            {ShopLeftCategoryTitle ? ShopLeftCategoryTitle : "title is missing"}
          </h1>
          {dropdownis && (
            <div className="mr-2">
              {showCatagories === true ? (
                <BiSolidUpArrow />
              ) : (
                <BiSolidDownArrow />
              )}
            </div>
          )}
        </Flex>
      </div>
      {showCatagories && (
        <div>
          <div className="divide-y-2 divide-solid divide-[#f0f0f0] ">
            {CatagorseData?.map((item, index) =>
              item.subcategory.length > 0 ? (
                <div>
                  <div
                    className="cursor-pointer px-2 py-5 "
                    key={item.id}
                    onClick={() => HanldeCategoryToggle(index)}
                  >
                    <Flex className={"items-center justify-between"}>
                      <h2 className="text-base font-normal text-secondary_font_color">
                        {item.title}
                      </h2>
                      <FaPlus className="text-secondary_font_color" />
                    </Flex>
                  </div>
                  <div className={`${showCatagoriesToggle && "mb-4"}`}>
                    {showCatagoriesToggle[index] &&
                      item.subcategory.map(
                        (subitem) =>
                          subitem !== item.title && (
                            <div
                              className="cursor-pointer px-3 py-2"
                              key={subitem.id}
                            >
                              <h2 className="text-base font-normal text-secondary_font_color">
                                {subitem}
                              </h2>
                            </div>
                          ),
                      )}
                  </div>
                </div>
              ) : (
                <div className="cursor-pointer px-2 py-5">
                  <Flex className={"items-center justify-between"}>
                    <h2 className="text-base font-normal text-secondary_font_color">
                      {item.title}
                    </h2>
                    <FaPlus className="text-secondary_font_color" />
                  </Flex>
                </div>
              ),
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ShopCatagories;
