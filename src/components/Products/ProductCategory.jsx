import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import TuneIcon from "@mui/icons-material/Tune";
import CloseIcon from "@mui/icons-material/Close";
import { CategoryData, colorsData, technologiesData } from "../../data";
import { useState } from "react";
import ProductCard from "./ProductCard";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { handleCheckboxChange } from "../../utils/functions";

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
  searchEn,
  setSearchRu,
  setSearchEn,
  backLink,
  data,
  technology,
  setOffset,
  technologies,
  types,
  type,
  colorId,
  colors,
  setColors
}) {
  // const [categoryId, setCategoryId] = useState(1);

  // const [value, setValue] = React.useState([20000, 1000000]);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  // console.log(categoryId);

  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const [offsetNum, setOffsetNum] = useState(1);

  const [filter, setFilter] = useState(false);

  console.log(technology);
  return (
    <Box>
      <div className="max-w-[1250px] px-4 mx-auto flex flex-col md:flex-row gap-10 py-6">
        <div
          className={`${
            filter ? "fixed z-[100] md:sticky" : "hidden md:block"
          }  top-0 left-0 bg-white p-5 w-full h-screen overflow-x-auto md:h-auto  md:shrink-0 md:w-[25%]`}
        >
          <div className="md:hidden flex justify-end">
            <Button
              style={{ color: "#000" }}
              onClick={() => {
                setFilter(false);
              }}
            >
              <CloseIcon />
            </Button>
          </div>
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

          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: "bold",
              textTransform: "uppercase",
              fontFamily: "Gilroy",
            }}
          >
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
                  to={`/product?category=${v?.category_id}${
                    technology?.length ? "&tech=" + technology?.join(",") : ""
                  }${type?.length ? "&type=" + type?.join(",") : ""}${
                    colorId ? "&color=" + colorId : ""
                  }`}
                >
                  <Typography
                    style={{
                      fontSize: "18px",
                      fontWeight: 300,
                      fontFamily: "Gilroy",
                    }}
                  >
                    {v[`category_name_${i18n?.language ?? "uz"}`]}
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
                  to={`/product?category=${categoryId}&subcategory=${
                    v.sub_category_id
                  }${
                    technology?.length ? "&tech=" + technology?.join(",") : ""
                  }${type?.length ? "&type=" + type?.join(",") : ""}${
                    colorId ? "&color=" + colorId : ""
                  }`}
                >
                  <Typography
                    style={{
                      fontSize: "18px",
                      fontWeight: 300,
                      fontFamily: "Gilroy",
                    }}
                  >
                    {v[`sub_category_name_${i18n?.language ?? "uz"}`]}
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
                  to={`/product?category=${categoryId}&subcategory=${subCategoryId}&secondsubcategory=${
                    v.second_sub_category_id
                  }${
                    technology?.length ? "&tech=" + technology?.join(",") : ""
                  }${type?.length ? "&type=" + type?.join(",") : ""}${
                    colorId ? "&color=" + colorId : ""
                  }`}
                >
                  <Typography
                    style={{
                      fontSize: "18px",
                      fontWeight: 300,
                      fontFamily: "Gilroy",
                    }}
                  >
                    {v[`second_sub_category_name_${i18n?.language ?? "uz"}`]}
                  </Typography>
                </Link>
              ))}
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                textTransform: "uppercase",
                fontFamily: "Gilroy",
              }}
            >
              {t("technology")}
            </Typography>

            <div className="">
              <FormGroup>
                {technologies?.data?.map((item) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        style={{ fontFamily: "Gilroy" }}
                        value={item.technology_id}
                        checked={technology?.includes(item?.technology_id)}
                        onChange={() => {
                          if (technology?.includes(item?.technology_id)) {
                            const res = `/product?${
                              categoryId ? "category=" + categoryId : ""
                            }${
                              subCategoryId
                                ? "&subcategory=" + subCategoryId
                                : ""
                            }${
                              secondSubCategoryId
                                ? "&secondsubcategory=" + secondSubCategoryId
                                : ""
                            }${type?.length ? "&type=" + type?.join(",") : ""}${
                              technology?.length > 1
                                ? "&tech=" +
                                  technology
                                    ?.filter((el) => el != item?.technology_id)
                                    ?.join(",")
                                : ""
                            }${colorId ? "&color=" + colorId : ""}`;

                            navigate(res);
                          } else {
                            const res = `/product?${
                              categoryId ? "category=" + categoryId : ""
                            }${
                              subCategoryId
                                ? "&subcategory=" + subCategoryId
                                : ""
                            }${
                              secondSubCategoryId
                                ? "&secondsubcategory=" + secondSubCategoryId
                                : ""
                            }${type?.length ? "&type=" + type?.join(",") : ""}${
                              "&tech=" +
                              [...technology, item?.technology_id]?.join(",")
                            }${colorId ? "&color=" + colorId : ""}`;
                            console.log(res);
                            navigate(res);
                          }
                        }}
                      />
                    }
                    label={
                      <Typography
                        style={{ fontWeight: 300, fontFamily: "Gilroy" }}
                      >
                        {item[`technology_name_${i18n?.language ?? "uz"}`]}
                      </Typography>
                    }
                  />
                ))}
              </FormGroup>
            </div>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                textTransform: "uppercase",
                fontFamily: "Gilroy",
              }}
            >
              {t("type")}
            </Typography>

            <div className="">
              <FormGroup>
                {types?.data?.map((item) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        style={{ fontFamily: "Gilroy" }}
                        value={item.type_id}
                        checked={type?.includes(item?.type_id)}
                        onChange={
                          () => {
                            if (type?.includes(item?.type_id)) {
                              const res = `/product?${
                                categoryId ? "category=" + categoryId : ""
                              }${
                                subCategoryId
                                  ? "&subcategory=" + subCategoryId
                                  : ""
                              }${
                                secondSubCategoryId
                                  ? "&secondsubcategory=" + secondSubCategoryId
                                  : ""
                              }${
                                type?.length > 1
                                  ? "&type=" +
                                    type
                                      ?.filter((el) => el != item?.type_id)
                                      ?.join(",")
                                  : ""
                              }${
                                technology?.length > 0
                                  ? "&tech=" + technology?.join(",")
                                  : ""
                              }`;

                              navigate(res);
                            } else {
                              const res = `/product?${
                                categoryId ? "category=" + categoryId : ""
                              }${
                                subCategoryId
                                  ? "&subcategory=" + subCategoryId
                                  : ""
                              }${
                                secondSubCategoryId
                                  ? "&secondsubcategory=" + secondSubCategoryId
                                  : ""
                              }${
                                "&type=" + [...type, item?.type_id]?.join(",")
                              }${
                                technology?.length > 0
                                  ? "&tech=" + technology?.join(",")
                                  : ""
                              }`;
                              console.log(res);
                              navigate(res);
                            }
                          }
                          // handleCheckboxChange(
                          //   type,
                          //   setType,
                          //   item?.type_id
                          // )
                        }
                      />
                    }
                    label={
                      <Typography
                        style={{ fontWeight: 300, fontFamily: "Gilroy" }}
                      >
                        {item[`type_name_${i18n?.language ?? "uz"}`]}
                      </Typography>
                    }
                  />
                ))}
              </FormGroup>
            </div>
          </Box>

          <Box sx={{ mt: 3 }}>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                textTransform: "uppercase",
                fontFamily: "Gilroy",
              }}
            >
              {t("brands")}
            </Typography>
            <Box sx={{}}>
              <FormGroup>
                {brands?.data?.map((item) => (
                  <FormControlLabel
                    style={{ fontWeight: 300 }}
                    control={
                      <Checkbox
                        value={item.brand_id}
                        checked={brandId?.includes(item.brand_id)}
                        onChange={() =>
                          handleCheckboxChange(
                            brandId,
                            setBrandId,
                            item?.brand_id
                          )
                        }
                      />
                    }
                    label={
                      <Typography
                        style={{ fontWeight: 300, fontFamily: "Gilroy" }}
                      >
                        {item?.brand_name}
                      </Typography>
                    }
                  />
                ))}
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

          {/* <div
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
          </div> */}
          <Box sx={{ mt: 3 }}>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                textTransform: "uppercase",
                fontFamily: "Gilroy",
              }}
            >
              {t("colors")}
            </Typography>
            <Stack mt={1} spacing={1}>
              {colorsData?.map((item) => (
                <FormControlLabel
                  style={{ fontWeight: 300 }}
                  control={
                    <Checkbox
                      // value={item.id}
                      checked={colors?.includes(`${item.id}`)}
                      onChange={() => {

                        const colorsId = colors?.includes(`${item.id}`) ? colors?.filter(el => el != item.id) : [item.id, ...colors]
                        const res = `/product?${
                          categoryId ? "category=" + categoryId : ""
                        }${subCategoryId ? "&subcategory=" + subCategoryId : ""}${
                          secondSubCategoryId
                            ? "&secondsubcategory=" + secondSubCategoryId
                            : ""
                        }${type?.length ? "&type=" + type?.join(",") : ""}${
                          technology?.length
                            ? "&tech=" + technology?.join(",")
                            : ""
                        }${ colorsId.length ? ("&color=" + colorsId?.join(",")) : ""}`;
                        console.log(res);
                        navigate(res);
                        // if (item?.id == colorId) {
                        //         const res = `/product?${
                        //           categoryId ? "category=" + categoryId : ""
                        //         }${subCategoryId ? "&subcategory=" + subCategoryId : ""}${
                        //           secondSubCategoryId
                        //             ? "&secondsubcategory=" + secondSubCategoryId
                        //             : ""
                        //         }${type?.length ? "&type=" + type?.join(",") : ""}${
                        //           technology?.length
                        //             ? "&tech=" + technology?.join(",")
                        //             : ""
                        //         }`;
                        //         console.log(res);
                        //         navigate(res);
                        //       } else {
                               
                        //       }
                      }}
                     
                      
                    />
                  }
                  label={
                   <Stack direction={"row"} spacing={1} >
                    <img src={item.image} alt="" className="w-[30px] h-[30px] object-cover" />
                     <Typography
                      style={{ fontWeight: 300, fontFamily: "Gilroy" }}
                    >
                      {t(item?.name)}
                    </Typography>
                   </Stack>
                  }
                />
                // <button
                //   style={{
                //     width: "30px",
                //     height: "30px",
                //     borderRadius: "4px",
                //     overflow: "hidden",
                //     margin: "0px",
                //     padding: 0,
                //     border: colorId == item?.id ? "3px solid #363131" : 0,
                //     cursor: "pointer",
                //   }}
                //   onClick={() => {
                //     if (item?.id == colorId) {
                //       const res = `/product?${
                //         categoryId ? "category=" + categoryId : ""
                //       }${subCategoryId ? "&subcategory=" + subCategoryId : ""}${
                //         secondSubCategoryId
                //           ? "&secondsubcategory=" + secondSubCategoryId
                //           : ""
                //       }${type?.length ? "&type=" + type?.join(",") : ""}${
                //         technology?.length
                //           ? "&tech=" + technology?.join(",")
                //           : ""
                //       }`;
                //       console.log(res);
                //       navigate(res);
                //     } else {
                //       const res = `/product?${
                //         categoryId ? "category=" + categoryId : ""
                //       }${subCategoryId ? "&subcategory=" + subCategoryId : ""}${
                //         secondSubCategoryId
                //           ? "&secondsubcategory=" + secondSubCategoryId
                //           : ""
                //       }${type?.length ? "&type=" + type?.join(",") : ""}${
                //         technology?.length
                //           ? "&tech=" + technology?.join(",")
                //           : ""
                //       }${"&color=" + item.id}`;
                //       console.log(res);
                //       navigate(res);
                //     }
                //   }}
                // >
                //   <img
                //     src={item.image}
                //     alt={item?.name}
                //     className=""
                //     style={{
                //       width: "100%",
                //       height: "100%",
                //       objectFit: "cover",
                //     }}
                //   />
                // </button>
              ))}
            </Stack>
          </Box>
          <div className="flex md:hidden items-center justify-center mt-4 ">
            <button
              className="px-4 py-2 bg-black text-white rounded-md max-w-[250px] text-base uppercase w-full"
              onClick={() => {
                setFilter(false);
              }}
            >
              {t("close")}
            </button>
          </div>
        </div>

        <div className="grow">
          <div className="md:hidden">
            <Button
              sx={{
                color: "#000",
                fontSize: "16px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
              onClick={() => {
                setFilter(true);
              }}
            >
              <TuneIcon />
              {t("filter")}
            </Button>
          </div>
          <TextField
            fullWidth
            id="filled-basic"
            label={t("search")}
            variant="standard"
            value={
              i18n?.language == "uz"
                ? searchUz
                : i18n?.language == "ru"
                ? searchRu
                : searchEn
            }
            onChange={(e) => {
              if (i18n?.language == "uz") {
                setSearchUz(e.target.value);
              } else if (i18n?.language == "ru") {
                setSearchRu(e.target.value);
              } else {
                setSearchEn(e.target.value);
              }
            }}
          />
          <div className="">
            {!data ? (
              <Typography
                style={{
                  textAlign: "center",
                  margin: "30px",
                  fontSize: "23px",
                }}
              >
                Loading...
              </Typography>
            ) : (
              <ProductCard data={data} />
            )}
          </div>
          <div className="flex justify-center items-center gap-4 mt-[30px] md:mt-[40px]">
            <Button
              variant="outlined"
              onClick={() => {
                setOffset((e) => e - 20);
                setOffsetNum((e) => e - 1);
              }}
              disabled={offsetNum == 1}
            >
              <NavigateNextIcon className="rotate-180" />
            </Button>
            <Typography style={{ fontSize: "20px" }}>{offsetNum}</Typography>
            <Button
              variant="outlined"
              disabled={data?.data?.length < 20}
              onClick={() => {
                setOffset((e) => e + 20);
                setOffsetNum((e) => e + 1);
              }}
            >
              <NavigateNextIcon />
            </Button>
          </div>
        </div>
      </div>
    </Box>
  );
}
