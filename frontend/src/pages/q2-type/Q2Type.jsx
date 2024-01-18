import React, { useState } from "react";
import HeaderPage from "../../components/HeaderPage";
import "./Q2Type.css";

function Q2Type() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage((prevIndex) => (prevIndex === index ? null : index));
  };

  const images = [
    {
      src: "https://antopaa.github.io/Publicimg/img/Bob component.png",
      label: "coily",
    },
    {
      src: "https://antopaa.github.io/Publicimg/img/Group%2057.png",
      label: "curly",
    },
    {
      src: "https://antopaa.github.io/Publicimg/img/Group%2059.png",
      label: "wavy",
    },
    {
      src: "https://antopaa.github.io/Publicimg/img/Group%2058.png",
      label: "straight",
    },
  ];
  /* eslint-disable */
  return (
    <div>
      <HeaderPage page="02" totalPages="05" title="DEFINE YOUR HAIR TYPE" />
      <div className="four-container">
        {images.map((image, index) => (
          <img
            key={image.label}
            src={image.src}
            alt=""
            className={`unodos ${selectedImage === index ? "selected" : ""}`}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
/* eslint-enable */
export default Q2Type;
