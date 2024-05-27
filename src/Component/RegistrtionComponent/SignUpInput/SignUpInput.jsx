import React from "react";
import Flex from "../../CommonConponent/Flex";

const SignUpInput = ({
  className,
  inputType,
  placeHolder,
  labeTitle,
  inputId,
  oninputChange,
}) => {
  return (
    <>
      <div className={"w-full"}>
        <Flex className={"flex-col gap-y-1"}>
          <label
            className={"font-DMsans text-base font-bold text-main_font_color"}
            htmlFor={labeTitle}
          >
            {labeTitle}
          </label>
          <input
            className={className}
            type={inputType}
            id={inputId}
            name={inputId}
            placeholder={placeHolder}
            onChange={oninputChange}
          />
        </Flex>
      </div>
    </>
  );
};

export default SignUpInput;
