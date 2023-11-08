import axios from "axios";

export const baseUrl = "https://api.ardotex.uz/"

const instance = axios.create({
    baseURL: baseUrl + "api/v1/"
})

export default instance