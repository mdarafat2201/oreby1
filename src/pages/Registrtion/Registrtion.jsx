import React from "react";
import RegistrtionTop from "../../Component/RegistrtionComponent/RegistrtionTop/RegistrtionTop";
import SignUpInput from "../../Component/RegistrtionComponent/SignUpInput/SignUpInput";
import Flex from "../../Component/CommonConponent/Flex";
import { useState } from "react";
import Button from "../../Component/CommonConponent/Button";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast, Bounce } from "react-toastify";
const Registrtion = () => {
  const auth = getAuth();
  const [loading, setloading] = useState(false);
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
        FirstNameError: "",
        EmailError: "Email missing",
      });
    } else if (!Telephone) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        EmailError: "",
        TelephoneError: "Telephone missing",
      });
    } else if (!District) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        EmailError: "",
        TelephoneError: "",
        DistrictError: "District missing",
      });
    } else if (!Address1) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        EmailError: "",
        TelephoneError: "",
        DistrictError: "",
        Address1Error: "Address1 missing",
      });
    } else if (!Password) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        EmailError: "",
        TelephoneError: "",
        DistrictError: "",
        Address1Error: "",
        PasswordError: "Password missing",
      });
    } else if (!RepeatPassword) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        EmailError: "",
        TelephoneError: "",
        DistrictError: "",
        Address1Error: "",
        PasswordError: "",
        RepeatPasswordError: "RepeatPassword missing",
      });
    } else if (Password !== RepeatPassword) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        EmailError: "",
        TelephoneError: "",
        DistrictError: "",
        Address1Error: "",
        PasswordError: "",
        RepeatPasswordError: "",
        Passwordnotmatchd: "Password not matchd",
      });
    } else if (agreement == false) {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        EmailError: "",
        TelephoneError: "",
        DistrictError: "",
        Address1Error: "",
        PasswordError: "",
        RepeatPasswordError: "",
        Passwordnotmatchd: "",
        agreementError: "agreement missing",
      });
    } else {
      setuserInfoError({
        ...userInfoError,
        FirstNameError: "",
        EmailError: "",
        TelephoneError: "",
        DistrictError: "",
        Address1Error: "",
        PasswordError: "",
        RepeatPasswordError: "",
        Passwordnotmatchd: "",
        agreementError: "",
      });
      setuserInfo({
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
      //crete user with firebase createUserWithEmailAndPassword
      setloading(true);
      createUserWithEmailAndPassword(auth, userInfo.Email, userInfo.Password)
        .then((usercredential) => {
          toast(`${userInfo.FirstName} registrtion don`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        })
        .catch((erro) => {
          toast.error(`${erro.code}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        })
        .finally(() => {
          setloading(false);
        });
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
                      <div className="w-[36%]">
                        <SignUpInput
                          labeTitle={"First Name"}
                          className={`${userInfoError.FirstNameError ? "border-b-2 border-b-red-500 py-4" : "border-b-2 border-b-secondary_bg_color py-4"}`}
                          inputType={"text"}
                          placeHolder={"First Name"}
                          inputId={"FirstName"}
                          oninputChange={handleUserInput}
                          value={userInfo.FirstName}
                        />
                        {userInfoError.FirstNameError && (
                          <p className="text-red-400">
                            {userInfoError.FirstNameError}
                          </p>
                        )}
                      </div>
                      <div className="w-[36%]">
                        <SignUpInput
                          labeTitle={"Last Name"}
                          className={
                            "border-b-2 border-b-secondary_bg_color py-4"
                          }
                          inputType={"text"}
                          placeHolder={"Last Name"}
                          inputId={"LastName"}
                          oninputChange={handleUserInput}
                          value={userInfo.LastName}
                        />
                      </div>
                      <div className="w-[36%]">
                        <SignUpInput
                          labeTitle={"Email address"}
                          className={`${userInfoError.EmailError ? "border-b-2 border-b-red-500 py-4" : "border-b-2 border-b-secondary_bg_color py-4"}`}
                          inputType={"email"}
                          placeHolder={"company@domain.com"}
                          inputId={"Email"}
                          oninputChange={handleUserInput}
                          value={userInfo.Email}
                        />
                        {userInfoError.EmailError && (
                          <p className="text-red-400">
                            {userInfoError.EmailError}
                          </p>
                        )}
                      </div>
                      <div className="w-[36%]">
                        <SignUpInput
                          labeTitle={"Telephone"}
                          className={`${userInfoError.TelephoneError ? "border-b-2 border-b-red-500 py-4" : "border-b-2 border-b-secondary_bg_color py-4"}`}
                          inputType={"number"}
                          placeHolder={"Your phone number"}
                          inputId={"Telephone"}
                          oninputChange={handleUserInput}
                          value={userInfo.Telephone}
                        />
                        {userInfoError.TelephoneError && (
                          <p className="text-red-400">
                            {userInfoError.TelephoneError}
                          </p>
                        )}
                      </div>
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
                      <div className="w-[36%]">
                        <SignUpInput
                          labeTitle={"Address 1"}
                          className={`${userInfoError.Address1Error ? "border-b-2 border-b-red-500 py-4" : "border-b-2 border-b-secondary_bg_color py-4"}`}
                          inputType={"text"}
                          placeHolder={"4279 Zboncak Port Suite 6212"}
                          inputId={"Address1"}
                          oninputChange={handleUserInput}
                          value={userInfo.Address1}
                        />
                        {userInfoError.Address1Error && (
                          <p className="text-red-400">
                            {userInfoError.Address1Error}
                          </p>
                        )}
                      </div>
                      <div className="w-[36%]">
                        <SignUpInput
                          labeTitle={"Address 2"}
                          className={
                            "border-b-2 border-b-secondary_bg_color py-4"
                          }
                          inputType={"text"}
                          placeHolder={"Address 2"}
                          inputId={"Address2"}
                          oninputChange={handleUserInput}
                          value={userInfo.Address2}
                        />
                      </div>
                      <div className="w-[36%]">
                        <SignUpInput
                          labeTitle={"City"}
                          className={
                            "border-b-2 border-b-secondary_bg_color py-4"
                          }
                          inputType={"text"}
                          placeHolder={"Your city"}
                          inputId={"City"}
                          oninputChange={handleUserInput}
                          value={userInfo.City}
                        />
                      </div>
                      <div className="w-[36%]">
                        <SignUpInput
                          labeTitle={"Post Code"}
                          className={
                            "border-b-2 border-b-secondary_bg_color py-4"
                          }
                          inputType={"number"}
                          placeHolder={"05228"}
                          inputId={"PostCode"}
                          oninputChange={handleUserInput}
                          value={userInfo.PostCode}
                        />
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
                          onChange={handleUserInput}
                          value={userInfo.Divison}
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
                          className={`${userInfoError.DistrictError ? "w-full border-b-2 border-b-red-500 py-4" : "w-full border-b-2 border-b-secondary_bg_color py-4"}`}
                          onChange={handleUserInput}
                          value={userInfo.District}
                        >
                          <option value={"Pleaseselect"}>Please select</option>
                          <option value={"dhaka"}>dhaka</option>
                          <option value={"mymensing"}>mymensing</option>
                        </select>
                        {userInfoError.DistrictError && (
                          <p className="text-red-400">
                            {userInfoError.DistrictError}
                          </p>
                        )}
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
                      <div className="w-[36%]">
                        <SignUpInput
                          labeTitle={"Password"}
                          className={`${userInfoError.PasswordError ? "w-full border-b-2 border-b-red-500 py-4" : "w-full border-b-2 border-b-secondary_bg_color py-4"}`}
                          inputType={"password"}
                          placeHolder={"Password"}
                          inputId={"Password"}
                          oninputChange={handleUserInput}
                          value={userInfo.Password}
                        />
                        {userInfoError.PasswordError && (
                          <p className="text-red-400">
                            {userInfoError.PasswordError}
                          </p>
                        )}
                      </div>
                      <div className="w-[36%]">
                        <SignUpInput
                          labeTitle={"Repeat Password"}
                          className={`${userInfoError.RepeatPasswordError ? "w-full border-b-2 border-b-red-500 py-4" : "w-full border-b-2 border-b-secondary_bg_color py-4"}`}
                          inputType={"password"}
                          placeHolder={"Repeat Password"}
                          inputId={"RepeatPassword"}
                          oninputChange={handleUserInput}
                          value={userInfo.RepeatPassword}
                        />
                        {userInfoError.RepeatPasswordError && (
                          <p className="text-red-400">
                            {userInfoError.RepeatPasswordError}
                          </p>
                        )}
                        {userInfoError.Passwordnotmatchd && (
                          <p className="text-red-400">
                            {userInfoError.Passwordnotmatchd}
                          </p>
                        )}
                      </div>
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
                        value={userInfo.agreement}
                      />
                      <p
                        className={`${userInfoError.agreementError ? "font-DMsans text-base font-normal text-red-500" : "font-DMsans text-base font-normal text-secondary_font_color"}`}
                      >
                        {userInfoError.agreementError
                          ? userInfoError.agreementError
                          : "I have read and agree to the Privacy Policy"}
                      </p>
                    </Flex>
                  </div>
                  <div>
                    <Flex className={"items-center gap-x-10"}>
                      <p className="font-DMsans text-base font-normal text-secondary_font_color">
                        I have read and agree
                      </p>
                      <Flex className={"items-center gap-x-4"}>
                        <input
                          type="checkbox"
                          id="subribeYes"
                          name="subribeYes"
                          onChange={handleUserInput}
                          value={userInfo.subribeYes}
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
                          value={userInfo.subribeNo}
                        />
                        <p className="font-DMsans text-base font-normal text-secondary_font_color">
                          No
                        </p>
                      </Flex>
                    </Flex>
                  </div>
                  {loading ? (
                    <div
                      className={
                        " w-[180px] rounded-sm bg-main_font_color px-9 py-4 "
                      }
                    >
                      <Flex className={"items-center gap-x-2"}>
                        <div className="pointer-events-none h-5 w-5 animate-spin  rounded-full border-4 border-t-green-500"></div>
                        <p
                          className={
                            " font-DMsans text-base font-bold text-main_bg_color"
                          }
                        >
                          Sign up....
                        </p>
                      </Flex>
                    </div>
                  ) : (
                    <div onClick={handleSignup}>
                      <Button
                        title={"Sign up"}
                        className={
                          "rounded-sm bg-main_font_color px-16 py-4 font-DMsans text-base font-bold text-main_bg_color"
                        }
                      />
                    </div>
                  )}
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
