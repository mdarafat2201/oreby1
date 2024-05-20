import React, { useState } from "react";
import BreadCrumb from "../../Component/CommonConponent/BreadCrumb/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FetcherProduct } from "../../Redux/AllSlice/ProductSlice/ProductSlice";
import ProductDetailstop from "../../Component/ProductDetailsComponent/ProductDetailstop";
import Loading from "../../Component/CommonConponent/Loading";
import Flex from "../../Component/CommonConponent/Flex";
import RatingStar from "../../Component/ProductDetailsComponent/RatingStar";
import ProductInfo from "../../Component/ProductDetailsComponent/ProductInfo";
const ProductDetails = () => {
  const dispatch = useDispatch();
  const [EachProduct, setEachProduct] = useState({});
  useEffect(() => {
    dispatch(FetcherProduct("https://dummyjson.com/products/1"));
  }, []);
  const { data, status } = useSelector((state) => state.product);

  useEffect(() => {
    if (status.payload === "IDLE") {
      setEachProduct(data.payload);
    }
  }, [status.payload, data.payload]);

  return (
    <>
      <div className="mb-10 mt-3">
        <div className="container">
          <div>
            <div>
              <BreadCrumb />
            </div>
            {status.payload === "LOADING" ? (
              <div>
                <Flex
                  className={"flex-wrap items-center justify-between gap-y-10"}
                >
                  <Loading className={"w-[48%]"} sortProductAll={4} />
                </Flex>
              </div>
            ) : status.payload === "ERROR" ? (
              "error"
            ) : (
              <ProductDetailstop EachProductAllImg={EachProduct} />
            )}

            <div>
              <h1 className="font-DMsans  text-[39px]  font-bold text-main_font_color">
                {EachProduct.title ? EachProduct.title : "Product"}
              </h1>
              <RatingStar rating={EachProduct.rating} />
              <div>
                <Flex className={"mt-5 items-center gap-x-5"}>
                  <span className="font-DMsans text-[16px] font-normal text-secondary_font_color line-through">
                    ${EachProduct.price}
                  </span>
                  <span className="font-DMsans text-[20px] font-bold text-main_font_color ">
                    $
                    {Math.round(
                      EachProduct.price -
                        (EachProduct.price * EachProduct.discountPercentage) /
                          100,
                    )}
                  </span>
                </Flex>
              </div>
            </div>
            <div>
              <ProductInfo ProductStock={EachProduct.stock} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
