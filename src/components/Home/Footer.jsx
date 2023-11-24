import {
  Call,
  Email,
  Facebook,
  Google,
  HealthAndSafety,
  Instagram,
  Place,
  Telegram,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../logo.png";
import { MenuData } from "../../data";
import { useTranslation } from "react-i18next";
import FormContact from "../Contact/FormContact";

export default function Footer() {
  const navigate = useNavigate();

  const { t } = useTranslation();

  return (
    <Box
      sx={{
        mt: 24,
        background: "#E4EEF1",
        p: 3,
      }}
    >
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        gap={4}
        mt={5}
      >
        <Grid item lg={4}>
          <Typography
            sx={{
              fontSize: "24px",
              color: "#274760",
            }}
          >
            Ardo_Tex
          </Typography>

          <Box>
            <Box sx={{ display: "flex", gap: "15px", mt: 2 }}>
              <Place sx={{ color: "#307BC4" }} />
              <Typography sx={{ color: "#274760" }}>
                Узбекистан, г. Ташкент, Кичик Халка Йули (Улугбек),
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "15px", mt: 2 }}>
              <Call sx={{ color: "#307BC4" }} />
              <Typography sx={{ color: "#274760" }}>
                (+998) 95 145 1000
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: "15px", mt: 2 }}>
              <Email sx={{ color: "#307BC4" }} />
              <Typography sx={{ color: "#274760" }}>
                ardotex@gmail.com
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item lg={3}>
          <Box>
            {MenuData.map((item, i) => (
              <Box key={i} sx={{ display: "flex", flexDirection: "column" }}>
                <Button
                  key={item.title}
                  sx={{
                    color: "#274760",
                    // fontFamily: "Barlow",
                    fontWeight: "500",
                    ml: 4,
                    fontSize: "18px",
                  }}
                  onClick={() => navigate(item.path)}
                >
                  {t(item.title)}
                </Button>
              </Box>
            ))}

            <Box
              sx={{
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                mt: 2,
                color: "#274760",
              }}
            >
              <Link
                target="blank"
                to="https://www.instagram.com/ardotex/"
                style={{ textDecoration: "none", color: "#274760" }}
              >
                <Instagram />
              </Link>

              <Link
                target="blank"
                to="https://t.me/ardotex"
                style={{ textDecoration: "none", color: "#274760" }}
              >
                <Telegram />
              </Link>

              <Link
                target="blank"
                to="https://www.youtube.com/@ardotex"
                style={{ textDecoration: "none", color: "#274760" }}
              >
                <YouTube />
              </Link>

              <Link
                target="blank"
                to="https://m.facebook.com/ardotex.uz"
                style={{ textDecoration: "none", color: "#274760" }}
              >
                <Facebook />
              </Link>
            </Box>
          </Box>
        </Grid>

        <Grid item lg={4}>
          <FormContact />
        </Grid>
      </Grid>
    </Box>
  );
}
