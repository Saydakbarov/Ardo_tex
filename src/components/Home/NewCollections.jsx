import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { NewCollectionData } from "../../data";
import { useSubCategories } from "../../query-data/data.service";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NewCollections() {
  const { data, isLoading, refetch } = useSubCategories("4");
  console.log(data, "da");

  const navigate = useNavigate();

  const { t, i18n } = useTranslation();

  return (
    <Box sx={{ maxWidth: "1500px", margin: "0 auto", mt: 8 }}>
      <Typography
        sx={{ fontSize: "34px", fontWeight: "bold", textAlign: "center" }}
      >
        {t("new-collections")}
      </Typography>

      <Grid container justifyContent={"center"} gap={4} mt={5}>
        {data?.data?.map((v, i) => (
          <Grid item lg={2.5} md={2.5} sm={5.3} xs={10} key={v.id}>
            <Link
            className="w-full"
              to={`/product?category=${4}&subcategory=${v?.sub_category_id}`}
            >
              <img
                style={{ width: "100%", borderRadius: "6px" }}
                src={v?.sub_link}
              />
              <Typography
                sx={{
                  fontSize: "30px",
                  textAlign: "center",
                }}
              >
                <p style={{ textDecoration: "none", color: "inherit" }}>
                  {i18n?.language == "uz"
                    ? v.sub_category_name_uz
                    : v.sub_category_name_ru}
                </p>
              </Typography>
            </Link>
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          textAlign: { xs: "center", sm: "center", md: "center", lg: "end" },
        }}
      >
        <Button
          variant="outlined"
          onClick={() => {
            navigate("/product?category=4");
          }}
          sx={{
            background: "linear-gradient(270deg, #307bc4 0%, #274760 100%)",

            borderRadius: "30px",
            padding: "8px 14px",
            width: "fit-content",
            mt: 4,
            transition: " 0.5s linear",
            mr: { xs: 0, sm: 0, md: 4, lg: 8 },
            color: "white",

            "&:hover": {
              transition: " 0.5s linear",
              padding: "8px 25px",
              background: "linear-gradient(270deg, #307bc4 0%, #274760 100%)",
            },
          }}
        >
          {t("see-all")}
        </Button>
      </Box>
    </Box>
  );
}
