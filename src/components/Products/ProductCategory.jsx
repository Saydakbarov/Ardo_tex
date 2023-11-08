import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Radio,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { CategoryData } from "../../data";
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

export default function ProductCategory() {
  // const [categoryId, setCategoryId] = useState(1);

  const [status, setStatus] = useState(false);

  // const [value, setValue] = React.useState([20000, 1000000]);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  // console.log(categoryId);

  const [params, setParams] = useSearchParams();

  const categoryId = params.get("category");
  const subCategoryId = params.get("subcategory");
  const secondSubCategoryId = params.get("secondsubcategory");
  const [brandId, setBrandId] = useState("");
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);
  const [priceFrom, setPriceFrom] = useState(0);
  const [priceTo, setPriceTo] = useState(10000000);
  const [searchUz, setSearchUz] = useState("");
  const [searchRu, setSearchRu] = useState("");
  const [searchEn, setSearchEn] = useState("");
  const [color, setColor] = useState("");

  console.log(categoryId, "categoryId");
  console.log(subCategoryId, "subCategoryId");
  console.log(secondSubCategoryId, "secondSubCategoryId");

  const { data, refetch, isFetching } = useFilteredProducts({
    limit,
    offset,
    category_id: categoryId,
    sub_category_id: subCategoryId,
    second_sub_category_id: secondSubCategoryId,
    price_from: priceFrom,
    price_to: priceTo,
    search_uz: searchUz,
    search_ru: searchRu,
    search_en: searchEn,
    brand_id: brandId,
    color,
  });

  useEffect(() => {
    refetch();
  }, [
    categoryId,
    subCategoryId,
    secondSubCategoryId,
    brandId,
    offset,
    priceFrom,
    priceTo,
    searchEn,
    searchRu,
    searchUz,
    color,
  ]);

  console.log(data, "products");

  const { data: categories, refetch: refetchCategory } = useCategories();
  const { data: subcategories, refetch: refetchSubCategory } =
    useSubCategories(categoryId);
  const { data: secondsubcategories, refetch: refetchSecondSubcategory } =
    useSecondSubCategories(subCategoryId);

    const {data: brands} = useBrands()

  useMemo(() => {
    if (categoryId) {
      refetchSubCategory();
    }
  }, [categoryId]);

  useMemo(() => {
    if (subCategoryId) {
      console.log("sub Inner");
      refetchSecondSubcategory();
    }
  }, [subCategoryId]);

  const backLink = useMemo(() => {
    if(secondSubCategoryId) {
      return `/product?category=${categoryId}&subcategory=${subCategoryId}`
    }else if(subCategoryId) {
      return `/product?category=${categoryId}`
    }else if(categoryId) {
      return `/product`
    }else {
      return "/product"
    }

  }, [categoryId, subCategoryId, secondSubCategoryId])

  return (
    <Box>
      <Grid container justifyContent={"center"} gap={10}>
        <Grid item lg={2.5} sx={{ p: 2, borderRadius: "10px" }}>
          <Typography sx={{ fontSize: "18px", fontWeight: "bold", marginBottom: "20px" }}>
           <Link style={{textDecoration: "none", color: "inherit"}} to={backLink} >
           {"< Back"}
           </Link>
          </Typography>

          <Typography sx={{ fontSize: "22px", fontWeight: "bold" }}>
            Categories
          </Typography>
          <Box
            sx={{
              display: categoryId || subCategoryId ? "none" : "flex",
              flexDirection: "column",
              mt: 2,
              gap: "10px",
            }}
          >
            {categories?.data?.map((v) => (
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to={`/product?category=${v?.category_id}`}
              >
                <Typography style={{ fontSize: "18px" }}>
                  {v.category_name_uz}
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
            {subcategories?.data?.map((v) => (
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to={`/product?category=${categoryId}&subcategory=${v.sub_category_id}`}
              >
                <Typography style={{ fontSize: "18px" }}>
                  {v.sub_category_name_uz}
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
            {secondsubcategories?.data?.map((v) => (
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
                  {v.second_sub_category_name_uz}
                </Typography>
              </Link>
            ))}
          </Box>

          <Box sx={{ mt: 3 }}>
            <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
              Brands
            </Typography>
            <Box sx={{}}>
             
             {
              brands?.data?.map(item => (
                <FormControlLabel
                key={item.brand_id}
                control={<Radio value={item.brand_id} checked={brandId} onChange={(e) => {setBrandId(prevstate => prevstate == e.target.value ? null : e.target.value)}} />}
                label={item.brand_name}
              />
              ))
             }
             
            </Box>
          </Box>

          <div style={{display: "flex", alignItems : "center", gap: "16px", margin: "40px 0"}} >
            <TextField label="Price from" value={priceFrom} onChange={(e) => setPriceFrom(e.target.value)} type="number" fullWidth />
            <TextField label="Price to" value={priceTo} onChange={(e) => setPriceTo(e.target.value)} type="number" fullWidth />
          </div>
          <Box sx={{ mt: 3 }}>
            <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
              Colors
            </Typography>
            <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap", mt: 1 }}>
              <p
                style={{
                  width: "25px",
                  height: "25px",
                  background: "red",
                  borderRadius: "2px",
                  margin: "0px",
                }}
              ></p>
              <p
                style={{
                  width: "25px",
                  height: "25px",
                  background: "black",
                  borderRadius: "2px",
                  margin: "0px",
                }}
              ></p>
              <p
                style={{
                  width: "25px",
                  height: "25px",
                  background: "green",
                  borderRadius: "2px",
                  margin: "0px",
                }}
              ></p>
              <p
                style={{
                  width: "25px",
                  height: "25px",
                  background: "yellow",
                  borderRadius: "2px",
                  margin: "0px",
                }}
              ></p>
            </Box>
          </Box>

          {/* <Box sx={{ mt: 3 }}>
            <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
              Filters
            </Typography>
            <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap", mt: 1 }}>
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
              />
            </Box>
          </Box> */}
        </Grid>

        <Grid item lg={8} mt={2}>
          <TextField
            fullWidth
            id="filled-basic"
            label="Search"
            variant="standard"

            value={searchUz}
            onChange={(e) => {
              setSearchUz(e.target.value)
            }}

          />
          {
            isFetching ? (<Typography style={{textAlign: "center", margin: "30px", fontSize: "23px"}} >Loading...</Typography>) : (<ProductCard data={data} />)
          }
        </Grid>
      </Grid>
    </Box>
  );
}
