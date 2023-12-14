import { ArrowRight, KeyboardArrowRight } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function AboutMain() {

  const {t} = useTranslation()

  return (
    <div
      style={{
        backgroundImage:
          "url(/img/page-header/about.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
      className="py-[100px] md:py-[140px] lg:py-[180px] block"
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
    </div>
  );
}
