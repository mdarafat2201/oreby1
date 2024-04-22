import React from "react";
import ShopCatagories from "../../CommonConponent/ShopleftItem/ShopCatagories";
import ShopByColor from "../../CommonConponent/ShopleftItem/ShopByColor";
import ShopbyBrand from "../../CommonConponent/ShopleftItem/ShopbyBrand";
import {
  Catagorise,
  ShopColor,
  ShopBrand,
} from "../../../../NewArrivalData/ArrivalData";
const ShopLeft = ({ className }) => {
  return (
    <div className={className}>
      <ShopCatagories
        CatagorseData={Catagorise ? Catagorise : []}
        ShopLeftCategoryTitle={"Shop by Category"}
      />
      <ShopByColor
        ShopLeftColorTitle={"Shop by Color"}
        ShopByColorData={ShopColor ? ShopColor : []}
      />
      <ShopbyBrand
        ShopByBrandData={ShopBrand ? ShopBrand : []}
        ShopLeftBrandTitle={"Shop by Brand"}
      />
    </div>
  );
};

export default ShopLeft;
