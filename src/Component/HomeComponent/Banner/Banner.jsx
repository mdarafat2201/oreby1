import React from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import BannerImgs from "../../../assets/banner.png";
const Baner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "0",
          transform: "translateY(-50%)",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <>
        {i <= 3 && (
          <div
            style={{
              width: "30px",
              padding: "10px 0",
              borderRight: "3px solid #fff",
            }}
          >
            {i + 1 === 4 ? `${i + 1}+` : `0${i + 1}`}
          </div>
        )}
      </>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src={BannerImgs} alt={BannerImgs} />
        </div>
        <div>
          <img src={BannerImgs} alt={BannerImgs} />
        </div>
        <div>
          <img src={BannerImgs} alt={BannerImgs} />
        </div>
        <div>
          <img src={BannerImgs} alt={BannerImgs} />
        </div>
        <div>
          <img src={BannerImgs} alt={BannerImgs} />
        </div>
        <div>
          <img src={BannerImgs} alt={BannerImgs} />
        </div>
      </Slider>
    </div>
  );
};

export default Baner;
