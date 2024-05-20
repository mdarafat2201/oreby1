import React from "react";
import Flex from "../Flex";
import { IoIosStar } from "react-icons/io";
import Button from "../Button";

const Reviews = () => {
  return (
    <>
      <div className="mt-16">
        <Flex className={" flex-col gap-y-10"}>
          <div>
            <Flex className={"items-center gap-x-16"}>
              <h1 className="font-DMsans text-lg font-normal text-secondary_font_color">
                Description
              </h1>
              <h2 className="font-DMsans text-lg font-bold text-main_font_color">
                {"Reviews (1)"}
              </h2>
            </Flex>
          </div>

          <div>
            <h2 className=" font-DMsans text-sm font-normal text-secondary_font_color">
              1 review for Product
            </h2>
          </div>

          <hr />
          <div>
            <Flex className={" mb-5 items-center justify-between"}>
              <div>
                <Flex className={"items-center gap-x-5"}>
                  <h2 className="font-DMsans text-lg font-normal  text-main_font_color">
                    John Ford
                  </h2>
                  <div className=" text-yellow-300">
                    <Flex className={" items-center gap-x-1"}>
                      <span>
                        <IoIosStar />
                      </span>
                      <span>
                        <IoIosStar />
                      </span>
                      <span>
                        <IoIosStar />
                      </span>
                      <span>
                        <IoIosStar />
                      </span>
                      <span>
                        <IoIosStar />
                      </span>
                    </Flex>
                  </div>
                </Flex>
              </div>
              <div>
                <h3 className="font-DMsans text-sm font-normal text-secondary_font_color">
                  6 months ago
                </h3>
              </div>
            </Flex>
            <div>
              <p className="font-DMsans text-lg font-normal text-secondary_font_color">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
          <hr />
        </Flex>
      </div>
      {/**post review */}
      <div>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <h2 className="my-10 font-DMsans text-2xl font-bold text-main_font_color">
            Add a Review
          </h2>
          <div>
            <Flex className={"flex-col gap-y-8"}>
              <div>
                <Flex className={"flex-col  "}>
                  <label
                    htmlFof="name"
                    className="font-DMsans text-lg font-bold text-main_font_color"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name here"
                    className="w-1/2 border-b-2 border-b-gray-400 py-4"
                  />
                </Flex>
              </div>

              <div>
                <Flex className={"flex-col  "}>
                  <label
                    htmlFof="email"
                    className="font-DMsans text-lg font-bold text-main_font_color"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email here"
                    className="w-1/2 border-b-2 border-b-gray-400 py-4"
                  />
                </Flex>
              </div>

              <div>
                <Flex className={"flex-col  "}>
                  <label
                    htmlFof="review"
                    className="font-DMsans text-lg font-bold text-main_font_color"
                  >
                    Review
                  </label>
                  <textarea
                    id="review"
                    name="review"
                    placeholder="Your review here"
                    className="w-1/2 border-b-2 border-b-gray-400 py-4"
                  />
                </Flex>
              </div>
              <Button
                title={"Post"}
                className={
                  "w-[20%] rounded bg-main_font_color py-4 text-lg font-semibold  text-main_bg_color"
                }
              />
            </Flex>
          </div>
        </form>
      </div>
      {/**post review */}
    </>
  );
};

export default Reviews;
