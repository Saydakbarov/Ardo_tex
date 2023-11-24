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
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "./styles/ProductCard.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";
import { useNews } from "../../query-data/data.service";
import { Link } from "react-router-dom";

export default function LastestNewsCard() {
  const { t, i18n } = useTranslation();

  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);

  const { data, isFetching, refetch } = useNews({ limit, offset });

  console.log(data, "news");

  //   const dispatch = useDispatch();
  //   const getProductData = (v) => {
  //     dispatch(addProduct(v));
  //   };

  return (
    <Box sx={{ mt: 4 }}>
      <Grid container justifyContent={"center"} gap={4}>
        <Grid item lg={11} md={11} sm={11} xs={11}>
          <Swiper
            loop={true}
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
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
            style={{ paddingBottom: "50px" }}
          >
            <Grid justifyContent={"center"}>
              {data?.data?.map((v, i) => (
                <SwiperSlide
                  key={v.new_id}
                  className="swiperSlideBox"
                  style={{ width: "100%" }}
                >
                  <Grid item sx={{ borderRadius: "6px" }}>
                    <Link style={{display: "block", textDecoration: "none", color: "black"}} to={`/news`} >
                      <Box
                        sx={{
                          boxShadow: "0px 5px 10px 0px gray",
                          borderRadius: "6px",
                        }}
                      >
                        <Box
                          component={"div"}
                          sx={{
                            p: 3,
                            backgroundImage: `url(${v?.new_img})`,
                            height: "300px",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "60%",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignitems: "center",
                            }}
                          >
                            {/* <Box
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
                            </Box> */}
                          </Box>
                          {/* <Box className="changeCard" sx={{ p: 2 }}>
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
                          </Box> */}
                        </Box>
                        <Box>
                          <Box
                            sx={{ background: "#DEEAED", borderRadius: "6px" }}
                          >
                            {/* <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              mt: 2,
                              p: 1,
                            }}
                          >
                            <Rating
                              name="simple-controlled"
                              value={ratingValue}
                              onChange={(event, newValue) => {
                                setRatingValue(newValue);
                              }}
                              sx={{ fontSize: "22px" }}
                            />
                          </Box> */}

                            <Box
                              sx={{ display: "flex", gap: "15px", mt: 1, p: 1 }}
                            >
                              <Typography
                                style={{
                                  color: "black",
                                }}
                              >
                                {i18n?.language == "uz"
                                  ? v?.new_title_uz
                                  : v?.new_title_ru}
                              </Typography>
                              {/* <Typography
                              sx={{
                                color: "red",
                                // color: v.percentage === 0 ? "red" : "gray",
                                // textDecoration:
                                //   v.percentage === 0 ? "none" : "line-through",
                              }}
                            >
                              ${v.price}.00
                            </Typography> */}
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Link>
                  </Grid>
                </SwiperSlide>
              ))}
            </Grid>
          </Swiper>
        </Grid>
      </Grid>
    </Box>
  );
}
