import React from "react";
import Flex from "../CommonConponent/Flex";
import ShippingItem from "../CommonConponent/ShippingItem";
import { FaTruck } from "react-icons/fa6";

const Shipping = () => {
  return (
    <>
      <div>
        <div className="container">
          <Flex className={"justify-between items-center"}>
            {[...Array(3)].map((_, index) => (
              <ShippingItem className={"flex gap-x-3 items-center"}>
                <span>
                  <FaTruck />
                </span>
                <p>Two years warranty</p>
              </ShippingItem>
            ))}
          </Flex>
        </div>
      </div>
    </>
  );
};

export default Shipping;
