import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import "./SliderVertical.css";

function SliderVertical() {
  const [value, setValue] = useState(66);
  const [selectedValueIndex, setSelectedValueIndex] = useState(1);

  const values = [
    "Less than once a week",
    "Once a week",
    "3 to 5 days interval",
    "Everyday",
  ];

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    const index = Math.round(((100 - newValue) / 100) * (values.length - 1));
    setSelectedValueIndex(index);
  };

  const handleValueClick = (index) => {
    const newValue = 100 - (index / (values.length - 1)) * 100;
    setValue(newValue);
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
