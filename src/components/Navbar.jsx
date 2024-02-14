import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const StyledAppBar = styled(AppBar)({
  backgroundColor: "#2196f3", // Change the background color to your preference
});

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const StyledTypography = styled(Typography)({
  flexGrow: 1,
  textAlign: "left",
  fontWeight: "bold",
  marginLeft: "16px", // Add left margin for better spacing
  color: "#fff", // Text color
});

const StyledButton = styled(Button)({
  marginRight: "16px", // Add right margin for better spacing
  backgroundColor: "#4caf50", // Button background color
  color: "#fff", // Button text color
  "&:hover": {
    backgroundColor: "#45a049", // Hover background color
  },
});

const Navbar = () => {
  const navigate = useNavigate();

  const handleAboutMe = () => {
    navigate("/aboutme");
  };

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <StyledTypography variant="h6">
          Data Visualization - MoveInSync
        </StyledTypography>
        <StyledButton color="inherit" onClick={handleAboutMe}>
          About Me
        </StyledButton>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Navbar;
