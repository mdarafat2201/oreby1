import React, { useState } from "react";
import Flex from "../CommonConponent/Flex";
import Button from "../CommonConponent/Button";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import Serach from "../CommonConponent/Serach";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
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
              <div className="relative">
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
                      className={`bg-main_font_color text-white sm:static  py-4 absolute z-10 divide-y divide-[#ffffff3f] ${
                        ShowCatagorise === true
                          ? "w-[100vw] left-[-20px] top-[250%]"
                          : null
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
              </div>
            </Flex>

            <Serach placeholder={"Search Products"} />
            <Flex className={" gap-x-2 sm:gap-x-5"}>
              <div className="relative">
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
                    <ul
                      className={
                        "w-[100vw] sm:w-[200px] right-[-44px] top-14  z-10 bg-main_font_color absolute sm:static text-center text-main_bg_color py-2 divide-y divide-[#ffffff3f]"
                      }
                    >
                      <li className="p-4">
                        <Link to={"/"}>My Account</Link>
                      </li>
                      <li className="p-4">
                        <Link to={"/"}>Log Out</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="relative">
                <div className=" cursor-pointer" onClick={HandleCart}>
                  <FaShoppingCart className={`${Cart && "text-green-500"}`} />
                </div>

                <div
                  className={`text-main_bg_color transition-all absolute top-14 z-10  w-[100vw] sm:w-fit ${
                    Cart ? "right-[-35px]" : "right-[400px]"
                  }`}
                >
                  <Flex
                    className={"items-center justify-around p-4 bg-[#F5F5F3]"}
                  >
                    <div className="w-[80px] h-[80px] object-cover border-2 border-main_font_color ">
                      <img src={CartItem} alt={CartItem} />
                    </div>
                    <div className="text-main_font_color font-DMsans  font-bold font-sm  ">
                      <h2>Black Smart Watch</h2>
                      <span>$44.0</span>
                    </div>
                    <div className="text-main_font_color">
                      <RxCross2 />
                    </div>
                  </Flex>
                  <div className="bg-main_bg_color p-4">
                    <h2 className="text-secondary_font_color font-DMsans font-normal text-md ml-8">
                      Subtotal:
                      <span className="text-main_font_color font-bold ml-1">
                        $44.00
                      </span>
                    </h2>
                    <Flex className={"justify-around py-5"}>
                      <div>
                        <Button
                          className={
                            "py-4 px-4 font-DMsans  font-bold font-sm  text-main_font_color border-2 border-main_font_color "
                          }
                          title={"View Cart"}
                        />
                      </div>
                      <div>
                        <Button
                          className={
                            "py-4 px-4 bg-main_font_color text-main_bg_color font-DMsans  font-bold font-sm  "
                          }
                          title={"Checkout"}
                        />
                      </div>
                    </Flex>
                  </div>
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
