import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import FormContact from "../Contact/FormContact";
import { useTranslation } from "react-i18next";

export default function HomeContact() {
  const { t } = useTranslation();

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
        <h2 className=" text-[28px] md:text-[34px] mb-4 md:mb-8 text-center font-medium">
          {" "}
          {t("contact-us")}
        </h2>

        {/* <div style="position:relative;overflow:hidden;"><a href="https://yandex.uz/maps/org/172958207416/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Ardo</a><a href="https://yandex.uz/maps/10335/tashkent/category/furniture_fittings_and_components/184106632/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;">Мебельная фурнитура и комплектующие в Ташкенте</a></div> */}
        <iframe
          src="https://yandex.uz/map-widget/v1/?ll=69.210637%2C41.295886&mode=search&oid=172958207416&ol=biz&z=12.38"
          className="w-full h-[300px] sm:h-[400px] "
          frameBorder={1}
          allowFullScreen="true"
          style={{ position: "relative" }}
        />
      </div>
    </div>
  );
}
