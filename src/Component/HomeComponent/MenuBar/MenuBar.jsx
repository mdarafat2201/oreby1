import React, { useEffect, useState, useRef } from "react";
import Flex from "../../CommonConponent/Flex";
import Button from "../../CommonConponent/Button";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import Serach from "../../CommonConponent/Serach";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  RemoveCartItem,
  getTotal,
} from "../../../Redux/AllSlice/AddtoCart/AddtoCart";
import { FetcherProduct } from "../../../Redux/AllSlice/ProductSlice/ProductSlice";

const MenuBar = () => {
  const dispatch = useDispatch();
  const [ShowCatagorise, setShowCatagorise] = useState(false);
  const [ShowAccount, setShowAccount] = useState(false);
  const [Cart, setCart] = useState(false);
  const MenuRef = useRef();
  const CartRef = useRef();
  const [AllProducts, setAllProducts] = useState([]);

  const navigate = useNavigate();
  const Dispatch = useDispatch();
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
  /**
   * todo: HandleCartItem funtionlity
   * @params ({item})
   */
  const HandleCartItem = (item) => {
    dispatch(RemoveCartItem(item));
  };

  //Menu Ref funtionlity

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!MenuRef.current.contains(e.target)) {
        setShowCatagorise(false);
        setShowAccount(false);
        setCart(false);
      } else if (!CartRef.current.contains(e.target)) {
        setCart(true);
      }
    });
  }, []);
  useEffect(() => {
    dispatch(FetcherProduct("https://dummyjson.com/products"));
  }, []);

  const { data, status } = useSelector((state) => state.product);

  useEffect(() => {
    if (status.payload === "IDLE") {
      setAllProducts(data.payload.products);
    }
  }, [status.payload, data.payload]);

  /**
   * todo : take all product  from redux
   */

  const { CartItem, totoalCartItem, TotalAmount } = useSelector(
    (state) => state.Cart,
  );
  useEffect(() => {
    Dispatch(getTotal());
  }, [CartItem]);
  const handelSearch = (e) => {
    const { value } = e.target;
    if (value) {
      const searchrasult = AllProducts.filter((product) => {
        product.title.toLowerCase();
      });
      console.log(searchrasult);
    } else {
      console.log("no searh rasult");
    }
  };

  return (
    <>
      <div className="bg-secondary_bg_color px-5 py-5" ref={MenuRef}>
        <div className="container">
          <Flex className={"items-center justify-between gap-x-3"}>
            <Flex className="relative ">
              <div onClick={HandleCatagory}>
                <HiMiniBars3BottomLeft
                  className={`cursor-pointer text-2xl ${
                    ShowCatagorise === true ? "text-green-400" : null
                  }`}
                />
              </div>
              <div className="ml-3">
                <p className="menuItem  hidden cursor-pointer text-main_font_color sm:block">
                  Shop by Category
                </p>
              </div>

              {ShowCatagorise && (
                <div>
                  <ul
                    className={`absolute left-[-20px]   top-[250%] z-10 w-[100vw] divide-y divide-[#ffffff3f] bg-main_font_color py-4  text-white sm:left-[4px]  sm:w-[30vw]
                     
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

            <Serach placeholder={"Search Products"} onSerch={handelSearch} />
            <Flex className={" gap-x-2 sm:gap-x-2"}>
              <div className="relative">
                <div onClick={HandleAccount}>
                  <Flex
                    className={"cursor-pointer gap-x-1 text-center sm:gap-x-2 "}
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
                        "absolute right-[-44px] top-14 z-10 w-[100vw]  divide-y divide-[#ffffff3f] bg-main_font_color  py-2 text-center text-main_bg_color sm:right-[1px] sm:w-[200px]"
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
                <div className=" absolute right-[-22px] top-[-22px] flex h-7 w-7  items-center justify-center rounded-full bg-green-500 text-red-500">
                  <span>{totoalCartItem}</span>
                </div>

                {Cart && (
                  <div
                    className={`product absolute right-[-35px] top-14 z-10 w-[100vw] text-main_bg_color  sm:right-0 sm:w-[55vw] lg:w-[30vw]
                    
                  `}
                    ref={CartRef}
                  >
                    <div className="h-[50vh] overflow-y-scroll scrollbar-thin scrollbar-track-secondary_bg_color scrollbar-thumb-main_font_color">
                      {CartItem?.map((item) => (
                        <Flex
                          className={
                            "items-center justify-around bg-[#F5F5F3] p-4"
                          }
                        >
                          <div className="h-[80px] w-[80px] border-2 border-main_font_color object-cover ">
                            <img src={item.thumbnail} alt={item.thumbnail} />
                          </div>
                          <div className="font-sm font-DMsans  font-bold text-main_font_color  ">
                            <h2>{item.title}...</h2>
                            <span>${item.price}</span>
                          </div>
                          <div
                            className={`cursor-pointer text-main_font_color `}
                            onClick={() => HandleCartItem(item)}
                          >
                            <RxCross2 />
                          </div>
                        </Flex>
                      ))}
                    </div>

                    <div className="bg-main_bg_color p-4">
                      <h2 className="text-md ml-8 font-DMsans font-normal text-secondary_font_color">
                        Subtotal:
                        <span className="ml-1 font-bold text-main_font_color">
                          ${TotalAmount}
                        </span>
                      </h2>
                      <Flex className={"justify-around py-5"}>
                        <div onClick={() => navigate("/Cart")}>
                          <Button
                            className={
                              "font-sm border-2 border-main_font_color  px-4 py-4  font-DMsans font-bold text-main_font_color "
                            }
                            title={"View Cart"}
                          />
                        </div>
                        <div>
                          <Button
                            className={
                              "font-sm bg-main_font_color px-4 py-4 font-DMsans  font-bold text-main_bg_color  "
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
