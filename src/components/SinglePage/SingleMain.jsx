import { ArrowRight, KeyboardArrowRight } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function SingleMain({data}) {


  const {t, i18n} = useTranslation()

  return (
    <Box
      sx={{
        backgroundImage:
          "url('https://htmldemo.net/eposi/eposi/assets/img/backgrounds/category-image-1820x400.webp')",
        height: "400px",
        pt: 10,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography sx={{ fontSize: "30px" }}>{ i18n?.language == "uz" ? data?.data?.product_title_uz : data?.data?.product_title_ru}</Typography>
        <Box
          sx={{
            display: "flex",
            gap: "5px",
            justifyContent: "center",
            alignItems: "center",
            mt: 2,
          }}
        >
          <Link to="/" style={{ color: "gray", textDecoration: "none" }}>
            {t("home")}
          </Link>
          <KeyboardArrowRight />
          <Link to={`/product?category=${data?.data?.category_id}`} style={{color: "black", textDecoration: "none" }}>
            {i18n?.language == "uz" ? data?.data?.category_name_uz : data?.data?.category_name_ru}
          </Link>
          <KeyboardArrowRight />
          <Link to={`/product?category=${data?.data?.category_id}&subcategory=${data?.data?.sub_category_id}`} style={{ color: "black", textDecoration: "none" }}>
            {i18n?.language == "uz" ? data?.data?.sub_category_name_uz : data?.data?.sub_category_name_ru}
          </Link>
          <KeyboardArrowRight />
          <Link to={`/single/${data?.data?.product_id}`} style={{ color: "red", textDecoration: "none" }}>
            {i18n?.language == "uz" ? data?.data?.product_title_uz : data?.data?.product_title_ru}
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
