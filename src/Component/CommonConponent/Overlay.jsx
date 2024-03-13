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
        <h3 className="text-main_font_color font-bold font-DMsans text-[39px]">
          {titel ? titel : "Phones Sele"}
        </h3>
        <p className="mt-7 text-main_font_color font-normal font-DMsans text-base opacity-75 mb-8">
          {discountdetilsFost}

          <span className="font-bold text-4xl align-middle">
            {discountAmount}
          </span>
          {discountdetilslost}
        </p>
        <Button
          className={
            "py-4 px-14 bg-main_font_color text-main_bg_color hover:bg-slate-700"
          }
          title={btnTitle}
        />
      </div>
    </>
  );
};

export default Overlay;
