import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Radio,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { CategoryData, colorsData, technologiesData } from "../../data";
import { useState } from "react";
import ProductCard from "./ProductCard";
import {
  useBrands,
  useCategories,
  useFilteredProducts,
  useSecondSubCategories,
  useSubCategories,
} from "../../query-data/data.service";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export default function ProductCategory({
  categoryId,
  categories,
  subCategoryId,
  subcategories,
  secondSubCategoryId,
  secondsubcategories,
  brandId,
  brands,
  setBrandId,
  priceFrom,
  setPriceFrom,
  priceTo,
  setPriceTo,
  searchUz,
  setSearchUz,
  searchRu,
  setSearchRu,
  backLink,
  data,
  color,
  setColor,
  technology,
setTechnology
}) {
  // const [categoryId, setCategoryId] = useState(1);

  // const [value, setValue] = React.useState([20000, 1000000]);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  // console.log(categoryId);

  const { t, i18n } = useTranslation();

  const handleCheckboxChange = (state, setState, id) => {
    if(state?.includes(id)) {
      setState(state?.filter(item => item != id))
    }else {
      setState([...state, id])

    }
  }


  console.log(technology);
  return (
    <Box>
      <Grid container justifyContent={"center"} gap={10}>
        <Grid item lg={2.5} sx={{ p: 2, borderRadius: "10px" }}>
          <Typography
            sx={{
              display: categoryId ? "block" : "none",
              fontSize: "18px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to={backLink}
            >
              {`< ${t("back")}`}
            </Link>
          </Typography>

          <Typography sx={{ fontSize: "22px", fontWeight: "bold" }}>
            {t("categories")}
          </Typography>
          <Box
            sx={{
              display: categoryId || subCategoryId ? "none" : "flex",
              flexDirection: "column",
              mt: 2,
              gap: "10px",
            }}
          >
            {categories &&
              categories?.data?.map((v) => (
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to={`/product?category=${v?.category_id}`}
                >
                  <Typography style={{ fontSize: "18px" }}>
                    {i18n?.language == "uz"
                      ? v.category_name_uz
                      : v.category_name_ru}
                  </Typography>
                </Link>
              ))}
          </Box>
          <Box
            sx={{
              display: categoryId && !subCategoryId ? "flex" : "none",
              flexDirection: "column",
              mt: 2,
              gap: "10px",
            }}
          >
            {subcategories &&
              subcategories?.data?.map((v) => (
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to={`/product?category=${categoryId}&subcategory=${v.sub_category_id}`}
                >
                  <Typography style={{ fontSize: "18px" }}>
                    {i18n?.language == "uz"
                      ? v.sub_category_name_uz
                      : v.sub_category_name_ru}
                  </Typography>
                </Link>
              ))}
          </Box>
          <Box
            sx={{
              display: subCategoryId || secondSubCategoryId ? "flex" : "none",
              flexDirection: "column",
              mt: 2,
              gap: "10px",
            }}
          >
            {secondsubcategories &&
              secondsubcategories?.data?.map((v) => (
                <Link
                  style={{
                    textDecoration:
                      secondSubCategoryId == v.second_sub_category_id
                        ? "underline"
                        : "none",
                    color: "inherit",
                  }}
                  to={`/product?category=${categoryId}&subcategory=${subCategoryId}&secondsubcategory=${v.second_sub_category_id}`}
                >
                  <Typography style={{ fontSize: "18px" }}>
                    {i18n?.language == "uz"
                      ? v.second_sub_category_name_uz
                      : v.second_sub_category_name_ru}
                  </Typography>
                </Link>
              ))}
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
              {t("Технология")}
            </Typography>
           

            <div className="">
              <FormGroup>
               {
                technologiesData?.map(item => (
                  <FormControlLabel
                  control={<Checkbox value={item.id} checked={technology?.includes(item.id)} onChange={() => handleCheckboxChange(technology, setTechnology, item?.id)} />}
                  label={item?.name}
                />
                ))
               }
               
              </FormGroup>
            </div>
          </Box>

          <Box sx={{ mt: 3 }}>
            <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
              {t("brands")}
            </Typography>
            <Box sx={{}}>
            <FormGroup>
               {
                brands?.data?.map(item => (
                  <FormControlLabel
                  control={<Checkbox value={item.brand_id} checked={brandId?.includes(item.brand_id)} onChange={() => handleCheckboxChange(brandId, setBrandId, item?.brand_id)} />}
                  label={item?.brand_name}
                />
                ))
               }
               
              </FormGroup>
              {/* {brands?.data?.map((item) => (
                <FormControlLabel
                  key={item.brand_id}
                  control={
                    <Radio
                      value={item.brand_id}
                      checked={brandId}
                      onChange={(e) => {
                        setBrandId((prevstate) =>
                          prevstate == e.target.value ? null : e.target.value
                        );
                      }}
                    />
                  }
                  label={item.brand_name}
                />
              ))} */}
            </Box>
          </Box>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              margin: "40px 0",
            }}
          >
            <TextField
              label={t("price-from")}
              value={priceFrom}
              onChange={(e) => setPriceFrom(e.target.value)}
              type="number"
              fullWidth
            />
            <TextField
              label={t("price-to")}
              value={priceTo}
              onChange={(e) => setPriceTo(e.target.value)}
              type="number"
              fullWidth
            />
          </div>
          <Box sx={{ mt: 3 }}>
            <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
              {t("colors")}
            </Typography>
            <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap", mt: 1 }}>
              {colorsData?.map((item) => (
                <button
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "4px",
                    overflow: "hidden",
                    margin: "0px",
                    padding: 0,
                    border: color == item?.id ? "2.5px solid black" : 0,
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    if(item?.id == color){
                      setColor(null)
                    }else {
                      setColor(item?.id);
                    }
                  }}
                >
                  <img
                    src={item.image}
                    alt={item?.name}
                    className=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </button>
              ))}
            </Box>

            
          </Box>
          
        </Grid>

        <Grid item lg={8} md={8} sm={10} xs={11} mt={2}>
          <TextField
            fullWidth
            id="filled-basic"
            label={t("search")}
            variant="standard"
            value={i18n?.language == "uz" ? searchUz : searchRu}
            onChange={(e) => {
              if (i18n?.language == "uz") {
                setSearchUz(e.target.value);
              } else {
                setSearchRu(e.target.value);
              }
            }}
          />
          {!data ? (
            <Typography
              style={{ textAlign: "center", margin: "30px", fontSize: "23px" }}
            >
              Loading...
            </Typography>
          ) : (
            <ProductCard data={data} />
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
