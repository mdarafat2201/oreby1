import React from "react";
import BreadCrumd from "../../Component/CommonConponent/BreadCrumb/BreadCrumb";
import Flex from "../../Component/CommonConponent/Flex";
import BillingDetails from "../../Component/CheckoutConponent/BillingDetails/BillingDetails";
import Order from "../../Component/CheckoutConponent/Order/Order";
import Button from "../../Component/CommonConponent/Button";

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
            <div>
              <h2 className="mb-14 font-DMsans text-[39px] font-bold text-main_font_color">
                Additional Information
              </h2>
              <h3
                className={
                  "font-DMsans text-base font-bold text-main_font_color"
                }
              >
                Other Notes (optional)
              </h3>
              <p
                className={
                  "font-DMsans text-base font-normal text-secondary_font_color"
                }
              >
                Notes about your order, e.g. special notes for delivery.
              </p>
            </div>
            <hr />
            <div>
              <Order />
            </div>
            <div className=" border-2 p-10">
              <Flex className={"flex-col justify-start gap-y-6"}>
                <div>
                  <div className="w-1/2">
                    <Flex className={" items-start justify-between"}>
                      <div>
                        <input
                          type="checkbox"
                          id="subribeNo"
                          name="subribeNo"
                        />
                        <span
                          className={
                            "ml-1 font-DMsans text-base font-bold text-main_font_color"
                          }
                        >
                          Bank
                        </span>
                      </div>
                      <div>
                        <h2 className="mb-3 font-DMsans text-[39px] font-bold text-main_font_color">
                          ata bad rakhben
                        </h2>
                      </div>
                    </Flex>
                  </div>
                  <p
                    className={
                      "bg-[#979797] p-5 font-DMsans text-base font-normal text-secondary_font_color"
                    }
                  >
                    Pay via Bank; you can pay with your credit card if you don’t
                    have a Bank account.
                  </p>
                </div>
                <div>
                  <div>
                    <input type="checkbox" id="subribeNo" name="subribeNo" />
                    <span
                      className={
                        "ml-1 font-DMsans text-base font-bold text-main_font_color"
                      }
                    >
                      Bank2
                    </span>
                    <p
                      className={
                        "font-DMsans text-xl font-normal text-secondary_font_color"
                      }
                    >
                      Your personal data will be used to process your order,
                      support your experience throughout this website, and for
                      other purposes described in our privacy policy.
                    </p>
                  </div>
                </div>
                <div>
                  <Button
                    className={
                      "cursor-pointer rounded-sm bg-main_font_color px-10 py-4 text-main_bg_color"
                    }
                    title={"Proceed to Bank"}
                  />
                </div>
              </Flex>
            </div>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
