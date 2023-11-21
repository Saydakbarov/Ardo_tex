import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { HeaderBoxData } from "../../data";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function HeaderBox() {

  const {t, i18n} = useTranslation()

  return (
    <Box sx={{ maxWidth: "1500px", margin: "0 auto", mt: 8 }}>
      <Grid container justifyContent={"center"} gap={4}>
        {HeaderBoxData.map((v, i) => (
          <Grid
            item
            xl={5.3}
            lg={5.3}
            md={5.3}
            sm={10}
            xs={11}
            key={v.id}
            sx={{
              p: 4,
              minHeight: "270px",

              background: "#F0F0F0",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: {xs:"center", sm:"center", md:"center", lg:"space-between"},
              gap:"20px"
            }}
          >
            <Box>
              <Typography sx={{ fontSize: "34px", fontWeight: "bold", mt: 5 }}>
                {i18n?.language == "uz" ? v.title_uz : v.title_ru}
              </Typography>
              <Link
                style={{
                  textDecoration: "none",
                  color: "gray",
                  borderBottom: "1px solid red",
                }}
              >
                {t("show-more")}
              </Link>
            </Box>
            <Box>
              <img
                style={{ width: {xs:"300px", sm:"300px", md:"300px", lg:"290px", xl:"300px"}, height: "200px" }}
                src={v.img}
                alt=""
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
