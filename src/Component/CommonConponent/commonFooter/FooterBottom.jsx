import React from "react";
import Flex from "../Flex";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const FooterBottom = () => {
  return (
    <>
      <Flex
        className={
          "sm:justify-between justify-center  mb-4 sm:mb-0 flex-wrap sm:flex-nowrap px-4  items-center"
        }
      >
        <div className="py-10">
          <Flex className={"items-center space-x-6"}>
            <FaFacebookF />
            <FaLinkedinIn />
            <FaInstagram />
          </Flex>
        </div>
        <div className="text-footer_text_color font-DMsans text-[12px] sm:text-sm">
          <p>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
        </div>
      </Flex>
    </>
  );
};

export default FooterBottom;
