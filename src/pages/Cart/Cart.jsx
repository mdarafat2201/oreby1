import React, { useEffect, useState } from "react";
import BreadCrumb from "../../Component/CommonConponent/BreadCrumb/BreadCrumb";
import Flex from "../../Component/CommonConponent/Flex";
import { FaMinus, FaPlus } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { useSelector, useDispatch } from "react-redux";
import {
  RemoveCartItem,
  ProductIncrement,
  ProductDecrement,
  getTotal,
} from "../../Redux/AllSlice/AddtoCart/AddtoCart";
import Button from "../../Component/CommonConponent/Button";
const Cart = () => {
  const Dispatch = useDispatch();
  const { CartItem, TotalAmount, totoalCartItem } = useSelector(
    (state) => state.Cart,
  );
  useEffect(() => {
    Dispatch(getTotal());
  }, [Dispatch, CartItem]);

  /**
   * todo: handleRemove funtionlity
   * @params ({item})
   */

  const handleRemove = (item) => {
    Dispatch(RemoveCartItem(item));
  };

  /**
   * todo: hendleIncremenproduct funtionlity
   * @params ({item})
   */
  const hendleIncremenproduct = (item) => {
    Dispatch(ProductIncrement(item));
  };
  /**
   * todo: hendleDcremenproduct funtionlity
   * @params ({item})
   */
  const hendleDcremenproduct = (item) => {
    Dispatch(ProductDecrement(item));
  };
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
          <div className=" h-[500px] overflow-y-scroll scrollbar-thin scrollbar-track-secondary_bg_color scrollbar-thumb-main_font_color">
            {CartItem?.length > 0
              ? CartItem?.map((item) => (
                  <div className="py-5">
                    <Flex className={"items-center justify-between"}>
                      <div className="grow basis-1/3">
                        <Flex className={" items-center gap-x-5"}>
                          <span
                            className="cursor-pointer text-2xl"
                            onClick={() => handleRemove(item)}
                          >
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
                          <span
                            className="cursor-pointer"
                            onClick={() => hendleDcremenproduct(item)}
                          >
                            <FaMinus />
                          </span>
                          <p>{item.cartQuantity}</p>
                          <span
                            className="cursor-pointer"
                            onClick={() => hendleIncremenproduct(item)}
                          >
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
                ))
              : "kiso nai"}
          </div>
          <div className="mt-10">
            <div className="mb-6 text-end">
              <h2 className="pr-4 font-DMsans text-xl font-bold text-main_font_color">
                Cart totals:{totoalCartItem}
              </h2>
            </div>
            <div>
              <div>
                <Flex className={"items-center justify-end"}>
                  <div className="basis-1/5 border-2 border-secondary_bg_color px-5 py-4">
                    <h3 className="font-DMsans text-base font-bold text-main_font_color">
                      Subtotal
                    </h3>
                  </div>
                  <div className="basis-1/5 border-2 border-secondary_bg_color px-5 py-4">
                    <p className="font-DMsans text-base font-normal text-main_font_color opacity-75">
                      {TotalAmount}$
                    </p>
                  </div>
                </Flex>
              </div>
              <div>
                <Flex className={"items-center justify-end"}>
                  <div className="basis-1/5 border-2 border-secondary_bg_color px-5 py-4">
                    <h3 className="font-DMsans text-base font-bold text-main_font_color">
                      Total
                    </h3>
                  </div>
                  <div className="basis-1/5 border-2 border-secondary_bg_color px-5 py-4">
                    <p className="font-DMsans text-base font-normal text-main_font_color opacity-75">
                      {TotalAmount}$
                    </p>
                  </div>
                </Flex>
              </div>
              <div className="mt-8 text-end">
                <Button
                  className={
                    "rounded-sm bg-main_font_color px-6 py-4 text-main_bg_color"
                  }
                  title={"Proceed to Checkout"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
