import React, { useEffect, useState } from "react";
import Card from "../Card";
import Button from "../Button";
import axios from "axios";
const ShopRightBottom = () => {
  const [allProducts, setallProducts] = useState([]);
  useEffect(() => {
    const ProudtDataFetcher = async () => {
      const products = await axios.get("https://dummyjson.com/products");
      setallProducts(products.data.products);
    };
    ProudtDataFetcher();
  }, []);

  return (
    <>
      <div className="mt-8">
        <div className="flex items-center justify-between flex-wrap gap-y-8">
          {allProducts?.map((productItem) => (
            <div className="w-[32%]">
              <Card
                img={productItem.thumbnail}
                productTitle={productItem.title}
                colorVariant={"Balck"}
                price={productItem.price}
                badge={
                  <Button
                    className={"py-[7px] px-8 bg-black text-white"}
                    title={"new"}
                  />
                }
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopRightBottom;
