import { Box, Typography } from "@mui/material";
import React from "react";

export default function SingleBox({ title, text }) {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
        <Typography sx={{ color: "gray" }}>{text}</Typography>
        <Typography sx={{ color: "black", fontWeight: "bold" }}>
          {" "}
          {title}
        </Typography>
      </Box>
    </>
  );
}
