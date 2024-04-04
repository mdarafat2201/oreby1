import React from "react";
import Flex from "../CommonConponent/Flex";
import ShippingItem from "../CommonConponent/ShippingItem";
import { FaTruck } from "react-icons/fa6";

const Shipping = () => {
  const data = [
    { id: 1, icon: <FaTruck />, title: "Two years warranty" },
    { id: 1, icon: <FaTruck />, title: "Two years warranb bv   vnty" },
    { id: 1, icon: <FaTruck />, title: "Two years warranty" },
  ];

  return (
    <>
      <div>
        <div className="container">
          <Flex
            className={
              " flex-col sm:flex-row gap-y-3 justify-between items-center"
            }
          >
            {data?.map((item) => {
              <ShippingItem
                className={"flex gap-x-3 items-center"}
                key={item.id}
              >
                <span>{item.icon}</span>
                <p>{item.title}</p>
              </ShippingItem>;
            })}

            {/* {[...Array(3)].map((_, index) => (
              <ShippingItem
                className={"flex gap-x-3 items-center"}
                icom={<FaTruck />}
                title={"Two years warranty"}
              />
            ))} */}
          </Flex>
        </div>
      </div>
    </>
  );
};

export default Shipping;
