import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductCard";
import { useTranslation } from "react-i18next";
import { useFilteredProducts } from "../../query-data/data.service";
import { postFilteredProducts } from "../../query-data/data.fn";

export default function DiscountedProducts() {
  const { t } = useTranslation();

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await postFilteredProducts({
        params: {
          limit: 15,
          offset: 0,
        },
        body: {
            discount: true
        },
      });

      setData(res);
    };
    fetchData();
  }, []);
  console.log(data, "sda");

  return (
    <Box
      sx={{ textAlign: "center", maxWidth: "1500px", margin: "0 auto", mt: 12 }}
    >
      <Typography
        sx={{ fontSize: "34px", fontWeight: "600", textAlign: "center" }}
      >
        {t("discount-products")}
      </Typography>

      <ProductsCard data={data?.data ?? []} />
    </Box>
  );
}
