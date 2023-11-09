import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { AboutPageProductData } from "../../data";
import { useTranslation } from "react-i18next";

export default function AboutProduct() {

  const {i18n} = useTranslation()

  return (
    <Box sx={{ mt: 3 }}>
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
                {i18n?.language == "uz" ?  v.title_uz : v.title_ru}
              </Typography>
              <Typography sx={{ mt: 2, color: "gray" }}>{i18n?.language == "uz" ? v.text_uz : v.text_ru}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
