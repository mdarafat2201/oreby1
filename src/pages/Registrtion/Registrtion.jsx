import React from "react";
import RegistrtionTop from "../../Component/RegistrtionComponent/RegistrtionTop/RegistrtionTop";
import SignUpInput from "../../Component/RegistrtionComponent/SignUpInput/SignUpInput";
import Flex from "../../Component/CommonConponent/Flex";
import { useState } from "react";
import Button from "../../Component/CommonConponent/Button";

const Registrtion = () => {
  const [userInfo, setuserInfo] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Telephone: "",
    Address1: "",
    Address2: "",
    City: "",
    PostCode: "",
    Divison: "",
    District: "",
    Password: "",
    RepeatPassword: "",
    agreement: false,
    subribeYes: false,
    subribeNo: false,
  });
  const [userInfoError, setuserInfoError] = useState({
    FirstNameError: "",
    EmailError: "",
    TelephoneError: "",
    Address1Error: "",
    DistrictError: "",
    PasswordError: "",
    RepeatPasswordError: "",
    Passwordnotmatchd: "",
    agreementError: false,
  });
  //handleUserInput function implement
  const handleUserInput = (e) => {
    if (e.target.checkbox) {
      setuserInfo({
        ...userInfo,
        [e.target.id]: true,
      });
    } else {
      setuserInfo({
        ...userInfo,
        [e.target.id]: e.target.value,
      });
    }
  };
  console.log(userInfo);
  //handleSignup function implement
  const handleSignup = () => {
    const {
      FirstName,
      Email,
      Telephone,
      Address1,
      District,
      Password,
      RepeatPassword,
      agreement,
    } = userInfo;

    if (!FirstName) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "First Name missing",
      });
    } else if (!Email) {
      setuserInfoError({
        ...userInfoError,
        EmailError: "Email missing",
      });
    } else if (!Telephone) {
      setuserInfoError({
        ...userInfoError,
        TelephoneError: "Telephone missing",
      });
    } else if (!District) {
      setuserInfoError({
        ...userInfoError,
        DistrictError: "District missing",
      });
    } else if (!Address1) {
      setuserInfoError({
        ...userInfoError,
        Address1Error: "Address1 missing",
      });
    } else if (!Password) {
      setuserInfoError({
        ...userInfoError,
        PasswordError: "Password missing",
      });
    } else if (!RepeatPassword) {
      setuserInfoError({
        ...userInfoError,
        RepeatPasswordError: "RepeatPassword missing",
      });
    } else if (Password !== RepeatPassword) {
      setuserInfoError({
        ...userInfoError,
        Passwordnotmatchd: "Password not matchd",
      });
    } else if (!agreement) {
      setuserInfoError({
        ...userInfoError,
        agreementError: "agreement missing",
      });
      agreementError("agreement missing");
    } else {
      alert("Everything is ok no error occured");
    }
  };

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
                        oninputChange={handleUserInput}
                      />

                      <SignUpInput
                        labeTitle={"Last Name"}
                        className={"w-[36%]"}
                        inputType={"text"}
                        placeHolder={"Last Name"}
                        inputId={"LastName"}
                        oninputChange={handleUserInput}
                      />
                      <SignUpInput
                        labeTitle={"Email address"}
                        className={"w-[36%]"}
                        inputType={"email"}
                        placeHolder={"company@domain.com"}
                        inputId={"Email"}
                        oninputChange={handleUserInput}
                      />
                      <SignUpInput
                        labeTitle={"Telephone"}
                        className={"w-[36%]"}
                        inputType={"number"}
                        placeHolder={"Your phone number"}
                        inputId={"Telephone"}
                        oninputChange={handleUserInput}
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
                        oninputChange={handleUserInput}
                      />

                      <SignUpInput
                        labeTitle={"Address 2"}
                        className={"w-[36%]"}
                        inputType={"text"}
                        placeHolder={"Address 2"}
                        inputId={"Address2"}
                        oninputChange={handleUserInput}
                      />
                      <SignUpInput
                        labeTitle={"City"}
                        className={"w-[36%]"}
                        inputType={"text"}
                        placeHolder={"Your city"}
                        inputId={"City"}
                        oninputChange={handleUserInput}
                      />
                      <SignUpInput
                        labeTitle={"Post Code"}
                        className={"w-[36%]"}
                        inputType={"number"}
                        placeHolder={"05228"}
                        inputId={"PostCode"}
                        oninputChange={handleUserInput}
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
                          onChange={handleUserInput}
                        >
                          <option value={"Pleaseselect"}>Please select</option>
                          <option value={"dhaka"}>dhaka</option>
                          <option value={"mymensing"}>mymensing</option>
                        </select>
                      </div>
                      <div className="w-[36%]">
                        <h2 className=" font-DMsans text-base font-bold text-main_font_color">
                          District
                        </h2>
                        <select
                          name="District"
                          id="District"
                          className={
                            "w-full border-b-2 border-b-secondary_bg_color py-4"
                          }
                          onChange={handleUserInput}
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
                        oninputChange={handleUserInput}
                      />

                      <SignUpInput
                        labeTitle={"Repeat Password"}
                        className={"w-[36%]"}
                        inputType={"password"}
                        placeHolder={"Repeat Password"}
                        inputId={"RepeatPassword"}
                        oninputChange={handleUserInput}
                      />
                    </Flex>
                  </div>
                </form>
              </div>
              {/** Password infomation */}
              <hr />
              {/** chek infomation */}
              <div>
                <Flex className={"flex-col gap-y-6"}>
                  <div>
                    <Flex className={"items-center gap-x-4"}>
                      <input
                        type="checkbox"
                        id="agreement"
                        name="agreement"
                        onChange={handleUserInput}
                      />
                      <p className="font-DMsans text-base font-normal text-secondary_font_color">
                        I have read and agree to the Privacy Policy
                      </p>
                    </Flex>
                  </div>
                  <div>
                    <Flex className={"items-center gap-x-10"}>
                      <p className="font-DMsans text-base font-normal text-secondary_font_color">
                        I have read and agree to the Privacy Policy
                      </p>
                      <Flex className={"items-center gap-x-4"}>
                        <input
                          type="checkbox"
                          id="subribeYes"
                          name="subribeYes"
                          onChange={handleUserInput}
                        />
                        <p className="font-DMsans text-base font-normal text-secondary_font_color">
                          Yes
                        </p>
                      </Flex>
                      <Flex className={"items-center gap-x-4"}>
                        <input
                          type="checkbox"
                          id="subribeNo"
                          name="subribeNo"
                          onChange={handleUserInput}
                        />
                        <p className="font-DMsans text-base font-normal text-secondary_font_color">
                          No
                        </p>
                      </Flex>
                    </Flex>
                  </div>
                  <div onClick={handleSignup}>
                    <Button
                      title={"Log in"}
                      className={
                        "rounded-sm bg-main_font_color px-16 py-4 font-DMsans text-base font-bold text-main_bg_color"
                      }
                    />
                  </div>
                </Flex>
              </div>
              {/** chek infomation */}
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registrtion;
