import React from "react";
import Flex from "../CommonConponent/Flex";
import { FaMinus, FaPlus } from "react-icons/fa";

const ProductInfo = ({ ProductStock }) => {
  const colorItem = [
    { id: 1, colorcode: "#979797" },
    { id: 2, colorcode: "#ff8686" },
    { id: 3, colorcode: "#7ED321" },
    { id: 4, colorcode: "#B6B6B6" },
    { id: 5, colorcode: "#15CBA5" },
  ];
  return (
    <>
      <div>
        <Flex className={"mt-5 flex-col gap-y-8"}>
          <hr />
          {/**coler component */}
          <div>
            <Flex className={"items-center gap-x-9"}>
              <h1 className="font-DMsans text-[16px] font-bold text-main_font_color">
                COLOR:
              </h1>
              <div>
                <Flex className={"items-center gap-x-2"}>
                  {colorItem?.map((item) => (
                    <div
                      className={`h-[20px] w-[20px] transform-gpu cursor-pointer rounded-full hover:scale-150 `}
                      style={{ background: item.colorcode }}
                    ></div>
                  ))}
                </Flex>
              </div>
            </Flex>
          </div>
          {/**coler component */}
          {/**size component */}
          <div>
            <Flex className={"items-center gap-x-14"}>
              <h1 className="font-DMsans text-[16px] font-bold text-main_font_color">
                SIZE:
              </h1>
              <div>
                <select
                  name="Productsize"
                  id="Productsize"
                  className="w-24 border-2 border-gray-200 px-1 py-1"
                >
                  <option value={"S"}>S</option>
                  <option value={"M"}>M</option>
                  <option value={"L"}>L</option>
                  <option value={"Xl"}>Xl</option>
                  <option value={"XXl"}>XXl</option>
                </select>
              </div>
            </Flex>
          </div>
          {/**size component */}

          {/**quantity component */}
          <div>
            <Flex className={"items-center gap-x-3"}>
              <h1 className="font-DMsans text-[16px] font-bold text-main_font_color">
                QUANTITY:
              </h1>
              <div>
                <Flex
                  className={
                    "w-24 items-center justify-between border-2 border-gray-300 px-2 py-1"
                  }
                >
                  <span className="cursor-pointer">
                    <FaMinus />
                  </span>
                  <p>1</p>
                  <span className="cursor-pointer">
                    <FaPlus />
                  </span>
                </Flex>
              </div>
            </Flex>
          </div>
          {/**quantity component */}
          {/**stock component */}
          <div>
            <Flex className={"items-center gap-x-14"}>
              <h1 className="font-DMsans text-[16px] font-bold text-main_font_color">
                STOCK:
              </h1>
              <div>
                <p>{ProductStock}</p>
              </div>
            </Flex>
          </div>
          {/**stock component */}
        </Flex>
      </div>
    </>
  );
};

export default ProductInfo;
