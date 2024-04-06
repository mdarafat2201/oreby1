import React from "react";
//import { FaTruck } from "react-icons/fa6";
const ShippingItem = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
      {/* <span>{icon ? icon : <FaTruck />}</span>
      <h2>{title ? title : "Two years warranty"}</h2> */}
    </div>
  );
};

export default ShippingItem;
