import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { useTranslation } from "react-i18next";
import { CertificateData } from "../../data";

export default function Certificate() {
  const { t } = useTranslation();

  return (
    <Box sx={{ mt: 10 }}>
      <Typography
        sx={{ fontSize: "36px", textAlign: "center", fontWeight: "bold" }}
      >
        {t("certificates")}
      </Typography>
      <Grid container justifyContent={"center"} gap={4} mt={5}>
        <Grid item lg={11}>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
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
                spaceBetween: 60,
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
            {CertificateData.map((v, i) => (
              <SwiperSlide>
                <a href={v} target="blank_">
                  <img style={{ width: "100%" }} src={v} alt="" />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </Box>
  );
}
