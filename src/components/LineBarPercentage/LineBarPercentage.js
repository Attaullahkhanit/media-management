import React from "react";
import { Box, Typography } from "@mui/material";
import "./styles.scss";

function LineBarPercentage() {
  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        width="330px"
        fullWidth={{ sx: true, sm: true }}
        alignItems="baseline"
        backgroundColor="#050508"
        paddingX="10px"
        paddingY="17px"
        borderRadius="10px"    
      >
        <Typography>100</Typography>
        <Box class="middle">
          <Box class="bar-container">
            <Box class="bar-4"></Box>
          </Box>
        </Box>
        <Typography>1000</Typography>
      </Box>
    </>
  );
}

export default LineBarPercentage;
