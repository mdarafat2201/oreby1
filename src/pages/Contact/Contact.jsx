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
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59881.4924740205!2d41.60880612001956!3d20.275695934830658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15ef19027dc2b90f%3A0xf860eb282fb2068b!2sAl%20Aqiq!5e0!3m2!1sen!2ssa!4v1718151238291!5m2!1sen!2ssa"
                  className="h-[500px] w-full"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
