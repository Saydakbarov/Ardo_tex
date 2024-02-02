import axios from "../utils/axios";

//  CATEGORIES

export const getCategories = async () => {
  try {
    const res = await axios.get("tex/categories");

    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getSubCategories = async (id) => {
  try {
    const res = await axios.get("tex/subcategories", {
      params: {
        categoryId: id,
      },
    });

    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getSecondSubCategories = async (id) => {
  try {
    const res = await axios.get("tex/second-subcategories", {
      params: {
        subcategoryId: id,
      },
    });

    return res.data;
  } catch (error) {
    console.error(error);
  }
};

//   BRANDS

export const getBrands = async () => {
  try {
    const res = await axios.get("tex/brands/list", {
      params: {
        limit: 20,
        offset: 0,
      },
    });

    return res.data;
  } catch (error) {
    console.error(error);
  }
};

//   PRODUCTS

export const getFilteredProducts = async ({
  limit,
  offset,
  category_id,
  sub_category_id,
  second_sub_category_id,
  price_from,
  price_to,
  search_uz,
  search_ru,
  search_en,
  brand_id,
  color,
}) => {
  try {
    const res = await axios.get("tex/products/list", {
      params: {
        limit,
        offset,
        category_id,
        sub_category_id,
        second_sub_category_id,
        price_from,
        price_to,
        search_uz,
        search_ru,
        search_en,
        brand_id,
        color,
      },
    });

    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const postFilteredProducts = async ({ params, body }) => {
  try {
    const res = await axios.post("tex/products/list", body, {
      params,
    });

    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getOneProduct = async (id) => {
  try {
    const res = await axios.get(`tex/product/${id}`);

    return res.data;
  } catch (error) {
    console.error(error);
  }
};

//   NEWS

export const getNews = async ({ limit, offset }) => {
  try {
    const res = await axios.get("tex/news/list", {
      params: {
        limit,
        offset,
      },
    });
    console.log(res.data, "news");

    return res.data;
  } catch (error) {
    console.error(error);
  }
};


// SLIDERS


export const getSliders = async () => {
  try {
    const res = await axios.get("tex/sliders/list");
    

    return res.data;
  } catch (error) {
    console.error(error);
  }
};



// ADS


export const getAds = async () => {
  try {
    const res = await axios.get("tex/ads/list");
    

    return res.data;
  } catch (error) {
    console.error(error);
  }
};




// PARTNERS


export const getPartners = async () => {
  try {
    const res = await axios.get("tex/partners/list");
    

    return res.data;
  } catch (error) {
    console.error(error);
  }
};




// CERTIFICATES


export const getCertificates = async () => {
  try {
    const res = await axios.get("tex/certificates/list");
    

    return res.data;
  } catch (error) {
    console.error(error);
  }
};




// TYPES


export const getTypes = async () => {
  try {
    const res = await axios.get("tex/type/list");
    

    return res.data;
  } catch (error) {
    console.error(error);
  }
};




// TECHNOLOGIES


export const getTechnologies = async () => {
  try {
    const res = await axios.get("tex/technology/list");
    

    return res.data;
  } catch (error) {
    console.error(error);
  }
};


// VIDEOS



export const getVideos = async () => {
  return axios
    .get("tex/videos/list")
    .then((res) => res.data)
    .catch((err) => err);
};



// NUMBERS

export const getTexNumbers = async () => {
  return axios
    .get("tex/phone/list")
    .then((res) => res.data)
    .catch((err) => err);
};



// CATALOG



export const getCatalog = async () => {
  return axios
    .get("tex/catalogs")
    .then((res) => res.data)
    .catch((err) => err);
};





export const getSlug = () => axios.get("/slug").then(res => res.data).catch(err => err)
