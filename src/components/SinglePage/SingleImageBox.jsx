import { Box } from "@mui/material";
import React from "react";
import { PhotoSwipeGallery } from "react-photoswipe-2";

import { SingleProductImageData } from "../../data";

console.log(SingleProductImageData);

export default function SingleImageBox({ img, title }) {
  return (
    <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap", mt: 3 }}>
      {SingleProductImageData.map((v, i) => (
        <Box key={i} sx={{ width: "90px" }}>
          <img
            style={{ width: "100%", borderRadius: "10px" }}
            src={v.img}
            alt=""
          />
        </Box>
      ))}
    </Box>
  );
}
