import React, { useContext, useEffect, useState } from "react";
import Card from "../Card.jsx";
import Button from "../Button";
import Flex from "../Flex.jsx";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { ShopRightPagecontext } from "../../ShopComponent/ShopRight/ShopRight";
import { FetcherProduct } from "../../../Redux/AllSlice/ProductSlice/ProductSlice.js";
import { useSelector, useDispatch } from "react-redux";
const ShopRightBottom = () => {
  const dispatch = useDispatch();
  const [allProducts, setallProducts] = useState([]);
  const [page, setpage] = useState(1);
  const value = useContext(ShopRightPagecontext);
  const { GridLayout, sortProduct } = value;
  useEffect(() => {
    dispatch(FetcherProduct());
  }, []);

  const { data, status } = useSelector((state) => state.product);
  console.log(status);

  useEffect(() => {
    if (status.payload === "IDLE") {
      setallProducts(data.payload);
    }
  }, [status.payload, data.payload]);

  // useEffect(() => {
  //   const ProudtDataFetcher = async () => {
  //     const products = await axios.get("https://dummyjson.com/products");
  //     setallProducts(products.data.products);

  //     // set data on redux
  //     dispatch(SetProduts(products.data.products));
  //   };
  //   ProudtDataFetcher();
  // }, []);

  //HandlePagination function implementaion
  const HandlePagination = (pageNumber) => {
    if (
      pageNumber > 0 &&
      pageNumber <= Math.floor(allProducts.length / sortProduct) + 1
    ) {
      setpage(pageNumber);
    }
  };

  return (
    <>
      <div className="mt-8">
        {status.payload == "LOADING" ? (
          <div className="flex justify-center items-center h-[100vh]">
            <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
              <div class="animate-pulse flex space-x-4">
                <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                <div class="flex-1 space-y-6 py-1">
                  <div class="h-2 bg-slate-700 rounded"></div>
                  <div class="space-y-3">
                    <div class="grid grid-cols-3 gap-4">
                      <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                      <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                    </div>
                    <div class="h-2 bg-slate-700 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : status.payload === "ERROR" ? (
          <h1 className="flex justify-center items-center h-[100vh] bg-green-600">
            ejhbgcrror
          </h1>
        ) : (
          allProducts && (
            <div>
              <div className="flex items-center justify-between flex-wrap gap-y-8">
                {allProducts
                  ?.slice(page * sortProduct - sortProduct, page * sortProduct)
                  .map((productItem) => (
                    <div
                      className={`${GridLayout ? "w-full" : "w-[33%]"}`}
                      key={productItem.id}
                    >
                      <Card
                        img={productItem.thumbnail}
                        productTitle={productItem.title}
                        colorVariant={"Balck"}
                        price={
                          productItem.price - productItem.discountPercentage
                        }
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

                    {[
                      ...new Array(
                        Math.floor(allProducts.length / sortProduct) + 1
                      ),
                    ].map((item, index) => (
                      <div key={index}>
                        <p
                          className={`w-9 h-9  border rounded  flex justify-center items-center cursor-pointer ${
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
                        className={`w-9 h-9 text-[#000000] border hover:text-main_bg_color rounded hover:bg-[#000000] flex justify-center items-center cursor-pointer 
                 `}
                      >
                        <FaAnglesRight />
                      </p>
                    </div>
                  </Flex>
                  <div>
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
