import React from "react";
import "./styles.scss";
import { Grid, Typography, Box, Button } from "@mui/material";
// import { FaArrowLeft } from 'react-icons/fa';
import { AiOutlineUser, AiOutlineEdit } from "react-icons/ai";
import { FaArrowLeftLong } from "react-icons/fa6";
import profileimage from "../../assets/profile.jpg";
import OptionButton from "../../components/Button/OptionButton/OptionButton";
import DropDownButton from "../../components/Button/DropDownButton/DropDownButton";
import Footer from "../../components/Footer/Footer";
import LineBarPercentage from "../../components/LineBarPercentage/LineBarPercentage";

const Home = () => {
  return (
    // Navbar section
    <>
      <Grid
        container
        className="navbar-container"
        alignItems="center"
        justifyContent="space-between"
        sx={{ paddingX: 5, paddingY: 5 }}
      >
        <Grid item container alignItems="center" xs={4}>
          <Box className="arrow-button">
            <FaArrowLeftLong size={20} style={{ marginRight: 8 }} />
          </Box>
          <Box display="flex" flexDirection="column">
            <Box display="flex" flexDirection="row" alignItems="baseline">
              <Typography variant="h6">Media Management</Typography>
              <AiOutlineEdit size={20} style={{ marginLeft: 8 }} />
            </Box>
            <Box>
              <Typography variant="body1">Draft Compaign</Typography>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          container
          alignItems="center"
          xs={6}
          justifyContent="flex-end"
        >
          {/* Show name and profile image on larger screens */}
          <Grid item display="flex" flexDirection="row" alignItems="center">
            <Box
              sm={8}
              md={6}
              lg={11}
              sx={{
                display: { xs: "none", sm: "block" },
                paddingRight: "10px",
              }}
            >
              <Typography variant="body1">Jone Cooper</Typography>
              <a href="#">Jone Cooper</a>
            </Box>
            <Box
              sx={{
                borderRadius: "16px",
                width: "45px",
                height: "45px",
                position: "relative",
                zIndex: "11",
              }}
            >
              <img
                src={profileimage}
                width="45px"
                height="45px"
                style={{
                  borderRadius: "10px",
                  position: "absolute",
                  zIndex: "-1",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>

      {/* Body container */}

      <Grid
        container
        sx={{ paddingX: 5, paddingY: 8 }}
        borderBottom="1px solid #1E1D25"
        className="body-container"
      >
        <Grid item component="div">
          <Typography variant="h5" bold>
            Content Type
          </Typography>
          <Typography variant="body1">
            Choose a content type that best fits your needs.
          </Typography>
        </Grid>
        <Box
          width="100%"
          borderBottom="2px solid #1E1D25"
          paddingY="15px"
        ></Box>
        <Grid item component="div" paddingY="30px" >
          <Box>
            <Typography variant="h6">
              What type of content are you created
            </Typography>
          </Box>
          <Box>
            <OptionButton />
          </Box>
        </Grid>
        <Grid container item component="div">
          <Box paddingBottom="20px">
            <Typography variant="h6">
              Which type of "Fan" content do you want to create?
            </Typography>
          </Box>
          <Grid container item component="div">
            <DropDownButton />
          </Grid>
        </Grid>
        <Grid
          container
          item
          component="div"
          paddingY="20px"
          marginBottom="70px"
        >
          <Box paddingY="20px">
            <Typography variant="h6">
              Set the number of words for output text.
            </Typography>
          </Box>
          <Grid container item component="div" sx={{ paddingY: "20px" }}>
            <LineBarPercentage />
          </Grid>
        </Grid>
      </Grid>
      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default Home;
