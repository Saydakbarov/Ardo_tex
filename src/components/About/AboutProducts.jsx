import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { AboutPageProductData } from "../../data";
import { useTranslation } from "react-i18next";

export default function AboutProduct() {

  const {t} = useTranslation()

  return (
    <Box sx={{ mt: 3 , p:2}}>
      <Grid container justifyContent={"center"} gap={5}>
        {AboutPageProductData.map((v, i) => (
          <Grid key={i} item lg={3}>
            <Box sx={{ width: "100%", minHeight: "300px" }}>
              <img
                style={{ width: "100%", height: "400px", objectFit: "cover" }}
                src={v.img}
                alt=""
              />
              <Typography sx={{ mt: 1, fontWeight: "bold" }}>
                {t(v?.title)}
              </Typography>
              <Typography sx={{ mt: 2, color: "gray" }}>{t(v?.text)}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
