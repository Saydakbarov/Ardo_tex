import { Box } from "@mui/material";
import React from "react";
import HeaderMenu from "../components/Home/HeaderMenu";
import Footer from "../components/Home/Footer";
import SingleMain from "../components/SinglePage/SingleMain";
import SingleProduct from "../components/SinglePage/SingleProduct";

export default function SinglePage() {
  return (
    <Box>
      <HeaderMenu />
      <SingleMain />
      <SingleProduct />
      <Footer />
    </Box>
  );
}
