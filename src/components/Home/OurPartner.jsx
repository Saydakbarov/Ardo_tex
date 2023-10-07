import { Box, Container, Typography } from "@mui/material";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../Home/styles/Partner.scss";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { PartnerData } from "../../data";
export default function OurPartner() {
  return (
    <Box sx={{ mt: 8 }}>
      <Typography
        sx={{ fontSize: "34px", fontWeight: "bold", textAlign: "center" }}
      >
        Our Partners
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
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
            1500: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
          // style={{ marginTop: "50px" }}
        >
          {PartnerData.map((v, i) => (
            <SwiperSlide key={i} style={{ width: "140px" }}>
              <img style={{ width: "100px" }} src={v.img} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}
