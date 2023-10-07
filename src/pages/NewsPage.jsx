import { Box } from "@mui/material";
import React from "react";
import HeaderMenu from "../components/Home/HeaderMenu";
import Footer from "../components/Home/Footer";
import NewsMain from "../components/News/NewsMain";
import NewsProducts from "../components/News/NewsProducts";

export default function NewsPage() {
  return (
    <Box>
      <HeaderMenu />
      <NewsMain />
      <NewsProducts />
      <Footer />
    </Box>
  );
}
