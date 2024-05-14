import React, { useState } from "react";
import BreadCrumb from "../../Component/CommonConponent/BreadCrumb/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FetcherProduct } from "../../Redux/AllSlice/ProductSlice/ProductSlice";
import ProductDetailstop from "../../Component/ProductDetailsComponent/ProductDetailstop";
import Loading from "../../Component/CommonConponent/Loading";
import Flex from "../../Component/CommonConponent/Flex";
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
                <Flex className={"items-center justify-between"}>
                  <div className="w-[48%]">
                    <Loading />
                  </div>
                  <div className="w-[48%]">
                    <Loading />
                  </div>
                </Flex>
              </div>
            ) : status.payload === "ERROR" ? (
              "error"
            ) : (
              <ProductDetailstop EachProductAllImg={EachProduct} />
            )}

            <div>
              <h1>{EachProduct.title ? EachProduct.title : "Product"}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
