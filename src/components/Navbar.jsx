import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

// Styled components for custom styling
const StyledAppBar = styled(AppBar)({
  backgroundColor: "#2196f3",
});

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const StyledTypography = styled(Typography)({
  flexGrow: 1,
  textAlign: "left",
  fontWeight: "bold",
  marginLeft: "16px",
  color: "#fff",
});

const StyledButton = styled(Button)({
  marginRight: "16px",
  backgroundColor: "#4caf50",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#45a049",
  },
});

// Navbar component with navigation functionality
const Navbar = () => {
  const navigate = useNavigate();

  // Navigation function for the "About Me" button
  const handleAboutMe = () => {
    navigate("/aboutme");
  };

  // JSX structure for the Navbar
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
