import { ArrowRight, KeyboardArrowRight } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function ContactMain() {

  const {t} = useTranslation()
  return (
    <Box
      sx={{
        backgroundImage:
          "url('/img/page-header/contact.webp')",
        height: "400px",
        backgroundSize: "cover",
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
        <Typography sx={{ fontSize: "30px" }}>
          {t("contact")}
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
          <Link to="/contact" style={{ color: "red", textDecoration: "none" }}>
            {t("contact")}
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
