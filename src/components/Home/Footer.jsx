import { Facebook, Google, Twitter, YouTube } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../logo.png";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        mt: 14,
        pb: 4,
        background: "linear-gradient( #DCE9EC, #E8F0F3)",
        pt: 4,
      }}
    >
      <Grid
        container
        justifyContent={{
          xs: "center",
          sm: "center",
          md: "center",
          lg: "space-between",
        }}
        alignItems={"center"}
        gap={2}
      >
        <Grid item lg={7.5} md={11} sm={11} xs={12}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              gap: "40px",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <img
              style={{
                width: "100px",
                cursor: "pointer",
              }}
              onClick={() => navigate("/")}
              src={Logo}
              alt=""
            />
            <Typography sx={{ color: "gray" }}>
              Copyright © 2022{" "}
              <Link
                style={{
                  color: "black",
                  marginLeft: "6px",
                  paddingRight: "6px",
                }}
                to="https://spaceteam.uz/"
              >
                spaceteam.uz
              </Link>
              All Rights Reserved.
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={3} md={3} sm={8} xs={11}>
          <Box sx={{ display: "flex", gap: "30px", justifyContent: "center" }}>
            <Box>
              <Typography sx={{ fontWeight: "bold" }}>Phone Number</Typography>
              <Typography>+99895 145-10-00</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
