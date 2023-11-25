import { Box, Typography } from "@mui/material";
import React from "react";
import { CategoryData } from "../../data";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ProductCard({ data }) {
  const navigate = useNavigate();

  const { i18n } = useTranslation();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        mt: 4,
        justifyContent: "center",
      }}
    >
      {data?.data?.map((v) => (
        <Box
        className="product-card"
          key={v.id}
          sx={{
            width: "300px",
            cursor: "pointer",
            // border: "2px solid gray",
            borderRadius: "6px",
            // boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          component={"div"}
          onClick={() => navigate("/single/" + v.product_id)}
        >
          <img
            style={{
              width: "100%",
              height: "300px",
              objectFit: "contain",
              borderRadius: "8px"
            }}
            src={v?.product_image_url[0]}
            alt=""
          />
          <Typography sx={{ p: 1 }}>
            { v[`product_title_${i18n?.language ?? "uz"}`]}
          </Typography>
        </Box>
      ))}

    </Box>
  );
}
