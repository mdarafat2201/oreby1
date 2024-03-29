import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import Flex from "../CommonConponent/Flex";
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
const Header = () => {
  const [isShow, setisShow] = useState(false);

  //HandleNavIcon funtionality
  const HandleNavIcon = () => {
    setisShow(!isShow);
  };

  return (
    <>
      <div className="py-8 bg-main_bg_color px-4 px-sm-0">
        <div className="container ">
          <Flex className="justify-between items-center">
            <div>
              <picture>
                <img src={Logo} alt={Logo} />
              </picture>
            </div>
            <div>
              <Flex
                className={`absolute sm:flex-row sm:static sm:gap-x-5 ${
                  isShow === true
                    ? "bg-gray-300 text-center  top-[70px] left-0 flex-col w-full z-10 transition-all "
                    : " left-[-100%]  "
                } `}
              >
                <li>
                  <a
                    href="#"
                    className="menuItem transition-all hover:text-main_font_color hover:font-bold"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="menuItem transition-all hover:text-main_font_color hover:font-bold"
                  >
                    Shop
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="menuItem transition-all hover:text-main_font_color hover:font-bold"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="menuItem transition-all hover:text-main_font_color hover:font-bold"
                  >
                    Contacts
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="menuItem transition-all hover:text-main_font_color hover:font-bold"
                  >
                    Journal
                  </a>
                </li>
              </Flex>
            </div>
            <div className="cursor-pointer sm:hidden" onClick={HandleNavIcon}>
              {isShow === true ? <RxCross2 /> : <FaBars />}
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default Header;
