import React from "react";
import BreadCrumb from "../../Component/CommonConponent/BreadCrumb/BreadCrumb";
import ShopLeft from "../../Component/ShopComponent/ShopLeft/ShopLeft";
import Flex from "../../Component/CommonConponent/Flex";
import ShopRight from "../../Component/ShopComponent/ShopRight/ShopRight";
const Shop = () => {
  return (
    <>
      <div className="container">
        <div className="py-20">
          <h2 className="text-[49px] font-DMsans font-bold text-main_font_color">
            Products
          </h2>
          <BreadCrumb />
          <div className="py-16">
            <Flex>
              <ShopLeft className="w-[25%] h-[200vh] " />
              <ShopRight className="w-[75%] h-[100vh] bg-purple-500" />
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
