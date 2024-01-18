import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarrouselColor.css";

function CenterMode() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "-160px",
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <div className="carousel-container">
      <Slider
        className={settings.className}
        centerMode={settings.centerMode}
        infinite={settings.infinite}
        centerPadding={settings.centerPadding}
        slidesToShow={settings.slidesToShow}
        speed={settings.speed}
      >
        <div className="carousel-item">
          <img
            src="https://antopaa.github.io/Publicimg/img/dsfdsdsfdsf.png"
            alt=""
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://antopaa.github.io/Publicimg/img/Group%2050.png"
            alt=""
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://antopaa.github.io/Publicimg/img/Group%2053.png"
            alt=""
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://antopaa.github.io/Publicimg/img/Group%2052.png"
            alt=""
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://antopaa.github.io/Publicimg/img/Group%2051.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}

export default CenterMode;
