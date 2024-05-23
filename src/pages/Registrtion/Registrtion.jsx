import React from "react";
import RegistrtionTop from "../../Component/RegistrtionComponent/RegistrtionTop/RegistrtionTop";
import SignUpInput from "../../Component/RegistrtionComponent/SignUpInput/SignUpInput";
import Flex from "../../Component/CommonConponent/Flex";

const Registrtion = () => {
  return (
    <>
      <div className="py-20">
        <div className="container">
          <div>
            <Flex className={"flex-col gap-y-14"}>
              <RegistrtionTop />
              <hr />
              {/**personal infomation */}
              <div>
                <form action="#" onSubmit={(e) => e.preventDefault()}>
                  <div className="mb-8">
                    <h2 className=" font-DMsans text-4xl font-bold leading-10 text-main_font_color">
                      Your Personal Details
                    </h2>
                  </div>

                  <div>
                    <Flex className=" flex-wrap items-center gap-x-10 gap-y-5">
                      <SignUpInput
                        labeTitle={"First Name"}
                        className={"w-[36%]"}
                        inputType={"text"}
                        placeHolder={"First Name"}
                        inputId={"FirstName"}
                      />

                      <SignUpInput
                        labeTitle={"Last Name"}
                        className={"w-[36%]"}
                        inputType={"text"}
                        placeHolder={"Last Name"}
                        inputId={"LastName"}
                      />
                      <SignUpInput
                        labeTitle={"Email address"}
                        className={"w-[36%]"}
                        inputType={"email"}
                        placeHolder={"company@domain.com"}
                        inputId={"Email"}
                      />
                      <SignUpInput
                        labeTitle={"Telephone"}
                        className={"w-[36%]"}
                        inputType={"number"}
                        placeHolder={"Your phone number"}
                        inputId={"Telephone"}
                      />
                    </Flex>
                  </div>
                </form>
              </div>

              {/**personal infomation */}
              <hr />
              {/**Customer infomation */}
              <div>
                <form action="#" onSubmit={(e) => e.preventDefault()}>
                  <div className="mb-8">
                    <h2 className=" font-DMsans text-4xl font-bold leading-10 text-main_font_color">
                      New Customer
                    </h2>
                  </div>

                  <div>
                    <Flex className=" flex-wrap items-center gap-x-10 gap-y-5">
                      <SignUpInput
                        labeTitle={"Address 1"}
                        className={"w-[36%]"}
                        inputType={"text"}
                        placeHolder={"4279 Zboncak Port Suite 6212"}
                        inputId={"Address1"}
                      />

                      <SignUpInput
                        labeTitle={"Address 2"}
                        className={"w-[36%]"}
                        inputType={"text"}
                        placeHolder={"Address 2"}
                        inputId={"Address2"}
                      />
                      <SignUpInput
                        labeTitle={"City"}
                        className={"w-[36%]"}
                        inputType={"text"}
                        placeHolder={"Your city"}
                        inputId={"City"}
                      />
                      <SignUpInput
                        labeTitle={"Post Code"}
                        className={"w-[36%]"}
                        inputType={"number"}
                        placeHolder={"05228"}
                        inputId={"PostCode"}
                      />
                      <div className="w-[36%]">
                        <h2 className=" font-DMsans text-base font-bold text-main_font_color">
                          Divison
                        </h2>
                        <select
                          name="Divison"
                          id="Divison"
                          className={
                            "w-full border-b-2 border-b-secondary_bg_color py-4"
                          }
                        >
                          <option value={"Pleaseselect"}>Please select</option>
                          <option value={"dhaka"}>dhaka</option>
                          <option value={"mymensing"}>mymensing</option>
                        </select>
                      </div>
                      <div className="w-[36%]">
                        <h2 className=" font-DMsans text-base font-bold text-main_font_color">
                          Divison
                        </h2>
                        <select
                          name="Divison"
                          id="Divison"
                          className={
                            "w-full border-b-2 border-b-secondary_bg_color py-4"
                          }
                        >
                          <option value={"Pleaseselect"}>Please select</option>
                          <option value={"dhaka"}>dhaka</option>
                          <option value={"mymensing"}>mymensing</option>
                        </select>
                      </div>
                    </Flex>
                  </div>
                </form>
              </div>
              {/** Customer infomation */}
              <hr />
              {/** Password infomation */}
              <div>
                <form action="#" onSubmit={(e) => e.preventDefault()}>
                  <div className="mb-8">
                    <h2 className=" font-DMsans text-4xl font-bold leading-10 text-main_font_color">
                      Your Password
                    </h2>
                  </div>

                  <div>
                    <Flex className=" flex-wrap items-center gap-x-10 gap-y-5">
                      <SignUpInput
                        labeTitle={"Password"}
                        className={"w-[36%]"}
                        inputType={"password"}
                        placeHolder={"Password"}
                        inputId={"Password"}
                      />

                      <SignUpInput
                        labeTitle={"Repeat Password"}
                        className={"w-[36%]"}
                        inputType={"password"}
                        placeHolder={"Repeat Password"}
                        inputId={"RepeatPassword"}
                      />
                    </Flex>
                  </div>
                </form>
              </div>
              {/** Password infomation */}
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registrtion;
