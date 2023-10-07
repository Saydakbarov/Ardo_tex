import { Box, Button, Grid, Typography } from "@mui/material";
import React, { lazy, useState } from "react";
// import Video4 from "../../video/video4.mp4";
import SingleBox from "./SingleBox";
import SingleImageBox from "./SingleImageBox";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
// import ReactImageMagnify from "react-image-magnify";
// const ReactImageMagnify = lazy(() => import("react-image-magnify"))

export default function SingleProduct() {
  return (
    <Box>
      <Grid container justifyContent={"center"} gap={4}>
        <Grid component={"div"} item lg={4}>
          {/* <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: "https://www.davis.pl/wp-content/uploads/2023/01/retro-bliss-20_Retro_Bliss_20.jpg",
              },
              largeImage: {
                src: "https://www.davis.pl/wp-content/uploads/2023/01/retro-bliss-20_Retro_Bliss_20.jpg",
                width: 1200,
                height: 899,
              },
            }}
          /> */}

          <InnerImageZoom
            src={
              "https://www.davis.pl/wp-content/uploads/2023/01/retro-bliss-20_Retro_Bliss_20.jpg"
            }
            zoomSrc="https://www.davis.pl/wp-content/uploads/2023/01/retro-bliss-20_Retro_Bliss_20.jpg"
          />

          <SingleImageBox />
        </Grid>
        <Grid item lg={5}>
          <Typography sx={{ fontSize: "50px", fontFamily: "Inter" }}>
            RETRO BLISS
          </Typography>

          <SingleBox text={"Grammage m2"} title={"310 g/m² +/-5%"} />
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
          />

          {/* <Button
            variant="outlined"
            sx={{ borderColor: "black", color: "black", mt: 1 }}
          >
            Buy Now
          </Button> */}
        </Grid>
      </Grid>
    </Box>
  );
}
