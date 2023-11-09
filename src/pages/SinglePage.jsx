import { Box } from "@mui/material";
import React from "react";
import HeaderMenu from "../components/Home/HeaderMenu";
import Footer from "../components/Home/Footer";
import SingleMain from "../components/SinglePage/SingleMain";
import SingleProduct from "../components/SinglePage/SingleProduct";
import { useOneProduct } from "../query-data/data.service";
import { useParams } from "react-router-dom";

export default function SinglePage() {

  const { id } = useParams();

  const {data, isLoading, isError} = useOneProduct(id)
  console.log(data, "product");


  return (
    <Box>
      <HeaderMenu />
      <SingleMain data={data} />
      <SingleProduct isLoading={isLoading} data={data} />
      
      <Footer />
    </Box>
  );
}
