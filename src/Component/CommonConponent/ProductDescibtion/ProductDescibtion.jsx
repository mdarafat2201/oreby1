import React, { useState } from "react";
import Flex from "../Flex";
import { FaMinus, FaPlus } from "react-icons/fa";
const ProductDescibtion = ({ title }) => {
  const [Dropdown, setDropdown] = useState(false);
  const handleDropDown = () => {
    setDropdown(!Dropdown);
  };
  return (
    <>
      <div>
        <div onClick={handleDropDown} className="cursor-pointer">
          <Flex className={"items-center justify-between"}>
            <h1 className="font-DMsans text-lg font-bold text-main_font_color">
              {title ? title : "Heding Missing"}
            </h1>
            <span>{Dropdown ? <FaMinus /> : <FaPlus />}</span>
          </Flex>
        </div>
        {Dropdown && (
          <div>
            <p className="font-DMsans text-lg font-normal text-secondary_font_color">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDescibtion;
