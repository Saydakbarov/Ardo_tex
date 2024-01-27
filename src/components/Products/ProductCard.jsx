import { Box, Typography } from "@mui/material";
import React from "react";
import { CategoryData } from "../../data";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { generateSlug } from "../../utils/functions";

export default function ProductCard({ data }) {
  const navigate = useNavigate();

  const { i18n } = useTranslation();

  return (
    <div
    className="grid grid-cols-1 tel:grid-cols-2 lg:grid-cols-3  gap-6 sm:gap-5 mt-5"
     
    >
      {data?.data?.map((v) => (
        <Box
          className="product-card w-full rounded-md cursor-pointer"
          key={v.id}
          
          component={"div"}
          onClick={() => navigate("/single/" + v.product_id + `/${generateSlug(v?.product_title_en)}`)}
        >
          <div className="relative">
            <img
              className="w-full rounded-md object-cover h-[200px] md:h-[300px]"
              src={v?.product_image_url[0]}
              alt=""
            />
            <p
              className={
                v?.product_discount
                  ? "absolute z-[5] top-[15px] right-[15px] p-2 rounded-full w-[45px] flex items-center justify-center h-[45px] text-white font-bold bg-red-500"
                  : "hidden"
              }
            >
              {v?.product_discount_precent}%
            </p>
          </div>
          <Typography sx={{ p: 1 }}>
            {v[`product_title_${i18n?.language ?? "uz"}`]}
          </Typography>
        </Box>
      ))}
    </div>
  );
}
