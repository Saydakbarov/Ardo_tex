import { Box } from "@mui/material";
import React from "react";
import HeaderMenu from "../components/Home/HeaderMenu";
import Footer from "../components/Home/Footer";
import ProductsMain from "../components/Products/ProductsMain";
import ProductCategory from "../components/Products/ProductCategory";

export default function ProductsPage() {
  return (
    <Box>
      <HeaderMenu />
      <ProductsMain />
      <ProductCategory />
      <Footer />
    </Box>
  );
}
