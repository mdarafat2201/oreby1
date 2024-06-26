import React from "react";
import Flex from "../../CommonConponent/Flex";

const Order = () => {
  return (
    <>
      <div>
        <div>
          <h1 className="mb-14 font-DMsans text-[39px] font-bold text-main_font_color">
            Your Order
          </h1>
        </div>
        <div>
          <Flex className={"items-center"}>
            <h2 className=" w-1/3 border-2 p-5 font-DMsans text-base font-bold text-main_font_color">
              Product
            </h2>
            <h2 className=" w-1/3 border-2 p-5 font-DMsans text-base font-bold text-main_font_color">
              Total
            </h2>
          </Flex>
          <Flex className={"items-center"}>
            <h2 className=" w-1/3 border-2 p-5 font-DMsans text-base font-bold text-main_font_color">
              Subtotal
            </h2>
            <h2 className=" w-1/3 border-2 p-5 font-DMsans text-base font-bold text-secondary_font_color">
              389.99 $
            </h2>
          </Flex>
          <Flex className={"items-center"}>
            <h2 className=" w-1/3 border-2 p-5 font-DMsans text-base font-bold text-main_font_color">
              Total
            </h2>
            <h2 className=" w-1/3 border-2 p-5 font-DMsans text-base font-bold text-secondary_font_color">
              389.99 $
            </h2>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default Order;
