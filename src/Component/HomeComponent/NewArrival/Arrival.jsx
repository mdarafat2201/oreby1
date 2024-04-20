import React, { useState } from "react";
import Slider from "react-slick";
import Card from "../../CommonConponent/Card";
import Button from "../../CommonConponent/Button";

import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

// Next Arrow function
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        width: "60px",
        height: "60px",
        position: "absolute",
        right: "33px",
        top: "40%",
        transform: "translateY(-40%)",
        backgroundColor: "#979797",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      <div className="flex justify-center items-center h-full cursor-pointer hover:bg-[#b4b4b4] rounded-full">
        <FaLongArrowAltRight className="text-base text-primaryBgColor" />
      </div>
    </div>
  );
}

// Pre Arrow function
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "green",
        width: "60px",
        height: "60px",
        top: "40%",
        transform: "translateY(-40%)",
        left: "0",
        position: "absolute",
        zIndex: "1",
        backgroundColor: "#979797",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      <div className="flex justify-center items-center h-full cursor-pointer hover:bg-[#b4b4b4] rounded-full">
        <FaLongArrowAltLeft className="text-base text-primaryBgColor" />
      </div>
    </div>
  );
}

// Slider setting

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Arrival = ({ headingTitle, ArrivalData }) => {
  const [arrivalData] = useState(ArrivalData);
  console.log(ArrivalData);
  return (
    <>
      <div className=" pb-10 sm:pb-32 p-x-10">
        <div className="container">
          <h4 className="text-[40px] font-DMsans font-bold text-primaryFontColor pb-12">
            {headingTitle ? headingTitle : "title massing"}
          </h4>

          <Slider {...settings}>
            {arrivalData?.map((item) => (
              <Card
                img={item.productImg}
                badge={
                  item.badge ? (
                    <Button
                      className={"py-[7px] px-8 bg-black text-white"}
                      title={item.productStatus}
                    />
                  ) : null
                }
                colorVariant={item.color}
                productTitle={item.title}
                price={item.price}
              />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Arrival;
