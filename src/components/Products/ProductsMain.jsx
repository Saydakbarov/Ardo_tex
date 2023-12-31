import { ArrowRight, KeyboardArrowRight } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function ProductsMain({ breadcrumpData }) {

  const {i18n, t} = useTranslation()

  return (
    <div
      style={{
        
        backgroundImage:
        "url('/img/page-header/product.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
      className="py-[80px] sm:py-[110px] md:py-[150px] lg:py-[180px]"
    >
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography sx={{ fontSize: "30px" }}>{t("products")}</Typography>
        <Box
          sx={{
            display: "flex",
            gap: "5px",
            justifyContent: "center",
            alignItems: "center",
            mt: 2,
            flexWrap: "wrap"
          }}
        >
          <Link to="/" style={{ color: "gray", textDecoration: "none" }}>
            {t("home")}
          </Link>
          <KeyboardArrowRight />
          <Link to="/product" style={{ color: "black", textDecoration: "none" }}>
            {t("categories")}
          </Link>
          {breadcrumpData?.map((item, index, arr) => (
            <>
                <KeyboardArrowRight />
              <Link
                to={item?.url}
                style={{ color: (arr.length - 1) == index ? "red" : "black" , textDecoration: "none" }}
              >
                {item?.name}
              </Link>
            </>
          ))}
        </Box>
      </Box>
    </div>
  );
}
