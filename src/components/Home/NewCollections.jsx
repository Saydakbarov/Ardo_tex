import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NewCollectionData } from "../../data";
import { useSubCategories } from "../../query-data/data.service";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { postFilteredProducts } from "../../query-data/data.fn";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function NewCollections() {
  // const { data, isLoading, refetch } = useSubCategories("4");
  const [data, setData] = useState(null);
  console.log(data, "da");

  const navigate = useNavigate();

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      const query = {
        params: {
          limit: 8,
          offset: 0,
        },
        body: {
          category_id: null,
          sub_category_id: null,
          second_sub_category_id: null,
          price_from: null,
          price_to: null,
          search_uz: null,
          search_ru: null,
          search_en: null,
          color: null,
          brand_id: null,
          technology: null,
          type: null,
          collection: true,
        },
      };

      const res = await postFilteredProducts(query);

      setData(res);
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <Box sx={{ maxWidth: "1500px", margin: "0 auto", mt: 8 }}>
      <Typography
        sx={{ fontSize: "34px", fontWeight: "bold", textAlign: "center" }}
      >
        {t("new-collections")}
      </Typography>
      <div className="hidden md:block">
        <Grid container justifyContent={"center"} gap={4} mt={5}>
          {data?.data?.map((v, i) => (
            <Grid item lg={2.5} md={2.5} sm={5.3} xs={10} key={v.id}>
              <Link className="w-full" to={`/single/${v?.product_id}`}>
                <div className="relative">
                  <p
                    className={
                      v?.product_discount
                        ? "absolute z-[5] top-[15px] right-[15px] p-2 rounded-full w-[45px] flex items-center justify-center h-[45px] text-white font-bold bg-red-500"
                        : "hidden"
                    }
                  >
                    {v?.product_discount_precent}%
                  </p>
                  <img
                    style={{
                      width: "100%",
                      borderRadius: "6px",
                      height: "300px",
                      objectFit: "cover",
                    }}
                    src={v?.product_image_url[0]}
                  />
                </div>
                <Typography
                  sx={{
                    fontSize: "30px",
                    textAlign: "center",
                  }}
                >
                  <p style={{ textDecoration: "none", color: "inherit" }}>
                    {v[`product_title_${i18n?.language ?? "uz"}`]}
                  </p>
                </Typography>
              </Link>
            </Grid>
          ))}
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
            {data?.data?.map((v, i) => (
              <Grid item key={v?.product_id} sx={{ borderRadius: "6px" }}>
                <SwiperSlide className="swiperSlideBox">
                  <Link className="w-full" to={`/single/${v?.product_id}`}>
                    <div className="relative">
                      <p
                        className={
                          v?.product_discount
                            ? "absolute z-[5] top-[15px] right-[15px] p-2 rounded-full w-[45px] flex items-center justify-center h-[45px] text-white font-bold bg-red-500"
                            : "hidden"
                        }
                      >
                        {v?.product_discount_precent}%
                      </p>
                      <img
                        style={{
                          width: "100%",
                          borderRadius: "6px",
                          height: "300px",
                          objectFit: "cover",
                        }}
                        src={v?.product_image_url[0]}
                      />
                    </div>
                    <Typography
                      sx={{
                        fontSize: "30px",
                        textAlign: "center",
                      }}
                    >
                      <p style={{ textDecoration: "none", color: "inherit" }}>
                        {v[`product_title_${i18n?.language ?? "uz"}`]}
                      </p>
                    </Typography>
                  </Link>
                </SwiperSlide>
              </Grid>
            ))}
          </Grid>
        </Swiper>
      </div>
      ;
      <Box
        sx={{
          textAlign: { xs: "center", sm: "center", md: "center", lg: "end" },
        }}
      >
        <Button
          variant="outlined"
          onClick={() => {
            navigate("/product?category=4");
          }}
          sx={{
            background: "linear-gradient(270deg, #307bc4 0%, #274760 100%)",

            borderRadius: "30px",
            padding: "8px 14px",
            width: "fit-content",
            mt: 4,
            transition: " 0.5s linear",
            mr: { xs: 0, sm: 0, md: 4, lg: 8 },
            color: "white",

            "&:hover": {
              transition: " 0.5s linear",
              padding: "8px 25px",
              background: "linear-gradient(270deg, #307bc4 0%, #274760 100%)",
            },
          }}
        >
          {t("see-all")}
        </Button>
      </Box>
    </Box>
  );
}
