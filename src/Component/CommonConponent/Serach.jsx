import React from "react";
import { FcSearch } from "react-icons/fc";
import Flex from "./Flex";
const Serach = ({ placeholder }) => {
  return (
    <>
      <Flex>
        <div className="relative">
          <input
            type="text"
            className="max-w-[600px] py-5 px-3 sm:px-5 rounded-sm"
            placeholder={placeholder}
          />
          <div className=" absolute top-1/2 -translate-y-2/4 right-5 text-2xl">
            <FcSearch />
          </div>
        </div>
      </Flex>
    </>
  );
};

export default Serach;
