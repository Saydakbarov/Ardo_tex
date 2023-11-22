import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import FormContact from "../Contact/FormContact";
import { useTranslation } from "react-i18next";

export default function HomeContact() {

  const {t} = useTranslation()

  return (
    // <Box
    //   sx={{ textAlign: "center", maxWidth: "1500px", margin: "0 auto", mt: 12 }}
    // >
    //   <Typography sx={{ fontSize: "34px", color: "black" }}>
    //     {t("contact-us")}
    //   </Typography>

    //   <Grid
    //     container
    //     justifyContent={"center"}
    //     gap={5}
    //     mt={4}
    //     alignItems={"center"}
    //   >
    //     <Grid item lg={5} md={5} sm={10} xs={11}>
         
    //     </Grid>
    //     <Grid item lg={5} md={5} sm={10} xs={11}>
    //       <FormContact />
    //     </Grid>
    //   </Grid>
    // </Box>

    <div className="py-[40px]">
      <div className="max-w-[1240px] mx-auto px-4 w-full ">

    <h2 className=" text-[28px] md:text-[34px] mb-4 md:mb-8 text-center font-medium"> {t("contact-us")}</h2>


      <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.1318640648483!2d69.19144117563799!3d41.30599490104053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bdf3f55a937%3A0x3446e0e39c1c4b18!2zQXJkb3RleCDQntCx0LjQstC-0YfQvdGL0LUg0JzQsNGC0LXRgNC40LDQu9GL!5e0!3m2!1sru!2s!4v1693417945165!5m2!1sru!2s"
            width="100%"
            height="400"
            className="w-full h-[300px] md:h-[400px]"
            loading="lazy"
          ></iframe>
      </div>
    </div>
  );
}
