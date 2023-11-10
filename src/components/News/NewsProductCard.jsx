import { Box, Grid, IconButton, Rating, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// import "./styles/NewsCard.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { NewsPageProduct } from "../../data";
import { useTranslation } from "react-i18next";
import { useNews } from "../../query-data/data.service";

export default function NewsProductCard() {

  const {t, i18n} = useTranslation()

  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(20)

  const {data, isFetching, refetch} = useNews({limit, offset})

  console.log(data, "news");



  return (
    <Box sx={{ mt: 4 }}>
     {
      isFetching ? (
        <Typography style={{fontSize: "25px", display: "block" , textAlign: "center", margin: "40px 0"}} >{i18n?.language == "uz" ? "Yuklanmoqda..." : "Загрузка..."}</Typography>
      ) : (
        <Grid container justifyContent={"center"} gap={4}>
        {data?.data?.map((v, i) => (
          <Grid key={v?.new_id} item lg={2.5} md={3} sm={5} xs={10}>
            <Box>
              <Box
                sx={{
                  p: 3,
                  backgroundImage: `url(${v.new_img})`,
                  backgroundPosition: "center",
                  
                  height: "260px",
                  backgroundRepeat: "no-repeat",
                  borderTopRightRadius: "8px",
                  borderBottomLeftRadius: "8px",
                  backgroundSize: "contain",
                }}
              ></Box>
              <Box>
                <Typography sx={{ fontWeight: "600", fontSize: "18px" }}>
                 
                  {
                    i18n?.language == "uz" ? v?.new_title_uz : v?.new_title_ru
                  }
                </Typography>
                {/* <Typography sx={{ mt: 2, fontSize: "14px" }}>
                  
                  {v.desciption}
                </Typography> */}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      )
     }
    </Box>
  );
}
