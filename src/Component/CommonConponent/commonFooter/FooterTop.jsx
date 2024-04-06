import React from "react";
import FooterItem from "./FooterItem";
import Flex from "../Flex";
import FooterLogo from "../../../assets/FooterLogo.png";
const FooterTop = () => {
  return (
    <>
      <Flex
        className={
          "justify-around sm:justify-between gap-y-10 lg:gap-y-0 flex-wrap lg:flex-nowrap sm:px-5 items-start"
        }
      >
        <FooterItem
          title={"MENU"}
          allitem={["Home", "Shop", "About", "Contact", "Journal"]}
        />
        <FooterItem
          title={"SHOP"}
          allitem={["Category", "Category", "Category", "Category", "Category"]}
        />
        <FooterItem
          title={"HELP"}
          allitem={[
            "Privacy Policy",
            "Terms & Conditions",
            "Special E-shop",
            "Shipping",
            "Secure Payments",
          ]}
        />
        <div className="px-4 sm:px-0">
          <div className="text-main_font_color font-DMsans font-bold text-[15px] sm:text-md mb-2">
            <a href="#">(052) 611-5711 compa</a>
          </div>
          <div className="text-main_font_color font-DMsans font-bold text-[15px] sm:text-md mb-5">
            <a href="#">company@domain.com</a>
          </div>

          <address className="text-footer_text_color font-DMsans text-[12px] sm:text-sm">
            575 Crescent Ave. Quakertown, PA 18951
          </address>
        </div>
        <div className="cursor-pointer w-[60px]">
          <picture>
            <img src={FooterLogo} alt={FooterLogo} />
          </picture>
        </div>
      </Flex>
    </>
  );
};

export default FooterTop;
