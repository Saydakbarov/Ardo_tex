import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import FormContact from "./FormContact";
import { Business, Email, Phone } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

export default function ContactCompany() {
  const { t } = useTranslation();

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
            src="https://yandex.uz/map-widget/v1/?ll=69.210637%2C41.295886&mode=search&oid=172958207416&ol=biz&z=12.38"
            className="w-full h-[300px] sm:h-[400px] "
            frameBorder={1}
            allowFullScreen="true"
            style={{ position: "relative" }}
          />
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
              <a
                href="https://maps.app.goo.gl/mpa5nVfmPqGEVZ7Y9"
                target="blank_"
              >
                <Box
                  sx={{ display: "flex", gap: "15px", alignItems: "center" }}
                >
                  <Business sx={{ color: "#337DC5" }} />

                  <Typography sx={{ fontWeight: "600" }}>
                    {t("address")}
                  </Typography>
                </Box>
              </a>

              <Typography sx={{ mt: 2, color: "gray", fontSize: "14px" }}>
                Узбекистан, г. Ташкент, Кичик Халка Йули (Улугбек),
              </Typography>
            </Box>

            <Box sx={{ mt: 3 }}>
              <a href="tel:+998951451000">
                <Box sx={{ display: "flex", gap: "15px" }}>
                  <Phone sx={{ color: "#337DC5" }} />
                  <Typography sx={{ fontWeight: "600" }}>
                    {t("phone")}
                  </Typography>
                </Box>
                <Typography sx={{ mt: 2, color: "gray", fontSize: "14px" }}>
                  (+998) 95 145 1000
                </Typography>
              </a>

              <Typography
                sx={{ mt: 1, color: "gray", fontSize: "14px" }}
              ></Typography>
            </Box>

            <Box sx={{ mt: 3 }}>
              <a href="mailto:ardotex@gmail.com" target="blank_">
                <Box sx={{ display: "flex", gap: "15px" }}>
                  <Email sx={{ color: "#337DC5" }} />
                  <Typography sx={{ fontWeight: "600" }}> Email</Typography>
                </Box>
              </a>

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
