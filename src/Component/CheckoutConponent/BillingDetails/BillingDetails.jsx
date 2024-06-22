import React from "react";
import Flex from "../../CommonConponent/Flex";
import SignUpInput from "../../RegistrtionComponent/SignUpInput/SignUpInput";

const BillingDetails = () => {
  return (
    <>
      <div>
        <h1 className="mb-14 font-DMsans text-[39px] font-bold text-main_font_color">
          Billing Details
        </h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <Flex className={"flex-col justify-start gap-y-10"}>
              <div className=" w-2/3">
                <Flex className={"items-center gap-x-10"}>
                  <div className="w-full">
                    <SignUpInput
                      labeTitle="First Name *"
                      inputType="name"
                      placeHolder="First Name "
                      inputId="firstname"
                      //value={InputLoginValue.email}
                      //oninputChange={hendleLoginInput}
                      className={`border-b-2 border-b-secondary_bg_color py-4`}
                      //className={`${inputCheckError.EmailError ? "border-b-2 border-b-red-500 py-4" : "border-b-2 border-b-secondary_bg_color py-4"}`}
                    />
                    {/* {inputCheckError.EmailError && (
                  <p className="text-red-400">{inputCheckError.EmailError}</p>
                )} */}
                  </div>
                  <div className="w-full">
                    <SignUpInput
                      labeTitle="Last Name *"
                      inputType="name"
                      // value={InputLoginValue.password}
                      placeHolder="********"
                      inputId="lastname "
                      className={`border-b-2 border-b-secondary_bg_color py-4`}
                      //oninputChange={hendleLoginInput}
                    />
                    {/* {inputCheckError.passworderror && (
                  <p className="text-red-400">
                    {inputCheckError.passworderror}
                  </p>
                )} */}
                  </div>
                </Flex>
              </div>
              <div className=" w-2/3">
                <div className="w-full">
                  <SignUpInput
                    labeTitle="Companye Name (optional)"
                    inputType="text"
                    placeHolder="Companye Name  "
                    inputId="companyename"
                    //value={InputLoginValue.email}
                    //oninputChange={hendleLoginInput}
                    className={`border-b-2 border-b-secondary_bg_color py-4`}
                    //className={`${inputCheckError.EmailError ? "border-b-2 border-b-red-500 py-4" : "border-b-2 border-b-secondary_bg_color py-4"}`}
                  />
                  {/* {inputCheckError.EmailError && (
                  <p className="text-red-400">{inputCheckError.EmailError}</p>
                )} */}
                </div>
              </div>
              <div className=" w-2/3">
                <Flex className={"flex-col justify-start"}>
                  <label
                    htmlFor="Country "
                    className={
                      "font-DMsans text-base font-bold text-main_font_color"
                    }
                  >
                    Country *
                  </label>
                  <select
                    name="country "
                    id="country "
                    className={`border-b-2 border-b-secondary_bg_color py-4`}
                  >
                    <option value="Please select">Please select</option>
                  </select>
                </Flex>
              </div>
              <div className=" w-2/3">
                <div className="w-full">
                  <SignUpInput
                    labeTitle="Street Address *"
                    inputType="text"
                    placeHolder="House number and street name  "
                    inputId="house"
                    //value={InputLoginValue.email}
                    //oninputChange={hendleLoginInput}
                    className={`border-b-2 border-b-secondary_bg_color py-4`}
                    //className={`${inputCheckError.EmailError ? "border-b-2 border-b-red-500 py-4" : "border-b-2 border-b-secondary_bg_color py-4"}`}
                  />
                  {/* {inputCheckError.EmailError && (
                  <p className="text-red-400">{inputCheckError.EmailError}</p>
                )} */}
                  <SignUpInput
                    inputType="text"
                    placeHolder="Apartment, suite, unit etc. (optional)  "
                    inputId="apartment"
                    //value={InputLoginValue.email}
                    //oninputChange={hendleLoginInput}
                    className={`border-b-2 border-b-secondary_bg_color py-4`}
                    //className={`${inputCheckError.EmailError ? "border-b-2 border-b-red-500 py-4" : "border-b-2 border-b-secondary_bg_color py-4"}`}
                  />
                </div>
              </div>
              <div className=" w-2/3">
                <Flex className={"flex-col justify-start"}>
                  <label
                    htmlFor="Town/City "
                    className={
                      "font-DMsans text-base font-bold text-main_font_color"
                    }
                  >
                    Town/City
                  </label>
                  <select
                    name="city "
                    id="city "
                    className={`border-b-2 border-b-secondary_bg_color py-4`}
                  >
                    <option value="Town/City">Town/City</option>
                  </select>
                </Flex>
              </div>
              <div className=" w-2/3">
                <div className="w-full">
                  <SignUpInput
                    labeTitle="County (optional)"
                    inputType="text"
                    placeHolder="County  "
                    inputId="county"
                    //value={InputLoginValue.email}
                    //oninputChange={hendleLoginInput}
                    className={`border-b-2 border-b-secondary_bg_color py-4`}
                    //className={`${inputCheckError.EmailError ? "border-b-2 border-b-red-500 py-4" : "border-b-2 border-b-secondary_bg_color py-4"}`}
                  />
                  {/* {inputCheckError.EmailError && (
                  <p className="text-red-400">{inputCheckError.EmailError}</p>
                )} */}
                </div>
              </div>
              <div className=" w-2/3">
                <div className="w-full">
                  <SignUpInput
                    labeTitle="Post Code *"
                    inputType="namber"
                    placeHolder="Post Code   "
                    inputId="postcode"
                    //value={InputLoginValue.email}
                    //oninputChange={hendleLoginInput}
                    className={`border-b-2 border-b-secondary_bg_color py-4`}
                    //className={`${inputCheckError.EmailError ? "border-b-2 border-b-red-500 py-4" : "border-b-2 border-b-secondary_bg_color py-4"}`}
                  />
                  {/* {inputCheckError.EmailError && (
                  <p className="text-red-400">{inputCheckError.EmailError}</p>
                )} */}
                </div>
              </div>
              <div className=" w-2/3">
                <div className="w-full">
                  <SignUpInput
                    labeTitle="Phone *"
                    inputType="namber"
                    placeHolder="Phone"
                    inputId="phone"
                    //value={InputLoginValue.email}
                    //oninputChange={hendleLoginInput}
                    className={`border-b-2 border-b-secondary_bg_color py-4`}
                    //className={`${inputCheckError.EmailError ? "border-b-2 border-b-red-500 py-4" : "border-b-2 border-b-secondary_bg_color py-4"}`}
                  />
                  {/* {inputCheckError.EmailError && (
                  <p className="text-red-400">{inputCheckError.EmailError}</p>
                )} */}
                </div>
              </div>
              <div className=" w-2/3">
                <div className="w-full">
                  <SignUpInput
                    labeTitle="Email Address *"
                    inputType="email"
                    placeHolder="Email "
                    inputId="emailaddress *"
                    //value={InputLoginValue.email}
                    //oninputChange={hendleLoginInput}
                    className={`border-b-2 border-b-secondary_bg_color py-4`}
                    //className={`${inputCheckError.EmailError ? "border-b-2 border-b-red-500 py-4" : "border-b-2 border-b-secondary_bg_color py-4"}`}
                  />
                  {/* {inputCheckError.EmailError && (
                  <p className="text-red-400">{inputCheckError.EmailError}</p>
                )} */}
                </div>
              </div>
            </Flex>
          </div>
        </form>
      </div>
    </>
  );
};

export default BillingDetails;
