import React from "react";
import BreadCrumb from "../../Component/CommonConponent/BreadCrumb/BreadCrumb";
import ContactConponent from "../../Component/ContactConponent/ContactConponent";
import Flex from "../../Component/CommonConponent/Flex";
const Contact = () => {
  return (
    <>
      <div className="py-20">
        <div className="container">
          <div>
            <Flex className={"flex-col justify-start gap-y-14"}>
              <div>
                <h1 className=" font-DMsans text-[49px] font-bold text-main_font_color">
                  Contacts
                </h1>
                <BreadCrumb />
              </div>
              <div>
                <ContactConponent />
              </div>
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
