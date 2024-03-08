import React, { useState } from "react";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./styles.scss";

const DropDownButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchText, setSearchText] = useState("Search");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuItemClick = (item) => {
    setSearchText(item);
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className="dropdown-section">
      <Box className="dropdown-container">
        <Typography className="search">{searchText}</Typography>
        <IconButton
          className="dropdown-icon"
          aria-controls="dropdown-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MdKeyboardArrowDown />
        </IconButton>
      </Box>
      <Menu
        id="dropdown-menu"
        anchorEl={anchorEl}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundColor: "#26252D",
            width: 370,
            color: "white",
          },
        }}
      >
        {[
          "Board games revival",
          "Comedy trends",
          "Amusement parks",
          "Escape rooms",
          "Street performances",
          "Online challenges",
          "Festivals impact",
          "Crafting movement",
          "Social gaming",
          "Virtual reality",
        ].map((item) => (
          <MenuItem
            key={item}
            className="menu-item"
            onClick={() => handleMenuItemClick(item)}
          >
            {item}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default DropDownButton;
