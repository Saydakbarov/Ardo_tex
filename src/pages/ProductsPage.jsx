import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import HeaderMenu from "../components/Home/HeaderMenu";
import Footer from "../components/Home/Footer";
import ProductsMain from "../components/Products/ProductsMain";
import ProductCategory from "../components/Products/ProductCategory";
import {
  useBrands,
  useCategories,
  useFilteredProducts,
  useSecondSubCategories,
  useSubCategories,
  useTechnology,
  useTypes,
} from "../query-data/data.service";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useMutation } from "@tanstack/react-query";
import { postFilteredProducts } from "../query-data/data.fn";

export default function ProductsPage() {
  const [params, setParams] = useSearchParams();

  const { t, i18n } = useTranslation();

  const categoryId = params.get("category");
  const subCategoryId = params.get("subcategory");
  const secondSubCategoryId = params.get("secondsubcategory");
  const techId = params.get("tech");
  const typeId = params.get("type");
  const colorId = params.get("color");
  const [brandId, setBrandId] = useState([]);
  const [colors, setColors] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);
  const [priceFrom, setPriceFrom] = useState(0);
  const [priceTo, setPriceTo] = useState(10000000);
  const [searchUz, setSearchUz] = useState("");
  const [searchRu, setSearchRu] = useState("");
  const [searchEn, setSearchEn] = useState("");
  const [technology, setTechnology] = useState([]);
  const [type, setType] = useState([]);


  useEffect(() => {
  
  setType(typeId ? typeId?.split(",") : [])
  setTechnology(techId ? techId?.split(",") : [])
  setColors(colorId ? colorId?.split(",") : [])
  }, [typeId, techId, colorId]);

  console.log({colors});

  // const { data, refetch, isFetching } = useFilteredProducts({
  //   limit,
  //   offset,
  //   category_id: categoryId,
  //   sub_category_id: subCategoryId,
  //   second_sub_category_id: secondSubCategoryId,
  //   price_from: priceFrom,
  //   price_to: priceTo,
  //   search_uz: searchUz,
  //   search_ru: searchRu,
  //   search_en: searchEn,
  //   brand_id: brandId,
  //   color,
  // });

  // const {mutate, data, isPending} = useMutation({
  //   mutationFn: postFilteredProducts,
  //   mutationKey: ["post/filtered/products"],
  //   onSuccess: (data) => {
  //     console.log(data, "asd");
  //   }
  // })

  const [data, setData] = useState(null);

  console.log(data, "datat");

  useEffect(() => {
    const fetchData = async () => {
      //   const formData = new FormData()
      //   formData.append("category_id", categoryId)
      //   formData.append("sub_category_id", subCategoryId)
      //   formData.append("second_sub_category_id", secondSubCategoryId)
      //   formData.append("price_from", priceFrom)
      //   formData.append("price_to", priceTo)
      //   formData.append("search_uz", searchUz)
      //   formData.append("search_ru", searchRu)
      //   formData.append("search_en", searchEn)
      //   formData.append("color", color)
      //  formData.append("brand_id", brandId)
      //   // for(let i = 0; i < brandId?.length; i++) {
      //   //   formData.append("brand_id", brandId[i])
      //   // }
      //  formData.append("technology", technology)
      // for(let i = 0; i < technology?.length; i++) {
      //   formData.append("technology", technology[i])
      // }

      const query = {
        params: {
          limit,
          offset,
        },
        body: {
          category_id: categoryId,
          sub_category_id: subCategoryId,
          second_sub_category_id: secondSubCategoryId,
          search_uz: searchUz,
          search_ru: searchRu,
          search_en: searchEn,
          color: colors,
          brand_id: brandId,
          technology: technology,
          type,
        },
      };

      const res = await postFilteredProducts(query);
      console.log(res, "asd");
      setData(res);
    };
    fetchData();
  }, [
    categoryId,
    subCategoryId,
    secondSubCategoryId,
    brandId,
    offset,
    searchEn,
    searchRu,
    searchUz,
    colorId,
    technology,
    type,
  ]);

  // console.log(data, "products");

  const { data: categories, refetch: refetchCategory } = useCategories();
  const { data: subcategories, refetch: refetchSubCategory } =
    useSubCategories(categoryId);
  const { data: secondsubcategories, refetch: refetchSecondSubcategory } =
    useSecondSubCategories(subCategoryId);

  const { data: brands } = useBrands();

  const { data: types } = useTypes();

  const { data: technologies } = useTechnology();

  useEffect(() => {
    if (categoryId) {
      refetchSubCategory();
    }
  }, [categoryId]);

  useEffect(() => {
    if (subCategoryId) {
      // console.log("sub Inner");
      refetchSecondSubcategory();
    }
  }, [subCategoryId]);

  const backLink = useMemo(() => {
    if (secondSubCategoryId) {
      return `/product?category=${categoryId}&subcategory=${subCategoryId}${technology?.length ? ("&tech=" + technology?.join(",")) : ""}${type?.length ? ("&type=" + type?.join(",")) : ""}${colorId ? ("&color=" + colorId) : ""}`;
    } else if (subCategoryId) {
      return `/product?category=${categoryId}${technology?.length ? ("&tech=" + technology?.join(",")) : ""}${type?.length ? ("&type=" + type?.join(",")) : ""}${colorId ? ("&color=" + colorId) : ""}`;
    } else if (categoryId) {
      return `/product?${technology?.length ? ("&tech=" + technology?.join(",")) : ""}${type?.length ? ("&type=" + type?.join(",")) : ""}${colorId ? ("&color=" + colorId) : ""}`;
    } else {
      return `/product?${technology?.length ? ("&tech=" + technology?.join(",")) : ""}${type?.length ? ("&type=" + type?.join(",")) : ""}${colorId ? ("&color=" + colorId) : ""}`;
    }
  }, [categoryId, subCategoryId, secondSubCategoryId, techId, typeId, colorId]);

  const breadcrumpData = useMemo(() => {
    if (secondSubCategoryId) {
      const category = categories?.data?.find(
        (item) => item.category_id == categoryId
      );
      const subcategory = subcategories?.data?.find(
        (item) => item.sub_category_id == subCategoryId
      );
      const secondSub = secondsubcategories?.data?.find(
        (item) => item.second_sub_category_id == secondSubCategoryId
      );

      return [
        {
          id: 1,
          name:
            i18n?.language == "uz"
              ? category?.category_name_uz
              : category?.category_name_ru,
          url: `/product?category=${category?.category_id}`,
        },
        {
          id: 2,
          name:
            i18n?.language == "uz"
              ? subcategory?.sub_category_name_uz
              : subcategory?.sub_category_name_ru,
          url: `/product?category=${category?.category_id}&subcategory=${subcategory?.sub_category_id}`,
        },
        {
          id: 3,
          name:
            i18n?.language == "uz"
              ? secondSub?.second_sub_category_name_uz
              : secondSub?.second_sub_category_name_ru,
          url: `/product?category=${category?.category_id}&subcategory=${subcategory?.sub_category_id}&secondsubcategory=${secondSub?.second_sub_category_id}`,
        },
      ];
    } else if (subCategoryId) {
      const category = categories?.data?.find(
        (item) => item.category_id == categoryId
      );
      const subcategory = subcategories?.data?.find(
        (item) => item.sub_category_id == subCategoryId
      );

      return [
        {
          id: 1,
          name:
            i18n?.language == "uz"
              ? category?.category_name_uz
              : category?.category_name_ru,
          url: `/product?category=${category?.category_id}`,
        },
        {
          id: 2,
          name:
            i18n?.language == "uz"
              ? subcategory?.sub_category_name_uz
              : subcategory?.sub_category_name_ru,
          url: `/product?category=${category?.category_id}&subcategory=${subcategory?.sub_category_id}`,
        },
      ];
    } else if (categoryId) {
      const category = categories?.data?.find(
        (item) => item.category_id == categoryId
      );

      return [
        {
          id: 1,
          name:
            i18n?.language == "uz"
              ? category?.category_name_uz
              : category?.category_name_ru,
          url: `/product?category=${category?.category_id}`,
        },
      ];
    } else {
      return [];
    }
  }, [
    categoryId,
    subCategoryId,
    secondSubCategoryId,
    subcategories,
    categories,
    secondsubcategories,
    i18n,
  ]);

  return (
    <Box>
      <HeaderMenu />
      <ProductsMain breadcrumpData={breadcrumpData} />
      <ProductCategory
        backLink={backLink}
        brandId={brandId}
        brands={brands}
        setBrandId={setBrandId}
        categories={categories}
        categoryId={categoryId}
        data={data}
        offset={offset}
        setOffset={setOffset}
        priceFrom={priceFrom}
        priceTo={priceTo}
        searchRu={searchRu}
        searchUz={searchUz}
        searchEn={searchEn}
        setSearchRu={setSearchRu}
        setSearchUz={setSearchUz}
        setSearchEn={setSearchEn}
        secondSubCategoryId={secondSubCategoryId}
        secondsubcategories={secondsubcategories}
        setPriceFrom={setPriceFrom}
        setPriceTo={setPriceTo}
        subCategoryId={subCategoryId}
        subcategories={subcategories}
        technology={technology}
        setTechnology={setTechnology}
        technologies={technologies}
        types={types}
        type={type}
        setType={setType}
        colorId={colorId}
        colors={colors}
        setColors={setColors}
      />
      <Footer />
    </Box>
  );
}
