import { useQuery } from "@tanstack/react-query";
import { getAds, getBrands, getCatalog, getCategories, getCertificates, getFilteredProducts, getNews, getOneProduct, getPartners, getSecondSubCategories, getSlug, getSliders, getSubCategories, getTechnologies, getTexNumbers, getTypes, getVideos } from "./data.fn";

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


//  SLIDERS

export const useSliders = () => useQuery({queryFn: getSliders, queryKey: ["sliders"]})



//  ADS

export const useAds = () => useQuery({queryFn: getAds, queryKey: ["ads"]})



//  PARTNERS

export const usePartners = () => useQuery({queryFn: getPartners, queryKey: ["parnters"]})



//  CERTIFICATES

export const useCertificates = () => useQuery({queryFn: getCertificates, queryKey: ["certificates"]})




//  TYPES

export const useTypes = () => useQuery({queryFn: getTypes, queryKey: ["types"]})




//  TECHNOLOGIES

export const useTechnology = () => useQuery({queryFn: getTechnologies, queryKey: ["technologies"]})





//  NUMBERS

export const useNumbers = () => useQuery({queryFn: getTexNumbers, queryKey: ["numbers"]})






// VIDEOS  

export const useVideos = () => useQuery({queryFn: getVideos, queryKey: ["videos"]})



//  CATALOG  

export const useCatalog = () => useQuery({queryFn: getCatalog, queryKey: ["catalog"]})




export const useSlug = () => useQuery({queryFn: getSlug, queryKey: ["slug"]})
