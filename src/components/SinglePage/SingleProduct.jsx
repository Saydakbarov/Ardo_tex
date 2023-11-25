import { Box, Button, Grid, Typography } from "@mui/material";
import React, { lazy, useState } from "react";
// import Video4 from "../../video/video4.mp4";
// import InnerImageZoom from "react-inner-image-zoom";
// import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
// import { useOneProduct } from "../../query-data/data.service";
import { useTranslation } from "react-i18next";
import Magnifier from "react-magnifier";

// const Magnifier = lazy(() => import("react-magnifier"))
// import ReactImageMagnify from "react-image-magnify";
// const ReactImageMagnify = lazy(() => import("react-image-magnify"))

export default function SingleProduct({ data, isLoading }) {
  const [mainImage, setMainImage] = useState(data?.data?.product_image_url[0]);

  useEffect(() => {
    if (data?.data) {
      setMainImage(data?.data?.product_image_url[0]);
    }
  }, [data]);


  const [responsive, setResponsive] = useState(false)

  useEffect(() => {
    if(window.innerWidth > 600) {
      setResponsive(false)
    }else {
      setResponsive(true)
    }
  }, [])

  const { t, i18n } = useTranslation();

  return (
    <Box>
      {isLoading ? (
        <Typography
          style={{
            display: "block",
            fontSize: "23px",
            textAlign: "center",
            margin: "30px",
          }}
        >
          Loading...
        </Typography>
      ) : data?.status == 404 ? (
        <Typography
          style={{
            display: "block",
            fontSize: "23px",
            textAlign: "center",
            margin: "30px",
          }}
        >
          Not found
        </Typography>
      ) : (
        // <Grid
        //   container
        //   justifyContent={"center"}
        //   style={{
        //     padding: "20px",
        //   }}
        //   gap={4}
        // >
        //   <Grid item lg={4} md={5} sm={10} xs={12}>
        //     <Box sx={{ width: "100%", height: "fit-content" }}>
        //       {data?.data?.product_image_url?.map((v) => (
        //         <div
        //           key={v}
        //           style={{
        //             width: "100%",
        //             height: "fit-content",
        //             display: mainImage == v ? "block" : "none",
        //           }}
        //         >
        //           <InnerImageZoom
        //             zoomScale={3}
        //             height={"200px"}
        //             width={"100%"}
        //             src={v}
        //             zoomSrc={v}
        //           />
        //         </div>
        //       ))}
        //     </Box>

        //     <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap", mt: 3 }}>
        //       {data?.data?.product_image_url?.map((v, i) => (
        //         <Box key={v} sx={{ width: "90px" }}>
        //           <img
        //             style={{ width: "100%", borderRadius: "10px" }}
        //             src={v}
        //             alt=""
        //             onClick={() => setMainImage(v)}
        //           />
        //         </Box>
        //       ))}
        //     </Box>
        //   </Grid>
        //   <Grid item lg={6} md={6} sm={10} xs={12} sx={{}}>
        //     <h2 className="font-light text-[38px] smd:text-[45px] lg:text-[55px] ">
        //       {i18n?.language == "uz"
        //         ? data?.data?.product_title_uz
        //         : data?.data?.product_title_ru}
        //     </h2>

        //     <p className="product-description" style={{  }}>
        //       {i18n?.language == "uz"
        //         ? data?.data?.product_desc_uz
        //         : data?.data?.product_desc_ru}
        //     </p>

        //     {/* <SingleBox text={"Grammage m2"} title={"310 g/m² +/-5%"} />
        //         <SingleBox text={"Composition"} title={"100% Polyester"} />
        //         <SingleBox text={"Usable width"} title={"min. 140cm"} />
        //         <SingleBox text={"Martindale Test"} title={"30000-35000"} />
        //         <SingleBox text={"Tendency to pilling and peeling"} title={"4-5"} />
        //         <SingleBox
        //           text={"Fastness to rubbing dry"}
        //           title={"light-4-5 / medium-4-5 / dark-4-5"}
        //         />
        //         <SingleBox
        //           text={"Fastness to rubbing wet"}
        //           title={"light-4-5 / medium-4-5 / dark-4"}
        //         />
        //         <SingleBox
        //           text={"Thread displacement"}
        //           title={"3,0-3,6 mm WARP / 2,2-2,6 mm WEFT"}
        //         /> */}

        //     {/* <Button
        //           variant="outlined"
        //           sx={{ borderColor: "black", color: "black", mt: 1 }}
        //         >
        //           Buy Now
        //         </Button> */}
        //   </Grid>
        // </Grid>

        <div className="py-[40px]">
          <div className="max-w-[1200px] mx-auto px-4 w-full">
            <div className="flex flex-col md:flex-row items-start gap-[40px]">
              <div className=" w-full md:w-1/2">
                <div className="mb-3">
                  {data?.data?.product_image_url?.map((v) => (
                    <div
                      key={v}
                      className={`${
                        mainImage == v ? "block" : "hidden"
                      } w-full h-fit rounded-md overflow-hidden`}
                    >
                      <Magnifier className="rounded-md"  src={v} />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-6 gap-3">
                  {data?.data?.product_image_url?.map((v, i) => (
                    <button
                      key={v}
                      className="w-full h-[40px] sm:h-[70px] md:h-[90px]"
                      onClick={() => setMainImage(v)}
                    >
                      <img
                        className="w-full h-full object-contain rounded-md"
                        src={v}
                        alt=""
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="font-light text-[34px] sm:text-[38px] smd:text-[45px] lg:text-[55px] mb-6 ">
                  {data?.data?.[`product_title_${i18n?.language ?? "uz"}`]}
                </h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data?.data[`product_model_${i18n?.language ?? "uz"}`]
                  }}
                  className="single-product-model"
                ></div>
                <div  dangerouslySetInnerHTML={{
                    __html: data?.data[`product_desc_${i18n?.language ?? "uz"}`]
                  }} className=""></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Box>
  );
}
