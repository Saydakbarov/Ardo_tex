import { ArrowRight, KeyboardArrowRight } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function AboutMain() {

  const {t} = useTranslation()

  return (
    <Box
      sx={{
        backgroundImage:
          "url('/img/page-header/about.jpg')",
        
        pt: 25,
        pb: 35,
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
          {t("about")}
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
            {t("about")}
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
