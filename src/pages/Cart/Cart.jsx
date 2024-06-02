import React, { useState } from "react";
import BreadCrumb from "../../Component/CommonConponent/BreadCrumb/BreadCrumb";
import Flex from "../../Component/CommonConponent/Flex";
import product3 from "../../assets/product3.png";
import { FaMinus, FaPlus } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { useSelector } from "react-redux";
const Cart = () => {
  const { CartItem } = useSelector((state) => state.Cart);

  return (
    <>
      <div className=" py-24">
        <div className="container">
          <div>
            <Flex className="flex-col justify-start gap-y-2">
              <h1 className=" font-DMsans text-[50px] font-bold text-main_font_color">
                Cart
              </h1>
              <BreadCrumb />
            </Flex>
          </div>
          <div className="mt-24 bg-secondary_bg_color  py-8">
            <Flex className={"items-center justify-between"}>
              <div className=" grow basis-1/3">
                <h2 className="pl-5 font-DMsans text-base font-bold text-main_font_color">
                  Product
                </h2>
              </div>
              <div className="flex grow basis-1/5 justify-center ">
                <h2 className=" font-DMsans text-base font-bold text-main_font_color">
                  Price
                </h2>
              </div>
              <div className="flex grow basis-1/5 justify-center">
                <h2 className=" font-DMsans text-base font-bold text-main_font_color">
                  Quantity
                </h2>
              </div>
              <div className="flex grow basis-1/5 justify-center">
                <h2 className=" font-DMsans text-base font-bold text-main_font_color">
                  Total
                </h2>
              </div>
            </Flex>
          </div>
          <div className=" scrollbar-thumb-main_font_color scrollbar-track-secondary_bg_color scrollbar-thin h-[500px] overflow-y-scroll">
            {CartItem?.map((item) => (
              <div className="py-5">
                <Flex className={"items-center justify-between"}>
                  <div className="grow basis-1/3">
                    <Flex className={" items-center gap-x-5"}>
                      <span className="cursor-pointer text-2xl">
                        <ImCancelCircle />
                      </span>
                      <div className="h-20 w-20 rounded-md shadow-xl">
                        <img
                          src={
                            item.thumbnail
                              ? item.thumbnail
                              : "thumbnail missing"
                          }
                          alt={item.thumbnail}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <h2 className=" font-DMsans text-base font-bold text-main_font_color">
                        {item.title ? item.title : "title missing"}
                      </h2>
                    </Flex>
                  </div>
                  <div className="flex basis-1/5 justify-center">
                    <h2 className=" font-DMsans text-base font-bold text-main_font_color">
                      {item.price ? `$${item.price}` : "$0.00"}
                    </h2>
                  </div>
                  <div className="flex grow basis-1/5 justify-center">
                    <Flex
                      className={
                        " w-24 items-center justify-between   border-2 border-gray-300 px-2 py-1"
                      }
                    >
                      <span className="cursor-pointer">
                        <FaMinus />
                      </span>
                      <p>{item.cartQuantity}</p>
                      <span className="cursor-pointer">
                        <FaPlus />
                      </span>
                    </Flex>
                  </div>
                  <div className="flex grow basis-1/5 justify-center">
                    <h2 className=" font-DMsans text-base font-bold text-main_font_color">
                      {`$${item.cartQuantity * item.price}`}
                    </h2>
                  </div>
                </Flex>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
