import React from "react";
import ShopCatagories from "../../CommonConponent/ShopleftItem/ShopCatagories";
import ShopByColor from "../../CommonConponent/ShopleftItem/ShopByColor";
import { Catagorise, ShopColor } from "../../../../NewArrivalData/ArrivalData";
const ShopLeft = ({ className }) => {
  return (
    <div className={className}>
      <ShopCatagories
        CatagorseData={Catagorise ? Catagorise : []}
        ShopLeftTitle={"Shop by Category"}
      />
      <ShopByColor
        ShopLeftTitle={"Shop by Color"}
        ShopByColorData={ShopColor ? ShopColor : []}
      />
    </div>
  );
};

export default ShopLeft;
