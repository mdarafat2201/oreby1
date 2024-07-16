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
  let categoryarr = [];
  let categoriesSet = new Set();
  allProducts.forEach((product) => {
    if (!categoriesSet.has(product.category)) {
      categoryarr.push({
        id: product.id,
        title: product.category,
        subcategory: product.tags,
      });
      categoriesSet.add(product.category);
    }
  });

  // barund=======>
  let brandarr = [];
  let brandSet = new Set();
  allProducts.forEach((product) => {
    if (!brandSet.has(product.brand)) {
      brandarr.push({
        id: product.id,
        title: product.brand,
      });
      brandSet.add(product.brand);
    }
  });
  console.log(brandarr);

  return (
    <div className={className}>
      <ShopCatagories
        CatagorseData={categoryarr ? categoryarr : []}
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
        ShopByBrandData={brandarr ? brandarr : []}
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
