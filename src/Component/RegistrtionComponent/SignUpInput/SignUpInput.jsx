import React from "react";
import Flex from "../../CommonConponent/Flex";

const SignUpInput = ({
  className,
  inputType,
  placeHolder,
  labeTitle,
  inputId,
}) => {
  return (
    <>
      <div className={className}>
        <Flex className={"flex-col gap-y-1"}>
          <label
            className=" font-DMsans text-base font-bold text-main_font_color"
            htmlFor={labeTitle}
          >
            {labeTitle}
          </label>
          <input
            className={"border-b-2 border-b-secondary_bg_color py-4"}
            type={inputType}
            id={inputId}
            name={inputId}
            placeholder={placeHolder}
          />
        </Flex>
      </div>
    </>
  );
};

export default SignUpInput;
