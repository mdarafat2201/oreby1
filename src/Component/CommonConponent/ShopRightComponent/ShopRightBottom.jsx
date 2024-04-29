import React, { useEffect, useState } from "react";
import Card from "../Card.jsx";
import Button from "../Button";
import Flex from "../Flex.jsx";
import axios from "axios";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
const ShopRightBottom = () => {
  const [allProducts, setallProducts] = useState([]);
  const [page, setpage] = useState(1);
  useEffect(() => {
    const ProudtDataFetcher = async () => {
      const products = await axios.get("https://dummyjson.com/products");
      setallProducts(products.data.products);
    };
    ProudtDataFetcher();
  }, []);

  //HandlePagination function implementaion
  const HandlePagination = (pageNumber) => {
    if (
      pageNumber > 0 &&
      pageNumber <= Math.floor(allProducts.length / 9) + 1
    ) {
      setpage(pageNumber);
    }
  };

  return (
    <>
      <div className="mt-8">
        <div className="flex items-center justify-between flex-wrap gap-y-8">
          {allProducts?.slice(page * 9 - 9, page * 9).map((productItem) => (
            <div className="w-[33%]" key={productItem.id}>
              <Card
                img={productItem.thumbnail}
                productTitle={productItem.title}
                colorVariant={"Balck"}
                price={productItem.price - productItem.discountPercentage}
                badge={
                  <Button
                    className={"py-[7px] px-8 bg-black text-white"}
                    title={
                      productItem.discountPercentage
                        ? `$${productItem.discountPercentage}`
                        : "new"
                    }
                  />
                }
              />
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Flex className={"items-center justify-between"}>
            <Flex className="items-center gap-x-2">
              <div onClick={() => HandlePagination(page - 1)}>
                <p
                  className={`w-9 h-9 text-[#000000] bg-green-200 flex justify-center items-center cursor-pointer 
                  `}
                >
                  <FaAnglesLeft />
                </p>
              </div>

              {[...new Array(Math.floor(allProducts.length / 9) + 1)].map(
                (item, index) => (
                  <div key={index}>
                    <p
                      className={`w-9 h-9 bg-[#000000] text-main_bg_color flex justify-center items-center cursor-pointer ${
                        index + 1 === page && "bg-green-400 text-red-400"
                      }`}
                      onClick={() => HandlePagination(index + 1)}
                    >
                      {index + 1}
                    </p>
                  </div>
                )
              )}
              <div onClick={() => HandlePagination(page + 1)}>
                <p
                  className={`w-9 h-9 text-[#000000] bg-green-200 flex justify-center items-center cursor-pointer 
                 `}
                >
                  <FaAnglesRight />
                </p>
              </div>
            </Flex>
            <div>
              <p>{`Products from ${
                page === 1 ? page * 9 - 9 + 1 : page * 9 - 9
              } to ${
                page === Math.floor(allProducts.length / 9) + 1
                  ? allProducts.length
                  : page * 9
              } of ${allProducts.length}`}</p>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default ShopRightBottom;
