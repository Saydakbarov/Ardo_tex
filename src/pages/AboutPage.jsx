import { Box, Container } from "@mui/material";
import React from "react";
import HeaderMenu from "../components/Home/HeaderMenu";
import Footer from "../components/Home/Footer";
import AboutMain from "../components/About/AboutMain";
import AboutCompany from "../components/About/AboutCompany";
import AboutProduct from "../components/About/AboutProducts";
import Certificate from "../components/About/Certificate";
import Media from "../components/media";
import { useVideos } from "../query-data/data.service";
import { youTubeLinkParser } from "../utils/functions";

export default function AboutPage() {
  const { data, isLoading } = useVideos();
  return (
    <Box>
      <HeaderMenu />
      <AboutMain />
      <AboutCompany />
      <AboutProduct />
      <Container
        sx={{
          // marginTop: "100px",
          p: 2,
          background: "white",
        }}
      >
        <div className="py-[40px]">
        <img src="/img/about-banner.jpg" alt="" className="w-full h-[250px] sm:h-[300px] md:h-[400px] xl:h-[500px] object-cover rounded-[10px] lg:rounded-[18px]" />
        </div>
      </Container>
      <Certificate />
      {data?.data?.map((item) => (
        <Media
          key={item?.video_id}
          src={youTubeLinkParser(item?.video_link)}
          type="youtube"
          className={"max-w-[1300px] mx-auto "}
        />
      ))}
      <Footer />
    </Box>
  );
}
