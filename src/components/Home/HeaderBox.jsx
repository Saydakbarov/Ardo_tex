import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { HeaderBoxData } from "../../data";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAds } from "../../query-data/data.service";

export default function HeaderBox() {

  const {t, i18n} = useTranslation()

  const navigate = useNavigate()

  const {data, isLoading} = useAds()

  return (
    <Box sx={{ maxWidth: "1500px", margin: "0 auto", mt: 8 }}>
     <div className="w-full grid grid-cols-1 smd:grid-cols-2 gap-[30px] px-5">
     {data?.data?.map((v, i) => (
         <div className="flex gap-2 items-center flex-row  px-2 smd:px-4 py-4 smd:py-8 bg-gray-100">
          <div className="w-3/5">
            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-5">{v[`ads_title_${i18n?.language ?? "uz"}`]}</p>
            <Link className="font-medium hover:underline transition-all duration-300 text-base smd:text-lg" to={v?.ads_link} >{t("show-more")}</Link>
          </div>
          <div className="w-2/5">
            <img src={v?.ads_image_link} alt="" className="w-full h-[150px] object-contain rounded-md" />
          </div>
         </div>
        ))}
     </div>
    </Box>
  );
}
