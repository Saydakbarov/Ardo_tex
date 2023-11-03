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
import { Favorite, IosShare, ShoppingBag } from "@mui/icons-material";
// import { useDispatch, useSelector } from "react-redux";
// import { addProduct } from "../../redux/ProductReducer";
import { LastestNewsCardData } from "../../data";

export default function LastestNewsCard() {
  const [ratingValue, setRatingValue] = useState(0);

  const [hoverImg, setHoverImg] = useState();

  const [id, setId] = useState();

  const [hover, setHover] = useState(false);

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
              {LastestNewsCardData.map((v, i) => (
                <Grid item key={v.id} sx={{ borderRadius: "6px" }}>
                  <SwiperSlide
                    className="swiperSlideBox"
                    style={{ width: "300px !important" }}
                  >
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
                          backgroundImage: `url(${
                            hover === true && v.id === id ? hoverImg : v.img
                          })`,
                          height: "300px",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          backgroundSize: "60%",
                        }}
                        onMouseMove={() => {
                          setHover(true);
                          setId(v.id);
                          setHoverImg(v.hoverImg);
                        }}
                        onMouseLeave={() => {
                          setHover(false);
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
                          <Box
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
                          </Box>

                          <Box
                            sx={{ display: "flex", gap: "15px", mt: 1, p: 1 }}
                          >
                            {/* <Typography
                              sx={{
                                color: "red",
                                display: v.percentage === 0 ? "none" : "block",
                              }}
                            >
                              $
                              {v.price -
                                Math.round((v.price * v.percentage) / 100)}
                              .00
                            </Typography> */}
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
                  </SwiperSlide>
                </Grid>
              ))}
            </Grid>
          </Swiper>
        </Grid>
      </Grid>
    </Box>
  );
}
