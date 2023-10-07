import { Box } from "@mui/material";
import React from "react";
import HeaderMenu from "./HeaderMenu";
import HeaderMain from "./HeaderMain";

export default function Header() {
  return (
    <Box>
      <HeaderMenu />
      <HeaderMain />
    </Box>
  );
}
