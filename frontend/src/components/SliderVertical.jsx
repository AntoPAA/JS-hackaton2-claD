import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useProfileContext } from "../context/profileContext";

import "./SliderVertical.css";

function SliderVertical() {
  const { profile, updateWashingFrequency } = useProfileContext();

  const values = [
    "Less than once a week",
    "Once a week",
    "3 to 5 days interval",
    "Everyday",
  ];

  const initialValueIndex = values.findIndex(
    (val) => val === profile.washingFrequency
  );

  let initialValue = 0;
  if (initialValueIndex === 0) {
    initialValue = 100;
  }
  if (initialValueIndex === 1) {
    initialValue = 66;
  }
  if (initialValueIndex === 2) {
    initialValue = 33;
  }
  if (initialValueIndex === 3) {
    initialValue = 0;
  }

  const [value, setValue] = useState(initialValue);
  const [selectedValueIndex, setSelectedValueIndex] =
    useState(initialValueIndex);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    const index = Math.round(((100 - newValue) / 100) * (values.length - 1));
    updateWashingFrequency(values[index]);
    setSelectedValueIndex(index);
  };

  const handleValueClick = (index) => {
    const newValue = 100 - (index / (values.length - 1)) * 100;
    setValue(newValue);
    updateWashingFrequency(values[index]);
    setSelectedValueIndex(index);
  };

  return (
    <div className="slider-container">
      <Box sx={{ height: 450, display: "flex", alignItems: "center" }}>
        <Slider
          orientation="vertical"
          value={value}
          onChange={handleSliderChange}
          aria-label="Values"
          step={100 / (values.length - 1)}
          marks
          sx={{
            width: 2,
            color: "black",
          }}
        />
      </Box>
      <div className="values-container">
        {values.map((val, index) => (
          <button
            type="button"
            key={val}
            className={`value ${
              selectedValueIndex === index ? "selected" : ""
            }`}
            onClick={() => handleValueClick(index)}
          >
            {val}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SliderVertical;
