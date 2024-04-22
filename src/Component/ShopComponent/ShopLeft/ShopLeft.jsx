import React from "react";
import ShopCatagories from "../../CommonConponent/ShopleftItem/ShopCatagories";
import ShopByColor from "../../CommonConponent/ShopleftItem/ShopByColor";
import ShopbyBrand from "../../CommonConponent/ShopleftItem/ShopbyBrand";
import ShopbyPrice from "../../CommonConponent/ShopleftItem/ShopbyPrice";
import {
  Catagorise,
  ShopColor,
  ShopBrand,
  ShopPrice,
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
      <ShopbyPrice
        ShopByPriceData={ShopPrice ? ShopPrice : []}
        ShopLeftPriceTitle={"Shop by Price"}
      />
    </div>
  );
};

export default ShopLeft;
