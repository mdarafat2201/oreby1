import React, { useState } from "react";
import SignUpInput from "../RegistrtionComponent/SignUpInput/SignUpInput";
import Flex from "../CommonConponent/Flex";
import Button from "../CommonConponent/Button";
import { CheckEmail } from "../../../Utils/Utils";
import { Bounce, toast } from "react-toastify";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const LoginComponent = () => {
  const auth = getAuth();
  const [Lodion, setLodion] = useState(false);
  const [InputLoginValue, setInputLoginValue] = useState({
    email: "",
    password: "",
  });
  const [inputCheckError, setinputCheckError] = useState({
    EmailError: "",
    passworderror: "",
  });

  const hendleLoginInput = (e) => {
    setInputLoginValue({
      ...InputLoginValue,
      [e.target.id]: e.target.value,
    });
  };

  const hendleLogin = () => {
    const { email, password } = InputLoginValue;
    if (!email || !CheckEmail(email)) {
      setinputCheckError({
        ...inputCheckError,
        EmailError: "Email missing || Email Rong",
      });
    } else if (!password) {
      setinputCheckError({
        ...inputCheckError,
        EmailError: "",
        passworderror: "password missing || password Rong",
      });
    } else {
      setLodion(true);
      setinputCheckError({
        ...inputCheckError,
        EmailError: "",
        passworderror: "",
      });
      setInputLoginValue({
        ...InputLoginValue,
        email: "",
        password: "",
      });

      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          console.log(userInfo);
          toast(`Form Post Don`, {
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
        .catch((err) => {
          console.log(err.massage);
        });
      setLodion(false);
    }
  };
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
                      value={InputLoginValue.email}
                      oninputChange={hendleLoginInput}
                      className={`${inputCheckError.EmailError ? "border-b-2 border-b-red-500 py-4" : "border-b-2 border-b-secondary_bg_color py-4"}`}
                    />
                    {inputCheckError.EmailError && (
                      <p className="text-red-400">
                        {inputCheckError.EmailError}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <SignUpInput
                      labeTitle="Password"
                      inputType="password"
                      value={InputLoginValue.password}
                      placeHolder="********"
                      inputId="password"
                      className={`${inputCheckError.passworderror ? "border-b-2 border-b-red-500 py-4" : "border-b-2 border-b-secondary_bg_color py-4"}`}
                      oninputChange={hendleLoginInput}
                    />
                    {inputCheckError.passworderror && (
                      <p className="text-red-400">
                        {inputCheckError.passworderror}
                      </p>
                    )}
                  </div>
                </Flex>
              </div>
              {Lodion ? (
                <div
                  className={
                    " w-[190px] rounded-sm bg-main_font_color px-12 py-4 "
                  }
                >
                  <Flex className={"items-center gap-x-2"}>
                    <div className="pointer-events-none h-5 w-5 animate-spin  rounded-full border-4 border-t-green-500"></div>
                    <p
                      className={
                        " font-DMsans text-base font-bold text-main_bg_color"
                      }
                    >
                      Login....
                    </p>
                  </Flex>
                </div>
              ) : (
                <div onClick={hendleLogin}>
                  <Button
                    title={"Login"}
                    className={
                      " bg-main_font_color px-20 py-4 font-DMsans text-sm font-bold text-main_bg_color"
                    }
                  />
                </div>
              )}
            </Flex>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginComponent;
