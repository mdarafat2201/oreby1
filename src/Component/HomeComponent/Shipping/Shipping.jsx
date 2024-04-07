import React from "react";
import Flex from "../../CommonConponent/Flex";
import ShippingItem from "../../CommonConponent/ShippingItem";
import { FaTruck } from "react-icons/fa6";
import { IoReload } from "react-icons/io5";
import { PiNumberTwoBold } from "react-icons/pi";
const Shipping = () => {
  const data = [
    { id: 1, icon: <PiNumberTwoBold />, title: "Two years warranty" },
    { id: 1, icon: <FaTruck />, title: "Free shipping" },
    { id: 1, icon: <IoReload />, title: "Return policy in 30 days" },
  ];
  return (
    <>
      <div>
        <div className="container">
          <Flex
            className={
              " flex-col sm:flex-row gap-y-3 mt-4 justify-between items-center"
            }
          >
            {data?.map((item) => (
              <ShippingItem
                className={"flex gap-x-3 items-center cursor-pointer"}
                key={item.id}
              >
                <span>{item.icon}</span>
                <p>{item.title}</p>
              </ShippingItem>
            ))}

            {/* <ShippingItem
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
            /> */}
            {/* <span>{icon ? icon : <FaTruck />}</span>
      <h2>{title ? title : "Two years warranty"}</h2> */}
          </Flex>
        </div>
      </div>
    </>
  );
};

export default Shipping;
