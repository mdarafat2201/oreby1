import React from "react";
import BreadCrumb from "../../Component/CommonConponent/BreadCrumb/BreadCrumb";
import ShopLeft from "../../Component/ShopComponent/ShopLeft/ShopLeft";
import Flex from "../../Component/CommonConponent/Flex";
import ShopRight from "../../Component/ShopComponent/ShopRight/ShopRight";
const Shop = () => {
  return (
    <>
      <div className="container">
        <div className="px-2 py-5 md:py-20 lg:px-0">
          <div>
            <h2 className="font-DMsans text-[49px] font-bold text-main_font_color">
              Products
            </h2>
            <BreadCrumb />
          </div>

          <div className="py-16">
            <Flex className={"flex-col gap-y-10 md:flex-row md:gap-y-0"}>
              <ShopLeft className=" w-full  md:w-[25%]  " />
              <ShopRight className="ml-0 w-full md:ml-7 md:w-[75%]  " />
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
