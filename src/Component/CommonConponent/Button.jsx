import React, { Children } from "react";

const Button = ({ className, Children }) => {
  return (
    <>
      <Button className={className ? className : "w-5 h-5 bg-black"}>
        {Children}
      </Button>
    </>
  );
};

export default Button;
