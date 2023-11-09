import {
  Box,
  Button,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MenuData, languages } from "../../data";
import DrawerComp from "./DrawerComp";
import { Facebook, Instagram, Telegram, YouTube } from "@mui/icons-material";

import Logo from "../../logo.png";
import { useTranslation } from "react-i18next";

export default function HeaderMenu() {
  const navigate = useNavigate();

  //   Responsive Menu
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));


  const {t, i18n} = useTranslation()

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: "1300px",
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          p: {
            xs: "20px 8px",
            sm: "20px 10px",
            md: "20px 30px",
            lg: "20px 30px",
          },
        }}
      >
        <Toolbar
          sx={{
            borderBottom: "1px solid white",
            padding: "0px !important",
            zIndex: "999",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {isMatch ? (
            <>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <img
                  style={{
                    width: "150px",
                    cursor: "pointer",
                  }}
                  src={Logo}
                  onClick={() => navigate("/")}
                  alt=""
                />
                <div className="" style={{display: "flex", alignItems: "center", gap: "15px"}} >
                <IconButton style={{display: "flex", alignItems : "center", gap : "8px"}} sx={{ color: "gray" }} onClick={() => {
                    if(i18n?.language == "uz"){
                      i18n.changeLanguage("ru")
                      localStorage.setItem("lang", "ru")
                    }else {
                      i18n.changeLanguage("uz")
                      localStorage.setItem("lang", "uz")
                    }
                  }} >
                    <span style={{fontSize: "16px",textTransform: "uppercase"}} >{i18n?.language == "uz" ? languages[1]?.lang : languages[0]?.lang}</span>
                    <img src={i18n?.language == "uz" ? languages[1]?.image : languages[0]?.image} style={{width: "30px", height : "30px", objectFit: "contain"}} alt="" className="" />
                  </IconButton>
                <DrawerComp />
                </div>
              </Box>
            </>
          ) : (
            <>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "none",
                      lg: "block",
                    },
                  }}
                >
                  <img
                    style={{
                      width: "100px",
                      cursor: "pointer",
                    }}
                    src={Logo}
                    onClick={() => navigate("/")}
                    alt=""
                  />
                </Box>
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                  {MenuData.map((item, i) => (
                    <Button
                      key={i}
                      sx={{
                        color: "black",
                        fontWeight: "500",
                        ml: 2,
                      }}
                      onClick={() => navigate(item.path)}
                    >
                      {t(item.title)}
                    </Button>
                  ))}
                </Box>
                  <IconButton style={{display: "flex", alignItems : "center", gap : "8px"}} sx={{ color: "gray" }} onClick={() => {
                    if(i18n?.language == "uz"){
                      i18n.changeLanguage("ru")
                      localStorage.setItem("lang", "ru")
                    }else {
                      i18n.changeLanguage("uz")
                      localStorage.setItem("lang", "uz")
                    }
                  }} >
                    <span style={{fontSize: "16px",textTransform: "uppercase"}} >{i18n?.language == "uz" ? languages[1]?.lang : languages[0]?.lang}</span>
                    <img src={i18n?.language == "uz" ? languages[1]?.image : languages[0]?.image} style={{width: "30px", height : "30px", objectFit: "contain"}} alt="" className="" />
                  </IconButton>
                <Box sx={{ color: "gray" }}>
                  <IconButton sx={{ color: "gray" }}>
                    <Link
                      target="blank"
                      to="https://m.facebook.com/ardotex.uz"
                      style={{ textDecoration: "none", color: "gray" }}
                    >
                      <Facebook />
                    </Link>
                  </IconButton>
                  <IconButton sx={{ color: "gray" }}>
                    <Link
                      to="https://www.instagram.com/ardotex/"
                      style={{ textDecoration: "none", color: "gray" }}
                      target="blank"
                    >
                      <Instagram />
                    </Link>
                  </IconButton>
                  <IconButton sx={{ color: "gray" }}>
                    <Link
                      to="https://www.youtube.com/@ardotex"
                      target="blank"
                      style={{ textDecoration: "none", color: "gray" }}
                    >
                      <YouTube />
                    </Link>
                  </IconButton>
                </Box>
              </Box>
            </>
          )}
        </Toolbar>
      </Box>
    </Box>
  );
}
