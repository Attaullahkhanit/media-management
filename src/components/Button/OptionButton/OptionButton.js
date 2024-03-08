import React, { useState } from "react";
import { Button, Grid } from "@mui/material";
import "./styles.scss";

const OptionButton = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      {["Fan", "Education", "Sports", "News", "Investment", "Facts"].map(
        (buttonName) => (
          <Grid item key={buttonName}>
            <Button
              variant="contained"
              onClick={() => handleButtonClick(buttonName)}
              style={{
                backgroundColor:
                  selectedButton === buttonName ? "#523FD7" : "#12111A",
                color: selectedButton === buttonName ? "#FFFFFF" : "#FFFFFF",
                border:
                  selectedButton === buttonName ? "none" : "1px solid #747379",
                borderRadius: selectedButton === buttonName ? "25px" : "25px",
                padding: "10px 25px",
                fontSize: "12px",
                marginTop: "20px",
              }}
            >
              {buttonName}
            </Button>
          </Grid>
        )
      )}
    </Grid>
  );
};

export default OptionButton;
