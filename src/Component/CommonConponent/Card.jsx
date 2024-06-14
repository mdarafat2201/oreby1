import React from "react";
import productImg from "../../assets/product10.png";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { TbReload } from "react-icons/tb";
import { Link } from "react-router-dom";

const Card = ({
  colorVariant,
  badge,
  img,
  productTitle,
  price,
  productItemId,
  onAddtocart,
}) => {
  return (
    <>
      <div className="w-full cursor-pointer   px-4">
        <div className="group relative overflow-hidden">
          <div className="absolute left-5 top-5 text-black">{badge}</div>
          <Link to={`/Product-Details/${productItemId}`}>
            <img
              src={img ? img : productImg}
              alt={img}
              className="h-[290px] w-full object-cover"
            />
          </Link>

          {/* =================Overlay================= */}

          <div className="absolute -bottom-36 left-0 flex w-full flex-col items-end gap-y-5 bg-white px-7 py-6 transition-all group-hover:bottom-0">
            <div className="flex items-center gap-x-4">
              <h5 className="font-DMsans text-[#767676] transition-all hover:font-bold hover:text-[#262626]">
                Add to List
              </h5>
              <FaHeart />
            </div>
            <div className="flex items-center gap-x-4">
              <h5 className="font-normal text-[#767676] transition-all hover:font-bold hover:text-[#262626]">
                Compare
              </h5>
              <TbReload />
            </div>
            <div className="flex items-center gap-x-4" onClick={onAddtocart}>
              <h5 className="font-normal text-[#767676] transition-all hover:font-bold hover:text-[#262626]">
                Add to Cart
              </h5>
              <FaShoppingCart />
            </div>
          </div>

          {/* =================Overlay================= */}
        </div>

        <div className="flex items-center justify-between pt-6">
          <h3 className=" font-DMsans  text-xl font-bold">
            {productTitle ? productTitle : "Basic Crew Neck Tee"}
          </h3>
          <p className="text-thirdFontColor font-DMsans text-base font-normal">
            {price ? `$${price}` : "$44.00"}
          </p>
        </div>

        <span className="text-thirdFontColor pt-3 font-DMsans text-base font-normal">
          {colorVariant ? colorVariant : "Black"}
        </span>
      </div>
    </>
  );
};

export default Card;
