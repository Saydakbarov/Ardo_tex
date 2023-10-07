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
import { MenuData } from "../../data";
import DrawerComp from "./DrawerComp";
import { Facebook, Instagram, Telegram, YouTube } from "@mui/icons-material";

import Logo from "../../logo.png";

export default function HeaderMenu() {
  const navigate = useNavigate();

  //   Responsive Menu
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
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
                <DrawerComp />
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
                        fontFamily: "Barlow",
                        fontWeight: "500",
                        ml: 2,
                      }}
                      onClick={() => navigate(item.path)}
                    >
                      {item.title}
                    </Button>
                  ))}
                </Box>

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
