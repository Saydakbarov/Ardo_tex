import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import FormContact from "../Contact/FormContact";

export default function HomeContact() {
  return (
    <Box sx={{ textAlign: "center", mt: 12 }}>
      <Typography sx={{ fontSize: "34px", color: "black" }}>
        Contact Us
      </Typography>

      <Grid
        container
        justifyContent={"center"}
        gap={5}
        mt={4}
        alignItems={"center"}
      >
        <Grid item lg={5} md={5} sm={10} xs={11}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.1318640648483!2d69.19144117563799!3d41.30599490104053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bdf3f55a937%3A0x3446e0e39c1c4b18!2zQXJkb3RleCDQntCx0LjQstC-0YfQvdGL0LUg0JzQsNGC0LXRgNC40LDQu9GL!5e0!3m2!1sru!2s!4v1693417945165!5m2!1sru!2s"
            width="100%"
            height="400"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Grid>
        <Grid item lg={5} md={5} sm={10} xs={11}>
          <FormContact />
        </Grid>
      </Grid>
    </Box>
  );
}
