import { Box } from "@mui/material";
import React from "react";
import Header from "../components/Home/Header";
import HeaderBox from "../components/Home/HeaderBox";
import BestSeller from "../components/Home/BestSeller";
import NewCollections from "../components/Home/NewCollections";
import LastestNews from "../components/Home/LastestNews";
import HomeCategory from "../components/Home/HomeCategory";
import Footer from "../components/Home/Footer";
import HomeContact from "../components/Home/HomeContact";
import OurPartner from "../components/Home/OurPartner";

export default function HomePage() {
  return (
    <Box>
      <Header />
      <HeaderBox />
      <NewCollections />
      <BestSeller />
      <LastestNews />
      <HomeCategory />
      <OurPartner />
      <HomeContact />

      <Footer />
    </Box>
  );
}
