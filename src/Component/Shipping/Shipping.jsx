import React from "react";
import Flex from "../CommonConponent/Flex";
import ShippingItem from "../CommonConponent/ShippingItem";
import { FaTruck } from "react-icons/fa6";
import { IoReload } from "react-icons/io5";

const Shipping = () => {
  return (
    <>
      <div>
        <div className="container">
          <Flex
            className={
              " flex-col sm:flex-row gap-y-3 justify-between items-center"
            }
          >
            <ShippingItem
              className={"flex gap-x-3 items-center cursor-pointer"}
              icon={"2"}
              title={"Two years warranty"}
            />
            <ShippingItem
              className={"flex gap-x-3 items-center cursor-pointer"}
              icon={<FaTruck />}
              title={"Free shipping"}
            />
            <ShippingItem
              className={"flex gap-x-3 items-center cursor-pointer"}
              icon={<IoReload />}
              title={"Return policy in 30 days"}
            />
          </Flex>
        </div>
      </div>
    </>
  );
};

export default Shipping;
