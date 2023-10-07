import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

import ArdoHomeLogo from "../../ArdoHomeLogo.png";

import Img1 from "../../ArdoHomeImages/img1.JPG";
import Img2 from "../../ArdoHomeImages/img2.JPG";
import Img3 from "../../ArdoHomeImages/img3.JPG";
import Img4 from "../../ArdoHomeImages/img4.JPG";
import Img5 from "../../ArdoHomeImages/img5.JPG";
import Img6 from "../../ArdoHomeImages/img6.JPG";
import { Link } from "react-router-dom";

export default function HomeCategory() {
  return (
    <Box sx={{ mt: 14 }}>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{
            width: "100px",
            cursor: "pointer",
          }}
          src={ArdoHomeLogo}
          alt=""
        />
        <Typography sx={{ fontSize: "34px", color: "gold" }}>
          Furniture
        </Typography>
      </Box>

      <Grid container justifyContent={"center"} sx={{ mt: 8 }} gap={3}>
        <Grid item lg={2} md={4} sm={5.5} xs={10}>
          <Box
            sx={{
              backgroundImage: `url('${Img5}')`,
              height: { xs: "200px", sm: "100%", md: "100%", lg: "100%" },
              backgroundRepeat: "no-repeat",
              p: 2,
              borderRadius: "3px",
              backgroundSize: "130%",
            }}
          >
            <Typography sx={{ fontWeight: "600" }}>Storage</Typography>
            <Typography sx={{ fontSize: "12px" }}>Shop Now</Typography>
          </Box>
        </Grid>
        <Grid item lg={4} md={4} sm={5.5} xs={10}>
          <Box
            sx={{
              backgroundImage: `url('${Img1}')`,
              height: "200px",
              backgroundRepeat: "no-repeat",
              p: 2,
              borderRadius: "3px",
              backgroundSize: "100%",
              backgroundPosition: "center",
            }}
          >
            <Typography sx={{ fontWeight: "600" }}>Decor Vases</Typography>
            <Typography sx={{ fontSize: "12px" }}>Shop Now</Typography>
          </Box>
          <Box
            sx={{
              backgroundImage: `url('${Img4}')`,
              height: "200px",
              backgroundRepeat: "no-repeat",
              mt: 3,
              p: 2,
              borderRadius: "3px",
              backgroundSize: "100%",
              backgroundPosition: "center",
            }}
          >
            <Typography sx={{ fontWeight: "600" }}>Accessories</Typography>
            <Typography sx={{ fontSize: "12px" }}>Shop Now</Typography>
          </Box>
        </Grid>
        <Grid item lg={2} md={4} sm={5.5} xs={10}>
          <Box
            sx={{
              backgroundImage: `url('${Img2}')`,
              height: "200px",
              backgroundRepeat: "no-repeat",
              borderRadius: "3px",
              backgroundSize: "100%",
              p: 2,
              objectFit: "cover",
              backgroundPosition: "center",
            }}
          >
            <Typography sx={{ fontWeight: "600" }}>Lighting</Typography>
            <Typography sx={{ fontSize: "12px" }}>Shop Now</Typography>
          </Box>
          <Box
            sx={{
              backgroundImage: `url('${Img6}')`,
              height: "200px",
              backgroundRepeat: "no-repeat",
              objectFit: "cover",
              mt: 3,
              p: 2,
              borderRadius: "3px",
              backgroundSize: "100%",
              backgroundPosition: "center",
            }}
          >
            <Typography sx={{ fontWeight: "600" }}>Living Room</Typography>
            <Typography sx={{ fontSize: "12px" }}>Shop Now</Typography>
          </Box>
        </Grid>

        <Grid item lg={2} md={4} sm={5.5} xs={10}>
          <Box
            sx={{
              backgroundImage: `url('${Img3}')`,
              height: { xs: "200px", sm: "100%", md: "100%", lg: "100%" },
              backgroundRepeat: "no-repeat",
              p: 2,
              borderRadius: "3px",
              backgroundSize: "128%",
              objectFit: "cover",
            }}
          >
            <Typography sx={{ fontWeight: "600" }}>Decoration</Typography>
            <Typography sx={{ fontSize: "12px" }}>Shop Now</Typography>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ textAlign: "end" }}>
        <Button variant="outlined" sx={{ mt: 4, mr: 12 }}>
          <Link target="blank" to="https://ardohome.netlify.app" style={{textDecoration:"none", color:"blue"}}>See all</Link>
        </Button>
      </Box>
    </Box>
  );
}
