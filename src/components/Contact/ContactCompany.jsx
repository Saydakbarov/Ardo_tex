import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import FormContact from "./FormContact";
import { Business, Email, Phone } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

export default function ContactCompany() {

  const {t} = useTranslation()

  return (
    <Container
      sx={{
        p: 2,
        background: "white",
        marginTop: "-100px",
      }}
    >
      <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.1318640648483!2d69.19144117563799!3d41.30599490104053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bdf3f55a937%3A0x3446e0e39c1c4b18!2zQXJkb3RleCDQntCx0LjQstC-0YfQvdGL0LUg0JzQsNGC0LXRgNC40LDQu9GL!5e0!3m2!1sru!2s!4v1693417945165!5m2!1sru!2s"
            width="100%"
            height="450"
          ></iframe>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent={"center"}
        gap={9}
        mt={10}
        alignItems={"center"}
      >
        <Grid item lg={6} md={6} sm={10} xs={11}>
          <Typography sx={{ fontSize: "24px" }}></Typography>
          <FormContact />
        </Grid>
        <Grid
          item
          lg={5}
          md={5}
          sm={10}
          xs={11}
          sx={{ background: "#F2F2F2", borderRadius: "4px" }}
        >
          <Box sx={{ p: 3 }}>
            <Typography sx={{ fontSize: "24px" }}>{t("contact-us")}</Typography>
            <Typography sx={{ color: "gray", fontSize: "14px", mt: 3 }}>
              {t("quality-for-all")}
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Box sx={{ display: "flex", gap: "15px", alignItems: "center" }}>
                <Business sx={{ color: "#337DC5" }} />
                <Typography sx={{ fontWeight: "600" }}>{t("address")}</Typography>
              </Box>
              <Typography sx={{ mt: 2, color: "gray", fontSize: "14px" }}>
                Узбекистан, г. Ташкент, Кичик Халка Йули (Улугбек),
              </Typography>
            </Box>

            <Box sx={{ mt: 3 }}>
              <Box sx={{ display: "flex", gap: "15px" }}>
                <Phone sx={{ color: "#337DC5" }} />
                <Typography sx={{ fontWeight: "600" }}>{t("phone")}</Typography>
              </Box>
              <Typography sx={{ mt: 2, color: "gray", fontSize: "14px" }}>
                (+998) 95 145 1000
              </Typography>
              <Typography
                sx={{ mt: 1, color: "gray", fontSize: "14px" }}
              ></Typography>
            </Box>

            <Box sx={{ mt: 3 }}>
              <Box sx={{ display: "flex", gap: "15px" }}>
                <Email sx={{ color: "#337DC5" }} />
                <Typography sx={{ fontWeight: "600" }}> Email</Typography>
              </Box>
              <Typography sx={{ mt: 2, color: "gray", fontSize: "14px" }}>
                ardotex@gmail.com
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
