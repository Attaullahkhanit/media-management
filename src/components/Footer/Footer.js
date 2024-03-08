import React from "react";
import "./styles.scss";
import { Box, Button, Grid } from "@mui/material";
import { RxDoubleArrowRight } from "react-icons/rx";

function Footer() {
  return (
    <>
      <Grid
        container
        className="footer-container"
        alignItems="center"
        justifyContent="space-between"
        sx={{ padding: 4 }}
      >
        <Grid item xs={12} md={10}>
          <Button
            backgroundColor="#12111A"
            fullWidth={{ sx: true, sm: true }}
            className="back-button"
          >
            Back
          </Button>
        </Grid>
        <Grid item xs={12} md={2} marginLeft="auto" textAlign="right">
          <Button
            className="next-button"
            fullWidth
            justifyContent="space-between"
            alignItems="baseline"
            display="flex"
          >
            <Box
              className="next-text"
              sx={{ textAlign: { xs: "center", sm: "center" } }}
            >
              Next
            </Box>{" "}
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <RxDoubleArrowRight size="15px" />
            </Box>
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;
