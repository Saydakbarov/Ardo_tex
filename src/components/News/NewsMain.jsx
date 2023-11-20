import { ArrowRight, KeyboardArrowRight } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function NewsMain() {
  const {t} = useTranslation()
  return (
    <Box
      sx={{
        backgroundImage:
          "url('/img/page-header/news.jpg')",
        height: "400px",
        pt: 10,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
    >
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography sx={{ fontSize: "30px" }}>
          {t("news")}
        </Typography>
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
          <Link to="/about" style={{ color: "red", textDecoration: "none" }}>
            {t("news")}
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
