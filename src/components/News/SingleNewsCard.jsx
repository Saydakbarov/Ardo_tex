import { Box, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import "./styles/SIngleCard.scss";

export default function SingleNewsCard({ id }) {
  const { t, i18n } = useTranslation();

  const [data, setData] = useState();

  useEffect(() => {
    async function getNewsCard() {
      const res = await axios.get(
        `https://api.ardotex.uz/api/v1/tex/news/${id}`
      );

      return setData(res.data.data);
    }
    getNewsCard();
  }, [id]);

  console.log(data);
  return (
    <Box sx={{ mt: 8 }}>
      <Box className="globalContainer">
        <Grid
          container
          sx={{
            justifyContent: "center",
            p: { xs: 1, sm: 2, md: 3 },
          }}
        >
          <Grid lg={7} md={7} sm={10} xs={11}>
            <img src={data?.new_img} alt="" className="w-full h-auto" />

            <Box>
              <Typography sx={{ fontWeight: "600", fontSize: "18px" }}>
                {i18n?.language == "uz"
                  ? data?.new_title_uz
                  : i18n?.language == "ru"
                  ? data?.new_title_ru
                  : data?.new_title_en}
              </Typography>
              <Box className="news_description">
                <Typography
                  dangerouslySetInnerHTML={{
                    __html:
                      i18n?.language == "uz"
                        ? data?.new_description_uz
                        : i18n?.language == "ru"
                        ? data?.new_description_ru
                        : data?.new_description_en,
                  }}
                  sx={{ mt: 2, fontSize: "14px" }}
                ></Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
