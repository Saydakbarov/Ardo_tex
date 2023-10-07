import { Box } from "@mui/material";
import React from "react";
import HeaderMenu from "../components/Home/HeaderMenu";
import Footer from "../components/Home/Footer";
import ProductsMain from "../components/Products/ProductsMain";

export default function ProductsPage() {
  return (
    <Box>
      <HeaderMenu />
      <ProductsMain />
      <Footer />
    </Box>
  );
}
