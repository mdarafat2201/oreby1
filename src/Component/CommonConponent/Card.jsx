import React from "react";
import productImg from "../../assets/electronicImg.png";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { TbReload } from "react-icons/tb";

const Card = ({ colorVariant, badge, img, productTitle, price }) => {
  return (
    <>
      <div className="cursor-pointer  w-[90%]">
        <div className="group relative overflow-hidden">
          <div className="absolute top-5 left-5 text-black">{badge}</div>

          <img src={img ? img : productImg} alt={img} />

          {/* =================Overlay================= */}

          <div className="py-6 px-7 flex flex-col items-end absolute -bottom-36 left-0 bg-white w-full gap-y-5 group-hover:bottom-0 transition-all">
            <div className="flex items-center gap-x-4">
              <h5 className="text-[#767676] font-DMsans hover:text-[#262626] hover:font-bold transition-all">
                Add to List
              </h5>
              <FaHeart />
            </div>
            <div className="flex items-center gap-x-4">
              <h5 className="text-[#767676] font-normal hover:text-[#262626] hover:font-bold transition-all">
                Compare
              </h5>
              <TbReload />
            </div>
            <div className="flex items-center gap-x-4">
              <h5 className="text-[#767676] font-normal hover:text-[#262626] hover:font-bold transition-all">
                Add to Cart
              </h5>
              <FaShoppingCart />
            </div>
          </div>

          {/* =================Overlay================= */}
        </div>

        <div className="flex justify-between items-center pt-6">
          <h3 className="text-primaryFontColor font-DMsans font-semibold text-xl">
            {productTitle ? productTitle : "Basic Crew Neck Tee"}
          </h3>
          <p className="text-base font-DMsans font-normal text-thirdFontColor">
            {price ? price : "$44.00"}
          </p>
        </div>
        {colorVariant && (
          <span className="text-thirdFontColor font-DMsans font-normal text-base pt-3">
            Black
          </span>
        )}
      </div>
    </>
  );
};

export default Card;
