import React, { useState } from "react";
import Logo from "../../../assets/Logo.png";
import Flex from "../../CommonConponent/Flex";
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [isShow, setisShow] = useState(false);

  //HandleNavIcon funtionality
  const HandleNavIcon = () => {
    setisShow(!isShow);
  };

  return (
    <>
      <div className="px-sm-0 bg-main_bg_color px-4 py-8">
        <div className="container ">
          <Flex className="items-center justify-between">
            <div>
              <picture>
                <img src={Logo} alt={Logo} />
              </picture>
            </div>
            <div>
              <Flex
                className={`absolute sm:static sm:flex-row sm:gap-x-5 ${
                  isShow === true
                    ? "left-0 top-[70px]  z-10 w-full flex-col bg-gray-300 text-center transition-all "
                    : " left-[-100%]  "
                } `}
              >
                <li>
                  <NavLink
                    to={"/"}
                    className={({ isActive, ispending }) =>
                      ispending
                        ? "menuItem transition-all hover:font-bold hover:text-main_font_color"
                        : isActive
                          ? "menuItem text-green-400 transition-all"
                          : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/shop"}
                    className={({ isActive, ispending }) =>
                      ispending
                        ? "menuItem transition-all hover:font-bold hover:text-main_font_color"
                        : isActive
                          ? "menuItem text-green-400 transition-all"
                          : ""
                    }
                  >
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/About"}
                    className={({ isActive, ispending }) =>
                      ispending
                        ? "menuItem transition-all hover:font-bold hover:text-main_font_color"
                        : isActive
                          ? "menuItem text-green-400 transition-all"
                          : ""
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/contact"}
                    className={({ isActive, ispending }) =>
                      ispending
                        ? "menuItem transition-all hover:font-bold hover:text-main_font_color"
                        : isActive
                          ? "menuItem text-green-400 transition-all"
                          : ""
                    }
                  >
                    Contacts
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/Journal"}
                    className={({ isActive, ispending }) =>
                      ispending
                        ? "menuItem transition-all hover:font-bold hover:text-main_font_color"
                        : isActive
                          ? "menuItem text-green-400 transition-all"
                          : ""
                    }
                  >
                    Journal
                  </NavLink>
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
