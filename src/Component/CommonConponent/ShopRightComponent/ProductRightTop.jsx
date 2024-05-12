import React, { useState } from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaBarsProgress } from "react-icons/fa6";
import { SortBy } from "../../../../NewArrivalData/ArrivalData";
import Flex from "../Flex";
// import { FaBars } from "react-icons/fa6";
const ProductRightTop = ({ onpageItem, onchageLayout, changeIcon }) => {
  const [sortProduct, setsortProduct] = useState(SortBy);

  return (
    <>
      <div>
        <Flex className={" items-center justify-between px-2 "}>
          <div onClick={onchageLayout} className="hidden sm:block">
            {changeIcon ? (
              <FaBarsProgress className="cursor-pointer text-2xl" />
            ) : (
              <BsFillGrid3X3GapFill className="cursor-pointer text-2xl" />
            )}
          </div>
          <div>
            <Flex className={"items-center gap-x-8"}>
              <Flex className={"items-center"}>
                <h2 className="mr-4 hidden font-DMsans text-base font-normal text-secondary_font_color sm:block">
                  Sort by:
                </h2>
                <select
                  name="sort"
                  id="sort"
                  className=" min-w-[140px] cursor-pointer border-2 border-[#F0F0F0] py-2 sm:min-w-[240px] md:min-w-[170px] "
                >
                  <option
                    value={"Featured"}
                    className="font-DMsans text-base font-normal text-secondary_font_color"
                  >
                    Featured
                  </option>
                  {sortProduct?.map((sortItem) => (
                    <option
                      value={sortItem.SortItem}
                      className="my-3 font-DMsans text-base font-normal text-secondary_font_color"
                    >
                      {sortItem.SortItem}
                    </option>
                  ))}
                </select>
              </Flex>
              <Flex className={"items-center"}>
                <h2 className="mr-4 hidden font-DMsans text-base font-normal text-secondary_font_color sm:block">
                  Show:
                </h2>
                <select
                  onChange={onpageItem}
                  name="sort"
                  id="sort"
                  className=" min-w-[140px]  cursor-pointer border-2 border-[#F0F0F0] py-2 "
                >
                  <option className="font-DMsans text-base font-normal text-secondary_font_color">
                    Select Item
                  </option>
                  <option
                    value={"9"}
                    className="font-DMsans text-base font-normal text-secondary_font_color"
                  >
                    9
                  </option>
                  <option
                    value={"18"}
                    className="font-DMsans text-base font-normal text-secondary_font_color"
                  >
                    18
                  </option>
                  <option
                    value={"27"}
                    className="font-DMsans text-base font-normal text-secondary_font_color"
                  >
                    27
                  </option>
                </select>
              </Flex>
            </Flex>
          </div>
        </Flex>
      </div>
    </>
  );
};

export default ProductRightTop;
