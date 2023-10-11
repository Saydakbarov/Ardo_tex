import { Box, Button, Grid, Typography } from "@mui/material";
import React, { lazy, useState } from "react";
// import Video4 from "../../video/video4.mp4";
import SingleBox from "./SingleBox";
import SingleImageBox from "./SingleImageBox";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { CategoryData } from "../../data";
// import ReactImageMagnify from "react-image-magnify";
// const ReactImageMagnify = lazy(() => import("react-image-magnify"))

export default function SingleProduct() {
  const { id } = useParams();

  const [subCategoryData, setSubcategoryData] = useState([]);

  const [secondId, setId] = useState(2);

  const data = CategoryData.map((v) => v.subCategory);

  useEffect(() => {
    data.map((v) =>
      v.filter((v) =>
        v.id == id ? setSubcategoryData(v.secondSub2Category) : []
      )
    );
  }, id);

  const singleData = subCategoryData.filter((e) => e.id === secondId);

  return (
    <Box>
      <Grid container justifyContent={"center"} gap={4}>
        <Grid component={"div"} item lg={4}>
          <Box sx={{ width: "100%" }}>
            {singleData.map((v) => (
              <InnerImageZoom src={v.img} zoomSrc={v.img} />
            ))}
          </Box>

          <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap", mt: 3 }}>
            {subCategoryData.map((v, i) => (
              <Box key={i} sx={{ width: "90px" }}>
                <img
                  style={{ width: "100%", borderRadius: "10px" }}
                  src={v.img}
                  alt=""
                  onClick={() => setId(v.id)}
                />
              </Box>
            ))}
          </Box>
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
