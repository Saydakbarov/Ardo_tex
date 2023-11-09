import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export default function AboutCompany() {

  const {t, i18n} = useTranslation()

  return (
    <Container
      sx={{
        p: 2,
        background: "white",
        marginTop: "-100px",
      }}
    >
      <Grid container justifyContent={"center"} gap={8}>
        <Grid
          item
          lg={4.3}
          md={4.3}
          sm={10}
          xs={12}
          sx={{
            backgroundImage:
              "url('https://htmldemo.net/eposi/eposi/assets/img/banners/img2-middle-eposi1.webp')",
            minHeight: "400px",
          }}
        ></Grid>
        <Grid item lg={7} md={7} sm={10} xs={12} sx={{ padding: "0px 20px" }}>
          <Typography  sx={{ fontSize: "34px", fontWeight: "600" }}>
            {i18n?.language == "ru" ? t("welcome-to") : ""} <span style={{ color: "red" }}>Ardo Tex</span> {i18n?.language == "uz" ? t("welcome-to") : ""}.
          </Typography>
          <Typography sx={{ color: "gray", mt: 2 }}>
            {t("about-desc")}
          </Typography>
          <Typography sx={{ fontSize: "22px", fontWeight: "550", mt: 4 }}>
            {t("about-head-2")}
          </Typography>
          <Typography sx={{ color: "gray", mt: 2 }}>
            {t("about-desc-2")}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
