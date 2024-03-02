import React from "react";
import Logo from "../../assets/Logo.png";
const Header = () => {
  return (
    <>
      <div className="container">
        <div>
          <picture>
            <img src={Logo} alt={Logo} />
          </picture>
        </div>
      </div>
    </>
  );
};

export default Header;
