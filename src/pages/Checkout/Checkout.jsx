import React from "react";
import BreadCrumd from "../../Component/CommonConponent/BreadCrumb/BreadCrumb";
import Flex from "../../Component/CommonConponent/Flex";
import BillingDetails from "../../Component/CheckoutConponent/BillingDetails/BillingDetails";

const Checkout = () => {
  return (
    <div className="my-20">
      <div className="container">
        <div>
          <Flex className={"flex-col justify-start gap-y-20"}>
            <div>
              <h1 className=" font-DMsans text-[49px] font-bold text-main_font_color">
                Checkout
              </h1>
              <BreadCrumd />
            </div>
            <div>
              <p>Have a coupon? Click here to enter your code</p>
            </div>
            <div>
              <BillingDetails />
            </div>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
