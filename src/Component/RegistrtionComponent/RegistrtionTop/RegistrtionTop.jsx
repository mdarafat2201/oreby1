import React from "react";
import BreadCrumb from "../../CommonConponent/BreadCrumb/BreadCrumb";
import Flex from "../../CommonConponent/Flex";
const RegistrtionTop = () => {
  return (
    <>
      <div>
        <Flex className={"flex-col gap-y-20"}>
          <div>
            <h1 className="mb-4 font-DMsans text-5xl font-bold leading-10 text-main_font_color">
              Sign up
            </h1>
            <BreadCrumb />
          </div>

          <div>
            <p className="max-w-[660px] font-DMsans text-lg font-normal text-secondary_font_color">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the.
            </p>
          </div>
        </Flex>
      </div>
    </>
  );
};

export default RegistrtionTop;
