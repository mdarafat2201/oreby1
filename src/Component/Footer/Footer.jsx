import React from "react";
import FooterTop from "../CommonConponent/commonFooter/FooterTop";
import FooterBottom from "../CommonConponent/commonFooter/FooterBottom";

const Footer = () => {
  return (
    <>
      <div>
        <div className="container">
          <FooterTop />
          <FooterBottom />
        </div>
      </div>
    </>
  );
};

export default Footer;
