/* eslint-disable */
import React, { useState } from "react";
import HeaderPage from "../../components/HeaderPage";
import "./Q3Cut.css";

const images = [
  {
    src: "https://antopaa.github.io/Publicimg/img/short.png",
    label: "short",
    index: 0,
  },
  {
    src: "https://antopaa.github.io/Publicimg/img/short1.png",
    label: "short",
    index: 1,
  },
  {
    src: "https://antopaa.github.io/Publicimg/img/short2.png",
    label: "short",
    index: 2,
  },
  {
    src: "https://antopaa.github.io/Publicimg/img/mid.png",
    label: "MID-LENGTH",
    index: 3,
  },
  {
    src: "https://antopaa.github.io/Publicimg/img/mid1.png",
    label: "MID-LENGTH",
    index: 4,
  },
  {
    src: "https://antopaa.github.io/Publicimg/img/mid2.png",
    label: "MID-LENGTH",
    index: 5,
  },
  {
    src: "https://antopaa.github.io/Publicimg/img/long.png",
    label: "long",
    index: 6,
  },
  {
    src: "https://antopaa.github.io/Publicimg/img/long1.png",
    label: "long",
    index: 7,
  },
  {
    src: "https://antopaa.github.io/Publicimg/img/long2.png",
    label: "long",
    index: 8,
  },
];

function Q3Cut() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (groupLabel, index) => {
    const currentIndex = images.findIndex(
      (image) => image.label === groupLabel && image.index === index
    );
    setSelectedImage((prevIndex) =>
      prevIndex === currentIndex ? null : currentIndex
    );
  };

  const groupedImages = images.reduce((acc, image) => {
    if (!acc[image.label]) {
      acc[image.label] = [];
    }
    acc[image.label].push(image);
    return acc;
  }, {});

  return (
    <div>
      <HeaderPage page="02" totalPages="05" title="DEFINE YOUR HAIR TYPE" />
      <div className="four-container">
        {Object.entries(groupedImages).map(([label, images]) => (
          <div key={label} className="hair-type-container">
            <h2 className="category-hair login-title">{label}</h2>
            {images.map((image) => (
              <img
                key={image.index}
                src={image.src}
                alt=""
                className={`short ${
                  selectedImage === image.index ? "selected" : ""
                }`}
                onClick={() => handleImageClick(label, image.index)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Q3Cut;
/* eslint-enable */
