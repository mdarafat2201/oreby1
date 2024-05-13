import React, { useState } from "react";
import BreadCrumb from "../../Component/CommonConponent/BreadCrumb/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FetcherProduct } from "../../Redux/AllSlice/ProductSlice/ProductSlice";
const ProductDetails = () => {
  const dispatch = useDispatch();
  const [EachProduct, setEachProduct] = useState();
  useEffect(() => {
    dispatch(FetcherProduct("https://dummyjson.com/products"));
  }, []);
  const { data, status } = useSelector((state) => state.product);
  console.log(status);

  return (
    <>
      <div className="mb-10 mt-3">
        <div className="container">
          <div>
            <BreadCrumb />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
