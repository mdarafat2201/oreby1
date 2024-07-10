import React, { useEffect, useState } from "react";
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
import { useSelector } from "react-redux";
const ShopLeft = ({ className }) => {
  const [allProducts, setallProducts] = useState([]);
  const { data, status } = useSelector((state) => state.product);
  useEffect(() => {
    if (status.payload === "IDLE") {
      setallProducts(data.payload.products);
    }
  }, [status.payload, data.payload]);
  let arr = [];
  allProducts.map((product) => {
    arr.push({
      id: product.id,
      title: product.category,
      subcategory: product.tags,
    });
  });
  console.log(arr);
  return (
    <div className={className}>
      <ShopCatagories
        CatagorseData={Catagorise ? Catagorise : []}
        ShopLeftCategoryTitle={"Shop by Category"}
        dropdownis={false}
        dropdownisExpandis={true}
      />
      <ShopByColor
        ShopLeftColorTitle={"Shop by Color"}
        ShopByColorData={ShopColor ? ShopColor : []}
        dropdownis={true}
        dropdownisExpandis={false}
      />
      <ShopbyBrand
        ShopByBrandData={ShopBrand ? ShopBrand : []}
        ShopLeftBrandTitle={"Shop by Brand"}
        dropdownis={true}
        dropdownisExpandis={false}
      />
      <ShopbyPrice
        ShopByPriceData={ShopPrice ? ShopPrice : []}
        ShopLeftPriceTitle={"Shop by Price"}
        dropdownis={false}
        dropdownisExpandis={true}
      />
    </div>
  );
};

export default ShopLeft;
