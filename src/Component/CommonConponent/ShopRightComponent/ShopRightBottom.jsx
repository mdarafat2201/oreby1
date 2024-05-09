import React, { useContext, useEffect, useState } from "react";
import Card from "../Card.jsx";
import Button from "../Button";
import Flex from "../Flex.jsx";
import axios from "axios";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { ShopRightPagecontext } from "../../ShopComponent/ShopRight/ShopRight";
import { SetProduts } from "../../../Redux/AllSlice/ProductSlice/ProductSlice.js";
import { useSelector, useDispatch } from "react-redux";
const ShopRightBottom = () => {
  const dispatch = useDispatch();
  const [allProducts, setallProducts] = useState([]);
  const [page, setpage] = useState(1);
  const value = useContext(ShopRightPagecontext);
  useEffect(() => {
    const ProudtDataFetcher = async () => {
      const products = await axios.get("https://dummyjson.com/products");
      setallProducts(products.data.products);

      // set data on redux
      dispatch(SetProduts(products.data.products));
    };
    ProudtDataFetcher();
  }, []);

  //HandlePagination function implementaion
  const HandlePagination = (pageNumber) => {
    if (
      pageNumber > 0 &&
      pageNumber <= Math.floor(allProducts.length / value) + 1
    ) {
      setpage(pageNumber);
    }
  };

  return (
    <>
      <div className="mt-8">
        <div className="flex items-center justify-between flex-wrap gap-y-8">
          {allProducts
            ?.slice(page * value - value, page * value)
            .map((productItem) => (
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
                  className={`w-9 h-9 text-[#000000] border rounded hover:text-main_bg_color hover:bg-[#000000] flex justify-center items-center cursor-pointer 
                  `}
                >
                  <FaAnglesLeft />
                </p>
              </div>

              {[...new Array(Math.floor(allProducts.length / value) + 1)].map(
                (item, index) => (
                  <div key={index}>
                    <p
                      className={`w-9 h-9  border rounded  flex justify-center items-center cursor-pointer ${
                        index + 1 === page && "bg-[#000000] text-main_bg_color"
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
                  className={`w-9 h-9 text-[#000000] border hover:text-main_bg_color rounded hover:bg-[#000000] flex justify-center items-center cursor-pointer 
                 `}
                >
                  <FaAnglesRight />
                </p>
              </div>
            </Flex>
            <div>
              <p>{`Products from ${
                page === 1 ? page * value - value + 1 : page * value - value
              } to ${
                page === Math.floor(allProducts.length / value) + 1
                  ? allProducts.length
                  : page * value
              } of ${allProducts.length}`}</p>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default ShopRightBottom;
