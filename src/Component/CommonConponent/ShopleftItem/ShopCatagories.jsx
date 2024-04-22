import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Flex from "../Flex";
const ShopCatagories = ({ CatagorseData, ShopLeftTitle }) => {
  const [showCatagories, setshowCatagories] = useState(
    CatagorseData.map(() => false)
  );

  const HanldeCategoryToggle = (id) => {
    setshowCatagories((previousState) => {
      return previousState.map((value, index) =>
        id === index ? !value : false
      );
    });
  };

  return (
    <>
      <div>
        <h1 className="font-DMsans font-bold text-xl mb-9">
          {ShopLeftTitle ? ShopLeftTitle : "title is missing"}
        </h1>
      </div>
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
                <div className={`${showCatagories && "mb-4"}`}>
                  {showCatagories[index] &&
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
    </>
  );
};

export default ShopCatagories;
