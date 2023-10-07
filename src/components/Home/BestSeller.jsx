import { Box, Typography } from "@mui/material";
import React from "react";
import ProductsCard from "./ProductCard";

export default function BestSeller() {
  return (
    <Box sx={{ textAlign: "center", mt: 12 }}>
      <Typography
        sx={{ fontSize: "34px", fontWeight: "600", textAlign: "center" }}
      >
        Our Products
      </Typography>

      <ProductsCard />
    </Box>
  );
}
