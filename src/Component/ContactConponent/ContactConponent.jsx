import React, { useState } from "react";
import SignUpInput from "../RegistrtionComponent/SignUpInput/SignUpInput";
import Flex from "../CommonConponent/Flex";
import Button from "../CommonConponent/Button";
import { CheckEmail, CheckWordInMessage } from "../../../Utils/Utils.js";
import { toast, Bounce } from "react-toastify";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Firebase/FirebaseConfig.js";
const ContactConponent = () => {
  const [loadingPost, setloadingPost] = useState(false);
  const [inputvalue, setinputvalue] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [inputCheckError, setinputCheckError] = useState({
    NameError: "",
    EmailError: "",
    MessageError: "",
  });
  /**
   * todo: handleinput funtion implement
   * @params({e.target.value})
   */
  const handleInput = (e) => {
    setinputvalue({
      ...inputvalue,
      [e.target.id]: e.target.value,
    });
  };
  /**
   * todo: handlepost funtion implement
   */
  const hondlepost = () => {
    const { name, email, message } = inputvalue;
    if (!name) {
      setinputCheckError({
        ...inputCheckError,
        NameError: "Name missing",
      });
    } else if (!email || !CheckEmail(email)) {
      setinputCheckError({
        ...inputCheckError,
        NameError: "",
        EmailError: "Email missing || Email Rong",
      });
    } else if (!message || !CheckWordInMessage(message)) {
      setinputCheckError({
        ...inputCheckError,
        NameError: "",
        EmailError: "",
        MessageError: "Message Error || Word 0/100",
      });
    } else {
      setloadingPost(true);
      addDoc(collection(db, "/formpost"), inputvalue)
        .then(() => {
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
          setloadingPost(false);
          setinputCheckError({
            ...inputCheckError,
            NameError: "",
            EmailError: "",
            MessageError: "",
          });
          setinputvalue({
            ...inputvalue,
            name: "",
            email: "",
            message: "",
          });
        });
    }
  };
  return (
    <>
      <div>
        <h2 className="font-DMsans text-[39px] font-bold text-main_font_color">
          Fill up a Form
        </h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <Flex className={"flex-col justify-start gap-y-5"}>
            <div className="w-1/3">
              <SignUpInput
                labeTitle="Name"
                inputType="text"
                placeHolder="Your name here"
                inputId="name"
                value={inputvalue.name}
                oninputChange={handleInput}
                className={`${inputCheckError.NameError ? "border-b-2 border-b-red-500 py-4" : "border-b-2 border-b-secondary_bg_color py-4"}`}
              />
              {inputCheckError.NameError && (
                <p className="text-red-400">{inputCheckError.NameError}</p>
              )}
            </div>
            <div className="w-1/3">
              <SignUpInput
                labeTitle="Email"
                inputType="email"
                placeHolder="Your email here"
                inputId="email"
                value={inputvalue.email}
                oninputChange={handleInput}
                className={`${inputCheckError.EmailError ? "border-b-2 border-b-red-500 py-4" : "border-b-2 border-b-secondary_bg_color py-4"}`}
              />
              {inputCheckError.EmailError && (
                <p className="text-red-400">{inputCheckError.EmailError}</p>
              )}
            </div>
            <div className="w-1/3">
              <Flex className="flex-col justify-start">
                <label
                  className={
                    "font-DMsans text-base font-bold text-main_font_color"
                  }
                  htmlFor={"Message"}
                >
                  Message
                </label>
                <textarea
                  className={`${inputCheckError.MessageError ? "border-b-2 border-b-red-500 py-4" : "border-b-2 border-b-secondary_bg_color py-4"}`}
                  type="text"
                  value={inputvalue.message}
                  id="message"
                  placeholder="Your message here"
                  onChange={handleInput}
                ></textarea>
                {inputCheckError.MessageError && (
                  <p className="text-red-400">{inputCheckError.MessageError}</p>
                )}
              </Flex>
            </div>
            {loadingPost ? (
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
                    Post....
                  </p>
                </Flex>
              </div>
            ) : (
              <div onClick={hondlepost}>
                <Button
                  title={"Post"}
                  className={
                    "rounded-sm bg-main_font_color px-20 py-4 font-DMsans text-base font-bold text-secondary_bg_color"
                  }
                />
              </div>
            )}
          </Flex>
        </form>
      </div>
    </>
  );
};

export default ContactConponent;
