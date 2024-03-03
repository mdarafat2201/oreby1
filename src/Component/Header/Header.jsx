import React from "react";
import Logo from "../../assets/Logo.png";
import Flex from "../CommonConponent/Flex";
const Header = () => {
  return (
    <>
      <div className="container bg-main_bg_color">
        <Flex className="justify-between">
          <div>
            <picture>
              <img src={Logo} alt={Logo} />
            </picture>
          </div>
          <div>
            <Flex className="gap-x-10">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
              <li>
                <a href="#">Journal</a>
              </li>
            </Flex>
          </div>
          <div></div>
        </Flex>
      </div>
    </>
  );
};

export default Header;
