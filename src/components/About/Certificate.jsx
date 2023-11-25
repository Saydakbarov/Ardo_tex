import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { useTranslation } from "react-i18next";
import { CertificateData } from "../../data";
import { useCertificates } from "../../query-data/data.service";

export default function Certificate() {
  const { t } = useTranslation();
  const {data, isLoading} = useCertificates()

  return (
    <Box sx={{ mt: 10 }}>
      <Typography
        sx={{ fontSize: "36px", textAlign: "center", fontWeight: "bold" }}
      >
        {t("certificates")}
      </Typography>
     <div className="mt-8 w-full px-6">
     <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              1500: {
                slidesPerView: 4,
                spaceBetween: 60,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
            style={{ paddingBottom: "50px" }}
          >
            {data?.data.map((v, i) => (
              <SwiperSlide key={v?.certificate_id} >
                <a className="block" href={v?.certificate_image_link} target="blank_">
                  <img className="w-full" src={v?.certificate_image_link} alt="" />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
     </div>
    </Box>
  );
}
