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

export default function Footer() {
  const navigate = useNavigate();
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
            {MenuData.map((item) => (
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Button
                  key={item.title}
                  sx={{
                    color: "#274760",
                    fontFamily: "Barlow",
                    fontWeight: "500",
                    ml: 4,
                    fontSize: "18px",
                  }}
                  onClick={() => navigate(item.path)}
                >
                  {item.title}
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
                to="https://www.instagram.com/nss_medical_center/"
                style={{ textDecoration: "none", color: "#274760" }}
              >
                <Instagram />
              </Link>

              <Link
                target="blank"
                to="https://t.me/nssmed"
                style={{ textDecoration: "none", color: "#274760" }}
              >
                <Telegram />
              </Link>
            </Box>
          </Box>
        </Grid>

        <Grid item lg={4}>
          <Box component={"form"}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
            <TextField
              sx={{ mt: 3 }}
              fullWidth
              type="number"
              id="outlined-basic"
              label="Phone"
              variant="outlined"
            />

            <Button
              variant="contained"
              fullWidth
              sx={{
                background: "linear-gradient(270deg, #307bc4 0%, #274760 100%)",
                p: 1,
                borderRadius: "30px",
                width: "150px",
                mt: 3,
                transition: " 0.5s linear",

                "&:hover": {
                  transition: " 0.5s linear",
                  width: "180px",
                  background:
                    "linear-gradient(270deg, #307bc4 0%, #274760 100%)",
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
