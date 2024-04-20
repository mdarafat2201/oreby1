import React from "react";

const ShopCatagories = ({ CatagorseData, ShopLeftTitle }) => {
  return (
    <>
      <div>
        <h1 className="font-DMsans font-bold text-xl mb-9">
          {ShopLeftTitle ? ShopLeftTitle : "title is missing"}
        </h1>
      </div>
      <div className="px-2">
        <div className="divide-y-2 divide-[#f0f0f0] divide-solid">
          {CatagorseData?.map((item) => (
            <div className="py-5">
              <h2 className="text-base text-secondary_font_color font-normal">
                {item.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopCatagories;
