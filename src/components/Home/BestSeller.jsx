import { Box, Typography } from "@mui/material";
import React from "react";
import ProductsCard from "./ProductCard";
import { useTranslation } from "react-i18next";

export default function BestSeller() {

  const {t} = useTranslation()

  return (
    <Box
      sx={{ textAlign: "center", maxWidth: "1500px", margin: "0 auto", mt: 12 }}
    >
      <Typography
        sx={{ fontSize: "34px", fontWeight: "600", textAlign: "center" }}
      >
        {t("our-products")}
      </Typography>

      <ProductsCard />
    </Box>
  );
}
