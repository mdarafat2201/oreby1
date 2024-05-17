import React from "react";
import {
  MdOutlineStarPurple500,
  MdOutlineStarHalf,
  MdOutlineStarOutline,
} from "react-icons/md";
import Flex from "../CommonConponent/Flex";
const RatingStar = ({ rating }) => {
  const StarRating = Array.from({ length: 5 }, (x, index) => {
    let FractionNumber = index + 0.5;

    return (
      <span>
        {rating >= index + 1 ? (
          <MdOutlineStarPurple500 className="text-xl text-yellow-400" />
        ) : rating >= FractionNumber ? (
          <MdOutlineStarHalf className="text-xl text-yellow-400" />
        ) : (
          <MdOutlineStarOutline className="text-xl text-yellow-400" />
        )}
      </span>
    );
  });

  return (
    <>
      <div>
        <Flex className={"items-center gap-x-4"}>
          <div>
            <Flex className={"items-center gap-x-1"}>{StarRating}</Flex>
          </div>
          <div>
            <p>
              {rating >= Math.floor(rating)
                ? `${Math.floor(rating)}.5`
                : `${Math.floor(rating)}`}
              {"Review"}
            </p>
          </div>
        </Flex>
      </div>
    </>
  );
};

export default RatingStar;
