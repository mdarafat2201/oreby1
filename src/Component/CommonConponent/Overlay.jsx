import React from "react";
import Button from "../CommonConponent/Button";
const Overlay = ({
  className,
  titel,
  discountdetilsFost,
  discountdetilslost,
  discountAmount,
  btnTitle,
}) => {
  return (
    <>
      <div className={`absolute ${className}`}>
        <h3 className="text-main_font_color font-bold font-DMsans text-2xl lg:text-[39px]">
          {titel ? titel : "Phones Sele"}
        </h3>
        <p className="pt-2 lg:mt-7 text-main_font_color font-normal font-DMsans text-[15px] lg:text-[20px] mb-3 lg:mb-8">
          <span className="opacity-75">{discountdetilsFost}</span>

          <span className="font-bold text-4xl align-middle">
            {discountAmount}
          </span>
          <span className="opacity-75">{discountdetilslost}</span>
        </p>
        <Button
          className={
            "py-2 px-6  lg:py-4 lg:px-14 bg-main_font_color text-main_bg_color hover:bg-slate-700"
          }
          title={btnTitle}
        />
      </div>
    </>
  );
};

export default Overlay;
