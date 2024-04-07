import React from "react";
import Flex from "../../CommonConponent/Flex";
import PhoneOfTheYearimg from "../../../assets/PhoneOfTheYearimg.png";
import Button from "../../CommonConponent/Button";
const PhoneOfTheYear = () => {
  return (
    <div className="container pb-10">
      <div className="py-10 bg-[#F3F3F3]">
        <Flex>
          <div className="w-[40%] ">
            <picture>
              <img src={PhoneOfTheYearimg} alt={PhoneOfTheYearimg} />
            </picture>
          </div>
          <div className="w-full ">
            <div className="flex flex-col items-start h-full gap-y-6">
              <h2 className="font-DMsans font-semibold text-[25px] sm:text-[40px] text-main_font_color">
                Phone of the year
              </h2>
              <p className="max-w-[511px] font-normal font-DMsans text-[16px] text-main_font_color">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry orem Ipsum..
              </p>
              <Button
                className={"py-3 px-10 bg-black text-main_bg_color"}
                title={"Shop Now"}
              />
            </div>
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default PhoneOfTheYear;
