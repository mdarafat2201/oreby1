import React, { useState } from "react";
import Flex from "../CommonConponent/Flex";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import Serach from "../CommonConponent/Serach";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import CartItem from "../../assets/product4.png";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
const MenuBar = () => {
  const [ShowCatagorise, setShowCatagorise] = useState(false);
  const [ShowAccount, setShowAccount] = useState(false);
  const [Cart, setCart] = useState(false);
  //HandleCatagory function implement
  const HandleCatagory = () => {
    setShowCatagorise(!ShowCatagorise);
  };
  //ShowAccount function implement
  const HandleAccount = () => {
    setShowAccount(!ShowAccount);
  };
  //HandleCart function implement
  const HandleCart = () => {
    setCart(!Cart);
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
                    className={`bg-main_font_color text-white  py-4 absolute z-10 divide-y divide-[#ffffff3f] ${
                      ShowCatagorise === true ? "w-full left-0 top-1/4" : null
                    }`}
                  >
                    <li className="p-4">
                      <Link to={"/"}>Accesories</Link>
                    </li>
                    <li className="p-4">
                      <Link to={"/"}>Furniture</Link>
                    </li>
                    <li className="p-4">
                      <Link to={"/"}>Electronics</Link>
                    </li>
                    <li className="p-4">
                      <Link to={"/"}>Clothes</Link>
                    </li>
                    <li className="p-4">
                      <Link to={"/"}>Bags</Link>
                    </li>
                    <li className="p-4">
                      <Link to={"/"}>Home appliances</Link>
                    </li>
                  </ul>
                </div>
              )}
            </Flex>

            <Serach placeholder={"Search Products"} />
            <Flex className={" gap-x-2 sm:gap-x-5"}>
              <div onClick={HandleAccount}>
                <Flex
                  className={"gap-x-1 text-center sm:gap-x-2 cursor-pointer "}
                >
                  <div>
                    <FaUser
                      className={`${ShowAccount ? "text-green-400" : null}`}
                    />
                  </div>
                  <div>
                    {ShowAccount === true ? (
                      <MdKeyboardArrowDown />
                    ) : (
                      <MdKeyboardArrowUp />
                    )}
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
              <div className=" cursor-pointer" onClick={HandleCart}>
                <FaShoppingCart />
              </div>
              <div className="bg-black text-white absolute top-0 left-0 w-full sm:w-fit">
                <div className="w-[80px] h-[80px] object-cover">
                  <img src={CartItem} alt={CartItem} />
                </div>
                <div>
                  <h2>Black Smart Watch</h2>
                  <span>$44.0</span>
                </div>
              </div>
            </Flex>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
