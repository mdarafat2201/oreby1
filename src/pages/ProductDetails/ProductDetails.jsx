import React, { useState } from "react";
import BreadCrumb from "../../Component/CommonConponent/BreadCrumb/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FetcherProduct } from "../../Redux/AllSlice/ProductSlice/ProductSlice";
import ProductDetailstop from "../../Component/ProductDetailsComponent/ProductDetailstop";
import Loading from "../../Component/CommonConponent/Loading";
import Flex from "../../Component/CommonConponent/Flex";
import RatingStar from "../../Component/ProductDetailsComponent/RatingStar";
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
