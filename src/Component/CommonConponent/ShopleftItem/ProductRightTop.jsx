import React, { useState } from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { SortBy, SortByNomber } from "../../../../NewArrivalData/ArrivalData";
import Flex from "../Flex";
// import { FaBars } from "react-icons/fa6";
const ProductRightTop = () => {
  const [sortProduct, setsortProduct] = useState(SortBy);
  return (
    <>
      <div>
        <Flex className={"items-center justify-between"}>
          <div>
            <BsFillGrid3X3GapFill />
            {/* <FaBars /> */}
          </div>
          <div>
            <Flex className={"items-center gap-x-8"}>
              <Flex className={"items-center"}>
                <h2 className="text-secondary_font_color font-DMsans mr-4 font-normal text-base">
                  Sort by:
                </h2>
                <select
                  name="sort"
                  id="sort"
                  className="min-w-[240px] py-2 cursor-pointer border-2 border-[#F0F0F0] "
                >
                  <option
                    value={"Featured"}
                    className="text-secondary_font_color font-DMsans font-normal text-base"
                  >
                    Featured
                  </option>
                  {sortProduct?.map((sortItem) => (
                    <option
                      value={sortItem.SortItem}
                      className="text-secondary_font_color font-DMsans font-normal my-3 text-base"
                    >
                      {sortItem.SortItem}
                    </option>
                  ))}
                </select>
              </Flex>
              <Flex className={"items-center"}>
                <h2 className="text-secondary_font_color font-DMsans mr-4 font-normal text-base">
                  Sort by:
                </h2>
                <select
                  name="sort"
                  id="sort"
                  className="min-w-[140px] py-2 border-2 cursor-pointer border-[#F0F0F0] "
                >
                  <option
                    value={"Featured"}
                    className="text-secondary_font_color font-DMsans font-normal text-base"
                  >
                    35
                  </option>
                  {SortByNomber?.map((Item) => (
                    <option
                      value={Item.SortNomber}
                      className="text-secondary_font_color font-DMsans font-normal my-3 text-base"
                    >
                      {Item.SortNomber}
                    </option>
                  ))}
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
