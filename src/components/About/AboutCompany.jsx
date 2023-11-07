import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

export default function AboutCompany() {
  return (
    <Container
      sx={{
        p: 2,
        background: "white",
        marginTop: "-100px",
      }}
    >
      <Grid container justifyContent={"center"} gap={8}>
        <Grid
          item
          lg={4.3}
          md={4.3}
          sm={10}
          xs={12}
          sx={{
            backgroundImage:
              "url('https://htmldemo.net/eposi/eposi/assets/img/banners/img2-middle-eposi1.webp')",
            minHeight: "400px",
          }}
        ></Grid>
        <Grid item lg={7} md={7} sm={10} xs={12} sx={{ padding: "0px 20px" }}>
          <Typography sx={{ fontSize: "34px", fontWeight: "600" }}>
            WELCOME TO <span style={{ color: "red" }}>Ardo Tex</span>.
          </Typography>
          <Typography sx={{ color: "gray", mt: 2 }}>
            Двадцатилетняя деятельность компании, опыт, квалифицированный
            персонал, высокое качество и широкий ассортимент позволяют
            удерживать позицию одного из лидеров на рынке Узбекистана.
          </Typography>
          <Typography sx={{ fontSize: "22px", fontWeight: "550", mt: 4 }}>
            WIN BEST ONLINE SHOP AT 2019
          </Typography>
          <Typography sx={{ color: "gray", mt: 2 }}>
            Для индивидуальных заказчиков - дизайн мебели и 3D визуализация. Для
            производителей мебели и дизайнеров мы предлагаем специальные
            условия.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
