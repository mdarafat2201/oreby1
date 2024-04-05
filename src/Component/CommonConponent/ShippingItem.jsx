import React from "react";
import { FaTruck } from "react-icons/fa6";
const ShippingItem = ({ className, icon, title }) => {
  return (
    <div className={className}>
      <span>{icon ? icon : <FaTruck />}</span>
      <h2>{title ? title : "Two years warranty"}</h2>
    </div>
  );
};

export default ShippingItem;
