import React from "react";
import BreadCrumd from "../../Component/CommonConponent/BreadCrumb/BreadCrumb";
import Flex from "../../Component/CommonConponent/Flex";
import LoginComponent from "../../Component/LoginComponent/LoginComponent";
import Button from "../../Component/CommonConponent/Button";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="py-20">
      <div className="container">
        <div>
          <Flex className={"flex-col justify-start gap-y-10"}>
            <div>
              <h1 className=" font-DMsans text-[49px] font-bold text-main_font_color">
                Login
              </h1>
              <BreadCrumd />
            </div>
            <div className="w-1/2">
              <p className="font-DMsans text-base  font-normal text-secondary_font_color">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the.
              </p>
            </div>
            <div>
              <LoginComponent />
            </div>
            <div className="w-1/2">
              <Flex className={"flex-col justify-start gap-y-10"}>
                <h2 className=" font-DMsans text-[39px] font-bold text-main_font_color">
                  New Customer
                </h2>
                <p className="font-DMsans text-base  font-normal text-secondary_font_color">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the.
                </p>
                <div>
                  <Link to={"/Registrtion"}>
                    <Button
                      title={"Sign Up"}
                      className={
                        " bg-main_font_color px-20 py-4 font-DMsans text-sm font-bold text-main_bg_color"
                      }
                    />
                  </Link>
                </div>
              </Flex>
            </div>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default Login;
