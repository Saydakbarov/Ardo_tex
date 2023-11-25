import { Box, Container, Typography } from "@mui/material";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../Home/styles/Partner.scss";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { PartnerData } from "../../data";
import { useTranslation } from "react-i18next";
import { usePartners } from "../../query-data/data.service";
import { Link } from "react-router-dom";
export default function OurPartner() {
  const { t } = useTranslation();

  const { data, isLoading } = usePartners();

  return (
    <Box sx={{ maxWidth: "1500px", margin: "0 auto", mt: 8 }}>
      <Typography
        sx={{ fontSize: "34px", fontWeight: "bold", textAlign: "center" }}
      >
        {t("our-partners")}
      </Typography>

      <Container sx={{ mt: 4 }}>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          // loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
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
              spaceBetween: 30,
            },
            1500: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
          // style={{ marginTop: "50px" }}
        >
          {data?.data?.map((v, i) => (
            <SwiperSlide key={v?.partner_id} style={{}}>
              <Link
                to={v?.partner_link}
                target="_blank"
                className="block w-full px-6 md:border-r-2"
              >
                <img
                  src={v?.partner_image_link}
                  alt=""
                  className="w-full h-[200px] object-contain object-center"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}
