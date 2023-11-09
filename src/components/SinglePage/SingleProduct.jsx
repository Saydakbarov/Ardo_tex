import { Box, Button, Grid, Typography } from "@mui/material";
import React, { lazy, useState } from "react";
// import Video4 from "../../video/video4.mp4";
import SingleBox from "./SingleBox";
import SingleImageBox from "./SingleImageBox";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { CategoryData } from "../../data";
import { useOneProduct } from "../../query-data/data.service";
import { useTranslation } from "react-i18next";
// import ReactImageMagnify from "react-image-magnify";
// const ReactImageMagnify = lazy(() => import("react-image-magnify"))

export default function SingleProduct({data, isLoading}) {
 

  const [mainImage, setMainImage] = useState(data?.data?.product_image_url[0])

  useEffect(() => {
    if(data?.data) {
      setMainImage(data?.data?.product_image_url[0])
    }
  }, [data])

  const {t, i18n} = useTranslation()

  return (
    <Box>
      {
        isLoading ? (<Typography style={{display: "block", fontSize: "23px" , textAlign: "center", margin: "30px"}} >Loading...</Typography>) : (
          data?.status == 404 ? (
            <Typography style={{display: "block", fontSize: "23px" , textAlign: "center", margin: "30px"}} >Not found</Typography>
          ) : (
            <Grid container justifyContent={"center"} style={{
              padding: "20px"
            }} gap={4}>
              <Grid component={"div"} item  sm={5}>
                <Box sx={{ width: "100%" }}>
                  {data?.data?.product_image_url?.map((v) => (
                  <div key={v} style={{width: "100%", display: mainImage == v ?  "block" : "none"}}>
                    <InnerImageZoom  zoomScale={6} height={400} width={"100%"} src={v} zoomSrc={v} />
                  </div>
                  ))}
                </Box>
      
                <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap", mt: 3 }}>
                  {data?.data?.product_image_url?.map((v, i) => (
                    <Box key={v} sx={{ width: "90px" }}>
                      <img
                        style={{  width: "100%", borderRadius: "10px" }}
                        src={v}
                        alt=""
                        onClick={() => setMainImage(v)}
                      />
                    </Box>
                  ))}
      
                
                </Box>
              </Grid>
              <Grid item  sm={6}>
                <Typography sx={{ fontSize: "50px", fontFamily: "Inter" }}>
                  {i18n?.language == "uz" ? data?.data?.product_title_uz : data?.data?.product_title_ru}
                </Typography>
      
                <div dangerouslySetInnerHTML={{__html: i18n?.language == "uz" ? data?.data?.product_model_uz : data?.data?.product_model_ru}} className="single-product-model"></div>
      
                {/* <SingleBox text={"Grammage m2"} title={"310 g/m² +/-5%"} />
                <SingleBox text={"Composition"} title={"100% Polyester"} />
                <SingleBox text={"Usable width"} title={"min. 140cm"} />
                <SingleBox text={"Martindale Test"} title={"30000-35000"} />
                <SingleBox text={"Tendency to pilling and peeling"} title={"4-5"} />
                <SingleBox
                  text={"Fastness to rubbing dry"}
                  title={"light-4-5 / medium-4-5 / dark-4-5"}
                />
                <SingleBox
                  text={"Fastness to rubbing wet"}
                  title={"light-4-5 / medium-4-5 / dark-4"}
                />
                <SingleBox
                  text={"Thread displacement"}
                  title={"3,0-3,6 mm WARP / 2,2-2,6 mm WEFT"}
                /> */}
      
                {/* <Button
                  variant="outlined"
                  sx={{ borderColor: "black", color: "black", mt: 1 }}
                >
                  Buy Now
                </Button> */}
              </Grid>
            </Grid>
          )
        )
      }
    </Box>
  );
}
