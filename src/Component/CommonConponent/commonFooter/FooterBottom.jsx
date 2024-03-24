import React from "react";
import Flex from "../Flex";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const FooterBottom = () => {
  return (
    <>
      <Flex className={"justify-between items-center"}>
        <div className="py-10">
          <Flex className={"items-center space-x-6"}>
            <FaFacebookF />
            <FaLinkedinIn />
            <FaInstagram />
          </Flex>
        </div>
        <div className="text-footer_text_color font-DMsans text-sm">
          <p>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
        </div>
      </Flex>
    </>
  );
};

export default FooterBottom;
