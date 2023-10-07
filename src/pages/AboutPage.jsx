import { Box } from "@mui/material";
import React from "react";
import HeaderMenu from "../components/Home/HeaderMenu";
import Footer from "../components/Home/Footer";
import AboutMain from "../components/About/AboutMain";
import AboutCompany from "../components/About/AboutCompany";
import AboutProduct from "../components/About/AboutProducts";
import Certificate from "../components/About/Certificate";

export default function AboutPage() {
  return (
    <Box>
      <HeaderMenu />
      <AboutMain />
      <AboutCompany />
      <AboutProduct />
      <Certificate />
      <Footer />
    </Box>
  );
}
