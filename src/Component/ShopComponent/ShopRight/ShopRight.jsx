import React, { createContext, useState } from "react";
import ProductRightTop from "../../CommonConponent/ShopRightComponent/ProductRightTop";
import ShopRightBottom from "../../CommonConponent/ShopRightComponent/ShopRightBottom";
export const ShopRightPagecontext = createContext();
const ShopRight = ({ className }) => {
  const [sortProduct, setsortProduct] = useState(9);
  const [GridLayout, setGridLayout] = useState(false);

  //HandlepageOtion funtion
  const HandlepageOtion = (e) => {
    setsortProduct(e.target.value);
  };

  // handlePagination function implementaion
  const handlePagination = () => {
    setGridLayout(!GridLayout);
  };

  const ShopRightBottomItem = {
    sortProduct,
    GridLayout,
  };

  return (
    <>
      <div className={className}>
        <ProductRightTop
          onpageItem={HandlepageOtion}
          onchageLayout={handlePagination}
          changeIcon={GridLayout}
        />
        <ShopRightPagecontext.Provider value={ShopRightBottomItem}>
          <ShopRightBottom />
        </ShopRightPagecontext.Provider>
      </div>
    </>
  );
};

export default ShopRight;
