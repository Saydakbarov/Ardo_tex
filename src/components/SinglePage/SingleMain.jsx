import { ArrowRight, KeyboardArrowRight } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useSubCategories } from "../../query-data/data.service";

export default function SingleMain({ data }) {
  const { t, i18n } = useTranslation();

  const { data: subcategories } = useSubCategories();
  const currentSub = useMemo(() => {
    if (subcategories && data) {
      if (data?.data?.sub_category_id) {
        return subcategories?.data?.find(
          (item) => item?.sub_category_id == data?.data?.sub_category_id
        );
      }
      return null;
    }
    return null;
  }, [data, subcategories]);

  // useEffect(())

  return (
    <div
      style={{
        backgroundImage:
          "url('https://htmldemo.net/eposi/eposi/assets/img/backgrounds/category-image-1820x400.webp')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="py-[50px] md:py-[100px]"
    >
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography sx={{ fontSize: "30px" }}>
          {
            data?.data[`product_title_${i18n?.language ?? "uz"}`]}
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "5px",
            justifyContent: "center",
            alignItems: "center",
            mt: 2,
            flexWrap: "wrap",
            fontSize: {
              xs: "12px",
              sm: "14px",
              md: "16px",
            },
          }}
        >
          <Link to="/" style={{ color: "gray", textDecoration: "none" }}>
            {t("home")}
          </Link>
          <KeyboardArrowRight />
          <Link
            to={`/product?category=${data?.data?.category_id}`}
            style={{ color: "black", textDecoration: "none" }}
          >
            {data?.data[`category_name_${i18n?.language ?? "uz"}`]}
          </Link>
          <KeyboardArrowRight />
          {currentSub && (
            <>
              <Link
                to={`/product?category=${data?.data?.category_id}&subcategory=${data?.data?.sub_category_id}`}
                style={{ color: "black", textDecoration: "none" }}
              >
                {currentSub
                  ? currentSub[`sub_category_name_${i18n?.language ?? "uz"}`]
                  : ""}
              </Link>
              <KeyboardArrowRight />
            </>
          )}
          <Link
            to={`/single/${data?.data?.product_id}`}
            style={{ color: "red", textDecoration: "none" }}
          >
            {data?.data[`product_title_${i18n?.language ?? "uz"}`]}
          </Link>
        </Box>
      </Box>
    </div>
  );
}
