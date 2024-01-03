import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
// import content from "../../Locolization/content";
import NewsProductCard from "./NewsProductCard";
import { useTranslation } from "react-i18next";

export default function NewsProducts() {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        p: 2,
        background: "white",
        width: "95%",
        margin: "0 auto",
      }}
    >
      <Typography sx={{ fontSize: "40px", textAlign: "center", mt: 4 }}>
        {t("news")}
      </Typography>
      <NewsProductCard  />
    </Box>
  );
}
