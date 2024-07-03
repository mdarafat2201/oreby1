import React from "react";
import { FcSearch } from "react-icons/fc";
import Flex from "./Flex";
const Serach = ({ placeholder, onSerch }) => {
  return (
    <>
      <Flex>
        <div className="relative">
          <input
            type="text"
            className=" w-[200px] rounded-sm px-3  py-5 sm:w-[350px] sm:px-5 lg:w-[550px]"
            placeholder={placeholder}
            onChange={onSerch}
          />
          <div className=" absolute right-5 top-1/2 -translate-y-2/4 text-2xl">
            <FcSearch />
          </div>
        </div>
      </Flex>
    </>
  );
};

export default Serach;
