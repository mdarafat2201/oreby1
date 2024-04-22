import React, { useEffect, useState, useRef } from "react";
import Flex from "../../CommonConponent/Flex";
import Button from "../../CommonConponent/Button";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import Serach from "../../CommonConponent/Serach";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import CartItem from "../../../assets/product4.png";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
const MenuBar = () => {
  const [ShowCatagorise, setShowCatagorise] = useState(false);
  const [ShowAccount, setShowAccount] = useState(false);
  const [Cart, setCart] = useState(false);
  const MenuRef = useRef();

  //HandleCatagory function implement
  const HandleCatagory = () => {
    setCart(false);
    setShowAccount(false);
    setShowCatagorise(!ShowCatagorise);
  };
  //ShowAccount function implement
  const HandleAccount = () => {
    setShowCatagorise(false);
    setCart(false);
    setShowAccount(!ShowAccount);
  };
  //HandleCart function implement
  const HandleCart = () => {
    setShowCatagorise(false);
    setShowAccount(false);
    setCart(!Cart);
  };

  //Menu Ref funtionlity

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!MenuRef.current.contains(e.target)) {
        setShowCatagorise(false);
        setShowAccount(false);
        setCart(false);
      }
    });
  }, []);
  return (
    <>
      <div className="bg-secondary_bg_color py-5 px-5" ref={MenuRef}>
        <div className="container">
          <Flex className={"gap-x-3 justify-between items-center"}>
            <Flex className="relative ">
              <div onClick={HandleCatagory}>
                <HiMiniBars3BottomLeft
                  className={`text-2xl cursor-pointer ${
                    ShowCatagorise === true ? "text-green-400" : null
                  }`}
                />
              </div>
              <div className="ml-3">
                <p className="menuItem  cursor-pointer text-main_font_color hidden sm:block">
                  Shop by Category
                </p>
              </div>

              {ShowCatagorise && (
                <div>
                  <ul
                    className={`bg-main_font_color text-white   py-4 absolute z-10 divide-y divide-[#ffffff3f] w-[100vw] sm:w-[30vw]  left-[-20px] sm:left-[4px]  top-[250%]
                     
                    `}
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
            <Flex className={" gap-x-2 sm:gap-x-2"}>
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
                        "w-[100vw] sm:w-[200px] right-[-44px] sm:right-[1px] top-14  z-10 bg-main_font_color absolute  text-center text-main_bg_color py-2 divide-y divide-[#ffffff3f]"
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

                {Cart && (
                  <div
                    className={`text-main_bg_color right-[-35px] sm:right-0 absolute top-14 z-10  w-[100vw] sm:w-[55vw] lg:w-[30vw]
                    
                  `}
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
                      <div
                        className={`text-main_font_color `}
                        onClick={HandleCart}
                      >
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
                )}
              </div>
            </Flex>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default MenuBar;