import React from "react";
import SignUpInput from "../RegistrtionComponent/SignUpInput/SignUpInput";
import Flex from "../CommonConponent/Flex";
import Button from "../CommonConponent/Button";

const LoginComponent = () => {
  return (
    <>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <Flex className={"flex-col justify-start gap-y-8"}>
              <div>
                <h2 className=" font-DMsans text-[39px] font-bold text-main_font_color">
                  Returning Customer
                </h2>
              </div>
              <div className=" w-2/3">
                <Flex className={"items-center gap-x-10"}>
                  <div className="w-full">
                    <SignUpInput
                      labeTitle="Email"
                      inputType="email"
                      placeHolder="Your email here"
                      inputId="email"
                      className={`border-b-2 border-b-secondary_bg_color py-4`}
                    />
                  </div>
                  <div className="w-full">
                    <SignUpInput
                      labeTitle="Password"
                      inputType="password"
                      placeHolder="********"
                      inputId="password"
                      className={`border-b-2 border-b-secondary_bg_color py-4`}
                    />
                  </div>
                </Flex>
              </div>
              <div>
                <Button
                  title={"Login"}
                  className={
                    " bg-main_font_color px-20 py-4 font-DMsans text-sm font-bold text-main_bg_color"
                  }
                />
              </div>
            </Flex>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginComponent;
