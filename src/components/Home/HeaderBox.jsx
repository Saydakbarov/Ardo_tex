import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { HeaderBoxData } from "../../data";
import { Link } from "react-router-dom";

export default function HeaderBox() {
  return (
    <Box sx={{ mt: 8 }}>
      <Grid container justifyContent={"center"} gap={4}>
        {HeaderBoxData.map((v, i) => (
          <Grid
            item
            xl={5.3}
            lg={5.3}
            md={5.3}
            sm={10}
            xs={11}
            key={v.id}
            sx={{
              p: 4,
              minHeight: "270px",

              background: "#F0F0F0",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography sx={{ fontSize: "34px", fontWeight: "bold", mt: 5 }}>
                {v.title}
              </Typography>
              <Link
                style={{
                  textDecoration: "none",
                  color: "gray",
                  borderBottom: "1px solid red",
                }}
              >
                Show More
              </Link>
            </Box>
            <Box>
              <img
                style={{ width: "300px", height: "200px" }}
                src={v.img}
                alt=""
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
