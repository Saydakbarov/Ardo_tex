import { useQuery } from "@tanstack/react-query";
import { getBrands, getCategories, getFilteredProducts, getNews, getOneProduct, getSecondSubCategories, getSubCategories } from "./data.fn";

//  CATEGORIES

export const useCategories = () => useQuery({queryFn: getCategories, queryKey: ["categories"]})



export const useSubCategories = (id) => useQuery({queryFn: () => getSubCategories(id), queryKey: ["subcategories"]})


export const useSecondSubCategories = (id) => useQuery({queryFn: () => getSecondSubCategories(id), queryKey: ["secondsubcategories"]})


//  PRODUCTS

export const useFilteredProducts = (params) => useQuery({queryFn: () => getFilteredProducts(params), queryKey: ["products"]})


export const useOneProduct = (id) => useQuery({queryFn: () => getOneProduct(id), queryKey: ["products/getOne"], enabled: !!id})



//  BRANDS

export const useBrands = () => useQuery({queryFn: getBrands, queryKey: ["brands"]})



//  NEWS

export const useNews = (params) => useQuery({queryFn: () => getNews(params), queryKey: ["news"]})
