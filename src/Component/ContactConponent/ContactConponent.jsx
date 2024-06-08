import React from "react";
import SignUpInput from "../RegistrtionComponent/SignUpInput/SignUpInput";
import Flex from "../CommonConponent/Flex";
import Button from "../CommonConponent/Button";
const ContactConponent = () => {
  /**
   * todo: handleinput funtion implement
   * @params({e.target.value})
   */
  const handleInput = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <div>
        <h2 className="font-DMsans text-[39px] font-bold text-main_font_color">
          Fill up a Form
        </h2>
        <form action="#" method="post">
          <Flex className={"flex-col justify-start gap-y-5"}>
            <div className="w-1/3">
              <SignUpInput
                labeTitle="Name"
                inputType="text"
                placeHolder="Your name here"
                inputId="name"
                oninputChange={handleInput}
                className={"border-b-2 border-b-secondary_bg_color py-4"}
              />
            </div>
            <div className="w-1/3">
              <SignUpInput
                labeTitle="Email"
                inputType="email"
                placeHolder="Your email here"
                inputId="name"
                oninputChange={handleInput}
                className={"border-b-2 border-b-secondary_bg_color py-4"}
              />
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
                  className="border-b-2 border-b-secondary_bg_color py-4"
                  type="text"
                  id="message"
                  placeholder="Your message here"
                  onChange={handleInput}
                ></textarea>
              </Flex>
            </div>
            <div>
              <Button
                title={"Post"}
                className={
                  "rounded-sm bg-main_font_color px-20 py-4 font-DMsans text-base font-bold text-secondary_bg_color"
                }
              />
            </div>
          </Flex>
        </form>
      </div>
    </>
  );
};

export default ContactConponent;
