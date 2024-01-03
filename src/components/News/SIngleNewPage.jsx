import React from "react";
import HeaderMenu from "../Home/HeaderMenu";
import Footer from "../Home/Footer";
import { Box } from "@mui/material";
import NewsMain from "./NewsMain";
import SingleNewsCard from "./SingleNewsCard";
import { useParams } from "react-router-dom";

export default function SIngleNewPage() {
  const { id } = useParams();
  return (
    <Box>
      <HeaderMenu />
      <NewsMain />
      <SingleNewsCard id={id} />
      <Footer />
    </Box>
  );
}
