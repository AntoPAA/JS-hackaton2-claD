import React from "react";
import Slider from "react-slick";
import { useProfileContext } from "../context/profileContext";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarrouselColor.css";

function CenterMode() {
  const { updateHairColor } = useProfileContext();

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "-160px",
    slidesToShow: 3,
    speed: 500,
  };

  const carouselData = [
    {
      image: "https://antopaa.github.io/Publicimg/img/dsfdsdsfdsf.png",
      label: "White",
    },
    {
      image: "https://antopaa.github.io/Publicimg/img/Group%2050.png",
      label: "Colored",
    },
    {
      image: "https://antopaa.github.io/Publicimg/img/Group%2053.png",
      label: "Red head",
    },
    {
      image: "https://antopaa.github.io/Publicimg/img/Group%2052.png",
      label: "Blond",
    },
    {
      image: "https://antopaa.github.io/Publicimg/img/Group%2051.png",
      label: "Black",
    },
  ];

  const handleAfterChange = (index) => {
    updateHairColor(carouselData[index].label);
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
        afterChange={handleAfterChange}
      >
        {carouselData.map((item) => (
          <div key={item.label} className="carousel-item">
            <img src={item.image} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CenterMode;
