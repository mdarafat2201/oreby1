import React, { useContext, useEffect, useState, createContext } from "react";
import Card from "../Card.jsx";
import Button from "../Button";
import Flex from "../Flex.jsx";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { ShopRightPagecontext } from "../../ShopComponent/ShopRight/ShopRight";
import { FetcherProduct } from "../../../Redux/AllSlice/ProductSlice/ProductSlice.js";
import { useSelector, useDispatch } from "react-redux";

import Loading from "../Loading.jsx";
import { addtoCart } from "../../../Redux/AllSlice/AddtoCart/AddtoCart.js";

const ShopRightBottom = () => {
  const dispatch = useDispatch();
  const [allProducts, setallProducts] = useState([]);
  const [page, setpage] = useState(1);
  const value = useContext(ShopRightPagecontext);
  const { GridLayout, sortProduct } = value;
  useEffect(() => {
    dispatch(FetcherProduct("https://dummyjson.com/products"));
  }, []);

  const { data, status } = useSelector((state) => state.product);

  useEffect(() => {
    if (status.payload === "IDLE") {
      setallProducts(data.payload.products);
    }
  }, [status.payload, data.payload]);

  //HandlePagination function implementaion
  const HandlePagination = (pageNumber) => {
    if (
      pageNumber > 0 &&
      pageNumber <= Math.floor(allProducts.length / sortProduct) + 1
    ) {
      setpage(pageNumber);
    }
  };
  //HandleAddcart function implementaion

  const HandleAddcart = (item) => {
    dispatch(addtoCart(item));
  };
  return (
    <>
      <div className="mt-8">
        {status.payload == "LOADING" ? (
          <div className="flex flex-wrap items-center justify-between gap-y-10">
            <Loading className={"w-[31%]"} sortProductAll={9} />
          </div>
        ) : status.payload === "ERROR" ? (
          <h1 className="flex h-[100vh] items-center justify-center bg-green-600">
            ejhbgcrror
          </h1>
        ) : (
          allProducts && (
            <div>
              <Flex className=" flex-wrap items-center justify-between gap-y-8">
                {allProducts
                  ?.slice(page * sortProduct - sortProduct, page * sortProduct)
                  .map((productItem) => (
                    <div
                      className={`  ${GridLayout ? "w-full" : "w-full sm:w-[48%] lg:w-[33%]"}`}
                      key={productItem.id}
                    >
                      <Card
                        onAddtocart={() => HandleAddcart(productItem)}
                        productItemId={productItem.id}
                        img={productItem.thumbnail}
                        productTitle={productItem.title}
                        colorVariant={"Balck"}
                        price={
                          productItem.price - productItem.discountPercentage >=
                          Math.floor(
                            productItem.price - productItem.discountPercentage,
                          )
                            ? `${Math.floor(productItem.price - productItem.discountPercentage)}.50`
                            : `${Math.floor(productItem.price - productItem.discountPercentage)}`
                        }
                        badge={
                          <Button
                            className={"bg-black px-8 py-[7px] text-white"}
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
              </Flex>
              <div className="mt-10">
                <Flex className={"flex-wrap items-center justify-between"}>
                  <Flex className="items-center gap-x-2">
                    <div onClick={() => HandlePagination(page - 1)}>
                      <p
                        className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded border text-[#000000] hover:bg-[#000000] hover:text-main_bg_color 
                  `}
                      >
                        <FaAnglesLeft />
                      </p>
                    </div>

                    {[
                      ...new Array(
                        Math.floor(allProducts.length / sortProduct) + 1,
                      ),
                    ].map((item, index) => (
                      <div key={index}>
                        <p
                          className={`flex h-9  w-9 cursor-pointer  items-center justify-center rounded border ${
                            index + 1 === page &&
                            "bg-[#000000] text-main_bg_color"
                          }`}
                          onClick={() => HandlePagination(index + 1)}
                        >
                          {index + 1}
                        </p>
                      </div>
                    ))}
                    <div onClick={() => HandlePagination(page + 1)}>
                      <p
                        className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded border text-[#000000] hover:bg-[#000000] hover:text-main_bg_color 
                 `}
                      >
                        <FaAnglesRight />
                      </p>
                    </div>
                  </Flex>
                  <div className="mt-5 sm:mt-0">
                    <p>{`Products from ${
                      page === 1
                        ? page * sortProduct - sortProduct + 1
                        : page * sortProduct - sortProduct
                    } to ${
                      page === Math.floor(allProducts.length / sortProduct) + 1
                        ? allProducts.length
                        : page * sortProduct
                    } of ${allProducts.length}`}</p>
                  </div>
                </Flex>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default ShopRightBottom;
