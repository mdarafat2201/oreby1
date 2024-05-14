import React from "react";
import Flex from "../CommonConponent/Flex";
const ProductDetailstop = ({ EachProductAllImg }) => {
  return (
    <>
      <div className="mt-10">
        <Flex className={" flex-wrap items-center justify-between gap-y-10"}>
          {EachProductAllImg.images?.slice(0, 4).map((img) => (
            <div
              className="h-[450px] max-w-[48%] rounded-lg  shadow-lg"
              key={img}
            >
              <picture>
                <img
                  src={img}
                  alt={img}
                  className="h-full w-full rounded-lg object-cover"
                />
              </picture>
            </div>
          ))}
        </Flex>
      </div>
    </>
  );
};

export default ProductDetailstop;
