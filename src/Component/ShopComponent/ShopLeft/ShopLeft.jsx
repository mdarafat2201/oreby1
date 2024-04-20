import React from "react";
import ShopCatagories from "../../CommonConponent/ShopleftItem/ShopCatagories";
import { Catagorise } from "../../../../NewArrivalData/ArrivalData";
const ShopLeft = ({ className }) => {
  return (
    <div className={className}>
      <ShopCatagories
        CatagorseData={Catagorise ? Catagorise : []}
        ShopLeftTitle={"Shop by Category"}
      />
    </div>
  );
};

export default ShopLeft;
