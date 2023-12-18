import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

import ArdoHomeLogo from "../../ArdoHomeLogo.png";

import Img1 from "../../ArdoHomeImages/img1.png";
import Img2 from "../../ArdoHomeImages/img2.png";
import Img3 from "../../ArdoHomeImages/img3.png";
import Img4 from "../../ArdoHomeImages/img4.png";
import Img5 from "../../ArdoHomeImages/img5.png";
import Img6 from "../../ArdoHomeImages/img6.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function HomeCategory() {
  const { t } = useTranslation();

  return (
    <Box sx={{ maxWidth: "1500px", margin: "0 auto", mt: 14 }}>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{
            width: "200px",
            cursor: "pointer",
          }}
          src={ArdoHomeLogo}
          alt=""
        />
        {/* <Typography sx={{ fontSize: "34px", color: "gold" }}>
          Furniture
        </Typography> */}
      </Box>

      <div className="hidden md:block">
        <Grid container justifyContent={"center"} sx={{ mt: 8 }} gap={3}>
          <Grid item lg={2} md={4} sm={5.5} xs={10}>
            <Box
              sx={{
                backgroundImage: `url('${Img5}')`,
                height: { xs: "200px", sm: "100%", md: "100%", lg: "100%" },
                backgroundRepeat: "no-repeat",
                p: 2,
                borderRadius: "3px",
                backgroundSize: "130%",
              }}
            >
              {/* <Typography sx={{ fontWeight: "600" }}>Storage</Typography> */}
              {/* <Typography sx={{ fontSize: "12px" }}>Shop Now</Typography> */}
            </Box>
          </Grid>
          <Grid item lg={4} md={4} sm={5.5} xs={10}>
            <Box
              sx={{
                backgroundImage: `url('${Img1}')`,
                height: "200px",
                backgroundRepeat: "no-repeat",
                p: 2,
                borderRadius: "3px",
                backgroundSize: "100%",
                backgroundPosition: "center",
              }}
            >
              {/* <Typography sx={{ fontWeight: "600" }}>Decor Vases</Typography> */}
              {/* <Typography sx={{ fontSize: "12px" }}>Shop Now</Typography> */}
            </Box>
            <Box
              sx={{
                backgroundImage: `url('${Img4}')`,
                height: "200px",
                backgroundRepeat: "no-repeat",
                mt: 3,
                p: 2,
                borderRadius: "3px",
                backgroundSize: "100%",
                backgroundPosition: "center",
              }}
            >
              {/* <Typography sx={{ fontWeight: "600" }}>Accessories</Typography> */}
              {/* <Typography sx={{ fontSize: "12px" }}>Shop Now</Typography> */}
            </Box>
          </Grid>
          <Grid item lg={2} md={4} sm={5.5} xs={10}>
            <Box
              sx={{
                backgroundImage: `url('${Img2}')`,
                height: "200px",
                backgroundRepeat: "no-repeat",
                borderRadius: "3px",
                backgroundSize: "100%",
                p: 2,
                objectFit: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* <Typography sx={{ fontWeight: "600" }}>Lighting</Typography> */}
              {/* <Typography sx={{ fontSize: "12px" }}>Shop Now</Typography> */}
            </Box>
            <Box
              sx={{
                backgroundImage: `url('${Img6}')`,
                height: "200px",
                backgroundRepeat: "no-repeat",
                objectFit: "cover",
                mt: 3,
                p: 2,
                borderRadius: "3px",
                backgroundSize: "100%",
                backgroundPosition: "center",
              }}
            >
              {/* <Typography sx={{ fontWeight: "600" }}>Living Room</Typography> */}
              {/* <Typography sx={{ fontSize: "12px" }}>Shop Now</Typography> */}
            </Box>
          </Grid>

          <Grid item lg={2} md={4} sm={5.5} xs={10}>
            <Box
              sx={{
                backgroundImage: `url('${Img3}')`,
                height: { xs: "200px", sm: "100%", md: "100%", lg: "100%" },
                backgroundRepeat: "no-repeat",
                p: 2,
                borderRadius: "3px",
                backgroundSize: "128%",
                objectFit: "cover",
              }}
            >
              {/* <Typography sx={{ fontWeight: "600" }}>Decoration</Typography> */}
              {/* <Typography sx={{ fontSize: "12px" }}>Shop Now</Typography> */}
            </Box>
          </Grid>
        </Grid>
      </div>

      <div className="block md:hidden" style={{ padding: "10px 20px" }}>
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
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
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
          <Grid
            justifyContent={"center"}
            sx={{
              p: 2,
            }}
          >
            <SwiperSlide className="swiperSlideBox">
              <Box
                sx={{
                  backgroundImage: `url('${Img5}')`,
                  height: "300px",

                  backgroundRepeat: "no-repeat",
                  p: 2,
                  borderRadius: "3px",
                  backgroundSize: "cover",
                }}
              >
                {/* <Typography sx={{ fontWeight: "600" }}>Storage</Typography>
                <Typography sx={{ fontSize: "12px" }}>Shop Now</Typography> */}
              </Box>
            </SwiperSlide>

            <SwiperSlide className="swiperSlideBox">
              <Box
                sx={{
                  backgroundImage: `url('${Img1}')`,
                  height: "300px",
                  backgroundRepeat: "no-repeat",
                  p: 2,
                  borderRadius: "3px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* <Typography sx={{ fontWeight: "600" }}>Decor Vases</Typography>
                <Typography sx={{ fontSize: "12px" }}>Shop Now</Typography> */}
              </Box>
            </SwiperSlide>

            <SwiperSlide className="swiperSlideBox">
              <Box
                sx={{
                  backgroundImage: `url('${Img4}')`,
                  height: "300px",
                  backgroundRepeat: "no-repeat",
                  p: 2,
                  borderRadius: "3px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* <Typography sx={{ fontWeight: "600" }}>Accessories</Typography> */}
                {/* <Typography sx={{ fontSize: "12px" }}>Shop Now</Typography> */}
              </Box>
            </SwiperSlide>

            <SwiperSlide className="swiperSlideBox">
              <Box
                sx={{
                  backgroundImage: `url('${Img2}')`,
                  height: "300px",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "3px",
                  backgroundSize: "cover",
                  p: 2,
                  objectFit: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* <Typography sx={{ fontWeight: "600" }}>Lighting</Typography> */}
                {/* <Typography sx={{ fontSize: "12px" }}>Shop Now</Typography> */}
              </Box>
            </SwiperSlide>

            <SwiperSlide className="swiperSlideBox">
              <Box
                sx={{
                  backgroundImage: `url('${Img6}')`,
                  height: "300px",
                  backgroundRepeat: "no-repeat",
                  objectFit: "cover",
                  p: 2,
                  borderRadius: "3px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* <Typography sx={{ fontWeight: "600" }}>Living Room</Typography> */}
                {/* <Typography sx={{ fontSize: "12px" }}>Shop Now</Typography> */}
              </Box>
            </SwiperSlide>

            <SwiperSlide className="swiperSlideBox">
              <Box
                sx={{
                  backgroundImage: `url('${Img3}')`,
                  height: "300px",
                  backgroundRepeat: "no-repeat",
                  p: 2,
                  borderRadius: "3px",
                  backgroundSize: "cover",
                  objectFit: "cover",
                }}
              >
                {/* <Typography sx={{ fontWeight: "600" }}>Decoration</Typography> */}
                {/* <Typography sx={{ fontSize: "12px" }}>Shop Now</Typography> */}
              </Box>
            </SwiperSlide>
          </Grid>
        </Swiper>
      </div>

      <Box
        sx={{
          textAlign: { xs: "center", sm: "center", md: "center", lg: "end" },
        }}
      >
        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(270deg, #307bc4 0%, #274760 100%)",
            p: 1,
            borderRadius: "30px",
            width: "180px",
            mt: 8,
            transition: " 0.5s linear",
            color: "white",

            "&:hover": {
              transition: " 0.5s linear",
              width: "200px",
              background: "linear-gradient(270deg, #307bc4 0%, #274760 100%)",
            },
            mr: { xs: 0, sm: 0, md: 4, lg: 8 },
          }}
        >
          <Link
            target="blank"
            to="https://ardohome.netlify.app"
            style={{ textDecoration: "none", color: "white" }}
          >
            {t("see-all")}
          </Link>
        </Button>
      </Box>
    </Box>
  );
}
