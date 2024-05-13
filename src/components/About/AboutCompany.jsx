import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useCatalog } from "../../query-data/data.service";

export default function AboutCompany() {
  const { t, i18n } = useTranslation();

  const { data: catalog } = useCatalog();

  return (
    <Container
      sx={{
        p: 2,
        background: "white",
        marginTop: {
          md: "-100px",
        },
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
          <Typography sx={{ fontSize: "34px", fontWeight: "600" }}>
            {/* {i18n?.language == "ru" ? t("welcome-to") : ""}{" "}
            <span style={{ color: "red" }}>Ardo Tex</span>{" "}
            {i18n?.language == "uz" ? t("welcome-to") : ""}. */}
            {t("about-1")}
          </Typography>
          <Typography sx={{ color: "gray", mt: 2 }}>{t("about-2")}</Typography>
          {/* <Typography sx={{ fontSize: "22px", fontWeight: "550", mt: 4 }}>
            {t("about-3")}
          </Typography> */}
          <Typography sx={{ color: "gray", mt: 2 }}>{t("about-3")}</Typography>

          {catalog?.data?.map((item) => (
            <Button
              sx={{
                width: "100%",
                mt: 2,
                bgcolor: "#000",
                color: "#fff",
                p: 2,
                borderRadius: "12px",
                transition: "500ms ease all",
                border: "2px solid #000",
                fontWeight: "600",
                "&:hover": {
                  bgcolor: "#fff",
                  color: "#000",
                },
              }}
              target="_blank"
              href={item.catalog_file_link}
            >
              {t("download-catalog")}
            </Button>
          ))}
        </Grid>
      </Grid>

      <Box sx={{textAlign: "center"}} >
        {/* <Typography sx={{ fontSize: "34px", fontWeight: "600" }}>
          {t("about-5")}
        </Typography> */}
        <Typography sx={{ color: "gray", mt: 2 }}>{t("about-5")}</Typography>
        <Typography sx={{ color: "gray", mt: 2 }}>{t("about-6")}</Typography>
        <Typography sx={{ color: "gray", mt: 2 }}>{t("about-7")}</Typography>
      </Box>
    </Container>
  );
}
