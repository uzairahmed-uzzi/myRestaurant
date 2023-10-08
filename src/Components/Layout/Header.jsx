import React, { useState, useCallback } from "react";
import FastfoodRoundedIcon from "@mui/icons-material/FastfoodRounded";
import { AppBar, Box, Tabs, Toolbar, Typography, Tab } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Header = () => {
 
   const [value, setValue] = useState(0);
    const navigate = useNavigate();
 

  const navigteTo = (e, link) => {
    e.preventDefault();
    return navigate(link);
  };

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <Typography
              color={"goldenrod"}
              component={"div"}
              variant="h4"
              sx={{ flexGrow: 1 }}
            >
              <FastfoodRoundedIcon /> My Restaurant
            </Typography>
            <Tabs
              value={value}
              onChange={(e, val) => setValue(val)}
              indicatorColor="secondary"
            >
              <Tab
                sx={{ color: "goldenrod" }}
                label="Home"
                onClick={(e) => navigteTo(e, "/")}
              />
              <Tab
                sx={{ color: "goldenrod" }}
                label="Menu"
                onClick={(e) => navigteTo(e, "/menu")}
              />
              <Tab
                sx={{ color: "goldenrod" }}
                label="About"
                onClick={(e) => navigteTo(e, "/about")}
              />
              <Tab
                sx={{ color: "goldenrod" }}
                label="Contact"
                onClick={(e) => navigteTo(e, "/contact")}
              />
            </Tabs>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
