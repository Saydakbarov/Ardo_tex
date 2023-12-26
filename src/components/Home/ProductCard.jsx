import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
// Import Swiper React components
import "./styles/ProductCard.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Favorite, IosShare, ShoppingBag } from "@mui/icons-material";
// import { useDispatch, useSelector } from "react-redux";
// import { addProduct } from "../../redux/ProductReducer";
import { BestSellerData } from "../../data";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

export default function ProductsCard({ data }) {
  const [ratingValue, setRatingValue] = useState(0);

  const [hoverImg, setHoverImg] = useState();

  const [id, setId] = useState();

  const [hover, setHover] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  //   const dispatch = useDispatch();
  //   const getProductData = (v) => {
  //     dispatch(addProduct(v));
  //   };

  console.log(id);
  return (
    <Box sx={{ mt: 4 }}>
      <Grid container justifyContent={"center"} gap={4}>
        <Grid item lg={11} md={11} sm={11} xs={11}>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              400: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
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
            <Grid justifyContent={"center"}>
              {data?.map((v, i) => (
                <Grid item key={v?.product_id} sx={{ borderRadius: "6px" }}>
                  <SwiperSlide className="swiperSlideBox">
                    <Link
                      className="product-card"
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={`/single/${v?.product_id}`}
                    >
                      <Box>
                        {/* <Box
                      component={"div"}
                      sx={{
                        p: 3,
                        backgroundImage: `url(${
                         v?.product_image_url[0]
                        })`,
                        backgroundPosition: "center",
                        backgroundSize: "80%",
                        height: "300px",
                        backgroundRepeat: "no-repeat",
                      }}
                      // onMouseMove={() => {
                      //   setHover(true);
                      //   setId(v.id);
                      //   setHoverImg(v.hoverImg);
                      // }}
                      // onMouseLeave={() => {
                      //   setHover(false);
                      // }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignitems: "center",
                        }}
                      >
                        <Box
                          sx={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                            background: "black",
                            color: "#ffff",
                            textAlign: "center",
                            lineHeight: "50px",
                            display: v.percentage === 0 ? "none" : "block",
                          }}
                        >
                          -{v.percentage}%
                        </Box>
                      </Box>
                      <Box className="changeCard" sx={{ p: 2 }}>
                        <Box
                          sx={{
                            display: "flex",
                            gap: "15px",
                            justifyContent: "center",
                          }}
                        >
                          <Button
                            fullWidth
                            variant="contained"
                            color="inherit"
                            //   onClick={() => {
                            //     getProductData(v);
                            //   }}
                          >
                            Add To Card
                          </Button>
                        </Box>
                      </Box>
                    </Box> */}
                        <div className="relative">
                          <img
                            src={v?.product_image_url[0]}
                            className="w-full rounded-md object-cover h-[200px] md:h-[300px]"
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
                        <Box>
                          <Box>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              {/* <Rating
                            name="simple-controlled"
                            value={ratingValue}
                            onChange={(event, newValue) => {
                              setRatingValue(newValue);
                            }}
                            sx={{ fontSize: "22px" }}
                          /> */}
                              <Typography sx={{ p: 1 }}>
                                {v[`product_title_${i18n?.language ?? "uz"}`]}
                              </Typography>
                            </Box>

                            {/* <Box
                          sx={{ display: "flex", gap: "15px", mt: 1, p: 1 }}
                        >
                          <Typography
                            sx={{
                              color: "red",
                              display: v.percentage === 0 ? "none" : "block",
                            }}
                          >
                            $
                            {v.price -
                              Math.round((v.price * v.percentage) / 100)}
                            .00
                          </Typography>
                          <Typography
                            sx={{
                              color: v.percentage === 0 ? "red" : "gray",
                              textDecoration:
                                v.percentage === 0 ? "none" : "line-through",
                            }}
                          >
                            ${v.price}.00
                          </Typography>
                        </Box> */}
                          </Box>
                        </Box>
                      </Box>
                    </Link>
                  </SwiperSlide>
                </Grid>
              ))}
            </Grid>
          </Swiper>
        </Grid>
        <Box
          sx={{
            textAlign: { xs: "center", sm: "center", md: "center", lg: "end" },
          }}
        >
          <Button
            variant="outlined"
            onClick={() => {
              navigate("/product");
            }}
            sx={{
              background: "linear-gradient(270deg, #307bc4 0%, #274760 100%)",
              p: 1,
              borderRadius: "30px",
              width: "fit-content",
              mt: 4,
              transition: " 0.5s linear",
              padding: "8px 14px",
              mr: { xs: 0, sm: 0, md: 4, lg: 8 },
              color: "white",

              "&:hover": {
                transition: " 0.5s linear",
                background: "linear-gradient(270deg, #307bc4 0%, #274760 100%)",
                padding: "8px 25px",
              },
            }}
          >
            {t("see-all")}
          </Button>
        </Box>
      </Grid>
    </Box>
  );
}
