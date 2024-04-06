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
// import Logo from "../../logo.png";
import { MenuData } from "../../data";
import { useTranslation } from "react-i18next";
import FormContact from "../Contact/FormContact";
import { useNumbers } from "../../query-data/data.service";

export default function Footer() {
  const navigate = useNavigate();

  const { t, i18n } = useTranslation();

  const { data, isLoading } = useNumbers();

  return (
    <Box
      sx={{
        mt: {
          xs: 4,
          sm: 6,
          md: 12,
          lg: 16,
        },
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
            <Link className="block w-fit" to={"/"}>
              <img
                src={"/img/logo.png"}
                alt=""
                className="w-[100px] h-[100px] object-contain"
              />
            </Link>
          </Typography>

          <Box>
            <Box sx={{ display: "flex", gap: "15px", mt: 2 }}>
              <Place sx={{ color: "#307BC4" }} />
              <Typography sx={{ color: "#274760" }}>
                {i18n?.language === "ru"
                  ? "Узбекистан, Ташкент, маленькая дорога (Улугбек)"
                  : i18n?.language === "uz"
                  ? "O'zbekiston, Toshkent, kichik xalqa yoli (Ulug'bek)"
                  : "Uzbekistan, Tashkent, Small Street (Ulugbek)"}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                mt: 2,
              }}
            >
              {data?.data?.map((item) => (
                <a
                  style={{ display: "block" }}
                  key={item?.phone_id}
                  href={`tel:${item?.phone_number}`}
                  target="blank_"
                >
                  <Box sx={{ display: "flex", gap: "15px" }}>
                    <Call sx={{ color: "#307BC4" }} />
                    <Typography sx={{ color: "#274760" }}>
                      {item?.phone_number}
                    </Typography>
                  </Box>
                </a>
              ))}
            </Box>

            <Box sx={{ display: "flex", gap: "15px", mt: 2 }}>
              <a href="mailto:ardotex@gmail.com" target="blank_">
                <Box sx={{ display: "flex", gap: "15px" }}>
                  <Email sx={{ color: "#307BC4" }} />
                  <Typography sx={{ color: "#274760" }}>
                    ardotex@gmail.com
                  </Typography>
                </Box>
              </a>
            </Box>
          </Box>
        </Grid>

        <Grid item lg={3}>
          <div className="flex flex-col items-center gap-3">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {MenuData.map((item, i) => (
                <Button
                  key={i}
                  sx={{
                    color: "#274760",
                    // fontFamily: "Barlow",
                    fontWeight: "500",
                    fontSize: "18px",
                  }}
                  onClick={() => navigate(item.path)}
                >
                  {t(item.title)}
                </Button>
              ))}
            </Box>

            <div className="flex items-center justify-center gap-3">
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
            </div>
          </div>
        </Grid>

        <Grid item lg={4}>
          <FormContact />
        </Grid>
      </Grid>
    </Box>
  );
}
