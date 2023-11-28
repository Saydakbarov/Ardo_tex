import { Box, Button, Typography } from "@mui/material";
import React from "react";
import LastestNewsCard from "./LastestNewsCard";
import { useTranslation } from "react-i18next";

export default function LastestNews() {

  const {t} = useTranslation()

  return (
    <Box
      sx={{
        maxWidth: "1500px",
        margin: "0 auto",
      }}
    >
      

      <Box sx={{ mt: 10 }}>
        <Typography
          sx={{ fontSize: "34px", textAlign: "center", fontWeight: "600" }}
        >
          {t("latest-news")}
        </Typography>
        <LastestNewsCard />
      </Box>
    </Box>
  );
}
