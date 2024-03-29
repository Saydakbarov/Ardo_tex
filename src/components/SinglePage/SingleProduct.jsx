import { Box, Typography } from "@mui/material";
import React, { lazy, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Magnifier from "react-magnifier";
import ImageGallery from "../image-gallery";
import { youTubeLinkParser } from "../../utils/functions";
import { useTechnology, useTypes } from "../../query-data/data.service";

export default function SingleProduct({ data, isLoading }) {
  const [mainImage, setMainImage] = useState(data?.data?.product_image_url[0]);

  useEffect(() => {
    if (data?.data) {
      setMainImage(data?.data?.product_image_url[0]);
    }
  }, [data]);

  const [responsive, setResponsive] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 600) {
      setResponsive(false);
    } else {
      setResponsive(true);
    }
  }, []);

  const [open, setOpen] = useState(false);
  const [currentInex, setCurrentIndex] = useState(0);

  const { t, i18n } = useTranslation();

  const { data: types } = useTypes();

  const { data: technologies } = useTechnology();

  const [currentTech, setCurrentTech] = useState(null);
  const [currentType, setCurrentType] = useState(null);

  useEffect(() => {
    if (data?.data) {
      setCurrentTech(
        data?.data?.product_technology
          ? data?.data?.product_technology?.map((item) => {
              let current = technologies?.data?.find(
                (el) => el?.technology_id == item
              );
              return current;
            })
          : null
      );
      setCurrentType(
        data?.data?.product_type
          ? data?.data?.product_type?.map((item) => {
              let current = types?.data?.find((el) => el?.type_id == item);
              return current;
            })
          : null
      );
    }
  }, [data, technologies, types]);
  return (
    <Box>
      {isLoading ? (
        <Typography
          style={{
            display: "block",
            fontSize: "23px",
            textAlign: "center",
            margin: "30px",
          }}
        >
          Loading...
        </Typography>
      ) : data?.status == 404 ? (
        <Typography
          style={{
            display: "block",
            fontSize: "23px",
            textAlign: "center",
            margin: "30px",
          }}
        >
          Not found
        </Typography>
      ) : (
        // <Grid
        //   container
        //   justifyContent={"center"}
        //   style={{
        //     padding: "20px",
        //   }}
        //   gap={4}
        // >
        //   <Grid item lg={4} md={5} sm={10} xs={12}>
        //     <Box sx={{ width: "100%", height: "fit-content" }}>
        //       {data?.data?.product_image_url?.map((v) => (
        //         <div
        //           key={v}
        //           style={{
        //             width: "100%",
        //             height: "fit-content",
        //             display: mainImage == v ? "block" : "none",
        //           }}
        //         >
        //           <InnerImageZoom
        //             zoomScale={3}
        //             height={"200px"}
        //             width={"100%"}
        //             src={v}
        //             zoomSrc={v}
        //           />
        //         </div>
        //       ))}
        //     </Box>

        //     <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap", mt: 3 }}>
        //       {data?.data?.product_image_url?.map((v, i) => (
        //         <Box key={v} sx={{ width: "90px" }}>
        //           <img
        //             style={{ width: "100%", borderRadius: "10px" }}
        //             src={v}
        //             alt=""
        //             onClick={() => setMainImage(v)}
        //           />
        //         </Box>
        //       ))}
        //     </Box>
        //   </Grid>
        //   <Grid item lg={6} md={6} sm={10} xs={12} sx={{}}>
        //     <h2 className="font-light text-[38px] smd:text-[45px] lg:text-[55px] ">
        //       {i18n?.language == "uz"
        //         ? data?.data?.product_title_uz
        //         : data?.data?.product_title_ru}
        //     </h2>

        //     <p className="product-description" style={{  }}>
        //       {i18n?.language == "uz"
        //         ? data?.data?.product_desc_uz
        //         : data?.data?.product_desc_ru}
        //     </p>

        //     {/* <SingleBox text={"Grammage m2"} title={"310 g/m² +/-5%"} />
        //         <SingleBox text={"Composition"} title={"100% Polyester"} />
        //         <SingleBox text={"Usable width"} title={"min. 140cm"} />
        //         <SingleBox text={"Martindale Test"} title={"30000-35000"} />
        //         <SingleBox text={"Tendency to pilling and peeling"} title={"4-5"} />
        //         <SingleBox
        //           text={"Fastness to rubbing dry"}
        //           title={"light-4-5 / medium-4-5 / dark-4-5"}
        //         />
        //         <SingleBox
        //           text={"Fastness to rubbing wet"}
        //           title={"light-4-5 / medium-4-5 / dark-4"}
        //         />
        //         <SingleBox
        //           text={"Thread displacement"}
        //           title={"3,0-3,6 mm WARP / 2,2-2,6 mm WEFT"}
        //         /> */}

        //     {/* <Button
        //           variant="outlined"
        //           sx={{ borderColor: "black", color: "black", mt: 1 }}
        //         >
        //           Buy Now
        //         </Button> */}
        //   </Grid>
        // </Grid>

        <div className="py-[40px]">
          <div className="max-w-[1200px] mx-auto px-4 w-full">
            {data?.data?.product_material ? (
              <ImageGallery
                type={"material"}
                numbers={data?.data?.product_extra_image_number}
                currentIndex={currentInex}
                data={data?.data?.product_extra_image_url ?? []}
                open={open}
                setCurrentIndex={setCurrentIndex}
                setOpen={setOpen}
              />
            ) : (
              <ImageGallery
                currentIndex={currentInex}
                data={data?.data?.product_image_url ?? []}
                open={open}
                setCurrentIndex={setCurrentIndex}
                setOpen={setOpen}
              />
            )}

            <div className="flex flex-col md:flex-row items-start gap-[40px]">
              <div className=" w-full md:w-1/2">
                <div className="mb-3">
                  {data?.data?.product_image_url?.map((v) => (
                    <div
                      key={v}
                      className={`${
                        mainImage == v ? "block" : "hidden"
                      } w-full h-fit rounded-md overflow-hidden`}
                    >
                      <Magnifier className="rounded-md" src={v} />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3">
                  {data?.data?.product_material
                    ? data?.data?.product_extra_image_url?.map((v, i) => (
                        <button
                          key={v}
                          className="w-full h-[60px] sm:h-[70px] md:h-[90px] relative group overflow-hidden rounded-md"
                          onClick={() => {
                            setCurrentIndex(i);
                            setOpen(true);
                          }}
                        >
                          <img
                            className="w-full h-full object-cover rounded-md group-hover:scale-125 transition-all duration-500"
                            src={v}
                            alt=""
                          />
                          <span className="absolute text-xs sm:text-sm md:text-base text-white font-bold bottom-[5px] right-[5px] w-fit block p-[4px] rounded-md bg-[#000000b7]">
                            {data?.data?.product_extra_image_number[i]}
                          </span>
                        </button>
                      ))
                    : data?.data?.product_image_url?.map((v, i) => (
                        <button
                          key={v}
                          className="w-full h-[60px] sm:h-[70px] md:h-[90px] group overflow-hidden rounded-md"
                          onClick={() => {
                            setCurrentIndex(i);
                            setOpen(true);
                          }}
                        >
                          <img
                            className="w-full h-full object-contain rounded-md group-hover:scale-125 transition-all duration-500"
                            src={v}
                            alt=""
                          />
                        </button>
                      ))}
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex items-center justify-between flex-row mb-3">
                  <h2 className="font-light text-[34px] sm:text-[38px] smd:text-[45px] lg:text-[55px]  ">
                    {data?.data?.[`product_title_${i18n?.language ?? "uz"}`]}
                  </h2>

                  <div className="flex flex-wrap items-center justify-end gap-3">
                    {currentTech &&
                      currentTech?.map((item) => (
                        <img
                          src={item?.technology_image_url}
                          loading="lazy"
                          alt="technology"
                          key={item?.technology_id}
                          className={`${!item?.technology_image_url && "hidden"}  w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px] object-contain`}
                        />
                      ))}
                    {currentType &&
                      currentType?.map((item) => (
                        <img
                          src={item?.type_image_url}
                          loading="lazy"
                          alt="type"
                          key={item?.type_id}
                          className={`${!item?.type_image_url && "hidden"} w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px] object-contain`}
                        />
                      ))}
                  </div>
                </div>
                <p
                  className={`mb-4 w-fit p-[6px] rounded-[16px] font-semibold ${
                    data?.data?.product_finished
                      ? "bg-[#e33f3f47] text-[#e33f3f]"
                      : "bg-[#34b14740] text-[#34b147]"
                  } `}
                >
                  {data?.data?.product_finished ? t("not-exists") : t("exists")}
                </p>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      data?.data[`product_model_${i18n?.language ?? "uz"}`],
                  }}
                  className="single-product-model"
                ></div>

                {data?.data?.product_pdf_url && (
                  <Link target="_blank" to={data?.data?.product_pdf_url} className="w-fit p-2 border-2 border-black rounded-md flex items-center gap-2 text-sm md:text-base" >
                    <span className="">{data?.data?.[`product_button_text_${i18n.language ?? "uz"}`]}</span>
                    <img src="/img/download.png" alt="" className="w-[20px] h-[20px] object-contain" />
                  </Link>
                )}

                {data?.data?.product_video_link && (
                  <div className={"w-full h-[300px]"}>
                    <iframe
                      src={`https://www.youtube.com/embed/${youTubeLinkParser(
                        data?.data?.product_video_link
                      )}`}
                      title="YouTube video player"
                      className="w-full h-full"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </Box>
  );
}
