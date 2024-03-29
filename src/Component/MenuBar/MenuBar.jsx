import React, { useState } from "react";
import Flex from "../CommonConponent/Flex";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import Serach from "../CommonConponent/Serach";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";

const MenuBar = () => {
  const [ShowCatagorise, setShowCatagorise] = useState(false);
  const [ShowAccount, setShowAccount] = useState(false);
  //HandleCatagory function implement
  const HandleCatagory = () => {
    setShowCatagorise(!ShowCatagorise);
  };
  //ShowAccount function implement
  const HandleAccount = () => {
    setShowAccount(!ShowAccount);
  };
  return (
    <>
      <div className="bg-secondary_bg_color py-5 px-5">
        <div className="container">
          <Flex className={"gap-x-3 justify-between items-center"}>
            <Flex className={"gap-x-3"}>
              <div onClick={HandleCatagory}>
                <HiMiniBars3BottomLeft
                  className={`text-2xl cursor-pointer ${
                    ShowCatagorise === true ? "text-green-400" : null
                  }`}
                />
              </div>

              <p className="menuItem  cursor-pointer text-main_font_color hidden sm:block">
                Shop by Category
              </p>
              {ShowCatagorise && (
                <div>
                  <ul
                    className={`bg-main_font_color text-white  text-center absolute z-10 divide-y divide-[#ffffff3f] ${
                      ShowCatagorise === true ? "w-full left-0 top-1/4" : null
                    }`}
                  >
                    <li className="py-4">
                      <a href="#">Accesories</a>
                    </li>
                    <li className="py-4">
                      <a href="#">Furniture</a>
                    </li>
                    <li className="py-4">
                      <a href="#">Electronics</a>
                    </li>
                    <li className="py-4">
                      <a href="#">Clothes</a>
                    </li>
                    <li className="py-4">
                      <a href="#">Bags</a>
                    </li>
                    <li className="py-4">
                      <a href="#">Home appliances</a>
                    </li>
                  </ul>
                </div>
              )}
            </Flex>

            <Serach placeholder={"Search Products"} />
            <Flex className={" gap-x-2 sm:gap-x-5"}>
              <div onClick={HandleAccount}>
                <Flex className={"gap-x-1 sm:gap-x-2 cursor-pointer "}>
                  <div>
                    <FaUser
                      className={`${ShowAccount ? "text-green-400" : null}`}
                    />
                  </div>
                  <div>
                    <TiArrowSortedDown />
                  </div>
                </Flex>
              </div>
              {ShowAccount && (
                <div>
                  <ul className="w-full sm:w-[200px] left-0 top-[175px] text-center z-10 bg-main_font_color absolute text-main_bg_color py-2 divide-y divide-[#ffffff3f]">
                    <li>
                      <a href="#">My Account</a>
                    </li>
                    <li>
                      <a href="#">Log Out</a>
                    </li>
                  </ul>
                </div>
              )}

              <div>
                <FaShoppingCart />
              </div>
            </Flex>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
