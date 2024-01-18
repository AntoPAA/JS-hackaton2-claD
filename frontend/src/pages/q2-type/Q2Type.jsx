import React, { useState } from "react";
import NavigationButtons from "../../components/NavigationButtons";
import { useProfileContext } from "../../context/profileContext";

import HeaderPage from "../../components/HeaderPage";
import "./Q2Type.css";

function Q2Type() {
  const { profile, updateHairType } = useProfileContext();

  const images = [
    {
      src: "https://antopaa.github.io/Publicimg/img/Bob component.png",
      label: "Coily",
    },
    {
      src: "https://antopaa.github.io/Publicimg/img/Group%2057.png",
      label: "Curly",
    },
    {
      src: "https://antopaa.github.io/Publicimg/img/Group%2059.png",
      label: "Wavy",
    },
    {
      src: "https://antopaa.github.io/Publicimg/img/Group%2058.png",
      label: "Straight",
    },
  ];

  const initialImage = images.findIndex(
    (img) => img.label === profile.hairType
  );

  const [selectedImage, setSelectedImage] = useState(initialImage);

  const handleImageClick = (index, image) => {
    setSelectedImage((prevIndex) => (prevIndex === index ? null : index));
    updateHairType(image.label);
  };

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
            onClick={() => handleImageClick(index, image)}
          />
        ))}
      </div>
      <NavigationButtons back="/q1" next="/q3" />
    </div>
  );
}
/* eslint-enable */
export default Q2Type;
