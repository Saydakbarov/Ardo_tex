import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import Certificate1 from "../../images/certificate1.jpg";
import Certificate2 from "../../images/certificate2.jpg";
import Certificate3 from "../../images/certificate3.jpg";
import Certificate4 from "../../images/certificate4.jpg";
import Certificate5 from "../../images/certificate5.jpg";
import Certificate6 from "../../images/certificate6.jpg";

export default function Certificate() {
  return (
    <Box sx={{ mt: 10 }}>
      <Typography
        sx={{ fontSize: "36px", textAlign: "center", fontWeight: "bold" }}
      >
        Sertifikatlar
      </Typography>
      <Grid container justifyContent={"center"} gap={4} mt={5}>
        <Grid item lg={3}>
          <img style={{ width: "100%" }} src={Certificate1} alt="" />
        </Grid>
        <Grid item lg={3}>
          <img style={{ width: "100%" }} src={Certificate2} alt="" />
        </Grid>
        <Grid item lg={3}>
          <img style={{ width: "100%" }} src={Certificate3} alt="" />
        </Grid>
        <Grid item lg={3}>
          <img style={{ width: "100%" }} src={Certificate4} alt="" />
        </Grid>
        <Grid item lg={3}>
          <img style={{ width: "100%" }} src={Certificate5} alt="" />
        </Grid>
        <Grid item lg={3}>
          <img style={{ width: "100%" }} src={Certificate6} alt="" />
        </Grid>
      </Grid>
    </Box>
  );
}
